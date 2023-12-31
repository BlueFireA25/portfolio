/*=============== CHANGE THEME ===============*/
document.getElementById('theme-toggle').addEventListener('click', function () {
    var icon = document.querySelector('.theme__toggle i');
    var rootStyle = document.documentElement.style;

    if (icon.classList.contains('uil-sun')) {
        icon.classList.remove('uil-sun');
        icon.classList.add('uil-moon');
        rootStyle.setProperty('--body-color-dark', '#f5f7f8');
        rootStyle.setProperty('--light-color', '#3d3c42');
        rootStyle.setProperty('--table-border-color', '#1f1d1d18');

    }
    else if (icon.classList.contains('uil-moon')) {
        icon.classList.remove('uil-moon');
        icon.classList.add('uil-sun');
        rootStyle.setProperty('--body-color-dark', '#0f172a');
        rootStyle.setProperty('--light-color', '#fff6f6');
        rootStyle.setProperty('--table-border-color', '#fff6f618');
    }
});

// VARIABLES //
const data = [
    [createType('Login'), createLinkTitle('Login Form', 'https://bluefirea25.github.io/login-form/'), createBuildWith(['HTML', 'CSS'])],
    [createType('Card'), createLinkTitle('Rotating Card', 'https://bluefirea25.github.io/rotating-cards/'), createBuildWith(['HTML', 'CSS'])],
    [createType('Card · Pagination'), createLinkTitle('Card Pagination', 'https://bluefirea25.github.io/card-pagination/'), createBuildWith(['HTML', 'CSS', 'JavaScript'])],
];

/**
 * Create or update the Grid.js table based on window width.
 * If the table instance exists, it is destroyed and recreated with updated settings.
 * If the table instance does not exist, it is created and rendered.
 */
function createGrid() {
    new gridjs.Grid({
        columns: [
            {
                name: 'Type',
            },
            {
                name: 'Project',
            },
            {
                name: 'Built with',
            },
        ],
        pagination: {
            limit: 5
        },
        search: true,
        data: data,
        language: {
            'search': {
                'placeholder': '🔍 Search...'
            },
        },
        className: {
            table: 'table',
            container: 'table__container',
            tbody: 'table__tbody',
            td: 'table__tbody--td',
            th: 'table__tbody--th',
            footer: 'table__footer',
            pagination: 'table__pagination',
            paginationButton: 'table__pagination--button',
            paginationButtonCurrent: 'table__pagination--button--current'
        },
    }).render(document.getElementById("wrapper"));
}

/**
 * Create and return a DOM element representing a type label.
 * @param {string} text - The text content of the type label.
 * @returns {HTMLElement} - A DOM element representing the type label.
 */
function createType(text) {
    const link = document.createElement("span");

    link.textContent = text;
    link.className = 'table__tbody--type'

    return link;
}

/**
 * Create and return a hyperlink element representing a project title with an external link icon.
 * @param {string} text - The text content of the project title.
 * @param {string} href - The URL to which the hyperlink points.
 * @returns {HTMLAnchorElement} - A hyperlink element with the project title and an external link icon.
 */
function createLinkTitle(text, href) {
    const link = document.createElement("a");
    const icon = document.createElement("i");

    link.href = href;
    link.target = "_blank";
    link.textContent = text;
    link.className = 'table__tbody--project'
    icon.className = "uil uil-external-link-alt";
    link.appendChild(icon);

    return link;
}

/**
 * Create and return a container element representing the list of skills used to build a project.
 * @param {string[]} skills - An array of skill names used for the project.
 * @returns {HTMLDivElement} - A container element with badges for each skill.
 */
function createBuildWith(skills) {
    const container = document.createElement("div");
    container.className = 'table__tbody--skills'

    skills.forEach(skill => {
        const badge = document.createElement("span");
        badge.textContent = skill;
        badge.className = 'table__tbody--badge'

        container.appendChild(badge);
    });

    return container;
}

createGrid(); // Create Table

window.addEventListener('resize', createGrid);

