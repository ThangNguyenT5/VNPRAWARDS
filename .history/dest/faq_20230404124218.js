
const clBlock = document.querySelectorAll(".faq-accordion-ctn");

    if (clBlock) {
        clBlock.forEach((item) => {

            // Active 0
            const clBody = item.querySelectorAll('.collapse-body');
            const clItems = item.querySelectorAll('.collapse-item')
            console.log(clItems)
            if (clBody) {
                console.log($(clBody[0]));
                $(clBody[0]).slideDown();
                clBody[0].parentElement.classList.add("active");
            }


            const head = item.querySelectorAll('.collapse-head');
            head.forEach(item => {
                item.addEventListener('click', () => {
                    clBody.forEach(item => {
                        console.log($(item));
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