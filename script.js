let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    const slidesPerView = 2;

    // インデックスの範囲を適切に調整
    if (index >= totalSlides - slidesPerView) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - slidesPerView;
    } else {
        slideIndex = index;
    }

    const offset = slideIndex * 50;  // マイナス符号を追加
    slides.style.transform = `translateX(${offset}vw)`;
}

function nextSlide() {
    showSlide(slideIndex - 2);  // 1つずつ移動
}

function prevSlide() {
    showSlide(slideIndex + 2);  // 1つずつ移動
}

// 初期表示
showSlide(0);

const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;
console.log(slides);
console.log(totalSlides);