# Get Started

Some words about
- How to get the entitlement token
- How to download & install the NPM package from the repository

## CLI Installation
You can install the CLI as a developer only dependency in your project.

```bash
npm install -D @audioeye/testing-sdk-cli
```
## Options
```bash
Usage: aetest [options] [command]

CLI for AudioEye Testing SDK

Options:
  -V, --version         output the version number
  -h, --help            display help for command

Commands:
  scan [options] [url]  Perform an accessibility scan on a URL or on the provided raw html on stdin
  jest                  Perform an accessibility scan in Jest mode with custom JSON output
  describe [rule]       Output available information about the rules in the testing framework and their usage in the testing sdk cli
  help [command]        display help for command
```
