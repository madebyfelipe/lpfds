#!/usr/bin/env python3
"""Cliente da rotina Codex. Usa apenas biblioteca padrão e preserva TLS/proxy."""
import argparse
import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("acao", choices=["status", "importar", "relatorio"])
    parser.add_argument("--arquivo")
    args = parser.parse_args()
    token = os.environ.get("PROSPECCAO_TOKEN")
    if not token:
        sys.exit("PROSPECCAO_TOKEN ausente. Configure o segredo no ambiente da rotina.")
    base = os.environ.get("PROSPECCAO_SITE_URL", "https://www.madebyfelipe.com.br").rstrip("/")
    url = urllib.parse.urlsplit(base)
    if url.scheme != "https" or not url.hostname or url.username or url.password or url.query or url.fragment or url.path:
        sys.exit("PROSPECCAO_SITE_URL deve ser uma origem HTTPS, sem credenciais ou caminho.")
    payload = None
    if args.acao != "status":
        if not args.arquivo:
            parser.error("Use --arquivo com o JSON do lote ou relatório.")
        try:
            with open(args.arquivo, encoding="utf-8") as f:
                content = f.read(100001)
            if len(content) > 100000:
                raise ValueError("Arquivo acima de 100 KB.")
            data = json.loads(content)
            if not isinstance(data, dict):
                raise ValueError("O arquivo precisa conter um objeto JSON.")
            data["acao"] = args.acao
            payload = json.dumps(data, ensure_ascii=False).encode()
        except (OSError, ValueError) as exc:
            sys.exit(f"Arquivo inválido: {exc}")
    request = urllib.request.Request(base + "/api/cold-call/rotina", data=payload,
        headers={"Authorization": "Bearer " + token, "Content-Type": "application/json"})
    # Nunca encaminhar o Bearer para outro host em um redirecionamento.
    class SemRedirect(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, *args, **kwargs):
            return None
    try:
        with urllib.request.build_opener(SemRedirect).open(request, timeout=65) as response:
            result = json.load(response)
        print(json.dumps(result, ensure_ascii=False, indent=2))
        if not result.get("ok"):
            sys.exit(1)
    except urllib.error.HTTPError as exc:
        sys.exit(f"API retornou HTTP {exc.code}. Confira a configuração e o pré-voo; nada foi confirmado como salvo.")
    except (urllib.error.URLError, TimeoutError, ValueError):
        sys.exit("Falha de rede ou resposta inválida. Consulte status antes de repetir a operação.")


if __name__ == "__main__":
    main()
