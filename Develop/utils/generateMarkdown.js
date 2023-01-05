// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License:
  [![license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://shields.io/)
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Contact](#contact-information)

  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  ${data.license}
  ## Contributions:
  ${data.contrabutions}
  ## Contact Information:
  - Github: [${data.github}]
  - Email: [${data.email}] `;
}

module.exports = generateMarkdown;