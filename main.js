
function changeNavBg(){
    let navbar = document.querySelector('.navbar')
    let scrollValue = window.scrollY;
    if(scrollValue < 666){
        navbar.classList.remove('navbar__color')
    }else{
        navbar.classList.add('navbar__color')
    }
}
window.addEventListener('scroll',changeNavBg)

const projects = document.querySelector('.projects');

 fetch('https://api.github.com/users/tuananhpham95/repos')
        .then(response => response.json())
        .then(data => {
            data.forEach(element =>{ 
                if(element.stargazers_count != 0){
                    console.log(element)
                    fetch('https://api.github.com/repos/tuananhpham95/' + element.name + '/contents')
                        .then(response => response.json())
                        .then(repofiles =>{
                            console.log(repofiles)
                            for(let i = 0 ; i < repofiles.length ; i++){
                                if(repofiles[i].name.endsWith(".png")){
                                        projects.innerHTML += 
                                        `
                                        <div class="project__img">
                                            <img src="${repofiles[i].download_url}" alt="Counter game">
                                        </div>
                                        <div class="project__content">
                                            <h3>${element.name}</h3>
                                            <p>${element.description}</p>
                                            <ul>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>JAVASCRIPT</li>
                                            </ul>
                                            <div class="project__links">
                                                <button class="Project btn"><a href="${element.html_url}">Sourse</a></button>
                                            </div>
                                        </div>
                                        `
                                }
                            }                                              
                        })
                }     
            })
        })
/* let url = "resume.json";
fetch(url)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
    }) */
