#!/bin/bash
set -e
docker compose up -d
./scripts/broken-links.sh
docker compose down
