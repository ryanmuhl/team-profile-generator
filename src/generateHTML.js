const generateHTML = data => {


    retrun `
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
        <div class="card">
            <div class="banner">
                <i class="fa-thin fa-alien-8bit"></i>
                <h3>${data[0]}</h3>
                <h2>Manager</h2>
            </div>
                <h3>ID: 1</h3>
                <h3>Email: test@test.com</h3>
                <h3>Office nuber: 1</h3>

        </div>
        <div>
            <i class="fa-thin fa-atom-simple"></i>

        </div>

        <div>
            <i class="fa-light fa-bomb"></i>

        </div>

    </Section>
    
</body>
</html>
    
    `
}

















module.exports = generateHTML;