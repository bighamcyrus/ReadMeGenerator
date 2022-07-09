const generateReadme = function(data)
{

return`# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#how-to-contribute)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}
---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![javascript](https://img.shields.io/badge/javascript-100%25-blue)

## How to Contribute

${data.contributions}

## Tests

${data.tests}

## Questions for the author

${data.questions}`}

module.exports=generateReadme



// 