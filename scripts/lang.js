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

const dataLang = [
    {
        "selector": "#intro-web",
        "en": "Web Developer",
        "fr": "Développeur Web",
    }, {
        "selector": "#intro-frontend",
        "en": "Frontend",
        "fr": "Frontend"
    }, {
        "selector": ".punch-line",
        "en": "Creating allows me to go beyond what we can imagine",
        "fr": "Créer me permet d'aller au-delà de ce que nous pouvons imaginer"
    }, {
        "selector": ".about-me-text",
        "en": "About me",
        "fr": "A propos de moi"
    }, {
        "selector": ".projects-text",
        "en": "Projects",
        "fr": "Projets"
    }, {
        "selector": ".contact-text",
        "en": "Contact",
        "fr": "Contact"
    }, {
        "selector": "#bt-confirm-mail",
        "en": "Get my e-mail",
        "fr": "Récupérer mon e-mail"
    }, {
        "selector": "experiences h2",
        "en": "Experiences",
        "fr": "Experiences"
    }, {
        "selector": "#title-activity",
        "en": "Activities",
        "fr": "Activités"
    }, {
        "selector": ".type-work",
        "en": "Works",
        "fr": "Travaux"
    }, {
        "selector": ".type-studies",
        "en": "Studies",
        "fr": "Études"
    }, {
        "selector": ".type-type-training-period",
        "en": "Training period",
        "fr": "Stage"
    }, {
        "selector": ".type-type-training-period-2-months",
        "en": "Training period (2 months)",
        "fr": "Stage (2 mois)"
    }, {
        "selector": ".languages-tools-title",
        "en": "Languages & Tools",
        "fr": "Langages & Outils"
    }, {
        "selector": ".pokertimer-title",
        "en": "PokerTimer",
        "fr": "PokerTimer"
    }, {
        "selector": ".basic-explorer-title",
        "en": "Function call visualizer",
        "fr": "Visualiseur d'appel de fonction"
    }, {
        "selector": ".erp-universe-title",
        "en": "ERP on Rocket Universe / SB",
        "fr": "ERP sur Rocket Universe / SB"
    }, {
        "selector": ".erp-java-title",
        "en": "ERP on Java/JSF",
        "fr": "ERP sur Java/JSF"
    }, {
        "selector": ".erp-angular-title",
        "en": "ERP on Angular",
        "fr": "ERP sur Angular"
    }, {
        "selector": ".extract-accounting-title",
        "en": "Extraction data for accounting",
        "fr": "Extraction des données comptable"
    }, {
        "selector": ".sharepoint-title",
        "en": "Sharepoint website",
        "fr": "Site internet Sharepoint"
    }, {
        "selector": "#curious-quality",
        "en": "Curious and enthusiastic",
        "fr": "Curieux et Passionné"
    }, {
        "selector": "#team-spirit-quality",
        "en": "Team spirit",
        "fr": "Esprit d'équipe"
    }, {
        "selector": "#adaptability-quality",
        "en": "Adaptability",
        "fr": "Adaptabilité"
    }, {
        "selector": "#autonomy-quality",
        "en": "Autonomy",
        "fr": "Autonomie"
    }, {
        "selector": "#ambitious-quality",
        "en": "Ambitious",
        "fr": "Ambitieux"
    }, {
        "selector": "#composition-music",
        "en": "Composition and Musical Mixing",
        "fr": "Composition et mixage de musiques"
    }, {
        "selector": "#natation",
        "en": "Natation",
        "fr": "Natation"
    }, {
        "selector": "#travel",
        "en": "Travel",
        "fr": "Voyages"
    }, {
        "selector": "#films",
        "en": "Films",
        "fr": "Films"
    }, {
        "selector": "#bike",
        "en": "Bike",
        "fr": "VTT"
    }, {
        "selector": "#skills h2",
        "en": "Skills",
        "fr": "Compétences"
    }, {
        "selector": ".programming-skills h3",
        "en": "Programming Skills",
        "fr": "Compétences en Programmation"
    }, {
        "selector": "#bases",
        "en": "Bases",
        "fr": "Bases"
    }, {
        "selector": "#acquired",
        "en": "Acquired",
        "fr": "Acquis"
    }, {
        "selector": "#master",
        "en": "Master",
        "fr": "Maitrisé"
    }, {
        "selector": "#general-skills h4",
        "en": "General Skills",
        "fr": "Compétences générales"
    }, {
        "selector": "#qualities h4",
        "en": "Qualities",
        "fr": "Qualités"
    }, {
        "selector": "#hobbies h2",
        "en": "Other activités and Passions",
        "fr": "Activités autres et Passions"
    }
]

function changeLang(lang) {
    const htmlSelected = document.querySelector('html');
    htmlSelected.attributes.lang.value = lang

    for (const objectSeleted of dataLang) {
        for(let divSelected of document.querySelectorAll(objectSeleted['selector'])) {
            divSelected.textContent = objectSeleted[lang];
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
