# Get Started

## Available Packages

AudioEye Testing SDK is available as NPM packages (Node Package Manager)

- [**CLI**](#cli) - @audioeye/testing-sdk-cli
- [**Jest**](#jest) - @audioeye/testing-sdk-jest

## Software Requirements

NPM version 16 or greater is required to use AudioEye Testing SDK

## Pre-Requisites

AudioEye is hosting the NPM packages for this SDK in Cloudsmith for secure distribution. In order to download packages, 
you will need a copy of your AudioEye Entitlement Token. This token is available in the
[AudioEye Customer Portal](https://portal.audioeye.com/).

### Getting your entitlement token

1. Log in to the [AudioEye Customer Portal](https://portal.audioeye.com/). 
2. Click on the account menu in the top right and select the *My Account* menu item.
   ![My Account Selection](/my-account.png)
3. Scroll down to the *Testing SDK Entitlement Token* section.
4. If not created yet, click the *Generate Entitlement Token* button to create a token for your account.
   ![Generate Entitlement Token](/generate-entitlement-token.png)
5. Once complete click click on the *Copy Entitlement Token* button to copy the key to your clipboard.
   ![Copy Entitlement Token](/copy-entitlement-token.png)

This key can now be used to download the AudioEye Testing SDK packages. We will refer to this key as
`AUDIOEYE_ENTITLEMENT_TOKEN` in the rest of this document.

::: tip
Note: If you want to replace your Entitlement Token key with a new one you can use the Refresh Entitlement Token button.
This will replace your existing token, and your existing projects and workflows will need to be updated to use the new
token.
:::

### Setting up your `.npmrc`

In your node package root directory (where `package.json` lives), add or modify the `.npmrc` file with the following contents:

```bash
@audioeye:registry=https://npm.cloudsmith.io/audioeye-K01/audioeye/
//npm.cloudsmith.io/audioeye-K01/audioeye/:_authToken=${AUDIOEYE_ENTITLEMENT_TOKEN}
```

**Note:** For security reasons you should not commit the `AUDIOEYE_ENTITLEMENT_TOKEN` to your repository. Instead, you should set it up as a secret in GitHub and reference it in your workflow. Beta users will have this pre-generated with the `AUDIOEYE_ENTITLEMENT_TOKEN` filled out for them.

## CLI

### NPM Installation or Update

You can install or update the CLI (as a developer only dependency) using the following command:

```bash
npm install -D @audioeye/testing-sdk-cli
```
### Installation in a Docker Container

In order to run our CLI in Docker, you must set up your project to support Puppeteer. This Dockerfile works for ubuntu containers.

```dockerfile
FROM ubuntu-22.04
RUN apt-get update \
    && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*
```

You must also run `docker run` with the flag `--cap-add=SYS_ADMIN`.

You can find full details on how to set up Puppeteer in Docker [here](https://pptr.dev/troubleshooting#running-puppeteer-in-docker).

### Using the CLI

```bash
npx aetest [command] [options]
```

#### Available Commands

| Command              | Description                                                                                                  |
| :------------------- | :----------------------------------------------------------------------------------------------------------- |
| scan [options] [url] | Perform an accessibility scan on a URL or on the provided raw html on stdin                                  |
| describe [rule]      | Output available information about the rules in the testing framework and their usage in the testing sdk cli |
| help [command]       | Display help for a given command                                                                             |

#### Available Options

| Option                           | Description                              |
| :------------------------------- | :--------------------------------------- |
| -V<br /> &#x2011;&#x2011;version | Output the current aetest version number |
| -h<br /> &#x2011;&#x2011;help    | Display help for a given command         |

## Jest

### NPM Installation or Update

You can install or update the Jest package locally (as a developer only dependency) in your project.

```bash
npm install -D @audioeye/testing-sdk-jest
```

## Software Development Lifecycle (SDLC)

### GitHub Actions (example)

1. To download any of our packages in a GitHub Action, make sure you've set up permissions in your `.npmrc` with the contents shown in the [Pre-Requisites](#pre-requisites) section.

2. Setup a [repository secret in GitHub](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository) named `AUDIOEYE_ENTITLEMENT_TOKEN` with the value of your entitlement token.

3. Use the environment variable in your workflow:

```yaml
name: Pull Request CI

on:
  pull_request:

permissions:
  contents: read

jobs:
  build:
    name: Build & Test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"

      - name: Install Dependencies
        env:
          AUDIOEYE_ENTITLEMENT_TOKEN: ${{ secrets.AUDIOEYE_ENTITLEMENT_TOKEN }}
        run: |
          npm ci

      - name: Build
        run: |
          npm run build

      - name: Test
        run: |
          npm test
```
