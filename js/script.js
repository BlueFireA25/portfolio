function createLinkTitle(text, href) {
    if (window.innerWidth < 768) {
        const link = document.createElement("a");
        const icon = document.createElement("i");

        link.href = href;
        link.target = "_blank";
        link.textContent = text;
        link.className = 'table__tbody--project'
        icon.className = "uil uil-external-link-alt";
        link.appendChild(icon);

        return link;
    } else {
        const link = document.createElement("span");

        link.textContent = text;
        link.className = 'table__tbody--project'

        return link;
    }
}

function createLink(text, href) {
    const link = document.createElement("a");
    const icon = document.createElement("i");

    link.href = href;
    link.target = "_blank";
    link.textContent = text;
    link.className = 'table__tbody--link'
    icon.className = "uil uil-external-link-alt";
    link.appendChild(icon);

    return link;

}

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

const data = [
    [createLinkTitle('Halloween Store', 'https://halloweenstore.netlify.app/'), createBuildWith(['HTML', 'CSS', 'JavaScript', 'vue', 'quasar', 'laravel', 'java']), createLink('halloweenstore.netlify.app', 'https://halloweenstore.netlify.app/')],
    [createLinkTitle('Christmas Store', 'https://christmastore.netlify.app/'), createBuildWith(['HTML', 'CSS', 'JavaScript']), createLink('christmastore.netlify.app', 'https://christmastore.netlify.app/')],
];

let grid = null;

// Función para crear y renderizar la tabla
function createAndRenderTable() {
    if (!grid) {
        grid = new gridjs.Grid({
            columns: [
                {
                    name: 'Project',
                },
                {
                    name: 'Built with',
                    hidden: window.innerWidth <= 425,
                },
                {
                    name: 'Link',
                    hidden: window.innerWidth < 768,
                },
            ],
            data: data,
            className: {
                table: 'table',
                container: 'table__container',
                tbody: 'table__tbody',
                td: 'table__tbody--td',
                th: 'table__tbody--th',
            },
        }).render(document.getElementById("wrapper"));
    } else {
        // Actualizar la visibilidad de las columnas según el tamaño de la ventana
        grid.updateConfig({
            columns: [
                {
                    name: 'Project',
                },
                {
                    name: 'Built with',
                    hidden: window.innerWidth <= 425,
                },
                {
                    name: 'Link',
                    hidden: window.innerWidth < 768,
                },
            ],
            data: data,
        }).forceRender();
    }
}

// Llama a la función para crear y renderizar la tabla cuando se carga la página
createAndRenderTable();

// Evento de cambio de tamaño de ventana
window.addEventListener('resize', () => {
    // Revisa las condiciones y actualiza la visibilidad de las columnas
    createAndRenderTable();
});
