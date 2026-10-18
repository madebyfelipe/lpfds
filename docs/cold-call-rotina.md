# Cold call — rotina de prospecção do Codex

Painel: `https://www.madebyfelipe.com.br/painel/cold-call`.

Esta rotina prepara a fila do SDR. Ela pesquisa e grava contatos em revisão;
**não liga, não envia mensagens e não agenda reuniões em nome do SDR**.
O agendamento deve ser criado no Codex. O código deste repositório não cria uma
rotina agendada automaticamente. Sugestão: segunda a sexta, 07:00,
`America/Sao_Paulo`. O painel confirma somente execuções efetivamente recebidas.

## Ambiente e pré-voo

Use o checkout existente, sem worktree. A rotina precisa de acesso à web para
pesquisa e de `PROSPECCAO_TOKEN`, com o mesmo valor configurado no site. Use os
segredos do ambiente; nunca imprima valores nem cole credenciais em relatório.
`PROSPECCAO_SITE_URL` pode apontar para outro ambiente HTTPS; o padrão do script
é o domínio acima. O site usa `TWENTY_API_KEY` e opcionalmente `TWENTY_BASE_URL`,
as mesmas integrações de `/painel/campanhas`. A chave do Twenty fica no servidor.

1. Execute `python scripts/cold-call-sync.py status`.
2. Se houver 401, 403, 503, falha de rede ou credencial ausente: reporte o bloqueio.
   Não invente atividade nem marque uma execução como bem-sucedida.
3. Leia `config.icp`, `config.regioes`, `config.oferta`, `pedidos` e `pesquisarAte`.
4. Se a rotina estiver pausada ou `pesquisarAte` for zero, não pesquise novos leads.
   Registre um relatório de zero com o motivo se a API estiver disponível.
5. `conhecidos` contém empresas/telefones e estados já cadastrados. Não reimporte
   contatos, sobretudo `NAO_CONTATAR`, `SEM_INTERESSE` e `NUMERO_INVALIDO`.

## Público confirmado pelo Felipe

Psicólogas e pequenas clínicas próprias que atendem **crianças autistas (TEA)**
e suas famílias, o mesmo público das campanhas. Priorize orientação parental,
intervenção precoce, psicologia infantil e comunicação dirigida aos pais.
Comece por Sorocaba e região conforme a configuração atual do painel.
Exclua redes, hospitais, órgãos públicos, profissionais só de pesquisa/docência,
contatos sem telefone profissional publicado e clientes já conhecidos.
Não use diagnósticos de indivíduos, informações de pacientes ou dados privados.

## Pesquisa por empresa

Abra fontes primárias: site oficial, página de contato, perfil profissional
público da própria clínica/psicóloga. Use busca apenas para encontrar a fonte;
não transforme um snippet em comprovação de um fato sem verificar a página.

Para cada empresa, confirme:

- Nome, cidade, segmento e telefone **publicado para contato profissional**.
  `fonteTelefone` é a URL exata de onde veio o número. Não adivinhe telefones,
  e-mails, cargos, nomes ou extensões. Não use bases compradas.
- `contato`: nome do decisor somente quando confirmado. Caso contrário, vazio.
- `pesquisa.resumo`: serviços, público atendido e contexto observado.
- `pesquisa.gancho`: uma observação concreta que justifique a ligação e possa
  ser dita em voz alta. Evite elogio genérico e diagnóstico categórico do negócio.
- `pesquisa.oportunidade`: hipótese de como branding/comunicação ajudaria.
- `pesquisa.limite`: o que não foi possível confirmar (decisor, momento, agência).
- `pesquisa.fontes`: de 1 a 8 pares URL/fato, sem texto inventado.

Não prometa agenda cheia, pacientes, resultado de terapia ou faturamento.
O score exibido no painel mede completude da pesquisa, não propensão à compra.
O SDR recebe o gancho dentro de um roteiro com abertura, descoberta, hipótese,
próximo passo e respostas a objeções. Não escreva um pitch agressivo.

## Importação

Crie um arquivo JSON temporário com este formato (o exemplo é estrutural;
**nunca importe a clínica fictícia abaixo**):

```json
{
  "leads": [{
    "empresa": "Nome confirmado da clínica",
    "contato": "",
    "telefone": "5511999999999",
    "fonteTelefone": "https://exemplo.com.br/contato",
    "cidade": "Sorocaba",
    "segmento": "Psicologia infantil · TEA",
    "site": "https://exemplo.com.br",
    "responsavel": "Leonardo",
    "pesquisa": {
      "resumo": "Descrição factual e específica, confirmada no site.",
      "gancho": "Vi no site que vocês oferecem orientação parental para famílias de crianças autistas.",
      "oportunidade": "Hipótese de comunicação a explorar com perguntas.",
      "limite": "Não foi possível confirmar quem decide sobre comunicação.",
      "fontes": [{"url": "https://exemplo.com.br/servicos", "fato": "Fato observado na página."}]
    }
  }]
}
```

Envie `python scripts/cold-call-sync.py importar --arquivo /tmp/cold-call-leads.json`.
Use no máximo `pesquisarAte` (teto de 15). Leia `criados` e `ignorados`; conte
somente os IDs realmente criados. A API deduplica telefones normalizados e
recusa sites com domínio de e-mail já conhecido no CRM. Dados e histórico
existentes nunca são sobrescritos por reimportação. A revisão é obrigatória.
Se houver timeout, consulte o status antes de reenviar. Reenvios do mesmo
telefone não criam uma nova empresa.

## Relatório real da execução

Envie outro arquivo pelo comando
`python scripts/cold-call-sync.py relatorio --arquivo /tmp/cold-call-relatorio.json`:

```json
{
  "id": "UUID-estavel-desta-execucao",
  "resumo": "Fontes consultadas, critérios aplicados, o que foi confirmado e limitações.",
  "pesquisados": 8,
  "importados": 3,
  "descartados": 5,
  "requestIds": []
}
```

Gere o UUID uma única vez (`python -c 'import uuid; print(uuid.uuid4())'`) e
reutilize-o em retries do mesmo relatório. Liste em `requestIds` apenas pedidos
do pré-voo efetivamente atendidos. Relate candidatos não concluídos em
`resumo`, sem contá-los como importados. Pare quando atingir a capacidade.

## API e armazenamento

- `GET /api/cold-call/rotina`: pré-voo, ICP, capacidade, pedidos e conhecidos.
- `POST /api/cold-call/rotina`: `acao: importar` ou `acao: relatorio`.
- Bearer `PROSPECCAO_TOKEN` obrigatório, respostas sem cache.
- Painel usa o mesmo HTTP Basic (`PAINEL_USUARIO` / `PAINEL_SENHA`) de campanhas.
- Dados em Notes do Twenty, prefixo `Cold call · `, envelope JSON versão 1.
  Não requer criar campos customizados em Person. A integração precisa permitir
  leitura/criação de Notes e leitura de People; IDs de Notes são UUIDs estáveis.
- Ligações são eventos separados, não listas regravadas. IDs da ligação e do
  relatório evitam duplicação após retry. Supressão não é apagada.
- Sem CRM, a tela informa a pendência e desabilita gravações; não usa dados falsos.
- O volume é limitado a 6.000 Notes por leitura; ao exceder, a API falha
  explicitamente, sem montar uma fila a partir de dados incompletos.

## Operação do SDR

Revise a pesquisa, aprove o contato, inicie a ligação e abra o discador do
próprio dispositivo. O site registra cronômetro e anotações; não faz telefonia
VoIP, gravação ou transcrição. Registre resultado, responsável, necessidade e
próximo passo. Retorno/reunião exigem data futura em Brasília e descrição.
A agenda exporta `.ics`; a lista exporta CSV. O calendário é baixado, sem enviar
convites. “Não contatar” encerra o contato permanentemente no painel.

## Verificação de desenvolvimento

- `node --test tests/cold-call.test.mjs` (Node 24): validação de entrada,
  normalização de telefone, datas, contagem em Brasília, fila e roteiro.
- `npm run build`: TypeScript e build de produção.
- `node tests/cold-call.integration.cjs`: servidor Next de produção contra um
  Twenty simulado local. Requer Playwright e Chromium disponíveis no ambiente.
  `CHROMIUM_PATH` pode indicar o binário. `AXE_CORE_PATH` pode indicar `axe.min.js`
  para auditoria WCAG 2.1 AA nos temas claro/escuro, celular e cadastro.
  Os dados de teste existem somente na memória do simulador; não atingem o CRM real.
- Para desenvolvimento do teste, `COLD_CALL_TEST_DEV=1` usa `next dev`.
  O cliente de rotina exige HTTPS e não deve ser apontado para o simulador.
