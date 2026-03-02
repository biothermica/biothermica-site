#!/bin/bash
set -e
docker compose up -d
sleep 20
./scripts/broken-links.sh
docker compose down
