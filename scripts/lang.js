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
    }, {
        "selector": "#presentation-text",
        "en": "Welcome to my website where I will present you all my projects, mainly web-oriented developments",
        "fr": "Bienvenue sur mon site internet dans lequel je vais vous présenter tous mes projets, principalement tourné sur les développements web"
    }, {
        "selector" : "#caen-bachelor-period p",
        "en" : "June 2014 - June 2019",
        "fr" : "Juin 2014 - Juin 2019"
    }, {
        "selector" : "#floreale-holding-period p",
        "en" : "April 2019 - April 2022",
        "fr" : "Avril 2019 - Avril 2022"
    }, {
        "selector" : "#lomme-bts-period p",
        "en" : "June 2012 - June 2014",
        "fr" : "Juin 2012 - Juin 2014"
    }, {
        "selector" : "#maison-des-travaux-period p",
        "en" : "May 2013 - June 2013",
        "fr" : "Mai 2013 - Juin 2013"
    }, {
        "selector" : "#caen-bachelor-name p",
        "en" : "Bachelor's degree in computer science - Caen",
        "fr" : "Licence en informatique - Caen"
    }, {
        "selector" : "#lomme-bts-name p",
        "en" : "Bachelor's degree in building - Lomme",
        "fr" : "BTS en informatique - Lomme"
    }, {
        "selector" : "#my-projects h3",
        "en" : "My own Projects",
        "fr" : "Mes projets personnelles"
    }, {
        "selector": "#detail-function-visualizer .project-detail",
        "en" : "The goal of this project was created a graph who show all call and relation between programs, fields, process in Rocket Universe and SB",
        "fr" : "Le but de ce projet était de créer et d'afficher un graphe qui contenait toute les relations entre les programmes, les champs, les processes contenu dans Rocket Universe et SB"
    }, {
        "selector" : "#detail-erp-angular .project-detail",
        "en" : "The goal of this project is to modernize the tools by passing it through a web application written under Angular and which passes through a proprietary API (notably on the technical limitations of Rocket Universe and SB)",
        "fr" : "Ce projet a pour but de moderniser les outils en le passant par une application web écrit sous Angular et qui passe par une API propriétaire (notamment sur les limitations techniques de Rocket Universe et SB)"
    }, {
        "selector" : "#detail-erp-java .project-detail",
        "en" : "The goal of this project was to modernize the tools by switching to a Java/JSF based web application (the project was interrupted due to performance issues with the Rocket Universe Java driver which could take a long time to process SQL queries)",
        "fr" : "Ce projet avait pour but de moderniser les outils en le passant par une application web basé sur Java/JSF (Le projet fut interrompu par souci de probleme de performance avec le pilote Java de Rocket Universe qui pouvais être long a traiter les requetes SQL)"
    }, {
        "selector" : "#detail-rocket .project-detail",
        "en" : "In the maintenance and modernization of existing programs, I have developed screens and programs (mainly data extractions)",
        "fr" : "Dans le maintiens et la modernisation des programmes existants, j'ai développer des écrans et des programmes (principalement des extractions de données)"
    }, {
        "selector" : "#detail-rocket .project-detail",
        "en" : "In the maintenance and modernization of existing programs, I have developed screens and programs (mainly data extractions)",
        "fr" : "Dans le maintiens et la modernisation des programmes existants, j'ai développer des écrans et des programmes (principalement des extractions de données)"
    }, {
        "selector" : "#detail-sharepoint .project-detail",
        "en" : "Creation of an internal website to inform and make documents available to all users and to centralize data instead of going through e-mails",
        "fr" : "Création d'un site interne pour informer et mettre des documents à la disposition de tous les utilisateurs et d'avantage centraliser les données au lieu de passer par les e-mails"
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
