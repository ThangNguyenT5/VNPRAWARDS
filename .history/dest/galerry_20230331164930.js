var hdBtn = document.querySelector ('.header.btn')
var subNavBtn = document.querySelector ('.hd-menu-item.ancestor a')
console.log(subNavBtn);

var hdMenu = document.querySelector('.hd-menu-list')
var subNav = document.querySelector('.sub-nav')
var bgPage = document.querySelector('.bg-page')

hdBtn.onclick = function() {
    hdMenu.classList.add('active')
    bgPage.classList.add('active')

    document.body.style.overflow = 'hidden'
}

subNavBtn.onclick = function() {
    subNav.classList.add('active')
}


bgPage.onclick = function () {
    hdMenu.classList.remove('active')
    bgPage.classList.remove('active')
    subNav.classList.remove('active')

    document.body.style.overflow = 'auto'
}

window.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target === subNav) {
        console.log(e.target);
        subNav.classList.add('active')

    } else {
        subNav.classList.remove('active')
    }
})

