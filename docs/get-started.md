# Get Started

**TODOs**
- How to get the entitlement token
- How to download & install the NPM package from the repository
- How to add `.npmrc` file to a project

## Available Packages

- [**CLI**](#cli) - @audioeye/testing-sdk-cli
- [**Jest**](#jest) - @audioeye/testing-sdk-jest

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
| jest | Perform an accessibility scan in Jest mode with custom JSON output |
| describe [rule] | Output available information about the rules in the testing framework and their usage in the testing sdk cli |
| help [command] | display help for command |

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
