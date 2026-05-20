#!/bin/sh
set -eu

HOST="${SONAR_HOST_URL:-https://sonarcloud.io}"
KEY="${SONAR_PROJECT_KEY:?defina SONAR_PROJECT_KEY (mesmo valor que -Dsonar.projectKey no Sonar)}"
TOKEN="${SONAR_TOKEN:?defina SONAR_TOKEN}"

COUNT="$(
  curl -fsS -u "${TOKEN}:" \
    "${HOST}/api/issues/search?componentKeys=${KEY}&types=VULNERABILITY&severities=MAJOR&resolved=false&ps=1" \
    | jq '.total'
)"

echo "Quantidade de issues de vulnerabilidade (MAJOR / média no Sonar): ${COUNT}"

if [ "${COUNT}" -gt 2 ]; then
  echo "Pipeline bloqueada: mais de 2 vulnerabilidades médias encontradas."
  exit 1
fi
