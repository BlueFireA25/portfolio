function createLink(text, href) {
    const link = document.createElement("a");
    link.href = href;
    link.textContent = text;
    return link;
}

const data = [
    ["Halloween Store", "HTML, CSS, JavaScript", createLink('hola', 'index.html')],
    ["Halloween Store 2", "HTML, CSS, JavaScript", createLink('chao', 'otro.html')],
];

new gridjs.Grid({
    columns: [
        {
            name: 'Project',
        },
        {
            name: 'Built with',
        },
        {
            name: 'Link',

        },
    ],
    data: data,
}).render(document.getElementById("wrapper"));