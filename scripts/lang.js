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
    "en" : {
        "about-me" : {
            "text" : "About me",
            "selector" : ".about-me-text"
        },
        "projects" : {
            "text" : "Projects",
            "selector" : ".projects-text"
        },
        "contact" : {
            "text" : "Contact",
            "selector" : ".contact-text"
        },
        "bt-confirm-mail" : {
            "text" : "Get my e-mail",
            "selector" : "#bt-confirm-mail"
        },
        /*"" : {
            "text" : "",
            "selector" : ""
        }*/
    },
    "fr" : {
        "about-me" : {
            "text" : "A propos de moi",
            "selector" : ".about-me-text"
        },
        "projects" : {
            "text" : "Projets",
            "selector" : ".projects-text"
        },
        "contact" : {
            "text" : "Contact",
            "selector" : ".contact-text"
        },
        "bt-confirm-mail" : {
            "text" : "Récupérer mon e-mail",
            "selector" : "#bt-confirm-mail"
        },
    },
}

function changeLang(lang) {
    const [keyOther, langSelect] = Object.entries(dataLang[lang]);
    for (const [key, translate] of Object.entries(dataLang[lang])) {
        for (const divSelect of document.querySelectorAll(translate['selector'])) {
            divSelect.textContent = translate['text'];
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
