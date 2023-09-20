# Building Installable Packages

To build the installable package

```
npm run package
```

Packages are output to

```
packages/testing-sdk-cli/audioeye-testing-sdk-cli-0.0.1.tgz
packages/testing-sdk-jest/audioeye-testing-sdk-jest-0.0.1.tgz
```

## Publishing Packages

Packages can be published to an internal npm repo npm with the github actions CI/CD workflow.

For an example workflow, check out `.github/workflows/publish.yml`
