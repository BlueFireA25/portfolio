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
        home_description_text_1: "+2 años de experiencia en el Desarrollador Frontend. Comprometido con la creación de ",
        home_description_hight_1: "software de alta calidad, ",
        home_description_text_2: "destacado por mi responsabilidad y habilidad para ",
        home_description_hight_2: "trabajar tanto de forma colaborativa como independiente",
        home_button_1: "Contacto",
        home_button_2: "Descargar CV",
        experience: "Experiencia",
        tab1: "Trabajo",
        tab2: "Educación",
        work_date_1: "MAY 2022 - HOY",
        work_title_1: "Desarrollador Frontend · Snabb",
        work_item_1: "Contribuí a la ejecución de proyectos innovadores con Vue y Quasar, destacando en la creación y gestión de soluciones de software eficientes.",
        work_item_2: "Implementé estrategias avanzadas de consumo de API REST, mejorando el rendimiento y la escalabilidad de las aplicaciones.",
        work_item_3: "Diseñé y apliqué efectivos stores en Pinia, mejorando la gestión del estado de la aplicación y asegurando un flujo de datos eficiente.",
        work_item_4: "Diseñé componentes modulares y reutilizables en Vue, optimizando la consistencia y usabilidad de la interfaz de usuario.",
        work_item_5: "Colaboré activamente en la documentación FHIR, facilitando la comprensión y adopción de estándares, mejorando la colaboración y el conocimiento del equipo.",
        work_item_6: "Cree diseños visuales en Figma para proyectos variados, proporcionando soluciones creativas y asegurando una conexión efectiva entre el diseño y la implementación técnica.",
        work_title_2: "Desarrollador Full Stack · Binapps",
        work_item_7: "Desempeñe un rol activo en el desarrollo e implementación de aplicaciones web innovadoras, aportando ideas creativas y habilidades técnicas para el éxito del equipo.",
        work_item_8: "Asumí un papel crucial al ofrecer soporte técnico especializado y resolver eficazmente problemas en varias aplicaciones web, garantizando estabilidad y una experiencia de usuario óptima.",
        work_item_9: "Cree interfaces de usuario intuitivas y estéticas, mejorando significativamente la experiencia del usuario y la usabilidad de las aplicaciones.",
        work_item_10: "Tuve un papel esencial en el mantenimiento y mejora continua del software ERP principal y otros desarrollos, contribuyendo al crecimiento funcional y eficiencia operativa de la empresa.",
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
        home_description_text_1: "+2 years of experience as a Frontend Developer. Committed to creating ",
        home_description_hight_1: "high-quality software",
        home_description_text_2: ", highlighted by my responsibility and ability to ",
        home_description_hight_2: "work both collaboratively and independently",
        home_button_1: "Contact",
        home_button_2: "Download CV",
        experience: "Experience",
        tab1: "Work",
        tab2: "Education",
        work_date_1: "MAY 2022 - TODAY",
        work_title_1: "Frontend Developer · Snabb",
        work_item_1: "I contributed to the execution of innovative projects with Vue and Quasar, excelling in the creation and management of efficient software solutions.",
        work_item_2: "Implemented advanced REST API consumption strategies, improving application performance and scalability.",
        work_item_3: "Designed and implemented effective stores in Pinia, improving application state management and ensuring efficient data flow.",
        work_item_4: "Designed modular and reusable components in Vue, optimizing the consistency and usability of the user interface.",
        work_item_5: "I actively collaborated on FHIR documentation, facilitating the understanding and adoption of standards and improving collaboration and team knowledge.",
        work_item_6: "Create visual designs in Figma for varied projects, providing creative solutions and ensuring an effective connection between design and technical implementation.",
        work_title_2: "Full Stack Developer · Binapps",
        work_item_7: "Play an active role in the development and implementation of innovative web applications, contributing creative ideas and technical skills for the team's success.",
        work_item_8: "I took on a crucial role in providing specialized technical support and effectively resolving issues across various web applications, ensuring stability and an optimal user experience.",
        work_item_9: "Create intuitive and aesthetic user interfaces, significantly improving the user experience and application usability.",
        work_item_10: "I played an essential role in the maintenance and continuous improvement of the core ERP software and other developments, contributing to the functional growth and operational efficiency of the company.",
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

    // Curriculum Language
    const linkElement = document.querySelector('.curriculum');
    if (linkElement) {
        if (language === 'en') {
            linkElement.href = 'curriculums/Sebastian Ibague Castro CV (EN).pdf';
        } else if (language === 'es') {
            linkElement.href = 'curriculums/Sebastian Ibague Castro CV (ES).pdf';
        }
    }
}

changeLanguage(languages[actualLanguage]);
