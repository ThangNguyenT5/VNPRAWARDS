var hdBtn = document.querySelector ('.header.btn')
var subNavBtn = document.querySelector ('.hd-menu-item.ancestor')

var hdMenu = document.querySelector('.hd-menu-list')
var bgPage = document.querySelector('.bg-page')

hdBtn.onclick = function() {
    hdMenu.classList.add('active')
    bgPage.classList.add('active')

    document.body.style.overflow = 'hidden'
}

subNavBtn.onclick = function() {
    console.log('abc');
}

bgPage.onclick = function () {
    hdMenu.classList.remove('active')
    bgPage.classList.remove('active')
    document.body.style.overflow = 'auto'
}

