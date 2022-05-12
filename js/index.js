document.addEventListener("DOMContentLoaded", function () {
    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {

        // close all inner dropdowns when parent is closed
        document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
            everydropdown.addEventListener('hidden.bs.dropdown', function () {
                // after dropdown is hidden, then find all submenus
                this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
                    // hide every submenu as well
                    everysubmenu.style.display = 'none';
                });
            })
        });

        document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
            element.addEventListener('click', function (e) {
                let nextEl = this.nextElementSibling;
                if (nextEl && nextEl.classList.contains('submenu')) {
                    // prevent opening link if link needs to open dropdown
                    e.preventDefault();
                    if (nextEl.style.display == 'block') {
                        nextEl.style.display = 'none';
                    } else {
                        nextEl.style.display = 'block';
                    }

                }
            });
        })
    }
    // end if innerWidth
});
// DOMContentLoaded  end





const readMoreBtn = document.querySelector('.read-more-btn');

const text = document.querySelector('.text');

readMoreBtn.addEventListener('click', (e) => {
    text.classList.toggle('show-more')
})

const readMoreBtn1 = document.querySelector('.read-more-btn-1');

const text1 = document.querySelector('.text-1');

readMoreBtn1.addEventListener('click', (e) => {
    text1.classList.toggle('show-more')
})

const readMoreBtn2 = document.querySelector('.read-more-btn-2');

const text2 = document.querySelector('.text-2');

readMoreBtn2.addEventListener('click', (e) => {
    text2.classList.toggle('show-more')
})


const readMoreBtn3 = document.querySelector('.read-more-btn-3');

const text3 = document.querySelector('.text-3');

readMoreBtn3.addEventListener('click', (e) => {
    text3.classList.toggle('show-more')
})


const readMoreBtn4 = document.querySelector('.read-more-btn-4');

const text4 = document.querySelector('.text-4');

readMoreBtn4.addEventListener('click', (e) => {
    text4.classList.toggle('show-more')
})
