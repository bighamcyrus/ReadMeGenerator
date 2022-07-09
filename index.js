// To bring in our JSON utilities and dependencies
const fs = require('fs');
const inquirer = require("inquirer");


const generateReadme = require("./utility/generateReadme.js");

const questions = [
        {

        type: "input",
        name: "title",
        message: "What is the title?"
        },
        {
        type: "input",
        name: "description",
        message: "Description of the project:"
        
        },
        {
        type:"input",
        name:"tableOfContents",
        message: "Add Your Table of Contents Sections"

        },
        {
        type:"input",
        name: "Installation",
        message: "Describe installation process:"
        
        },
        {
        type: "input",
        name: "Usage",
        message: "How to use this program:",

        },
        {
        type: "input",
        name:"License",
        message: "Licenses used:"
                
        },
        {
        type: "input",
        name:"contributions",
        message: "references:"
        
        },
        {
        type: "input",
        name: "Tests",
        message: "Tests performed:"

        },
        {
        type: "input",
        name: "Questions",
        message: "What Questions or Improvement suggestions do you want to add?"
        
        }
]

function fileCreator(fileName, data)
{
        fs.writeFile(fileName, data, function(err){
                console.log(fileName)
                console.log(data)
                if (err) {
                        return console.log(err)
                } else {
                        console.log("Your Readme is Ready!")
                }

        })


}
function runProgram() 
{
        inquirer.prompt(questions)
        .then(function(data){
                fileCreator("README.md", generateReadme(data));
                console.log(data)
        })

}

runProgram();