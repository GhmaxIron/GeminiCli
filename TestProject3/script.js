// Data for content panel
const courseData = {
    basic: {
        course: [
            {
                id: 'math6',
                title: 'دوره جامع ریاضی ششم',
                description: 'آموزش کامل مباحث ریاضی پایه ششم شامل اعداد صحیح، کسر، اعشار، هندسه و آمار. مناسب برای تقویت پایه و آمادگی امتحانات.',
                metadata: 'مدت: ۴۰ ساعت | سطح: ابتدایی',
                type: 'course'
            },
            {
                id: 'math7',
                title: 'دوره آموزش ریاضی هفتم',
                description: 'پوشش کامل سرفصل‌های ریاضی هفتم: جبر و معادله، هندسه و استدلال، توان و ریشه. با حل تمرینات متنوع.',
                metadata: 'مدت: ۵۰ ساعت | سطح: متوسطه',
                type: 'course'
            },
            {
                id: 'math8',
                title: 'دوره پیشرفته ریاضی هشتم',
                description: 'آموزش عمیق‌تر مفاهیم ریاضی هشتم از جمله اعداد حقیقی، عبارت‌های جبری، تالس و فیثاغورس. مناسب برای دانش‌آموزان کوشا.',
                metadata: 'مدت: ۶۰ ساعت | سطح: پیشرفته',
                type: 'course'
            },
            {
                id: 'math9',
                title: 'دوره فشرده ریاضی نهم',
                description: 'مرور و جمع‌بندی نکات کلیدی ریاضی نهم برای آمادگی آزمون‌های ورودی و امتحانات نهایی. شامل حل تست و مثال‌های مهم.',
                metadata: 'مدت: ۴۵ ساعت | سطح: فشرده',
                type: 'course'
            }
        ],
        exercise: [
            {
                id: 'algebraic-6',
                title: 'کاربرگ‌های جبری ششم',
                description: 'مجموعه‌ای از کاربرگ‌ها برای تقویت مهارت‌های جبری دانش‌آموزان پایه ششم. شامل پاسخنامه تشریحی.',
                metadata: '۲۰ کاربرگ | سطح: ابتدایی',
                type: 'exercise'
            }
        ],
        exam: [
            {
                id: 'exam-final-9',
                title: 'نمونه سوالات نهایی ریاضی نهم',
                description: 'آرشیو کامل سوالات امتحانات نهایی ریاضی نهم دوره‌های گذشته به همراه پاسخ‌های کاملا تشریحی.',
                metadata: '۵ دوره کامل | سال‌های اخیر',
                type: 'exam'
            }
        ]
    },
    exercises: {
        exercise: [
            {
                id: 'algebra-worksheets',
                title: 'کاربرگ‌های جبری پیشرفته',
                description: 'مجموعه‌ای از تمرینات چالش‌برانگیز در زمینه جبر برای پایه‌های متوسطه. مناسب برای المپیاد.',
                metadata: '۳۰ کاربرگ | سطح: پیشرفته',
                type: 'exercise'
            },
            {
                id: 'geometry-exercises',
                title: 'تمرینات هندسه تحلیلی',
                description: 'تمرینات متنوع در مباحث هندسه شامل بردارها، ماتریس و تبدیل‌های هندسی.',
                metadata: '۴۵ تمرین | سطح: دانشگاهی',
                type: 'exercise'
            },
            {
                id: 'combined-questions',
                title: 'سوالات ترکیبی ریاضی',
                description: 'مجموعه‌ای از سوالات ترکیبی که نیاز به استفاده از چندین مبحث ریاضی دارند.',
                metadata: '۲۰ سوال | سطح: المپیاد',
                type: 'exercise'
            }
        ]
    },
    exams: {
        exam: [
            {
                id: 'first-term-samples',
                title: 'نمونه سوالات امتحانی ترم اول',
                description: 'بانک سوالات امتحانات ترم اول تمامی پایه‌ها. به همراه پاسخنامه.',
                metadata: 'مخصوص ترم اول | تمامی پایه‌ها',
                type: 'exam'
            },
            {
                id: 'past-final-questions',
                title: 'سوالات نهایی سال‌های گذشته (آرشیو)',
                description: 'دسترسی به تمامی سوالات نهایی ریاضی سال‌های گذشته با راه حل‌های کامل و نکته‌ای.',
                metadata: 'آرشیو کامل | از سال ۹۰ تاکنون',
                type: 'exam'
            }
        ]
    },
    olympiad: {
        course: [
            {
                id: 'elem-olympiad',
                title: 'دوره آمادگی المپیاد ریاضی ابتدایی',
                description: 'مفاهیم و تکنیک‌های حل مسئله برای آمادگی المپیادهای ریاضی در دوره ابتدایی.',
                metadata: 'مدت: ۳۵ ساعت | سطح: ابتدایی-المپیاد',
                type: 'course'
            },
            {
                id: 'mid-olympiad',
                title: 'بسته ویژه المپیاد متوسطه اول',
                description: 'آموزش عمیق‌تر مباحث المپیادی شامل نظریه اعداد، ترکیبیات و هندسه نوین.',
                metadata: 'مدت: ۸۰ ساعت | سطح: متوسطه-المپیاد',
                type: 'course'
            }
        ]
    }
};

let currentSidebarCategory = null;
let currentFilterType = 'all';

// Slideshow Logic
const slideshowContainer = document.querySelector('.slideshow-container');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        }
    });
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function startSlideshow() {
    slideInterval = setInterval(nextSlide, 5000);
}

function pauseSlideshow() {
    clearInterval(slideInterval);
}

// Event Listeners for Slideshow
if (slideshowContainer) {
    slideshowContainer.addEventListener('mouseenter', pauseSlideshow);
    slideshowContainer.addEventListener('mouseleave', startSlideshow);
}

if (nextButton) nextButton.addEventListener('click', nextSlide);
if (prevButton) prevButton.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

// Initialize slideshow
showSlide(currentSlide);
startSlideshow();


// Accordion Sidebar Logic
const accordionBlocks = document.querySelectorAll('.accordion-block');
const contentDisplay = document.querySelector('.content-display');
const filterButtons = document.querySelectorAll('.filter-button');

accordionBlocks.forEach(block => {
    const header = block.querySelector('.accordion-header');
    header.addEventListener('click', () => {
        const isOpen = block.classList.contains('open');

        // Close all other accordions
        accordionBlocks.forEach(otherBlock => {
            if (otherBlock !== block) {
                otherBlock.classList.remove('open');
            }
        });

        // Toggle current accordion
        if (isOpen) {
            block.classList.remove('open');
        } else {
            block.classList.add('open');
        }
        updateToggleIcons();
    });

    const items = block.querySelectorAll('li');
    items.forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'selected' from all items
            document.querySelectorAll('.sidebar-accordion li').forEach(li => li.classList.remove('selected'));
            // Add 'selected' to clicked item
            item.classList.add('selected');

            // Update content panel
            currentSidebarCategory = item.dataset.category;
            loadContentPanel();
        });
    });
});

function updateToggleIcons() {
    accordionBlocks.forEach(block => {
        const icon = block.querySelector('.toggle-icon');
        if (block.classList.contains('open')) {
            icon.textContent = '−';
        } else {
            icon.textContent = '+';
        }
    });
}

// Initial icon update
updateToggleIcons();

// Content Panel and Filter Logic
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentFilterType = button.dataset.filter;
        loadContentPanel();
    });
});

function loadContentPanel() {
    if (!currentSidebarCategory) {
        contentDisplay.innerHTML = '<p>لطفاً یک گزینه را از نوار کناری انتخاب کنید.</p>';
        return;
    }

    const dataForCategory = courseData[currentSidebarCategory];
    let filteredItems = [];

    if (currentFilterType === 'all') {
        for (const key in dataForCategory) {
            if (dataForCategory.hasOwnProperty(key)) {
                filteredItems = filteredItems.concat(dataForCategory[key]);
            }
        }
    } else if (dataForCategory[currentFilterType]) {
        filteredItems = dataForCategory[currentFilterType];
    }

    if (filteredItems.length === 0) {
        contentDisplay.innerHTML = '<p>موردی برای نمایش در این دسته بندی یافت نشد.</p>';
        return;
    }

    contentDisplay.innerHTML = filteredItems.map(item => `
        <div class="content-item">
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            <span>${item.metadata}</span>
        </div>
    `).join('');
}

// Set initial active sidebar item and load content (optional, e.g., first item by default)
// For demonstration, let's keep it empty initially until user clicks
// document.querySelector('.sidebar-accordion li').click();
