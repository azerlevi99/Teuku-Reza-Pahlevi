const scrollUp = document.querySelector(".scroll-up");

window.onscroll = () => {
    if (window.scrollY > 500) {
        scrollUp.classList.add ("scroll-active");
    } else {
        scrollUp.classList.remove ("scroll-active");
    }
};

function toggleGuru() {
    const hiddenCards = document.querySelectorAll('.hidden-card');
    const btn = document.getElementById('btn-toggle');
    hiddenCards.forEach(card => {
        card.classList.toggle('show');
    });
    
    if (hiddenCards[0].classList.contains('show')) {
        btn.innerText = "Lihat Lebih Sedikit";
    } else {
        btn.innerText = "Lihat Selengkapnya";
    }
}