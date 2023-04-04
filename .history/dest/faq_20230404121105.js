// $( ".collapse-head" ).click(function() {
//     $( ".collapse-body" ).toggle( "slow" );
// });

// var acc = document.querySelectorAll('.collapse-head')

// acc.forEach((item) => {
//     const clBody = item.querySelectorAll('.collapse-body');
//     const clItems = item.querySelectorAll('.collapse-item')
//     console.log(clItems)
// })

var acc = document.querySelectorAll('.collapse-head')


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
        }
    })
 }
