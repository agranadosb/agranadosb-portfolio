#!/bin/bash
set -e

echo "Running post-create tasks..."

if [ -f package.json ]; then
  npm ci
fi

echo "Post-create tasks completed."
