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
    const presentationTop = document.querySelector('#presentation').getBoundingClientRect().top;
    const navbar = document.querySelector('nav');

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

function attachOnClickOfProjects() {
    const allProjects = document.querySelectorAll('.clickable-project');

    for (let p of allProjects) {
        let idProject = p.id;
        idProject = idProject.split('-')
        idProject.shift()
        idProject = idProject.join('-');
        p.addEventListener('click', () => {
            openDetailProject('#detail-' + idProject)
        });
    }
}


function openDetailProject(idProject) {
    let divSelect = document.querySelector(idProject);
    divSelect.classList.remove('hide-project');
    divSelect.classList.add('show-project');
    divSelect.addEventListener('click', closeDetailProject)

    // Manage the overflow for stop the scroll
    let bodySelect = document.querySelector('body');
    bodySelect.style.overflowY = 'hidden';
}

function closeDetailProject() {
    let divSelect = document.querySelector('.show-project');
    divSelect.classList.remove('show-project');
    divSelect.classList.add('hide-project');

    // Manage the overflow for restart scroll
    let bodySelect = document.querySelector('body');
    bodySelect.style.overflowY = '';
}

window.addEventListener('scroll', reveal);
window.onload = function() {
    attachOnClickOfProjects();
}