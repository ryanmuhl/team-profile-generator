 generateHTML = data => {


    output =  `
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
    
        <Section>`


    for (let i = 0; i < data.Man.length; i++) {
        const mgr = data.Man[i];

        output += 
        `<div class="card">
            <div class="banner">
                <i class="fa-thin fa-alien-8bit"></i>
                <h3>${mgr.name}</h3>
                <h2>Manager</h2>
            </div>
                <h3>ID: ${mgr.id}</h3>
                <h3>Email: ${mgr.email}</h3>
                <h3>Office Number: ${mgr.officenumber}</h3>
        </div>`
    }

    output += '</Section><Section>';

    for (let i = 0; i < data.Eng.length; i++) {
        const eng = data.Eng[i];
        
    output +=
    `<div class="card">
    <div class="banner">
    <i class="fa-thin fa-atom-simple"></i>
    <h3>${eng.name}</h3>
        <h2>Engineer</h2>
        </div>

    <h3>ID: ${eng.id}</h3>
        <h3>Email: ${eng.email}</h3>
        <h3>Git Hub: ${eng.github}</h3>
</div> `
    }

   output += '</Section><Section>';

   for (let i = 0; i < data.Int.length; i++) {
    const intrn = data.Int[i];
    
output +=
`<div class="card">
<div class="banner">
<i class="fa-thin fa-atom-simple"></i>
<h3>${intrn.name}</h3>
    <h2>Intern</h2>
    </div>

<h3>ID: ${intrn.id}</h3>
    <h3>Email: ${intrn.email}</h3>
    <h3>University: ${intrn.university}</h3>
</div> `
}

output += '</Section><Section>';


        
       ` </Section>
        
    </body>
    </html>
    
    `
}


module.exports = generateHTML;

















