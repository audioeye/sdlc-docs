const factory = require('@audioeye/a11y-rules');

const main = async () => {
  console.log(
    `Generating list of a11y rules that require a real browser for @audioeye/a11y-rules@${factory.version}:\n`,
  );
  const rules = [];
  const define = (metadata) => {
    if (metadata.requiresRealBrowser === true) {
      rules.push(metadata.name);
    }
  };
  const selectorForAriaRole = () => undefined;
  factory(
    {
      define,
      selectorForAriaRole,
      Beneficiary: {},
      Category: {},
      Classification: {},
      ImpactScore: {},
      RuleStatus: {},
      Severity: {},
    },
    require,
  );
  rules.sort();
  rules.forEach((rule) => {
    console.log(`- \`${rule}\``);
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
