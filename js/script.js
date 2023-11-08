function createLink(text, href) {
    const link = document.createElement("a");
    const icon = document.createElement("i");

    link.href = href;
    link.textContent = text;
    icon.className = "uil uil-external-link-alt icon";
    link.appendChild(icon);

    return link;

}

function createLinkTitle(text, href) {
    if (window.innerWidth < 768) {
        const link = document.createElement("a");
        const icon = document.createElement("i");

        link.href = href;
        link.textContent = text;
        link.className = 'table__tbody--project'
        icon.className = "uil uil-external-link-alt icon";
        link.appendChild(icon);

        return link;
    } else {
        const link = document.createElement("span");

        link.textContent = text;
        link.className = 'table__tbody--project'

        return link;
    }
}

const data = [
    [createLinkTitle('Halloween Store', 'otro.html'), "HTML, CSS, JavaScript", createLink('hola', 'index.html')],
    [createLinkTitle('Christmas Store', 'otro.html'), "HTML, CSS, JavaScript", createLink('chao', 'otro.html')],
];

new gridjs.Grid({
    columns: [
        {
            name: 'Project',
        },
        {
            name: 'Built with',
            hidden: window.innerWidth < 425

        },
        {
            name: 'Link',
            hidden: window.innerWidth < 768
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