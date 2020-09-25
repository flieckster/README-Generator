// function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}‏‏‎
‎‎![License](https://img.shields.io/static/v1?label=License&message=${data.license}&color=brightgreen) 
  
  <p>&nbsp;<p>
  <p>&nbsp;<p>

  ---
  
  <p>&nbsp;<p>
    

## Description 

<p>&nbsp;<p>

${data.description}

<p>&nbsp;<p>


---

<p>&nbsp;<p>


## Table of Contents: 

<p>&nbsp;<p>

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Credits](#credits)
* [Questions](#questions)

<p>&nbsp;<p>

---


<p>&nbsp;<p>


## Installation


<p>&nbsp;<p>


${data.installation}


<p>&nbsp;<p>

---


<p>&nbsp;<p>


## Usage


<p>&nbsp;<p>


${data.usage}

<p>&nbsp;<p>


---


<p>&nbsp;<p>


## License


<p>&nbsp;<p>


This project is covered under the ${data.license} license. 


<p>&nbsp;<p>


---


<p>&nbsp;<p>


## Contributing


<p>&nbsp;<p>


${data.contributing}


<p>&nbsp;<p>


---


<p>&nbsp;<p>


## Tests


<p>&nbsp;<p>


${data.tests}


<p>&nbsp;<p>


---


<p>&nbsp;<p>


## Credits


<p>&nbsp;<p>


${data.credits}


<p>&nbsp;<p>


---


<p>&nbsp;<p>


## Questions?


<p>&nbsp;<p>


Shoot me an e-mail! => ${data.email}

<p>&nbsp;<p>


Check out more of my work here on =>
[GitHub](http://github.com/${data.githubusername})
<p>&nbsp;<p>
<p>&nbsp;<p>


---


<p>&nbsp;<p>
<p>&nbsp;<p>
`;

};


// exports the markdown file complete with users input.

module.exports = generateMarkdown;
