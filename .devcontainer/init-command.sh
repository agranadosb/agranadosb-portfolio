#!/bin/sh

# This script is run on the HOST when the dev container is initialized.

unameOut="$(uname -s)"
case "${unameOut}" in
    Linux*)     machine=Linux;;
    Darwin*)    machine=Mac;;
    CYGWIN*)    machine=Cygwin;;
    MINGW*)     machine=MinGw;;
    *)          machine="UNKNOWN:${unameOut}"
esac

echo "Working on: $machine"

# For Mac and Linux: add SSH keys found under ~/.ssh
if [ "$machine" = "Mac" ] || [ "$machine" = "Linux" ]; then
    find ~/.ssh/ -type f -exec grep -l 'PRIVATE' {} \; 2>/dev/null | xargs -I{} ssh-add "{}" 2>/dev/null || true
fi
