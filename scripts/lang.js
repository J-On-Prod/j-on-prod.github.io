/**
 * La structure de la table de traduction est la suivante
 * LANGUE
 * ↓
 * ELEMENT
 * ↓
 * TEXT, SELECTOR
 * 
 * TODO : Gestion de cookie pour garder la langue par défaut
 */

 const dataLang = {
    "selector" : {
        "about-me" : ".about-me-text",
        "projects" : ".projects-text",
        "contact" : ".contact-text",
        "bt-confirm-mail" : "#bt-confirm-mail",
        "languages-tools" : "languages-tools-title"
    },
    "en" : {
        "about-me" : "About me",
        "projects" : "Projects",
        "contact" :  "Contact",
        "bt-confirm-mail" : "Get my e-mail",
        "languages-tools" : "Languages & Tools"
    },
    "fr" : {
        "about-me" : "A propos de moi",
        "projects" : "Projets",
        "contact" : "Contact",
        "bt-confirm-mail" : "Récupérer mon e-mail",
        "languages-tools" : "Langages & Outils"
        
    },
}

function changeLang(lang) {
    for (const [keySelector, selector] of Object.entries(dataLang['selector'])) {
        for (const divSelect of document.querySelectorAll(selector)) {
            divSelect.textContent = dataLang[lang][keySelector];
        }
    };
}

function setupLanguageButton() {
    let buttonFrench = document.querySelectorAll('.bt-fr');

    for (let button of buttonFrench) {
        button.addEventListener('click', () => {
            changeLang('fr');
        });
    }

    let buttonEnglish = document.querySelectorAll('.bt-en');
    for (let button of buttonEnglish) {
        button.addEventListener('click', () => {
            changeLang('en');
        });
    }
}
