// Data structure for product cards
const productCards = [
    // Grade 7 - Chapter 1
    {
        title: "آموزش راهبردهای حل مسئله",
        description: "مفاهیم اساسی راهبردهای حل مسئله در ریاضی پایه هفتم با مثال‌های کاربردی.",
        type: "درسی",
        category: "grade7-ch1-rahbord-hall-masale",
        metadata: { level: "هفتم", duration: "۲ ساعت" }
    },
    {
        title: "تمرینات راهبردهای حل مسئله هفتم",
        description: "مجموعه‌ای از تمرینات متنوع برای تسلط بر راهبردهای حل مسئله پایه هفتم.",
        type: "تمرینات",
        category: "grade7-ch1-rahbord-hall-masale",
        metadata: { level: "هفتم", count: "۲۰ تمرین" }
    },
    // Grade 7 - Chapter 2
    {
        title: "معرفی عددهای علامت‌دار هفتم",
        description: "آشنایی با مفهوم اعداد صحیح و علامت‌دار و کاربرد آن‌ها.",
        type: "درسی",
        category: "grade7-ch2-signed-numbers-intro",
        metadata: { level: "هفتم", duration: "۱.۵ ساعت" }
    },
    {
        title: "نمونه سوال جمع و تفریق عددهای صحیح (۱) هفتم",
        description: "سوالات امتحانی برای بخش اول جمع و تفریق عددهای صحیح در پایه هفتم.",
        type: "نمونه سؤالات",
        category: "grade7-ch2-sum-sub1",
        metadata: { level: "هفتم", count: "۱۰ سوال" }
    },
    // Grade 7 - Chapter 3
    {
        title: "درس الگوهای عددی پایه هفتم",
        description: "آموزش ساخت و کشف الگوهای عددی و کاربرد آن‌ها در ریاضی.",
        type: "درسی",
        category: "grade7-ch3-number-patterns",
        metadata: { level: "هفتم", duration: "۲ ساعت" }
    },
    {
        title: "تمرینات عبارت‌های جبری هفتم",
        description: "تمرینات کامل برای تسلط بر عبارت‌های جبری و ساده‌سازی آن‌ها.",
        type: "تمرینات",
        category: "grade7-ch3-algebraic-expressions",
        metadata: { level: "هفتم", count: "۲۵ تمرین" }
    },
    // Grade 7 - Chapter 4
    {
        title: "درس روابط بین زاویه‌ها هفتم",
        description: "بررسی انواع زوایا و روابط بین آن‌ها در هندسه پایه هفتم.",
        type: "درسی",
        category: "grade7-ch4-angle-relations",
        metadata: { level: "هفتم", duration: "۱.۵ ساعت" }
    },
    // Grade 7 - Chapter 5
    {
        title: "درس عدد اول و شمارنده‌ها هفتم",
        description: "مفهوم عدد اول، شمارنده‌ها و روش‌های یافتن آن‌ها.",
        type: "درسی",
        category: "grade7-ch5-prime-numbers",
        metadata: { level: "هفتم", duration: "۲ ساعت" }
    },
    // Grade 7 - Chapter 6
    {
        title: "محاسبه حجم‌های منشوری هفتم",
        description: "آموزش گام به گام محاسبه حجم انواع منشورها و اشکال هندسی.",
        type: "درسی",
        category: "grade7-ch6-prismatic-volumes",
        metadata: { level: "هفتم", duration: "۲.۵ ساعت" }
    },
    // Grade 7 - Chapter 7
    {
        title: "ساده کردن عبارت‌های توان‌دار هفتم",
        description: "نکات و روش‌های ساده‌سازی عبارت‌های شامل توان و جذر.",
        type: "درسی",
        category: "grade7-ch7-power-simplification",
        metadata: { level: "هفتم", duration: "۲ ساعت" }
    },

    // Grade 8 - Chapter 1
    {
        title: "معرفی عددهای گویا هشتم",
        description: "مقدمه‌ای بر عددهای گویا و عملیات اصلی روی آن‌ها.",
        type: "درسی",
        category: "grade8-ch1-rational-numbers",
        metadata: { level: "هشتم", duration: "۲ ساعت" }
    },
    // Grade 9 - Chapter 1
    {
        title: "معرفی مجموعه نهم",
        description: "آموزش کامل مفهوم مجموعه، انواع آن و نمایش مجموعه‌ها.",
        type: "درسی",
        category: "grade9-ch1-sets",
        metadata: { level: "نهم", duration: "۲.۵ ساعت" }
    },

    // Grade 11 - Chapter 1
    {
        title: "گزاره‌ها و ترکیب گزاره‌ها یازدهم",
        description: "آشنایی با گزاره‌های منطقی و عملگرهای ترکیب گزاره‌ها در ریاضی و آمار.",
        type: "درسی",
        category: "grade11-ch1-propositions",
        metadata: { level: "یازدهم", duration: "۳ ساعت" }
    },
    {
        title: "استدلال ریاضی یازدهم - جزوه",
        description: "جزوه کامل مبحث استدلال ریاضی و انواع برهان‌ها.",
        type: "درسی",
        category: "grade11-ch1-reasoning",
        metadata: { level: "یازدهم", type: "جزوه" }
    },
    // Grade 11 - Chapter 2
    {
        title: "توابع ثابت و چند ضابطه‌ای یازدهم",
        description: "آموزش توابع خاص شامل توابع ثابت، همانی و چند ضابطه‌ای با مثال.",
        type: "درسی",
        category: "grade11-ch2-constant-functions",
        metadata: { level: "یازدهم", duration: "۴ ساعت" }
    },
    {
        title: "تمرینات اعمال بر روی توابع یازدهم",
        description: "مجموعه تمرینات جامع در مورد جمع، تفریق، ضرب و تقسیم توابع.",
        type: "تمرینات",
        category: "grade11-ch2-function-operations",
        metadata: { level: "یازدهم", count: "۴۰ تمرین" }
    },
    // Grade 11 - Chapter 3
    {
        title: "درس شاخص‌های آماری یازدهم",
        description: "آشنایی با میانگین، واریانس، انحراف معیار و سایر شاخص‌های آماری.",
        type: "درسی",
        category: "grade11-ch3-statistical-indices",
        metadata: { level: "یازدهم", duration: "۳ ساعت" }
    },

    // Grade 12 - Chapter 1
    {
        title: "آموزش مبحث شمارش دوازدهم",
        description: "آموزش جامع اصل شمارش، جایگشت و ترکیب در احتمال.",
        type: "درسی",
        category: "grade12-ch1-counting",
        metadata: { level: "دوازدهم", duration: "۵ ساعت" }
    },
    {
        title: "نمونه سوال احتمال دوازدهم",
        description: "سوالات امتحانی و تستی مبحث احتمال برای آمادگی کنکور و امتحانات نهایی.",
        type: "نمونه سؤالات",
        category: "grade12-ch1-probability",
        metadata: { level: "دوازدهم", year: "۱۴۰۱" }
    },
    // Grade 12 - Chapter 2
    {
        title: "مدل‌سازی و دنباله دوازدهم",
        description: "آشنایی با دنباله‌ها، کشف الگوها و مدل‌سازی ریاضی.",
        type: "درسی",
        category: "grade12-ch2-modeling-sequences",
        metadata: { level: "دوازدهم", duration: "۳ ساعت" }
    },
    // Grade 12 - Chapter 3
    {
        title: "درس دنباله هندسی دوازدهم",
        description: "مفهوم دنباله هندسی، جملات و مجموع جملات دنباله.",
        type: "درسی",
        category: "grade12-ch3-geometric-sequence",
        metadata: { level: "دوازدهم", duration: "۲.۵ ساعت" }
    },
    {
        title: "تمرینات تابع نمایی دوازدهم",
        description: "تمرینات حل شده و کاربردی برای توابع نمایی و لگاریتمی.",
        type: "تمرینات",
        category: "grade12-ch3-exponential-function",
        metadata: { level: "دوازدهم", count: "۳۰ تمرین" }
    },

    // Special Courses / Olympiad
    {
        title: "مقدمات المپیاد ریاضی",
        description: "دوره آموزشی برای دانش‌آموزان علاقه‌مند به المپیاد ریاضی شامل مباحث پایه.",
        type: "درسی",
        category: "olympiad-intro",
        metadata: { level: "ویژه", duration: "۱۰ ساعت", price: "۳۵۰,۰۰۰ تومان" }
    },
    {
        title: "آمادگی آزمون‌های ورودی کارشناسی",
        description: "بسته جامع آمادگی برای آزمون‌های ورودی دانشگاه‌ها و رشته‌های ریاضی.",
        type: "درسی",
        category: "university-entry-prep",
        metadata: { level: "دانشگاهی", duration: "۲۰ ساعت", price: "۶۰۰,۰۰۰ تومان" }
    },

    // Miscellaneous Exercises
    {
        title: "تمرینات تکمیلی تابع (همه پایه‌ها)",
        description: "مجموعه تمرینات متنوع و پیشرفته برای مبحث تابع در سطوح مختلف.",
        type: "تمرینات",
        category: "extra-function-exercises",
        metadata: { level: "جامع", count: "۷۰ تمرین" }
    },

    // Comprehensive Exams
    {
        title: "نمونه سؤالات نهایی جامع دوازدهم",
        description: "آرشیوی از سوالات نهایی سال‌های اخیر تمام رشته‌های ریاضی.",
        type: "نمونه سؤالات",
        category: "final-exams-grade12",
        metadata: { level: "دوازدهم", type: "جامع" }
    }
];

let currentSlideIndex = 0;
let slideshowInterval;
let activeFilterType = 'همه'; // 'همه', 'درسی', 'تمرینات', 'نمونه سؤالات'
let activeFilterCategory = null; // e.g., 'grade7-ch1-rahbord-hall-masale'

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
// Select all clickable lesson items, not just top-level submenu li
const sidebarLessonItems = document.querySelectorAll('.grade-submenu li');

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
        const typeMatch = (activeFilterType === 'همه' || card.type === activeFilterType);
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
                alert(`مشاهده جزئیات: ${cardTitle}\nبرای اطلاعات بیشتر و خرید این دوره، با ما تماس بگیرید.`);
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

// Sidebar Accordion for main sections (متوسطه اول, متوسطه دوم)
sidebarSections.forEach(section => {
    const header = section.querySelector('.section-header');
    const toggleIcon = section.querySelector('.toggle-icon');
    const submenu = section.querySelector('.submenu');

    header.addEventListener('click', () => {
        const isExpanded = section.classList.toggle('expanded');
        header.setAttribute('aria-expanded', isExpanded);
        toggleIcon.textContent = isExpanded ? '-' : '+';

        if (isExpanded) {
            submenu.style.maxHeight = submenu.scrollHeight + 'px';
        } else {
            submenu.style.maxHeight = '0';
        }
    });
});

// Grade Accordion (Chapters within Grades)
// We need to target the headers for chapters to make them collapsible too.
// The current structure has <p class="chapter-title"> for chapter titles.
// For now, only lessons (li) are clickable filters. If chapters should also toggle, more logic is needed.

// Filter Buttons (Top Bar)
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        activeFilterType = button.dataset.filter;
        renderCards();
    });
});

// Sidebar Lesson Items (Category Filters)
// Update selector to target lessons within grade-submenus
sidebarLessonItems.forEach(item => {
    // Ensure event listener is only added once per item if script is run multiple times
    if (!item.dataset.hasClickListener) {
        item.addEventListener('click', () => {
            // Remove active class from ALL lesson items first
            document.querySelectorAll('.grade-submenu li').forEach(i => i.classList.remove('active'));

            // Add active class to the clicked item
            item.classList.add('active');
            activeFilterCategory = item.dataset.category;
            renderCards();
        });
        item.dataset.hasClickListener = true; // Mark to prevent duplicate listeners
    }
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