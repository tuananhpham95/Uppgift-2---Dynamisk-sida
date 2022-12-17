/* hämtar data från json file */
let url = "resume.json";
const cvContainer = document.querySelector('.cv__container');
fetch(url)
    .then(response => response.json())
    .then(data =>{
        cvContainer.innerHTML = `
        <header>
            <h1>${data.basics.name}</h1>
            <h2>${data.education[0].institution}</h2>
        </header>
        <section class="info">
            <div class="about-me">
                <h3>About Me</h3>
                <p>${data.about[0].description}</p>
            </div>
            <div class="work">
                <h3>Work Experience</h3>
                <ul>
                    <li>
                        <h4>${data.work[0].name}</h4>
                        <p>${data.work[0].summary}</p>
                        <p>Posititon: <span>${data.work[0].position}</span></p>
                        <a href="#">${data.work[0].url}</a>
                    </li>
                    <li>
                        <h4>${data.work[1].name}</h4>
                        <p>${data.work[1].summary}</p>
                        <p>Posititon: <span>${data.work[1].position}</span></p>
                        <a href="#">${data.work[1].url}</a>
                    </li>
                    <li>
                        <h4>${data.work[2].name}</h4>
                        <p>${data.work[2].summary}</p>
                        <p>Posititon: <span>${data.work[2].position}</span></p>
                        <a href="#">${data.work[2].url}</a>
                    </li>
                </ul>
            </div>
        </section>
        <aside class = "sidebar">
            <div class="images">
                <img src="${data.basics.image}" alt="">
            </div>
            <div class="edu">
                <h3>Education</h3>
                <h4>${data.education[0].institution}</h4>
                <p>Start Date:<span>${data.education[0].startDate}</span></p>
                <p>End Date:<span>${data.education[0].endDate}</span></p>
                <p>Stady type:<span>${data.education[0].studyType}</span></p>
                <a href="#">${data.education[0].url}</a>
            </div>
            <div class="language">
                <h3>Language</h3>
                <ul>
                    <li>${data.languages[0].language[0]}</li>
                    <li>${data.languages[0].language[1]}</li>
                    <li>${data.languages[0].language[2]}</li>
                </ul>
            </div>
        </aside>
        <section class = 'myskills'>
            <div class="skills">
                <div class ="list">
                    <h3>Skills</h3>
                    <ul>
                        <li>${data.skills[0].keywords[0]}</li>
                        <li>${data.skills[0].keywords[1]}</li>
                        <li>${data.skills[0].keywords[2]}</li>
                        <li>${data.skills[0].keywords[3]}</li>
                        <li>${data.skills[0].keywords[4]}</li>
                        <li>${data.skills[0].keywords[5]}</li>
                    </ul>
                </div>              
            </div>
            <div class="reference">
                <h3>reference</h3>
                <h5>${data.references[0].name}</h5>
                <p>${data.references[0].position}</p>
                <p>Phone: ${data.references[0].phone}</p>
                <p>email:${data.references[0].email}</p>
            </div>
        </section>
        <footer>
            <div class="adress">
                <p>${data.basics.phone}</p>
                <p>Email: <span>${data.basics.email}</span></p>
                <p>Adress:
                <span>${data.basics.location.countryCode}</span>
                <span>${data.basics.location.city}</span>
                <span>${data.basics.location.address}</span>
                <span>${data.basics.location.postalCode}</span>
                </p>
            </div>
        </footer>
        `
});