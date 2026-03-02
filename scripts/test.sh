#!/bin/bash
set -e
docker compose up -d
sleep 5
./scripts/broken-links.sh
docker compose down
