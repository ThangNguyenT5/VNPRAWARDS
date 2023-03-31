var hdMenu = document.querySelector('.hd-menu-list')
var bgPage = document.querySelector('.bg-page')

function openMenu () {
    hdMenu.classList.add('active')
    bgPage.classList.add('active')

    document.body.style.overflow = 'hidden'
}

bgPage.onclick = function() {
    hdMenu.classList.remove('active')
    bgPage.classList.remove('active')
    document.body.style.overflow = 'auto'
}
  
openMenu()
