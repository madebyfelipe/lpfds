# Newsletter + e-book — configuração do workflow no Twenty

O site já faz a parte dele: quando alguém pede o e-book no `/hub`, a rota
`app/api/newsletter/route.ts` dispara um POST para o workflow do Twenty **e** para o
Make. O que falta é do lado do Twenty — o passo que manda o e-mail com o e-book.

Este documento é o que colar lá. **Não dá para configurar por código**: a edição de
workflow exige uma API key do workspace, e o repositório não guarda nenhuma.

---

## O workflow

| | |
|---|---|
| Nome | `email_listing_hub` |
| Workspace | `a14da497-8251-4656-9f2b-29817711eb70` |
| Workflow | `101a12f0-aa21-4f20-b0f0-51b3ba7ca398` |
| Trigger | Webhook (`POST /webhooks/workflows/<workspace>/<workflow>`) |

Estado hoje: **ativo**. Uma chamada válida responde
`{"workflowName":"email_listing_hub","success":true,"workflowRunId":"…"}`.

---

## 1. Trigger — o corpo esperado

O Twenty **não escuta** o payload como o Make faz no "Determine data structure". O
schema se declara à mão: no trigger, abrir **Define expected body**, colar o JSON
abaixo e **Save**. É o Save que cria as variáveis usadas nos passos seguintes.

```json
{
  "email": "voce@email.com",
  "source": "hub-ebook",
  "product": "ebook-marca-psicologos",
  "productTitle": "E-book de construção de marca para psicólogos",
  "downloadUrl": "https://file.madebyfelipe.agency/api/shares/ebook/files/05379551-d4cf-4f87-af58-92e533912124",
  "submittedAt": "2026-08-17T20:00:00.000Z"
}
```

Este é exatamente o corpo que a rota manda — a fonte dele é `lib/newsletter.ts`
(título e URL do mirror) + `route.ts` (o resto). **O link do e-book viaja no payload
de propósito**: assim o e-mail não carrega URL hardcoded e trocar o mirror em
`lib/newsletter.ts` conserta os dois caminhos de uma vez.

Campos disponíveis nos passos: `{{trigger.body.email}}`, `{{trigger.body.source}}`,
`{{trigger.body.product}}`, `{{trigger.body.productTitle}}`,
`{{trigger.body.downloadUrl}}`, `{{trigger.body.submittedAt}}`.

## 2. Passo 1 — gravar o contato

**Upsert Record** em *People*, casando por `email` (upsert, não create: quem baixa
duas vezes não pode virar dois registros).

| Campo | Valor |
|---|---|
| Emails → Primary Email | `{{trigger.body.email}}` |
| (campo de origem, se existir) | `{{trigger.body.source}}` |

## 3. Passo 2 — mandar o e-book

**Send Email**. Pré-requisito: uma conta conectada com permissão de envio em
**Settings → Accounts** — sem isso o passo falha em execução, não na configuração.

- **To:** `{{trigger.body.email}}`
- **Subject:** `Seu e-book chegou — construção de marca para psicólogos`
- **Body:**

```
Oi!

Aqui está o material que você pediu:

{{trigger.body.downloadUrl}}

Ele é o passo a passo pra transformar formação e experiência em uma presença que
comunica no nível do seu preparo — não é sobre postar mais, é sobre ser percebido
à altura do que você entrega.

Nos próximos e-mails eu mando os bastidores do estúdio: como uma decisão de design
vira percepção, com exemplo real de projeto.

Se travar em algo, é só responder este e-mail.

Felipe
Made by Felipe — madebyfelipe.com
```

> O link também aparece na hora, no modal do site. O e-mail é a segunda via — é o
> que faz o cadastro valer a pena para quem fechou a aba.

## 4. Testar

Com o workflow ativo, dispare do terminal:

```bash
curl -X POST "https://crm.madebyfelipe.agency/webhooks/workflows/a14da497-8251-4656-9f2b-29817711eb70/101a12f0-aa21-4f20-b0f0-51b3ba7ca398" \
  -H "Content-Type: application/json" \
  -d '{"email":"SEU-EMAIL@exemplo.com","source":"hub-ebook","product":"ebook-marca-psicologos","productTitle":"E-book de construção de marca para psicólogos","downloadUrl":"https://file.madebyfelipe.agency/api/shares/ebook/files/05379551-d4cf-4f87-af58-92e533912124","submittedAt":"2026-08-17T20:00:00.000Z"}'
```

Use o seu próprio e-mail no `to` do teste. Depois abra o **run** do workflow no
Twenty: lá dá para ver o payload que chegou e onde cada passo parou — é o mais perto
de "escutar" que o Twenty oferece.

Para testar o caminho inteiro (site → rota → Twenty + Make):

```bash
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email":"SEU-EMAIL@exemplo.com","source":"hub-ebook"}'
```

Resposta boa: `{"ok":true,"download":"…","delivered":{"twenty":true,"make":true}}`.
`twenty:false` com `ok:true` significa que o workflow caiu (desativado, ou passo
quebrado) e o Make segurou o cadastro — o visitante baixou assim mesmo, mas o
contato não entrou no CRM. Vale olhar os runs quando isso aparecer.
