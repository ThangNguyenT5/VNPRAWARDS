
var acc = document.querySelectorAll('.collapse-head')
var b = document.querySelectorAll('.collapse-body')
b.slideToggle('slow')

console.log(acc);
var i

for (i= 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        console.log(this);
        this.classList.toggle('active')
        // collapse-body
        var panel = this.nextElementSibling
        if (panel.style.display === 'block') {
            panel.style.display = 'none'
        } else {
            panel.style.display = 'block'
            panel.slideToggle('slow')


        }
    })
 }
