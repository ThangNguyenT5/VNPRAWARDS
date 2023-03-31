let hdMenu = document.querySelector('.hd-menu-list')
let bgPage = document.querySelector('.bg-page')

function openMenu (e) {
    hdMenu.classList.add('active')

}

hdMenu.onclick = function() {
    hdMenu.classList.remove('active')
}
  
openMenu()