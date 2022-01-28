function scrollTo(el) {
    window.scroll({
        left: 0,
        top: el.offsetTop,
        behavior: "smooth",
    })
}

let buttonScrollToForm = document.getElementById('buttonScrollToForm')
let buttonScroll = document.getElementById('buttonScroll')
let form = document.getElementById('feedBack')

buttonScrollToForm.addEventListener('click', () => {
    scrollTo(form);
})

buttonScroll.addEventListener('click', () => {
    scrollTo(form)
})