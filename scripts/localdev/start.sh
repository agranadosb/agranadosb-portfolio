#!/bin/bash
set -eu

PROJECT_PATH="${PROJECT_PATH:-$(cd "$(dirname "$0")/../.." && pwd)}"

cd "${PROJECT_PATH}"
npm run dev
