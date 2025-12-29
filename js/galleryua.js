const slider = document.getElementById('slider');
const track = document.getElementById('dots-track');
const slideText = document.getElementById('slide-text');
const slidesCount = 7;

const DOT_SIZE = 10;
const DOT_GAP = 14;
const texts = [
    {
        ua: "Те, що колись було лише мрією, сьогодні стало реальністю.",
        en: "What was once just a dream has become a reality today."
    },
    {
        ua: "Перші прототипи 60-х років заклали основу цифрових світів.",
        en: "The first prototypes of the 60s laid the foundation for digital worlds."
    },
    {
        ua: "Технологія відстеження рухів дозволила нам 'жити' в коді.",
        en: "Motion tracking technology has allowed us to 'live' in the code."
    },
    {
        ua: "Графіка стає настільки реальною, що мозок перестає сумніватися.",
        en: "Graphics are becoming so real that the brain stops doubting."
    },
    {
        ua: "Ми використовуємо VR не лише для ігор, а й для лікування фобій.",
        en: "We use VR not only for games but also for treating phobias."
    },
    {
        ua: "Освіта майбутнього: учні відвідують Марс прямо з класів.",
        en: "Education of the future: students visit Mars directly from classrooms."
    },
    {
        ua: "Межа між реальним та віртуальним зникає на наших очах.",
        en: "The line between the real and the virtual is disappearing before our eyes."
    }
];

let currentIndex = 0;
for (let i = 0; i < slidesCount; i++)
{
    const dot = document.createElement('div');
    dot.className = `dot ${i === 0 ? 'active' : ''}`;
    dot.onclick = () => goToSlide(i);
    track.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
    let offset = 0;

    if (currentIndex > 0 && currentIndex < slidesCount - 1)
    {
        offset = (currentIndex - 1) * (DOT_SIZE + DOT_GAP);
    }
    else if (currentIndex === slidesCount - 1)
    {
        offset = (slidesCount - 3) * (DOT_SIZE + DOT_GAP);
    }
    
    track.style.transform = `translateX(-${offset}px)`;
    const currentLang = localStorage.getItem('selectedLang') || 'ua';

    slideText.style.opacity = 0;
    setTimeout(() => {
        slideText.textContent = texts[currentIndex][currentLang];
        slideText.style.opacity = 1;
    }, 300);
}
function nextSlide() { currentIndex = (currentIndex + 1) % slidesCount; updateSlider(); }
function prevSlide() { currentIndex = (currentIndex - 1 + slidesCount) % slidesCount; updateSlider(); }
function goToSlide(i) { currentIndex = i; updateSlider(); }
updateSlider();
slideText.style.transition = "opacity 0.4s ease";

setInterval(nextSlide, 7000);

window.addEventListener('languageChanged', () => {
    updateSlider();
});