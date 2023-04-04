


// $( ".collapse-head" ).click(function() {
//     $( ".collapse-body" ).toggle( "slow" );
// });

var acc = document.querySelectorAll('.collapse-head')

acc.forEach((item) => {
    const accBody = item.querySelectorAll('.collapse-body');
    const accItem = item.querySelectorAll('.collapse-item')
    console.log(accItem)
})





// var acc = document.querySelectorAll('.collapse-head')


// console.log(acc);
// var i

// for (i= 0; i < acc.length; i++) {
//     acc[i].addEventListener('click', function () {
//         console.log(this);
//         this.classList.toggle('active')
//         // collapse-body
//         var panel = this.nextElementSibling
//         if (panel.style.display === 'block') {
//             panel.style.display = 'none'
//         } else {
//             panel.style.display = 'block'
//         }
//     })
//  }
