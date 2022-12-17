/* menu button togglar */
const navMenuBtn = document.querySelector('.nav-menu');
const navLinks = document.querySelector('.nav-links');
navMenuBtn.addEventListener('click',()=>{
    navLinks.classList.toggle('nav-open');
})

/* Darkmode */
let darkmodeBtn = document.querySelector('.nav-darmode-btn');
darkmodeBtn.onclick = function(){
    document.body.classList.toggle("light-theme");
}

/* ändrar färg när man scrolla */
function changeNavBg(){
    let navbarr = document.querySelector('.nav')
    let scrollValue = window.scrollY;

    if(scrollValue < 200){
        navbarr.classList.remove('navbar-color')
    }else{
        navbarr.classList.add('navbar-color')
    }
}
window.addEventListener('scroll',changeNavBg)


/* hämtar project från github med github api */
const projectContent = document.querySelector('.project-content');
 fetch('https://api.github.com/users/tuananhpham95/repos')
        .then(response => response.json())
        .then(data => {
            data.forEach(element =>{ 
                if(element.stargazers_count != 0){
                    fetch('https://api.github.com/repos/tuananhpham95/' + element.name + '/contents')
                        .then(response => response.json())
                        .then(repofiles =>{
                            for(let i = 0 ; i < repofiles.length ; i++){
                                if(repofiles[i].name.endsWith(".png")){
                                    projectContent.innerHTML += `
                                        <div class="project-items">
                                            <div class="project-img">
                                                <img src="${repofiles[i].download_url}" alt="Counter game">
                                            </div>
                                            <div class="project-info">
                                                <h3>${element.name}</h3>
                                                <p>${element.description}</p>
                                                <ul>
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>JAVASCRIPT</li>
                                                </ul>
                                                <div class="project__links">
                                                    <a href="${element.html_url}"target="_blank">Sourse</a>
                                                </div>
                                            </div>
                                        </div>
                                        `
                                }
                            }                                              
                        })
                }     
            })
        });



