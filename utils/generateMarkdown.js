// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ![License](https://img.shields.io/static/v1?label=${data.license}&message=license&color=brightgreen)


## Description: 
${data.description}


## Table of Contents: 

* [Installation](##Installation)
* [Usage](##Usage)
* [License](##License)
* [Contributing](##Contributing)
* [Tests](##Tests)
* [Credits](##Credits)
* [Questions](##Questions)


## Installation:
${data.installation}


## Usage:
${data.usage}


## License:
This project is covered under the ${data.license} license. 
![License](https://img.shields.io/static/v1?label=${data.license}&message=license&color=brightgreen) 

## Contributing:
${data.contributing}


## Tests:
${data.tests}


## Credits:
${data.credits}


## Questions?

Shoot me an e-mail! => ${data.email}


Check out my work on GitHub:
![GitHub](http://github.com/${data.githubusername})

`;

};

module.exports = generateMarkdown;
