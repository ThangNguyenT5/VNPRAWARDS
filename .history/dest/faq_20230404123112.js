
const clBlock = document.querySelectorAll(".faq-accordion-ctn");

    if (clBlock) {
        clBlock.forEach((item) => {

            // Active 0
            const clBody = item.querySelectorAll('.collapse-body');
            const clItems = item.querySelectorAll('.collapse-item')
            console.log(clItems)
            if (clBody) {
                $(clBody[0]).slideDown();
                clBody[0].parentElement.classList.add("active");
            }


            const head = item.querySelectorAll('.collapse-head');
            head.forEach(item => {
                item.addEventListener('click', () => {
                    clBody.forEach(item => {
                        console.log(item);
                        $(item).slideUp();
                    })
                    clItems.forEach(item => {
                        $(item).removeClass("active");
                    })
                    const body = item.parentElement.querySelector(".collapse-body")
                    if (body.style.display == "none" || body.style.display == "") {
                        $(body).slideDown();
                        $(item.parentElement).addClass("active");
                    } else {
                        $(body).slideUp();
                        $(item.parentElement).removeClass("active");
                    }
                })
            })
        });
    }





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
