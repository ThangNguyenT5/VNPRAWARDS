function openMenu (e) {
    let hdMenu = document.querySelector('.hd-menu-list')
    hdMenu.classList.add('active')
    if (e.target.hdMenu) {
        console.log('a');        
    }
    hdMenu.classList.remove ('active')

}
  
openMenu()