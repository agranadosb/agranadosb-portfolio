FROM ubuntu:24.04

ARG NODE_VERSION=20
ARG NPM_VERSION=11.4.1
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Europe/Madrid

RUN apt-get update -y && \
    apt-get install -y \
    build-essential \
    procps \
    file \
    git \
    zsh \
    curl \
    wget \
    gnupg \
    locales \
    openssh-client \
    ca-certificates \
    --no-install-recommends && \
    update-ca-certificates

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g npm@${NPM_VERSION}

# Create a non-root user
RUN userdel -r ubuntu || true && \
    groupdel ubuntu || true

ARG USERNAME=portfolio
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    && apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

RUN mkdir -p /workspaces && chown $USERNAME:$USERNAME /workspaces

WORKDIR /workspaces/$USERNAME

# Clean up
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

USER $USERNAME

# Oh My Zsh
RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.5/zsh-in-docker.sh)" -- \
    -t robbyrussell

ENV PATH=$PATH:/home/$USERNAME/.local/bin
