const languages = ['en', 'es'];
var actualLanguage = 0;

const diccionario = {
    es: {
        menu_item_1: "Inicio",
        menu_item_2: "Experiencia",
        menu_item_3: "Proyectos",
        menu_item_4: "Habilidades",
        menu_item_5: "Contacto",
        profession_1: "Desarrollador Frontend",
        profession_2: "Ingeniero de Sistemas",
        home_description_text_1: "Desarrollador Frontend e Ingeniero de Sistemas, con conocimientos en",
        home_description_hight_1: "programación/diseño web",
        home_description_text_2: "Soy una persona responsable, con facilidad para trabajar individualmente y en equipo, siempre enfocado en",
        home_description_hight_2: "desarrollar software de calidad",
        home_button_1: "Contacto",
        home_button_2: "Descargar CV",
        experience: "Experiencia",
        tab1: "Trabajo",
        tab2: "Educación",
        work_date_1: "MAY 2022 - HOY",
        work_title_1: "Desarrollador Frontend · Snabb",
        work_item_1: "Creación de nuevos proyectos con Vue y Quasar.",
        work_item_2: "Consumo de API REST.",
        work_item_3: "Creación de Stores en Pinia.",
        work_item_4: "Creación de componentes en Vue.",
        work_item_5: "Documentación FHIR.",
        work_title_2: "Desarrollador Full Stack · Binapps",
        work_item_6: "Participación y creación de nuevas aplicaciones web.",
        work_item_7: "Corrección de errores y soporte en las diferentes aplicaciones web de la empresa.",
        work_item_8: "Desarrollo de interfaces de usuario.",
        work_item_9: "Implementación de nuevas funciones y funcionalidades en su principal software ERP y en los diferentes desarrollos de la empresa.",
        work_item_10: "Corrección de errores y soporte en su software ERP principal.",
        education_date_1: "AGO 2015 - MAR 2021",
        education_date_2: "TODO EL TIEMPO",
        education_title_1: "Ingeniero de Sistemas · UAM",
        education_title_2: "Otros Estudios",
        education_subtitle: "Puedes ver todos mis certificados en mi LinkedIn",
        projects: "Proyectos",
        full_projects: "Ver todos los Proyectos",
        full_projects_title: "Todos los Proyectos",
        skills: "Habilidades",
        contact: "Contacto",
        copy: 'Hecho con 💪🏻 por Sebastián Ibagué Castro. © Todos los derechos reservados.'
    },
    en: {
        menu_item_1: "Home",
        menu_item_2: "Experience",
        menu_item_3: "Projects",
        menu_item_4: "Skills",
        menu_item_5: "Contact",
        profession_1: "Frontend Developer",
        profession_2: "Systems Engineer",
        home_description_text_1: "Frontend Developer and Systems Engineer, with knowledge in",
        home_description_hight_1: "web programming/design",
        home_description_text_2: " I am a responsible person, with ease of working individually and as a team, always focused on",
        home_description_hight_2: "developing quality software",
        home_button_1: "Contact",
        home_button_2: "Download CV",
        experience: "Experience",
        tab1: "Work",
        tab2: "Education",
        work_date_1: "MAY 2022 - TODAY",
        work_title_1: "Frontend Developer · Snabb",
        work_item_1: "Creation of new projects with Vue and Quasar.",
        work_item_2: "REST API consumption.REST API consumption.",
        work_item_3: "Creation of Stores in Pinia.",
        work_item_4: "Creating components in Vue.",
        work_item_5: "FHIR documentation.",
        work_title_2: "Full Stack Developer · Binapps",
        work_item_6: "Participation and creation of new web applications.",
        work_item_7: "Correction of errors and support in the different web applications of the company.",
        work_item_8: "Development of user interfaces.",
        work_item_9: "Implementation of new functions and features in its main ERP software and in the different developments of the company.",
        work_item_10: "Bug fixes and support in your core ERP software.",
        education_date_1: "AUG 2015 - MAR 2021",
        education_date_2: "ALL THE TIME",
        education_title_1: "Systems Engineer · UAM",
        education_title_2: "Other Studies",
        education_subtitle: "You can see all my certificates on my LinkedIn",
        projects: "Projects",
        full_projects: "View Full Projects",
        full_projects_title: "All Projects",
        skills: "Skills",
        contact: "Contact",
        copy: 'Made with 💪🏻 by Sebastián Ibagué Castro. © All right reserver.'
    }
};

function toggleLanguage() {
    actualLanguage = (actualLanguage + 1) % languages.length;
    changeLanguage(languages[actualLanguage]);
}

function changeLanguage(language) {
    const elementos = document.querySelectorAll('[data-i18n]');

    elementos.forEach(function (elemento) {
        const clave = elemento.getAttribute('data-i18n');
        elemento.innerText = diccionario[language][clave];
    });

    document.documentElement.lang = language;
}

changeLanguage(languages[actualLanguage]);
