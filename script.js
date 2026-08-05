// ===== DATA MOBIL =====
const cars = [{
        id: 1,
        name: 'Honda Brio',
        passenger: '4 Penumpang',
        type: 'Rental Mobil',
        duration: '24 Jam',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop',
        prices: {
            manual: 'Rp 275.000',
            matic: 'Rp 300.000',
            withDriver: 'Rp 550.000'
        },
        waNumber: '6282146320344',
        phoneNumber: '0821-4632-0344'
    },
    {
        id: 2,
        name: 'Honda Brio Old',
        passenger: '4 Penumpang',
        type: 'Rental Mobil',
        duration: '24 Jam',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop',
        prices: {
            manual: 'Rp 275.000',
            matic: 'Rp 300.000',
            withDriver: 'Rp 550.000'
        },
        waNumber: '6282146320344',
        phoneNumber: '0821-4632-0344'
    },
    {
        id: 3,
        name: 'Daihatsu Ayla',
        passenger: '4 Penumpang',
        type: 'Rental Mobil',
        duration: '24 Jam',
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop',
        prices: {
            manual: 'Rp 250.000',
            matic: 'Rp 275.000',
            withDriver: 'Rp 500.000'
        },
        waNumber: '6282146320344',
        phoneNumber: '0821-4632-0344'
    },
    {
        id: 4,
        name: 'Daihatsu Ayla Old',
        passenger: '4 Penumpang',
        type: 'Rental Mobil',
        duration: '24 Jam',
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop',
        prices: {
            manual: 'Rp 200.000',
            matic: 'Rp 250.000',
            withDriver: 'Rp 450.000'
        },
        waNumber: '6282146320344',
        phoneNumber: '0821-4632-0344'
    },
    {
        id: 5,
        name: 'Toyota Avanza',
        passenger: '6 Penumpang',
        type: 'Rental Mobil',
        duration: '24 Jam',
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop',
        prices: {
            manual: 'Rp 300.000',
            matic: 'Rp 350.000',
            withDriver: 'Rp 600.000'
        },
        waNumber: '6282146320344',
        phoneNumber: '0821-4632-0344'
    },
    {
        id: 6,
        name: 'Toyota Innova',
        passenger: '7 Penumpang',
        type: 'Rental Mobil',
        duration: '24 Jam',
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop',
        prices: {
            manual: 'Rp 400.000',
            matic: 'Rp 450.000',
            withDriver: 'Rp 750.000'
        },
        waNumber: '6282146320344',
        phoneNumber: '0821-4632-0344'
    }
];

// ===== DATA TOUR (GRID) =====
const tours = [{
        id: 1,
        title: 'BALI COMBINE TOUR 1',
        description: 'Bali Combination Tour offers the perfect way to explore Bali by combining its top attractions, cultural landmarks, and natural beauty in one unforgettable journey.',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 350.000',
        badge: 'Populer',
        link: 'tour/BaliCombineTour.html'
    },
    {
        id: 2,
        title: 'LOVINA DOLPHIN TOUR',
        description: 'Lovina Dolphin Tour offers a memorable sunrise experience where you can watch wild dolphins in their natural habitat while enjoying the peaceful beauty of Lovina Beach.',
        image: 'https://images.unsplash.com/photo-1588868109521-a4a3a1bcd7c6?w=400&h=300&fit=crop',
        price: 'Rp 400.000',
        badge: 'Best Seller',
        link: 'tour/LovinaDolphinTour.html'
    },
    {
        id: 3,
        title: 'UBUD TOUR #1',
        description: 'Part of the Puri Semarapura royal palace complex – a grand hall and a floating pavilion.',
        image: 'https://images.unsplash.com/photo-1580127428408-3ed6be5b1d7d?w=400&h=300&fit=crop',
        price: 'Rp 450.000',
        badge: 'Eksklusif',
        link: 'tour/UbudTour1.html'
    },
    {
        id: 4,
        title: 'UBUD TOUR #2',
        description: 'Nikmati sunset romantis di Uluwatu dengan pertunjukan Kecak dan pemandangan tebing.',
        image: 'https://images.unsplash.com/photo-1580455732977-1e71f3a0d6a8?w=400&h=300&fit=crop',
        price: 'Rp 380.000',
        badge: 'Romantis',
        link: 'tour/UbudTour2.html'
    },
    {
        id: 5,
        title: 'BEDUGUL TOUR',
        description: 'Jelajahi keindahan pantai Kelingking, Angel Billabong, dan Broken Beach di Nusa Penida.',
        image: 'https://images.unsplash.com/photo-1588868109521-a4a3a1bcd7c6?w=400&h=300&fit=crop',
        price: 'Rp 500.000',
        badge: 'Petualangan',
        link: 'tour/BedugulTour.html'
    },
    {
        id: 6,
        title: 'NUSA PENIDA PACKAGE 1',
        description: 'Saksikan lumba-lumba liar di pagi hari dan nikmati keindahan pantai Lovina yang tenang.',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour/NusaPenidaPackage1.html'
    },
    {
        id: 7,
        title: 'NUSA PENIDA PACKAGE 2',
        description: 'Snorkeling & West Trip.',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour/NusaPenidaPackage2.html'
    },
    {
        id: 8,
        title: 'BALI FUN TOUR',
        description: 'Mix West & East trip',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour/BaliFunTour.html'
    },
    {
        id: 9,
        title: 'TANAH LOT TOUR',
        description: 'Mix West & East trip',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour/TanahLotTour.html'
    },
    {
        id: 10,
        title: 'ULUWATU TOUR',
        description: 'Mix West & East trip',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour/UluwatuTour.html'
    },
    {
        id: 11,
        title: 'KINTAMANI TOUR',
        description: 'Mix West & East trip',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour/KintamaniTour.html'
    },
    {
        id: 12,
        title: 'LEMPUYANG TOUR',
        description: 'Mix West & East trip',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour/LempuyanganTour.html'
    },
    {
        id: 13,
        title: 'WATER FALLS TOUR',
        description: 'Mix West & East trip',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour/WaterfallsTour/html'
    },
    {
        id: 14,
        title: 'BALI COMBINE TOUR 2',
        description: 'Mix West & East trip',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour/BaliCombineTour2.html'
    },
    {
        id: 15,
        title: 'ATV QUAD BIKE',
        description: 'Mix West & East trip',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour/AtvQuadBike.html'
    },
    {
        id: 17,
        title: 'BATUR JEEP SUNRICE',
        description: 'Mix West & East trip',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour/BaturJeepSunrice.html'
    },
    {
        id: 18,
        title: 'FUN ACTIVITIES',
        description: 'Mix West & East trip',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'FunActivities.html'
    }
];

// ===== TOUR SLIDER STATE =====
let currentSlide = 0;
let totalSlides = 0;

// ===== RENDER MOBIL =====
function renderCars() {
    const carsGrid = document.getElementById('carsGrid');
    if (!carsGrid) return;
    carsGrid.innerHTML = cars.map(car => `
        <div class="car-card">
            <img src="${car.image}" alt="${car.name}" class="car-image" />
            <div class="car-info">
                <div class="car-header">
                    <h3 class="car-name">${car.name}</h3>
                    <span class="car-passenger"><i class="fas fa-user"></i> ${car.passenger}</span>
                </div>

                <div class="car-details">
                    <span><i class="fas fa-tag"></i> ${car.type}</span>
                    <span><i class="fas fa-clock"></i> ${car.duration}</span>
                </div>

                <div class="price-row">
                    <div class="price-item">
                        <span class="price-label"><i class="fas fa-car"></i> Sewa Mobil Manual</span>
                        <span class="price-value">${car.prices.manual}</span>
                    </div>
                    <div class="price-item">
                        <span class="price-label"><i class="fas fa-car"></i> Sewa Mobil Matic</span>
                        <span class="price-value">${car.prices.matic}</span>
                    </div>
                    <div class="price-item">
                        <span class="price-label"><i class="fas fa-user-tie"></i> Dengan Supir + BBM</span>
                        <span class="price-value">${car.prices.withDriver}</span>
                    </div>
                </div>

                <div class="car-actions">
                    <a href="https://wa.me/${car.waNumber}?text=Halo%20KARI%20GARAGE%2C%20saya%20mau%20booking%20mobil%20${encodeURIComponent(car.name)}" 
                       target="_blank" 
                       class="btn-wa">
                        <i class="fab fa-whatsapp"></i> Booking Via WhatsApp
                    </a>
                    <a href="tel:${car.phoneNumber}" class="btn-phone">
                        <i class="fas fa-phone"></i> Phone
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== RENDER TOUR SLIDER =====
function renderTourSlider() {
    const container = document.getElementById('tourSliderContainer');
    if (!container) return;

    // Kelompokkan tour per 6 item
    const slideSize = 6;
    const slides = [];
    for (let i = 0; i < tours.length; i += slideSize) {
        slides.push(tours.slice(i, i + slideSize));
    }
    totalSlides = slides.length;

    // Buat HTML untuk setiap slide
    container.innerHTML = slides.map((slideTours, index) => `
        <div class="tour-slide" data-index="${index}">
            ${slideTours.map(tour => `
                <div class="tour-card">
                    <div class="tour-image" style="background-image: url('${tour.image}');">
                        <span class="tour-badge">${tour.badge}</span>
                    </div>
                    <div class="tour-info">
                        <h3>${tour.title}</h3>
                        <p>${tour.description}</p>
                        <div class="tour-footer">
                            <span class="tour-price">Mulai ${tour.price}</span>
                            <a href="${tour.link}" class="btn-tour">SEE DETAILS</a>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `).join('');

    // Update dots & posisi
    updateDots();
    updateSliderPosition();
}

function updateSliderPosition() {
    const container = document.getElementById('tourSliderContainer');
    if (!container) return;
    const offset = -currentSlide * 100;
    container.style.transform = `translateX(${offset}%)`;
}

function updateDots() {
    const dotsContainer = document.getElementById('tourDots');
    if (!dotsContainer) return;

    dotsContainer.innerHTML = Array.from({ length: totalSlides }, (_, i) => `
        <button class="dot ${i === currentSlide ? 'active' : ''}" data-index="${i}"></button>
    `).join('');

    // Event listener untuk setiap dot
    dotsContainer.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            goToSlide(index);
        });
    });
}

function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentSlide = index;
    updateSliderPosition();
    updateDots();
}

function initTourSlider() {
    renderTourSlider();

    // Tombol Prev
    const prevBtn = document.getElementById('tourPrevBtn');
    if (prevBtn) {
        prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    }

    // Tombol Next
    const nextBtn = document.getElementById('tourNextBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    }

    // Auto play (geser otomatis tiap 5 detik)
    let autoPlayInterval;
    const startAutoPlay = () => {
        autoPlayInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
    };
    const stopAutoPlay = () => clearInterval(autoPlayInterval);

    const wrapper = document.querySelector('.tour-slider-wrapper');
    if (wrapper) {
        wrapper.addEventListener('mouseenter', stopAutoPlay);
        wrapper.addEventListener('mouseleave', startAutoPlay);
    }

    startAutoPlay();
}

// ===== FAQ ACCORDION =====
function initFaq() {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', function() {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// ===== MENU TOGGLE =====
function initMenuToggle() {
    const toggle = document.getElementById('menuToggle');
    if (toggle) {
        toggle.addEventListener('click', function() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        });
    }
    document.addEventListener('click', function(e) {
        const navMenu = document.getElementById('navMenu');
        const toggle = document.getElementById('menuToggle');
        if (!navMenu.contains(e.target) && !toggle.contains(e.target)) {
            navMenu.classList.remove('active');
            toggle.querySelector('i').className = 'fas fa-bars';
        }
    });
}

// ===== NAVBAR SCROLL =====
function initNavbarScroll() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// ===== MOBILE DROPDOWN =====
function initMobileDropdown() {
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.closest('.dropdown').classList.toggle('active');
            }
        });
    });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
    renderCars();
    initTourSlider(); // <-- Menggantikan renderTours()
    initFaq();
    initSmoothScroll();
    initMenuToggle();
    initNavbarScroll();
    initMobileDropdown();
});