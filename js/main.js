/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== CHANGE THEME ===============*/
document.getElementById('theme-toggle').addEventListener('click', function () {
    var icon = document.querySelector('.theme__toggle i');
    var rootStyle = document.documentElement.style;

    if (icon.classList.contains('uil-sun')) {
        icon.classList.remove('uil-sun');
        icon.classList.add('uil-moon');
        rootStyle.setProperty('--body-color-dark', '#f5f7f8');
        rootStyle.setProperty('--light-color', '#3d3c42');
        rootStyle.setProperty('--gray-color', '#3d3c42');
    }
    else if (icon.classList.contains('uil-moon')) {
        icon.classList.remove('uil-moon');
        icon.classList.add('uil-sun');
        rootStyle.setProperty('--body-color-dark', '#0f172a');
        rootStyle.setProperty('--light-color', '#fff6f6');
        rootStyle.setProperty('--gray-color', '#94a3b8');
    }
});


/*=============== EXPERIENCE TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'), tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('experience__active')
        })
        target.classList.add('experience__active')

        tabs.forEach(tab => {
            tab.classList.remove('experience__active')
        })
        tab.classList.add('experience__active')
    })
})

