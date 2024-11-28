const modal = document.getElementById('feedbackModal');
const openBtn = document.getElementById('openFeedBack');
const closeBtn = document.getElementById('close');

openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal){
        modal.style.display = 'none';
    }
});









/*скролинг вверх */
const scrollToTopBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', ()=>{
    scrollToTopBtn.style.display = window.scrollY > 200 ? "block": "none";
})

scrollToTopBtn.addEventListener('click', ()=>{
    window.scrollTo({top:0, behavior: 'smooth'});
})


