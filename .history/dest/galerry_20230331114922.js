let hdMenu = document.querySelector('.hd-menu-list')
let bgPage = document.querySelector('.bg-page')

function openMenu () {
    hdMenu.classList.add('active')
    bgPage.classList.add('active')
}

bgPage.onclick = function() {
    bgPage.classList.remove('active')
    hdMenu.classList.remove('active')
}
  
openMenu()