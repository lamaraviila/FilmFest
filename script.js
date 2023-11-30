const swiper = new Swiper('.mySwiper',{
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides:true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate :15,
        strech:0,
        depth:300,
        modifier:1,
        slideShadows:true,
        },
        loop:true,
}
)

const modal = document.querySelector('#modal')
const button = document.querySelector('#trailer')
const buttonCerrar = document.querySelector('#cerrar')
button.addEventListener('click', () => {
    modal.style.display = 'block'
    buttonCerrar.addEventListener('click', () =>{
        modal.style.display = 'none'
    })
})
    
