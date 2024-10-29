const hambuguer = document.getElementById('hamburger');
const faqItem = document.querySelectorAll('.faq-item')
const nav = document.getElementById('nav-menu');

hambuguer.addEventListener('click', () =>{
nav.classList.toggle('show')
})

document.addEventListener('click',(event)=>{
    const inMenuOpen = nav.classList.contains('show')
    const isClickInsideNav = nav.contains(event.target)
    const isClickOnHambuguer = hambuguer.contains(event.target)

    if(inMenuOpen && !isClickInsideNav && !isClickOnHambuguer){
        nav.classList.remove('show')
    }
})


faqItem.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active')
    })
})