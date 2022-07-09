window.addEventListener('scroll', reveal);

function addOrRemoveReveal(reveal) {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
        reveal.classList.add('active-reveal');
    } else {
        reveal.classList.remove('active-reveal');
    }
}

function showOrHideNavbar() {
    const windowHeight = window.innerHeight;
    const presentationTop = document.querySelector('#presentation').getBoundingClientRect().top;
    const navbar = document.querySelector('nav');

    console.log(presentationTop);

    if (presentationTop < 200) {
        navbar.style.display = 'flex';
    } else {
        navbar.style.display = 'none';
    }
}

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let reveal of reveals) {
        addOrRemoveReveal(reveal);
    }

    showOrHideNavbar();
}


function openDetailProject(idProject) {

}

function closeDetailProject() {

}