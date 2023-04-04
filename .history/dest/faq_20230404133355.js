const cl_Item = document.querySelectorAll('.collapse-item')
const cl_Body = document.querySelectorAll('.collapse-body')

console.log(cl_Item);
console.log(cl_Body[0]);

$(cl_Body[0]).slideDown();
cl_Item[0].classList.add('active');

const head = document.querySelectorAll('.collapse-head');

head.forEach(function(hd_item) {
    hd_item.addEventListener('click', function () {
        cl_Body.forEach(function(item) {
            $(item).slideDown();
        }); 
        cl_Item.forEach(function(item) {
            $(item).removeClass('active');
        })
        console.log(hd_item);
        const body = hd_item.parentElement.querySelector('.collapse-body');
        if (body.style.display === 'none' || body.style.display == '') {
            $(body).slideDown();
            $(hd_item.parentElement).addClass('active');
            console.log(hd_item.parentElement);
        } else {
            $(body).slideUp();
            $(hd_item.parentElement).removeClass('active');
        }
    })
});