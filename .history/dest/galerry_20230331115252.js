var hdMenu = document.querySelector('.hd-menu-list')
var bgPage = document.querySelector('.bg-page')

function openMenu () {
    let hdMenu = document.querySelector('.hd-menu')
    hdMenu.classList.add('active')

    let bgPage = document.querySelector('.bg-page')
    bgPage.classList.add('active')

    document.body.style.overflow = 'hidden'
}

bgPage.onclick = function() {
    let hdMenu = document.querySelector('.hd-menu')
    hdMenu.classList.remove('active')
    let bgPage = document.querySelector('.bg-page')
    bgPage.classList.remove('active')
    let searchForm = document.querySelector('.hd-search-form')
    searchForm.classList.remove('active')
    document.body.style.overflow = 'auto'
}
  
openMenu()
