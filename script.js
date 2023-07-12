let nowScroll = 0;
let homeY = 0;
let aboutY = 0;
let poinY = 0;
let skillY = 0;
let alumniY = 0;
let newsY = 0;

window.addEventListener(
    'resize', function () {
        const homePage = document.querySelector('.page.home');
        const aboutPage = document.querySelector('.page.about');
        const poinPage = document.querySelector('.page.poin');
        const skillPage = document.querySelector('.page.skill');
        const alumniPage = document.querySelector('.page.alumni');
        const newsPage = document.querySelector('.page.news');

        if (homePage != undefined && aboutPage != undefined && poinPage != undefined && skillPage != undefined && alumniPage != undefined && newsPage != undefined) {
            homeY = homePage.offsetTop;
            aboutY = aboutPage.offsetTop - 125;
            poinY = poinPage.offsetTop - 50;
            skillY = skillPage.offsetTop - 50;
            alumniY = alumniPage.offsetTop - 25;
            newsY = newsPage.offsetTop - 75;

            document.querySelector('.nav-label').setAttribute('onclick', `goToPage(${homeY})`);
            navbarLink[0].setAttribute('onclick', `goToPage(${aboutY})`);
            navbarLink[1].setAttribute('onclick', `goToPage(${poinY + 5})`);
            navbarLink[2].setAttribute('onclick', `goToPage(${skillY})`);
            navbarLink[3].setAttribute('onclick', `goToPage(${alumniY})`);
            navbarLink[4].setAttribute('onclick', `goToPage(${newsY})`);
            footerLink[0].setAttribute('onclick', `goToPage(${aboutY})`);
            footerLink[1].setAttribute('onclick', `goToPage(${poinY + 5})`);
            footerLink[2].setAttribute('onclick', `goToPage(${skillY})`);
            footerLink[3].setAttribute('onclick', `goToPage(${alumniY})`);
            footerLink[4].setAttribute('onclick', `goToPage(${newsY})`);
            document.querySelector('.news-desc .hover-element').setAttribute('onclick', `goToPage(${newsY})`);
        };
    }
);

const scrollTopBtn = document.querySelector('.scroll-top');
if (scrollTopBtn != undefined) {
    scrollTopBtn.addEventListener(
        'click', function () {
            window.scrollTo(0, 0, 0);
        }
    );
};

const body = document.querySelector('body');
const navbarLink = document.querySelectorAll('.nav-link .anchor-btn');
const footerLink = document.querySelectorAll('.footer-nav span');
const homePage = document.querySelector('.page.home');
const aboutPage = document.querySelector('.page.about');
const poinPage = document.querySelector('.page.poin');
const skillPage = document.querySelector('.page.skill');
const alumniPage = document.querySelector('.page.alumni');
const newsPage = document.querySelector('.page.news');
if (homePage != undefined && aboutPage != undefined && poinPage != undefined && skillPage != undefined && alumniPage != undefined && newsPage != undefined) {
    homeY = homePage.offsetTop;
    aboutY = aboutPage.offsetTop - 125;
    poinY = poinPage.offsetTop - 50;
    skillY = skillPage.offsetTop - 50;
    alumniY = alumniPage.offsetTop - 25;
    newsY = newsPage.offsetTop - 75;

    window.addEventListener(
        'scroll', function () {
            nowScroll = Math.floor(window.scrollY);
            navbarLink.forEach(link => {
                link.classList.remove('visited');
            });
            if (nowScroll >= aboutY - 250 && nowScroll < poinY - 350) {
                navbarLink[0].classList.add('visited');
                scrollTopBtn.style.display = 'none';
            } else if (nowScroll >= poinY - 350 && nowScroll < skillY - 350) {
                navbarLink[1].classList.add('visited');
                scrollTopBtn.style.display = 'block';
            } else if (nowScroll >= skillY - 350 && nowScroll < alumniY - 350) {
                navbarLink[2].classList.add('visited');
            } else if (nowScroll >= alumniY - 350 && nowScroll < newsY - 350) {
                navbarLink[3].classList.add('visited');
            } else if (nowScroll >= newsY - 350 && nowScroll < newsY + 300) {
                navbarLink[4].classList.add('visited');
            };
        }
    );

    document.querySelector('.nav-label').setAttribute('onclick', `goToPage(${homeY})`);
    navbarLink[0].setAttribute('onclick', `goToPage(${aboutY})`);
    navbarLink[1].setAttribute('onclick', `goToPage(${poinY + 5})`);
    navbarLink[2].setAttribute('onclick', `goToPage(${skillY})`);
    navbarLink[3].setAttribute('onclick', `goToPage(${alumniY})`);
    navbarLink[4].setAttribute('onclick', `goToPage(${newsY})`);
    footerLink[0].setAttribute('onclick', `goToPage(${aboutY})`);
    footerLink[1].setAttribute('onclick', `goToPage(${poinY + 5})`);
    footerLink[2].setAttribute('onclick', `goToPage(${skillY})`);
    footerLink[3].setAttribute('onclick', `goToPage(${alumniY})`);
    footerLink[4].setAttribute('onclick', `goToPage(${newsY})`);
    document.querySelector('.news-desc .hover-element').setAttribute('onclick', `goToPage(${newsY})`);

    navbarLink.forEach(link => {
        link.addEventListener(
            'click', function () {
                closeModal(link);
            }
        );
    });

    function goToPage(scroll) {
        window.scrollTo(0, scroll);
    }
};

const cursor = document.querySelector('.cursor');
if (cursor != undefined) {
    window.addEventListener(
        'mousemove', e => {
            let posX = e.pageX - 24;
            let posY = e.pageY - 13;

            cursor.style.display = 'block';
            cursor.style.top = `${posY}px`;
            cursor.style.left = `${posX}px`;
        }
    );

    document.addEventListener(
        'mouseleave', e => {
            if (e.clientY <= 0 || e.clientX <= 0 || (e.clientX >= window.innerWidth || e.clientY >= window.innerHeight)) {
                cursor.style.display = 'none';
            }
        }
    );
};

const hoverElement = document.querySelectorAll('.hover-element');
if (hoverElement[0] != undefined && cursor != undefined) {
    hoverElement.forEach(el => {
        el.addEventListener(
            'mousemove', function () {
                cursor.style.transform = 'rotate(22deg) scale(.8)';
            }
        );

        el.addEventListener(
            'mouseleave', function () {
                cursor.style.transform = 'none';
            }
        );
    });
};

const stackImages = document.querySelectorAll('.hero-stack-container .image-wrapper');
if (stackImages[1] != undefined) {
    stackImages[1].addEventListener(
        'mouseover', function () {
            stackImages[0].parentElement.classList.add('hovered');
            stackImages[0].classList.add('open');
            stackImages[1].classList.remove('open');
        }
    )

    stackImages[1].addEventListener(
        'mouseleave', function () {
            stackImages[0].parentElement.classList.remove('hovered');
            stackImages[0].classList.remove('open');
            stackImages[1].classList.add('open');
        }
    )
};

const poinGrid = document.querySelectorAll('.poin-grid');
if (poinGrid[0] != undefined) {
    poinGrid.forEach(grid => {
        function changePosition() {
            if (grid.classList.contains('display-poin')) {
                grid.classList.replace('display-poin', 'third-box');
            } else if (grid.classList.contains('second-box')) {
                grid.classList.replace('second-box', 'display-poin');
            } else if (grid.classList.contains('third-box')) {
                grid.classList.replace('third-box', 'second-box');
            };
        };
        setInterval(changePosition, 3900);
    });
};

function showModal(html_class) {
    const modal = document.querySelector(`.${html_class}`);

    if (modal.classList.contains('modal')) {
        modal.style.display = 'flex';

        function appear() {
            modal.classList.add('show');
        }
        setTimeout(appear, 100);
    } else {
        modal.classList.add('show');
    };
}

function closeModal(btn) {
    btn.parentElement.parentElement.parentElement.classList.remove('show');

    if (btn.parentElement.parentElement.parentElement.classList.contains('modal')) {
        function dissapear() {
            btn.parentElement.parentElement.parentElement.style.display = 'none';
        }
        setTimeout(dissapear, 500);
    };
}

function uiSettings(toggle, act) {
    if (act == 1) {
        if (!body.classList.contains(toggle)) {
            body.classList.add(toggle);
        };
    } else if (act == 0) {
        if (body.classList.contains(toggle)) {
            body.classList.remove(toggle);
        };
    } else if (act == 2) {
        if (body.classList.contains('default-theme')) {
            body.classList.replace('default-theme', toggle);
        } else if (body.classList.contains('green-theme')) {
            body.classList.replace('green-theme', toggle);
        } else if (body.classList.contains('purple-theme')) {
            body.classList.replace('purple-theme', toggle);
        };
    }
};

const alumnis = document.querySelectorAll('.carousel-card');
if (alumnis[0] != undefined) {
    alumnis.forEach(alumni => {
        function changePosition() {
            if (alumni.classList.contains('skewed')) {
                alumni.classList.replace('skewed', 'fourth-card');
            } else if (alumni.classList.contains('first-card')) {
                alumni.classList.replace('first-card', 'skewed');
            } else if (alumni.classList.contains('second-card')) {
                alumni.classList.replace('second-card', 'first-card');
            } else if (alumni.classList.contains('third-card')) {
                alumni.classList.replace('third-card', 'second-card');
            } else if (alumni.classList.contains('fourth-card')) {
                alumni.classList.replace('fourth-card', 'third-card');
            };
        };

        setInterval(changePosition, 3000);
    });
}

function directPage(url) {
    document.querySelector('.loading-layer').classList.replace('hide', 'show');

    function toUrl() {
        window.location = `${url}.html`;
    }
    setTimeout(toUrl, 1000);
}

function nextWizard(btn) {
    if (btn.parentElement.parentElement.parentElement.nextElementSibling.classList.contains('wizard-section')) {
        btn.parentElement.parentElement.parentElement.nextElementSibling.classList.add('on-read');
    } else {
        btn.parentElement.parentElement.parentElement.parentElement.firstElementChild.classList.add('on-read');
    }

    btn.parentElement.parentElement.parentElement.classList.remove('on-read');
}

function previousWizard(btn) {
    btn.parentElement.parentElement.parentElement.previousElementSibling.classList.add('on-read');
    btn.parentElement.parentElement.parentElement.classList.remove('on-read');
}