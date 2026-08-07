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
// PERHATIKAN: Link sekarang kita arahkan ke 1 file pintar yaitu 'tour-detail.html?id=...'
const tours = [{

        id: 1,
        title: 'BALI COMBINE TOUR 1',
        description: 'Bali Combination Tour offers the perfect way to explore Bali by combining its top attractions, cultural landmarks, and natural beauty in one unforgettable journey.',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 350.000',
        badge: 'Populer',
        link: 'tour-detail.html?id=1',
        destinations: [
            {
                name: 'Taman Ayun Temple',
                image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&h=350&fit=crop',
                description: 'Taman Ayun Temple adalah landmark di desa Mengwi, Kabupaten Badung. Kompleks candi ini memiliki arsitektur tradisional yang megah.',
                duration: '1 Jam',
                location: 'Mengwi, Badung'
            },
            {
                name: 'Beratan Lake',
                image: 'https://images.unsplash.com/photo-1588868109521-a4a3a1bcd7c6?w=500&h=350&fit=crop',
                description: 'Danau Beratan terletak di Bedugul. Ini adalah danau yang sangat indah dengan pura di tengahnya.',
                duration: '1.5 Jam',
                location: 'Candikuning, Tabanan'
            }
        ],
        itineraries: [
            { time: '08:00', title: 'Pick Up di Hotel', description: 'Driver akan menjemput Anda di lobby hotel dengan kendaraan premium.' },
            { time: '09:00', title: 'Taman Ayun Temple', description: 'Mengunjungi candi peninggalan kerajaan Mengwi.' },
            { time: '11:00', title: 'Beratan Lake', description: 'Menikmati keindahan danau Beratan.' }
        ]
    },
    {
        id: 2,
        title: 'LOVINA DOLPHIN TOUR',
        description: 'Lovina Dolphin Tour offers a memorable sunrise experience where you can watch wild dolphins in their natural habitat while enjoying the peaceful beauty of Lovina Beach.',
        image: 'https://images.unsplash.com/photo-1588868109521-a4a3a1bcd7c6?w=400&h=300&fit=crop',
        price: 'Rp 400.000',
        badge: 'Best Seller',
        link: 'tour-detail.html?id=2'
    },
    {
        id: 3,
        title: 'UBUD TOUR #1',
        description: 'Part of the Puri Semarapura royal palace complex – a grand hall and a floating pavilion.',
        image: 'https://images.unsplash.com/photo-1580127428408-3ed6be5b1d7d?w=400&h=300&fit=crop',
        price: 'Rp 450.000',
        badge: 'Eksklusif',
        link: 'tour-detail.html?id=3'
    },
    {
        id: 4,
        title: 'UBUD TOUR #2',
        description: 'Nikmati sunset romantis di Uluwatu dengan pertunjukan Kecak dan pemandangan tebing.',
        image: 'https://images.unsplash.com/photo-1580455732977-1e71f3a0d6a8?w=400&h=300&fit=crop',
        price: 'Rp 380.000',
        badge: 'Romantis',
        link: 'tour-detail.html?id=4'
    },
    {
        id: 5,
        title: 'BEDUGUL TOUR',
        description: 'Jelajahi keindahan pantai Kelingking, Angel Billabong, dan Broken Beach di Nusa Penida.',
        image: 'https://images.unsplash.com/photo-1588868109521-a4a3a1bcd7c6?w=400&h=300&fit=crop',
        price: 'Rp 500.000',
        badge: 'Petualangan',
        link: 'tour-detail.html?id=5'
    },
    {
        id: 6,
        title: 'NUSA PENIDA PACKAGE 1',
        description: 'Saksikan lumba-lumba liar di pagi hari dan nikmati keindahan pantai Lovina yang tenang.',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour-detail.html?id=6'
    },
    {
        id: 7,
        title: 'NUSA PENIDA PACKAGE 2',
        description: 'Snorkeling & West Trip.',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour-detail.html?id=7'
    },
    {
        id: 8,
        title: 'BALI FUN TOUR',
        description: 'Mix West & East trip',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour-detail.html?id=8'
    },
    {
        id: 9,
        title: 'TANAH LOT TOUR',
        description: 'Mix West & East trip',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour-detail.html?id=9'
    },
    {
        id: 10,
        title: 'ULUWATU TOUR',
        description: 'Mix West & East trip',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour-detail.html?id=10'
    },
    {
        id: 11,
        title: 'KINTAMANI TOUR',
        description: 'Mix West & East trip',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour-detail.html?id=11'
    },
    {
        id: 12,
        title: 'LEMPUYANG TOUR',
        description: 'Mix West & East trip',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour-detail.html?id=12'
    },
    {
        id: 13,
        title: 'WATER FALLS TOUR',
        description: 'Mix West & East trip',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour-detail.html?id=13'
    },
    {
        id: 14,
        title: 'BALI COMBINE TOUR 2',
        description: 'Mix West & East trip',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour-detail.html?id=14'
    },
    {
        id: 15,
        title: 'ATV QUAD BIKE',
        description: 'Mix West & East trip',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour-detail.html?id=15'
    },
    {
        id: 17, // Membiarkan ID 17 karena data aslinya melompat dari 15 ke 17
        title: 'BATUR JEEP SUNRISE',
        description: 'Mix West & East trip',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour-detail.html?id=17'
    },
    {
        id: 18,
        title: 'FUN ACTIVITIES',
        description: 'Mix West & East trip',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
        price: 'Rp 420.000',
        badge: 'Populer',
        link: 'tour-detail.html?id=18'
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

    const slideSize = window.innerWidth <= 768 ? 2 : window.innerWidth <= 992 ? 2 : 3;
    const slides = [];
    for (let i = 0; i < tours.length; i += slideSize) {
        slides.push(tours.slice(i, i + slideSize));
    }
    totalSlides = slides.length;

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

    const prevBtn = document.getElementById('tourPrevBtn');
    if (prevBtn) {
        prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    }

    const nextBtn = document.getElementById('tourNextBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    }

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

    // Re-render slider on window resize to adjust grid
    window.addEventListener('resize', () => {
        const currentSize = window.innerWidth <= 768 ? 2 : window.innerWidth <= 992 ? 2 : 3;
        // Simple trick to check if grid size needs update without complex logic
        renderTourSlider();
    });
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
            if (target) {
                // Adjust scroll position for fixed header
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
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
        if (navMenu && toggle && !navMenu.contains(e.target) && !toggle.contains(e.target)) {
            navMenu.classList.remove('active');
            toggle.querySelector('i').className = 'fas fa-bars';
        }
    });
}

// ===== NAVBAR SCROLL =====
function initNavbarScroll() {
    const header = document.getElementById('header');
    if(!header) return;
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

// ===== RENDER TOUR DETAIL (HALAMAN PINTAR) =====
function renderTourDetail() {
    // Cek apakah kita sedang berada di halaman tour-detail.html
    if (!window.location.pathname.includes('tour-detail.html')) return;

    // Ambil ID dari URL (contoh: ?id=2)
    const urlParams = new URLSearchParams(window.location.search);
    const tourId = parseInt(urlParams.get('id'));

    // Cari data tour berdasarkan ID di array tours
    const tour = tours.find(t => t.id === tourId);

    // Jika tour tidak ditemukan (misal user iseng ganti URL), kembalikan ke halaman utama
    if (!tour) {
        window.location.href = 'index.html';
        return;
    }

    // Ubah elemen HTML sesuai data tour yang diklik!
    document.getElementById('tourDetailBg').style.backgroundImage = `url('${tour.image}')`;
    document.getElementById('tourBreadcrumb').innerText = tour.title;

    // Memisahkan kata pertama agar kata berikutnya berwarna emas (sesuai desain)
    const titleParts = tour.title.split(' ');
    const firstWord = titleParts.shift();
    const restOfWords = titleParts.join(' ');
    document.getElementById('tourTitle').innerHTML = `${firstWord} <span>${restOfWords}</span>`;

    document.getElementById('tourHeroDesc').innerText = tour.description;
    document.getElementById('tourPriceMeta').innerHTML = `<i class="fas fa-tag"></i> Mulai ${tour.price}`;
    document.getElementById('tourSidebarPrice').innerText = tour.price;

    // Update link tombol WhatsApp agar pesannya langsung menyebutkan nama paket
    const waMessage = `Halo KARI GARAGE, saya tertarik dengan paket *${tour.title}*. Bisa minta info lebih lanjut?`;
    const waLink = `https://wa.me/6282146320344?text=${encodeURIComponent(waMessage)}`;

    document.getElementById('tourSidebarWaBtn').href = waLink;
    document.getElementById('tourWaBtn').href = waLink;

    // ===== KODE BARU: MENGHIDUPKAN FORM BOOKING =====
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah halaman me-reload saat tombol ditekan

            // Ambil data yang diketik oleh pengunjung
            const name = document.getElementById('bookName').value;
            const date = document.getElementById('bookDate').value;
            const pax = document.getElementById('bookPax').value;

            // Susun pesan WhatsApp agar rapi dan profesional
            const message = `Halo KARI GARAGE, saya ingin booking paket tour berikut:\n\n` +
                            `📦 *Paket:* ${tour.title}\n` +
                            `👤 *Nama:* ${name}\n` +
                            `📅 *Tanggal:* ${date}\n` +
                            `👥 *Jumlah Peserta:* ${pax} Orang\n\n` +
                            `Mohon informasi ketersediaan dan detail pembayarannya. Terima kasih!`;

            // Buat link WhatsApp dan buka di tab baru
            const waFormUrl = `https://wa.me/6282146320344?text=${encodeURIComponent(message)}`;
            window.open(waFormUrl, '_blank');
        });
    }

    // ===== KODE BARU: RENDER DESTINASI DINAMIS =====
    const destContainer = document.getElementById('tourDestinations');
    if (destContainer) {
        // Cek apakah data destinasinya ada di dalam array
        if (tour.destinations && tour.destinations.length > 0) {
            destContainer.innerHTML = tour.destinations.map((dest, index) => `
                <div class="destination-item ${index % 2 !== 0 ? 'reverse' : ''}">
                    <div class="destination-image">
                        <img src="${dest.image}" alt="${dest.name}" />
                    </div>
                    <div class="destination-info">
                        <h3>${dest.name}</h3>
                        <p>${dest.description}</p>
                        <div class="destination-details">
                            <span><i class="fas fa-clock"></i> ${dest.duration}</span>
                            <span><i class="fas fa-map-pin"></i> ${dest.location}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        } else {
            // Jika datanya kosong, tampilkan pesan ini
            destContainer.innerHTML = '<p style="text-align:center; color:#888;">Data destinasi belum tersedia. Segera diupdate!</p>';
        }
    }

    // ===== KODE BARU: RENDER ITINERARY DINAMIS =====
    const itinContainer = document.getElementById('tourItinerary');
    if (itinContainer) {
        if (tour.itineraries && tour.itineraries.length > 0) {
            itinContainer.innerHTML = tour.itineraries.map(itin => `
                <div class="itinerary-item">
                    <div class="itinerary-time">${itin.time}</div>
                    <div class="itinerary-content">
                        <h4>${itin.title}</h4>
                        <p>${itin.description}</p>
                    </div>
                </div>
            `).join('');
        } else {
            itinContainer.innerHTML = '<p style="text-align:center; color:#888;">Data itinerary belum tersedia. Segera diupdate!</p>';
        }
    }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
    renderCars();
    initTourSlider();
    initFaq();
    initSmoothScroll();
    initMenuToggle();
    initNavbarScroll();
    initMobileDropdown();
    renderTourDetail(); // <--- KODE BARU DITAMBAHKAN DI SINI
});
