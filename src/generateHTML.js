generateHTML = data => {

    //Generate Manager Card
    const generateManager = manager => {

        return `
    <div class="card">
    <div class="banner">
        <i class="fa-thin fa-alien-8bit"></i>
        <h3>${manager.getName()}</h3>
        <h2>${manager.getRole()}</h2>
    </div>
        <h3>ID: ${manager.getId()}</h3>
        <h3>Email:</h3><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
        <h3>OFFICE#: ${manager.getOffice()}</h3>

</div>
`;

    }
    //Generate Engineer Card
    const generateEngineer = engineer => {

        return `
    <div class="card">
            <div class="banner">
            <i class="fa-thin fa-atom-simple"></i>
            <h3>${engineer.getName()}</h3>
                <h2>${engineer.getRole()}</h2>
                </div>
    
            <h3>ID: ${engineer.getId()}</h3>
            <h3>Email:</h3> <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
            <h3>Git Hub:</h3> <a href="https://github.com/${engineer.getGithub()}"> ${engineer.getGithub()}</a>
        </div>
    `
    }

    //Generate Intern Card
    function generateIntern(intern) {

        return `
    <div class="card">
            <div class="banner">
            <i class="fa-thin fa-atom-simple"></i>
            <h3>${intern.getName()}</h3>
                <h2>${intern.getRole()}</h2>
                </div>
    
            <h3>ID: ${intern.getId()}</h3>
            <h3>Email:</h3><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
                <h3>University: ${intern.getUniversity()}</h3>
        </div>
    `;
    }

    //define html array to push employee cards
    const html = [];

    html.push(data
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(data
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(data
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}


module.exports = data => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="style.css">
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"> -->
    <title>My Team</title>
</head>


<body>
    <Header class="header">MY TEAM</Header>

    <Section>
        ${generateHTML(data)}
        
    </Section>
    
</body>
</html>
`

}




















