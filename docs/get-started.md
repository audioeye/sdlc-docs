# Get Started

## Available Packages

- [**CLI**](#cli) - @audioeye/testing-sdk-cli
- [**Jest**](#jest) - @audioeye/testing-sdk-jest

## Pre-Requisites
AudioEye is hosting this SDK in Cloudsmith for secure distribution. In order to pull down dependencies, make sure you have an `.npmrc` file in the root your project with the following contents:

```bash
@audioeye:registry=https://npm.cloudsmith.io/audioeye-K01/audioeye/
//npm.cloudsmith.io/audioeye-K01/audioeye/:_authToken=<ENTITLEMENT_TOKEN>
```
**Note:** Beta users will have this pre-generated with the `ENTITLEMENT_TOKEN` filled out for them.

## CLI

### NPM Installation
You can install the CLI as a developer only dependency in your project.

```bash
npm install -D @audioeye/testing-sdk-cli
```

### Docker Installation

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
| Command | Description |
| :------ | :--- |
| scan [options] [url] | Perform an accessibility scan on a URL or on the provided raw html on stdin |
| describe [rule] | Output available information about the rules in the testing framework and their usage in the testing sdk cli |
| help [command] | Display help for a given command |

#### Available Options
| Option | Description |
| :------ | :--- |
| -V<br /> &#x2011;&#x2011;version | Output the current aetest version number |
| -h<br /> &#x2011;&#x2011;help | Display help for a given command |

## Jest

### NPM Installation

You can install the Jest package locally (as a developer only dependency) in your project. Currently this will also install the cli as a dependency

```bash
npm install -D @audioeye/testing-sdk-jest
```
