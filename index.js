

// require fs + inquirer packages


const fs = require("fs");


const inquirer = require("inquirer");


const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for the user, to be apploed within..
// the appropriate sections on their readme.md file.

const questions = [

    {

        type: "input",
        message: "\n \n \n What is the title of your project? \n \n \n",
        name: "title",
        default: "Enter a Project Title Here"

    },

    {

        type: "input",
        message: "\n \n \n Describe your project. What, why, & how? \n \n \n",
        name: "description",
        default: "Enter a Project Description Here"

    },

    {

        type: "input",
        message: "\n \n \n What are the steps required to install your project? (If applicable)..\n \n \n",
        name: "installation",
        default: "Enter your installation steps here"

    },

    {

        type: "input",
        message: "\n \n \n Provide your instructions and examples for use. \n \n \n",
        name: "usage",
        default: "Enter your usage instructions here"

    },

    {

        type: "list",
        message: "\n \n \n Please choose a license from the list below and a badge will be applied at the top of your README file. \n \n \n",
        name: "license",
        default: "MIT",
        choices: 
        
        [
            "Apache",
            "MIT",
            "BSD",
            "GPL"
        ]

    },

    {

        type: "input",
        message: "\n \n \n Add guidelines that inform other developers how they can contribute to your project. \n \n \n",
        name: "contributing",
        default: "Enter your contribution information here"

    },

    {

        type: "input",
        message: "\n \n \n Go the extra mile and write some tests for your application. Then provide examples on how to run them here. \n \n \n",
        name: "tests",
        default: "Enter your application testing information here"

    },
    
    {

        type: "input",
        message: "\n \n \n List your collaborators, if any. Third-Party Assets? Tutorials? \n \n \n",
        name: "credits",
        default: "List your collaborators/credits here"

    },

    {

        type: "input",
        message: "\n \n \n Enter your primary email address. \n \n \n",
        name: "email",
        default: "PleaseEnterYourEmail@email.com",

    },

    {

        type: "input",
        message: "\n \n \n Please enter your GitHub username here. Do not include an @ symbol. \n \n \n",
        name: "githubusername",
        default: "madrobby/vapor.js"

    }
    

];


// function to write the README file

function writeToFile(fileName, data) {

    fs.writeFileSync(fileName, data, err => {

        if (err) {
            return console.log(err);
        }

    });


    console.log("\n \n \n Congratulations! You are now the proud owner of a brand new README file! \n \n \n")

};


// function to initialize program

function init() {

    inquirer.prompt(questions).then((answers) => {

        writeToFile("GeneratedREADME.md", generateMarkdown(answers));

    })
};


// function call to initialize program

init();
