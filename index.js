const inquirer = require("inquirer")

const employeeQuestions = [

    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    }, {
        type: "list",
        name: "role",
        message: "What is your role?",
        choices: ["Manager", "Engineer", "Intern"]
    }

];

const managerQuestions = [

    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
    },
]

const engineerQuestions = [

    {
        type: "input",
        name: "github",
        message: "What is your Github?",
    },
]

const internQuestions = [

    {
        type: "input",
        name: "school",
        message: "What is your school?",
    },
]

inquirer.prompt(employeeQuestions).then(function (employeeAnswers) {
    if (employeeAnswers.role == "Manager") {

        inquirer.prompt(managerQuestions).then(function (answers) {
            employeeAnswers.officeNumber = answers.officeNumber;
            console.log(answers)
        })
    }
    else if (employeeAnswers.role == "Engineer") {


        inquirer.prompt(engineerQuestions).then(function (answers) {
            employeeAnswers.github = answers.github;
            console.log(answers)
        })
    }
    else if (employeeAnswers.role == "Intern") {


        inquirer.prompt(internQuestions).then(function (answers) {
            employeeAnswers.school = answers.school;
            console.log(employeeAnswers)
        })
    }
})

