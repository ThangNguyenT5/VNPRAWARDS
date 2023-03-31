var hdBtn = document.querySelector ('.header.btn')
var subNavBtn = document.querySelector ('.hd-menu-item.ancestor')

var hdMenu = document.querySelector('.hd-menu-list')
var subNav = document.querySelector('.sub-nav')
var subItem = document.querySelector('.sub-item')
var subAitem = document.querySelector('.sub-item a')
console.log(subItem)
console.log(subAitem)
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
    if (e.target !== subAitem) {
        console.log(e.target,'a');
        subNav.classList.remove('active')

    } else {
        console.log(e.target,'b')
    }
})

