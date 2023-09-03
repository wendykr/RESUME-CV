const togglerElm = document.getElementById('toggler');
const menuElm = document.getElementById('menu');
const svgIcon = document.querySelector('#toggler svg use');

menuElm.classList.add('hidden');

togglerElm.addEventListener('click', () => {
    menuElm.classList.toggle('hidden');

    if (svgIcon.getAttribute('xlink:href') === '#icon-xmark') {
        svgIcon.setAttribute('xlink:href', '#icon-hamburger');
    } else {
        svgIcon.setAttribute('xlink:href', '#icon-xmark');
    }
});

// scroll
const scrollToSection = (event) => {
    event.preventDefault();
    const clickedLink = event.target;
    const targetSectionId = clickedLink.getAttribute('href');
    const targetSection = document.querySelector(targetSectionId);

    if (targetSection) {
        const scrollGoal = targetSection.offsetTop;

        window.scrollTo({
            top: scrollGoal,
            behavior: 'smooth'
        });
    }
};

const menuItems = document.querySelectorAll('#menu li a');
menuItems.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});

const linkItems = document.querySelectorAll('.link');
linkItems.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});

// show lazy
const projectElm = document.querySelectorAll('.project');

const showSections = () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    projectElm.forEach((box, i) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            setTimeout(() => {
                box.style.opacity = '1';
                box.style.transform = 'none';
            }, i * 500);
        }
    })
}

window.addEventListener('scroll', showSections);

// go top
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('#go-top').style.display = "block";
    } else {
        document.querySelector('#go-top').style.display = "none";
    }
});

document.querySelector('#go-top').addEventListener('click', () => {
    document.body.scroll({
        top: 0,
        behavior: "smooth"
    });
    document.documentElement.scroll({
        top: 0,
        behavior: "smooth"
    });
});