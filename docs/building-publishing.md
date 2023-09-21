# Building Installable Packages

To build the installable package

```bash
npm run package
```

Packages are output to

```bash
packages/testing-sdk-cli/audioeye-testing-sdk-cli-0.0.1.tgz
packages/testing-sdk-jest/audioeye-testing-sdk-jest-0.0.1.tgz
```

## Publishing Packages

Packages can be published to an internal npm repo npm with the github actions CI/CD workflow.

Here is an example workflow file from the `testing-sdk` package.

```yaml
name: NPM Publish
on:
  workflow_dispatch:

jobs:
  build:
    name: Build and publish
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          token: [EXAMPLE_TOKEN]

      - name: configure CI Git User
        run: |
          git config --global user.name [EXAMPLE_CI_USER_NAME]
          git config --global user.email [EXAMPLE_CI_USER_EMAIL]

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version-file: ".nvmrc"
          registry-url: "https://npm.pkg.github.com"
          cache: "npm"

      - name: Install dependencies
        run: |
          npm ci
        env:
          NODE_AUTH_TOKEN: [EXAMPLE_TOKEN]

      - name: Build
        run: npx lerna run build

      - name: Lerna Publish
        run: npx lerna publish patch --yes
        env:
          NODE_AUTH_TOKEN: [EXAMPLE_TOKEN]

```
