

const openNav =  ()=>{
    document.getElementById('mySidenav').style.width="25rem"
};

const closeNav =  ()=>{
    document.getElementById('mySidenav').style.width="0rem"
}
const skillsSection =document.getElementById('skills-sections');
const progressBars = document.querySelectorall('.progress-bar');

function showProgress(){
    progressBars.forEach(progressBars=>{
        const value = progressBars.dataset.progress;
        progressBar.style.opacity =1;
        progressBar.style.width = '${value}%';
    });
}
window.addEventListener("scroll", ()=> {
    const sectionPos = skillsSection.innerHeight;
    if(sectionPos < sectionPos){
      showProgress();

    }else{
     hideProgress();  
    }
});

