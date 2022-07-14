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
        "intro-web" : "#intro-web",
        "intro-frontend" : "#intro-frontend",
        "punch-line" : ".punch-line",
        "about-me" : ".about-me-text",
        "projects" : ".projects-text",
        "contact" : ".contact-text",
        "bt-confirm-mail" : "#bt-confirm-mail",
        "experiences" : "experiences h2",
        "type-work" : ".type-work",
        "type-studies" : ".type-studies",
        "type-type-training-period" : ".type-type-training-period",
        "type-type-training-period-2-months" : ".type-type-training-period-2-months",
        "languages-tools" : ".languages-tools-title",
        "pokertimer-title" : ".pokertimer-title",
        "basic-explorer-title" : ".basic-explorer-title",
        "erp-universe-title" : ".erp-universe-title",
        "erp-java-title" : ".erp-java-title",
        "erp-angular-title" : ".erp-angular-title",
        "extract-accounting-title" : ".extract-accounting-title",
        "sharepoint-title" : ".sharepoint-title",
        "curious-quality" : "#curious-quality",
        "team-spirit-quality" : "#team-spirit-quality",
        "adaptability-quality" : "#adaptability-quality",
        "autonomy-quality" : "#autonomy-quality",
        "ambitious-quality" : "#ambitious-quality",
        "composition-music" : "#composition-music",
        "natation" : "#natation",
        "travel" : "#travel",
        "films" : "#films",
        "bike" : "#bike",
        "skills" : "#skills h2",
        "programming-skills" : ".programming-skills h3",
        "bases" : "#bases",
        "acquired" : "#acquired",
        "master" : "#master",
        "general-skills" : "#general-skills h4",
        "qualities" : "#qualities h4",
        "hobbies" : "#hobbies h2"
    },
    "en" : {
        "intro-web" : "Web Developer",
        "intro-frontend" : "#intro-frontend",
        "punch-line" : "Creating allows me to go beyond what we can imagine",
        "about-me" : "About me",
        "projects" : "Projects",
        "contact" :  "Contact",
        "bt-confirm-mail" : "Get my e-mail",
        "experiences" : "Experiences",
        "title-activity" : "Activities",
        "type-work" : "Work",
        "type-studies" : "Studies",
        "type-type-training-period" : "Training period",
        "type-type-training-period-2-months" : "Training period (2 months)",
        "languages-tools" : "Languages & Tools",
        "pokertimer-title" : "PokerTimer",
        "basic-explorer-title" : "Function call visualizer",
        "erp-universe-title" : "ERP sur Rocket Universe / SB",
        "erp-java-title" : "ERP on Java/JSF",
        "erp-angular-title" : "ERP on Angular",
        "extract-accounting-title" : "Extraction data for accounting",
        "sharepoint-title" : "Sharepoint website",
        "curious-quality" : "Curious and enthusiastic",
        "team-spirit-quality" : "Team spirit",
        "adaptability-quality" : "Adaptability",
        "autonomy-quality" : "Autonomy",
        "ambitious-quality" : "Ambitious",
        "composition-music" : "Composition and Musical Mixing",
        "natation" : "Natation",
        "travel" : "Travel",
        "films" : "Films",
        "bike" : "Bike",
        "skills" : "Compétences",
        "programming-skills" : "Programming Skills",
        "bases" : "Bases",
        "acquired" : "Acquired",
        "master" : "Master",
        "general-skills" : "General Skills",
        "qualities" : "Qualities",
        "hobbies" : "#hobbies h2"
    },
    "fr" : {
        "intro-web" : "Développeur Web",
        "intro-frontend" : "Frontend",
        "punch-line" : "Créer me permet d'aller au-delà de ce que nous pouvons imaginer",
        "about-me" : "A propos de moi",
        "projects" : "Projets",
        "contact" : "Contact",
        "bt-confirm-mail" : "Récupérer mon e-mail",
        "experiences" : "Experiences",
        "title-activity" : "Activités",
        "type-work" : "Travail",
        "type-studies" : "Etudes",
        "type-type-training-period" : "Stage",
        "type-type-training-period-2-months" : "Stage (2 mois)",
        "languages-tools" : "Langages & Outils",
        "pokertimer-title" : "PokerTimer",
        "basic-explorer-title" : "Visualiseur d'appel de fonction",
        "erp-universe-title" : "ERP sur Rocket Universe / SB",
        "erp-java-title" : "ERP sur Java/JSF",
        "erp-angular-title" : "ERP sur Angular",
        "extract-accounting-title" : "Extraction des données comptable",
        "sharepoint-title" : "Site internet Sharepoint",
        "curious-quality" : "Curieux et Passionné",
        "team-spirit-quality" : "Esprit d'équipe",
        "adaptability-quality" : "Adaptabilité",
        "autonomy-quality" : "Autonomie",
        "ambitious-quality" : "Ambitieux",
        "composition-music" : "Composition et mixage de musiques",
        "natation" : "Natation",
        "travel" : "Voyages",
        "films" : "Films",
        "bike" : "VTT",
        "programming-skills" : "Compétences en Programmation",
        "bases" : "Bases",
        "acquired" : "Acquis",
        "master" : "Maitrisé",
        "general-skills" : "Compétences générales",
        "qualities" : "Qualités",
        "hobbies" : "Activités autres et Passions"
    },
}

function changeLang(lang) {
    const htmlSelected = document.querySelector('html')
    htmlSelected.attributes.lang.value = lang

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
