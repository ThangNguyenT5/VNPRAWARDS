
const clBlock = document.querySelectorAll(".faq-accordion-ctn");

    if (clBlock) {
        clBlock.forEach((item) => {

            // Active 0
            const clBody = item.querySelectorAll('.collapse-body');
            const clItems = item.querySelectorAll('.collapse-item')
            // console.log(clItems)
            // if (clBody) {
            //     $(clBody[0]).slideDown();
            //     clBody[0].parentElement.classList.add("active");
            // }


            const head = item.querySelectorAll('.collapse-head');
            head.forEach(item => {
                item.addEventListener('click', () => {
                    clBody.forEach(item => {
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

const cl_Item = document.querySelectorAll('.collapse-item')
const cl_Block = document.querySelectorAll('.collapse-body')

console.log(cl_Item);
console.log(cl_Block[0]);

$(cl_Block[0]).slideDown();
cl_Item[0].classList.add('active');

