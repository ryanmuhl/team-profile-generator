 generateHTML = data => {


    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="style.css">
        <title>My Team</title>
    </head>
    
    
    <body>
        <Header class="header">MY TEAM</Header>
    
        <Section>
            <div class="card">
                <div class="banner">
                    <i class="fa-thin fa-alien-8bit"></i>
                    <h3>${data[0].name}</h3>
                    <h2>Manager</h2>
                </div>
                    <h3>ID: ${data[0].id}</h3>
                    <h3>Email: ${data[0].email}</h3>
                    <h3>Office Number: ${data[0].officenumber}</h3>
    
            </div>
    
            <div class="card">
                <div class="banner">
                <i class="fa-thin fa-atom-simple"></i>
                <h3>${data[1].name}</h3>
                    <h2>Engineer</h2>
                    </div>
        
                <h3>ID: ${data[1].id}</h3>
                    <h3>Email: ${data[1].email}</h3>
                    <h3>Git Hub: ${data[1].github}</h3>
            </div>
    
    
            <div class="card">
                <div class="banner">
                <i class="fa-thin fa-atom-simple"></i>
                <h3>${data[2].name}</h3>
                    <h2>Intern</h2>
                    </div>
        
                <h3>ID: ${data[2].id}</h3>
                    <h3>Email: ${data[2].email}</h3>
                    <h3>School: ${data[2].university}</h3>
            </div>
            
        </Section>
        
    </body>
    </html>
    
    `
}

module.exports = generateHTML;

















