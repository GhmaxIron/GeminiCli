// Data structure for product cards
const productCards = [
    {
        title: "آموزش جامع حد و پیوستگی",
        description: "این دوره شامل آموزش کامل مفاهیم حد و پیوستگی، به همراه مثال‌ها و تمرینات متعدد است. مناسب برای دانش‌آموزان سال دوازدهم و دانشجویان ترم اول.",
        type: "درسی",
        category: "limit-continuity",
        metadata: { level: "پایه دوازدهم", duration: "۱۰ ساعت", price: "۲۵۰,۰۰۰ تومان" }
    },
    {
        title: "صفر تا صد مشتق و کاربردها",
        description: "یادگیری عمیق مشتق و قواعد آن، مشتق‌گیری ضمنی، مشتق توابع معکوس و کاربردهای مهم مشتق در حل مسائل بهینه‌سازی و رسم نمودار.",
        type: "درسی",
        category: "derivative",
        metadata: { level: "دانشگاهی", duration: "۱۲ ساعت", price: "۳۰۰,۰۰۰ تومان" }
    },
    {
        title: "تمرین‌های فصل تابع",
        description: "مجموعه‌ای از تمرینات طبقه‌بندی شده از مبحث تابع، شامل انواع توابع، دامنه و برد، ترکیب توابع و تابع وارون.",
        type: "تمرینات",
        category: "function-exercises",
        metadata: { level: "پایه یازدهم", count: "۵۰ تمرین" }
    },
    {
        title: "نمونه سؤالات نهایی دوازدهم - ریاضی تجربی",
        description: "آرشیوی از سؤالات امتحانات نهایی سال‌های اخیر ریاضی تجربی به همراه پاسخنامه تشریحی.",
        type: "نمونه سؤالات",
        category: "grade12-exams",
        metadata: { subject: "ریاضی تجربی", year: "۱۴۰۰-۱۴۰۲" }
    },
    {
        title: "دوره فشرده انتگرال و کاربردهای آن",
        description: "آموزش انواع روش‌های انتگرال‌گیری، انتگرال معین و نامعین و کاربردهای انتگرال در محاسبه مساحت و حجم.",
        type: "درسی",
        category: "integral",
        metadata: { level: "دانشگاهی", duration: "۸ ساعت", price: "۲۰۰,۰۰۰ تومان" }
    },
    {
        title: "آمار و احتمال برای کنکور",
        description: "نکات کلیدی و تست‌های کنکوری مبحث آمار و احتمال، با پوشش کامل سرفصل‌ها و روش‌های تستی.",
        type: "درسی",
        category: "statistics",
        metadata: { level: "کنکور", duration: "۶ ساعت", price: "۱۸۰,۰۰۰ تومان" }
    },
    {
        title: "تمرینات حد و پیوستگی پیشرفته",
        description: "مجموعه‌ای از مسائل چالشی و پیشرفته در مبحث حد و پیوستگی، مناسب برای آمادگی آزمون‌های ورودی.",
        type: "تمرینات",
        category: "limit-exercises",
        metadata: { level: "کنکور", count: "۴۰ تمرین" }
    },
    {
        title: "نمونه سؤالات کنکور سراسری - ریاضی",
        description: "ده دوره کامل سؤالات کنکور سراسری رشته ریاضی از سال ۹۰ تا امروز، با پاسخ‌های تشریحی و تحلیل.",
        type: "نمونه سؤالات",
        category: "konkur-exams",
        metadata: { subject: "ریاضی", type: "جامع" }
    },
    {
        title: "کاربرگ‌های مشتق توابع خاص",
        description: "تمرینات هدفمند برای تسلط بر مشتق‌گیری از توابع مثلثاتی، لگاریتمی و نمایی.",
        type: "تمرینات",
        category: "derivative-exercises",
        metadata: { level: "پایه دوازدهم", count: "۳۵ کاربرگ" }
    },
    {
        title: "دوره المپیاد ریاضی مقدماتی",
        description: "آشنایی با مباحث المپیادی نظیر نظریه اعداد، ترکیبیات و هندسه برای دانش‌آموزان علاقه‌مند.",
        type: "درسی",
        category: "olympiad",
        metadata: { level: "ویژه", duration: "۱۵ ساعت", price: "۴۰۰,۰۰۰ تومان" }
    },
    {
        title: "آمادگی آزمون‌های ورودی دانشگاه",
        description: "بسته‌ای شامل درسنامه و تست‌های جامع برای آمادگی آزمون‌های ورودی کارشناسی دانشگاه‌ها.",
        type: "درسی",
        category: "university-prep",
        metadata: { level: "دانشگاهی", duration: "۲۰ ساعت", price: "۵۰۰,۰۰۰ تومان" }
    },
    {
        title: "تمرینات ترکیبی جبر و آمار",
        description: "ترکیبی از مسائل جبر خطی و مباحث پیشرفته آمار برای تقویت مهارت‌های تحلیلی.",
        type: "تمرینات",
        category: "statistics",
        metadata: { level: "کارشناسی", count: "۶۰ تمرین" }
    }
];

let currentSlideIndex = 0;
let slideshowInterval;
let activeFilterType = 'all'; // 'all', 'dersi', 'tamrinat', 'sample'
let activeFilterCategory = null; // e.g., 'function', 'limit-continuity'

// DOM Elements
const slideshowContainer = document.querySelector('.slideshow-container');
const slides = document.querySelector('.slides');
const prevArrow = document.querySelector('.prev');
const nextArrow = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots-container');
const sidebarSections = document.querySelectorAll('.sidebar-section');
const filterButtons = document.querySelectorAll('.filter-btn');
const cardsContainer = document.querySelector('.cards-container');
const noMatchMessage = document.querySelector('.no-match-message');
const sidebarSubmenuItems = document.querySelectorAll('.submenu li');

// Slideshow Functions
function showSlide(index) {
    const totalSlides = slides.children.length;
    if (index >= totalSlides) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = totalSlides - 1;
    }
    slides.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    // Update dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentSlideIndex) {
            dot.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex--;
    showSlide(currentSlideIndex);
}

function startSlideshow() {
    slideshowInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function pauseSlideshow() {
    clearInterval(slideshowInterval);
}

// Render Cards Function
function renderCards() {
    cardsContainer.innerHTML = ''; // Clear existing cards
    const filteredCards = productCards.filter(card => {
        const typeMatch = (activeFilterType === 'all' || card.type === activeFilterType);
        const categoryMatch = (activeFilterCategory === null || card.category === activeFilterCategory);
        return typeMatch && categoryMatch;
    });

    if (filteredCards.length === 0) {
        noMatchMessage.style.display = 'block';
    } else {
        noMatchMessage.style.display = 'none';
        filteredCards.forEach(cardData => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.setAttribute('data-type', cardData.type);
            card.setAttribute('data-category', cardData.category);

            let metaHtml = '';
            for (const key in cardData.metadata) {
                metaHtml += `<span>${cardData.metadata[key]}</span>`;
            }

            card.innerHTML = `
                <div class="card-content">
                    <span class="card-badge">${cardData.type}</span>
                    <h3 class="card-title">${cardData.title}</h3>
                    <p class="card-description">${cardData.description}</p>
                    <div class="card-meta">
                        ${metaHtml}
                    </div>
                </div>
                <div class="card-actions">
                    <button class="card-button">مشاهده جزئیات</button>
                </div>
            `;

            cardsContainer.appendChild(card);
        });

        // Add event listeners to new detail buttons
        document.querySelectorAll('.card-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const cardTitle = event.target.closest('.card').querySelector('.card-title').textContent;
                alert(`مشاهده جزئیات: ${cardTitle}`);
            });
        });
    }
}

// Event Listeners

// Slideshow controls
prevArrow.addEventListener('click', prevSlide);
nextArrow.addEventListener('click', nextSlide);
slideshowContainer.addEventListener('mouseenter', pauseSlideshow);
slideshowContainer.addEventListener('mouseleave', startSlideshow);

// Dots for slideshow
dotsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('dot')) {
        const dotIndex = Array.from(dotsContainer.children).indexOf(event.target);
        showSlide(dotIndex);
        pauseSlideshow(); // Pause on manual click
        startSlideshow(); // Resume after a short delay
    }
});

// Sidebar Accordion
sidebarSections.forEach(section => {
    section.querySelector('.section-header').addEventListener('click', () => {
        section.classList.toggle('expanded');
        const submenu = section.querySelector('.submenu');
        if (section.classList.contains('expanded')) {
            submenu.style.maxHeight = submenu.scrollHeight + 'px';
        } else {
            submenu.style.maxHeight = '0';
        }
    });
});

// Filter Buttons (Top Bar)
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        activeFilterType = button.dataset.filter;
        renderCards();
    });
});

// Sidebar Submenu Items (Category Filters)
sidebarSubmenuItems.forEach(item => {
    item.addEventListener('click', () => {
        sidebarSubmenuItems.forEach(i => i.classList.remove('active')); // Deactivate all other sidebar items
        item.classList.add('active'); // Activate clicked item
        activeFilterCategory = item.dataset.category;
        renderCards();
    });
});

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlideIndex);
    startSlideshow();
    renderCards();

    // Set initial active state for 'همه' filter button
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');

    // Set initial active state for main nav home button
    document.querySelector('.main-nav ul li a[href="#home"]').classList.add('active');
});
