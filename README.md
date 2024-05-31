# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm ci
```

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Updating the list of rules that require a real browser

To update the list of rules that require a real browser, run the following command:
```bash
node requiresRealBrowser.js
```

### Updating the list of rules that will not work when using the `--component` flag

To update the list of rules that will not work when using the `--component` flag, check page level rules list for the [Testing SDK](https://github.com/audioeye/testing-sdk/blob/develop/packages/testing-sdk-core/src/ruleFilters.ts#L6-L19).

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
