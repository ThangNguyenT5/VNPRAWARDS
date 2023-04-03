// AOS.init({
//     once: true,

// })

var hdBtn = document.querySelector ('.header.btn')
var hdMenu = document.querySelector('.hd-menu-list')
var bgPage = document.querySelector('.bg-page')
hdBtn.onclick = function() {
    hdMenu.classList.add('active')
    bgPage.classList.add('active')

    document.body.style.overflow = 'hidden'
}
bgPage.onclick = function () {
    hdMenu.classList.remove('active')
    bgPage.classList.remove('active')

    document.body.style.overflow = 'auto'
}


var subNavBtn = document.querySelectorAll ('.hd-menu-item.ancestor')
var i

for (i=0; i< subNavBtn.length; i++) {
    subNavBtn[i].addEventListener('click', function (e) {
        this.classList.toggle('active')
    })
}

var thirtNavBtn = document.querySelectorAll ('mobile-item-menu.ancestor')
var j

for (i=0; i< thirtNavBtn.length; i++) {
    thirtNavBtn[i].addEventListener('click', function (e) {
        this.classList.toggle('active')
    })
}