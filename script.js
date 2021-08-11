const sections = document.querySelectorAll('section');
const navBar = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-link');
const navBrand = document.querySelector('.navbar-brand');
const photos = document.querySelectorAll('#portfolio img');
const modalTitle = document.querySelector('.modal-body h2')
const modalImg = document.querySelector('.modal-body img')
const goTop = document.querySelector('.gotop');

const photoData = ['cabin', 'cake', 'circus', 'game', 'safe', 'submarine'];

const options = {
    root: null,
    threshold: 0.3,
    rootMargin: "0px"
}

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            Array.from(navLinks).forEach(link=>{
                link.classList.remove('active')
                if(link.innerHTML.toLowerCase() == entry.target.id){
                    link.classList.add('active')
                }
            })
        } else {
            Array.from(navLinks).forEach(link=>{
                if(link.innerHTML.toLowerCase() == entry.target.id){
                    link.classList.remove('active')

                }
            })
        }
    })
}, options)

Array.from(sections).forEach((sect)=>{
    observer.observe(sect)
})

document.addEventListener('scroll', (e)=>{
    if(window.scrollY > 0){
        navBar.classList.add('nav-active')
        goTop.classList.add('gotop-active')
    } else {
        navBar.classList.remove('nav-active')
        goTop.classList.remove('gotop-active')
    }
})

Array.from(photos).forEach((img, i) => {
    img.addEventListener('click', ()=>{
        modalTitle.innerHTML = photoData[i]
        modalImg.src = `https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/${photoData[i]}.png`
    })
})

goTop.addEventListener('click', ()=>{
    window.scrollTo(0,0);
})