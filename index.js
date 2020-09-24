

// require fs + inquirer packages


const fs = require("fs");


const inquirer = require("inquirer");


const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for the user, to be apploed within..
// the appropriate sections on their readme.md file.

const questions = [

    {

        type: "input",
        message: "What is the title of your project?",
        name: "title",
        default: "You Forgot To Add A Project Title.."

    },

    {

        type: "input",
        message: "Describe your project. What, why, & how?",
        name: "description",
        default: "Placeholder for the Project Description.."

    },

    {

        type: "input",
        message: "What are the steps required to install your project? (If applicable)..",
        name: "installation",
        default: "Placeholder for the Installation Steps.."

    },

    {

        type: "input",
        message: "Provide your instructions and examples for use.",
        name: "usage",
        default: "Placeholder for the Usage Instructions.."

    },

    {

        type: "list",
        message: "Please choose a license from the list below and a badge will be applied at the top of your README file.",
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
        message: "Add guidelines that inform other developers how they can contribute to your project.",
        name: "contributing",
        default: "Placeholder for the Contributions Section.."

    },

    {

        type: "input",
        message: "Go the extra mile and write some tests for your application. Then provide examples on how to run them here.",
        name: "tests",
        default: "Placeholder for the Tests Section.."

    },
    
    {

        type: "input",
        message: "List your collaborators, if any. Third-Party Assets? Tutorials?",
        name: "credits",
        default: "Placeholder for the Credits Section.."

    },

    {

        type: "input",
        message: "Enter your primary email address.",
        name: "email",
        default: "youforgot@youremail.com",

    },

    {

        type: "input",
        message: "Please enter your GitHub username here. Do not include an @ symbol.",
        name: "githubusername",
        default: "madrobby/vapor.js"
    }
    

];


// function t)o write README file

function writeToFile(fileName, data) {

    fs.writeFileSync(fileName, data, err => {

        if (err) {
            return console.log(err);
        }

    });

    
    console.log("Congratulations. You are now the proud owner of a brand new README file.")

};


// function to initialize program

function init() {

    inquirer.prompt(questions).then(function (answers) {

        writeToFile("GeneratedREADME.md", generateMarkdown(answers));

    })
};


// function call to initialize program

init();
