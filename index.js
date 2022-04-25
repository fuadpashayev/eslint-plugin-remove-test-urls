let lastDotNum = 0;
module.exports = {
    rules: {
        "remove-test-urls": {
            create: function (context) {
                const data = context.options[0];
                const { domains = [], subdomains = [], exceptFileNameContains = [] } = data;
                const fileName = context.getFilename();
                if(fileName.match(new RegExp(exceptFileNameContains.join('|')))) return true;
                lastDotNum = lastDotNum >= 15 ? 0 : lastDotNum + 1;
                process.stdout.write(`Checking test urls ${'\u2588'.repeat(lastDotNum)} \r`);
                const { lines } = context.getSourceCode();
                const regex = new RegExp(`${subdomains.length ? `(${subdomains.join('|')})\.` : ''}${domains.join('|')}`);
                lines.forEach((line, i) => {
                    const matching = line.match(regex);
                    if (matching) {
                        context.report({
                            message: `Remove any test urls before deploy!!! \n${line} \n${' '.repeat(matching.index  - 5)}_____^\n\n`,
                            loc: {
                                start: {
                                    line: i + 1,
                                    column: matching.index
                                }
                            }
                        });
                    }
                });

                return true;
            }
        }
    }
};