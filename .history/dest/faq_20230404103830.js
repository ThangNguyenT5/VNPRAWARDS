var acc = document.querySelectorAll('.collapse-head')
console.log(acc);
var i

for (i= 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        console.log(this);
        this.classList.toggle('active')
        // collapse-body
        var panel = this.nextElementSibling
        if (panel.style.visibility === 'visible') {
            panel.style.visibility = 'hidden'
            panel.style.opacity = '0'
        } else {
            panel.style.visibility = 'visible'
            panel.style.opacity = '1'
        }
    })
 }
