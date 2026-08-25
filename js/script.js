// js/script.js

// Data Mobil
const cars = [
  {
    id: 1,
    name: "Honda Brio",
    passenger: { id: "4 Penumpang", en: "4 Passengers", zh: "4 位乘客" },
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop",
    prices: {
      manual: "Rp 275.000",
      matic: "Rp 300.000",
      withDriver: "Rp 550.000",
    },
    waNumber: "6282146320344",
    phoneNumber: "0821-4632-0344",
  },
  {
    id: 2,
    name: "Honda Brio Old",
    passenger: { id: "4 Penumpang", en: "4 Passengers", zh: "4 位乘客" },
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop",
    prices: {
      manual: "Rp 275.000",
      matic: "Rp 300.000",
      withDriver: "Rp 550.000",
    },
    waNumber: "6282146320344",
    phoneNumber: "0821-4632-0344",
  },
  {
    id: 3,
    name: "Daihatsu Ayla",
    passenger: { id: "4 Penumpang", en: "4 Passengers", zh: "4 位乘客" },
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
    prices: {
      manual: "Rp 250.000",
      matic: "Rp 275.000",
      withDriver: "Rp 500.000",
    },
    waNumber: "6282146320344",
    phoneNumber: "0821-4632-0344",
  },
  {
    id: 4,
    name: "Daihatsu Ayla Old",
    passenger: { id: "4 Penumpang", en: "4 Passengers", zh: "4 位乘客" },
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
    prices: {
      manual: "Rp 200.000",
      matic: "Rp 250.000",
      withDriver: "Rp 450.000",
    },
    waNumber: "6282146320344",
    phoneNumber: "0821-4632-0344",
  },
  {
    id: 5,
    name: "Toyota Avanza",
    passenger: { id: "6 Penumpang", en: "6 Passengers", zh: "6 位乘客" },
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop",
    prices: {
      manual: "Rp 300.000",
      matic: "Rp 350.000",
      withDriver: "Rp 600.000",
    },
    waNumber: "6282146320344",
    phoneNumber: "0821-4632-0344",
  },
  {
    id: 6,
    name: "Toyota Innova",
    passenger: { id: "7 Penumpang", en: "7 Passengers", zh: "7 位乘客" },
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop",
    prices: {
      manual: "Rp 400.000",
      matic: "Rp 450.000",
      withDriver: "Rp 750.000",
    },
    waNumber: "6282146320344",
    phoneNumber: "0821-4632-0344",
  },
];

// Data Tur
const tours = [
  {
    id: 1,
    title: "BALI COMBINE TOUR 1",
    badge: { id: "Populer", en: "Popular", zh: "热门" },
    description: "Bali Combination Tour offers the perfect way to explore Bali by combining its top attractions, cultural landmarks, and natural beauty in one unforgettable journey.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop",
    price: "Rp 350.000",
    link: "tour-detail.html?id=1",
  },
  {
    id: 2,
    title: "LOVINA DOLPHIN TOUR",
    badge: { id: "Best Seller", en: "Best Seller", zh: "畅销" },
    description: "Lovina Dolphin Tour offers a memorable sunrise experience where you can watch wild dolphins in their natural habitat while enjoying Lovina Beach.",
    image: "https://images.unsplash.com/photo-1588868109521-a4a3a1bcd7c6?w=400&h=300&fit=crop",
    price: "Rp 400.000",
    link: "tour-detail.html?id=2",
  },
  {
    id: 3,
    title: "UBUD TOUR #1",
    badge: { id: "Eksklusif", en: "Exclusive", zh: "尊享" },
    description: "Part of the Puri Semarapura royal palace complex – a grand hall and a floating pavilion.",
    image: "https://images.unsplash.com/photo-1580127428408-3ed6be5b1d7d?w=400&h=300&fit=crop",
    price: "Rp 450.000",
    link: "tour-detail.html?id=3",
  },
  {
    id: 4,
    title: "UBUD TOUR #2",
    badge: { id: "Romantis", en: "Romantic", zh: "浪漫" },
    description: "Nikmati sunset romantis di Uluwatu dengan pertunjukan Kecak dan pemandangan tebing.",
    image: "https://images.unsplash.com/photo-1580455732977-1e71f3a0d6a8?w=400&h=300&fit=crop",
    price: "Rp 380.000",
    link: "tour-detail.html?id=4",
  },
  {
    id: 5,
    title: "BEDUGUL TOUR",
    badge: { id: "Petualangan", en: "Adventure", zh: "探险" },
    description: "Jelajahi keindahan Danau Beratan, Pura Ulun Danu, serta pemandangan alam pegunungan Bedugul yang sejuk.",
    image: "https://images.unsplash.com/photo-1588868109521-a4a3a1bcd7c6?w=400&h=300&fit=crop",
    price: "Rp 500.000",
    link: "tour-detail.html?id=5",
  },
  {
    id: 6,
    title: "NUSA PENIDA PACKAGE 1",
    badge: { id: "Populer", en: "Popular", zh: "热门" },
    description: "Nikmati keindahan tebing Kelingking Beach, Broken Beach, dan Angel's Billabong yang menakjubkan.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop",
    price: "Rp 420.000",
    link: "tour-detail.html?id=6",
  },
];

let currentSlide = 0;
let totalSlides = 0;
let currentLang = localStorage.getItem("preferredLang") || "id";

// Helper Ambil Kamus Bahasa
function getTranslation() {
  return typeof translations !== "undefined" && translations[currentLang]
    ? translations[currentLang]
    : translations.id;
}

// LOGIKA UTAMA SWITCHER BAHASA
function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("preferredLang", lang);

  // Update Tampilan Tombol Active (Termasuk ZH)
  const btnId = document.getElementById("btn-id");
  const btnEn = document.getElementById("btn-en");
  const btnZh = document.getElementById("btn-zh");

  if (btnId) btnId.classList.toggle("active", lang === "id");
  if (btnEn) btnEn.classList.toggle("active", lang === "en");
  if (btnZh) btnZh.classList.toggle("active", lang === "zh");

  // Update Teks Statis pada HTML
  const t = getTranslation();
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (t[key]) {
      element.innerHTML = t[key];
    }
  });

  // Re-render Konten Dinamis JavaScript
  renderCars();
  renderTourSlider();
  renderTourDetail();
}

// Menampilkan Armada Mobil
function renderCars() {
  const carsGrid = document.getElementById("carsGrid");
  if (!carsGrid) return;

  const t = getTranslation();

  carsGrid.innerHTML = cars
    .map(
      (car) => `
        <div class="car-card">
            <img src="${car.image}" alt="${car.name}" class="car-image" />
            <div class="car-info">
                <div class="car-header">
                    <h3 class="car-name">${car.name}</h3>
                    <span class="car-passenger"><i class="fas fa-user"></i> ${car.passenger[currentLang] || car.passenger.id}</span>
                </div>

                <div class="car-details">
                    <span><i class="fas fa-tag"></i> ${t["car_type"]}</span>
                    <span><i class="fas fa-clock"></i> ${t["car_duration"]}</span>
                </div>

                <div class="price-row">
                    <div class="price-item">
                        <span class="price-label"><i class="fas fa-car"></i> ${t["price_manual"]}</span>
                        <span class="price-value">${car.prices.manual}</span>
                    </div>
                    <div class="price-item">
                        <span class="price-label"><i class="fas fa-car"></i> ${t["price_matic"]}</span>
                        <span class="price-value">${car.prices.matic}</span>
                    </div>
                    <div class="price-item">
                        <span class="price-label"><i class="fas fa-user-tie"></i> ${t["price_driver"]}</span>
                        <span class="price-value">${car.prices.withDriver}</span>
                    </div>
                </div>

                <div class="car-actions">
                    <a href="https://wa.me/${car.waNumber}?text=Halo%20KARI%20GARAGE%2C%20saya%20mau%20booking%20mobil%20${encodeURIComponent(car.name)}"
                       target="_blank"
                       class="btn-wa">
                        <i class="fab fa-whatsapp"></i> ${t["btn_book_wa"]}
                    </a>
                    <a href="tel:${car.phoneNumber}" class="btn-phone">
                        <i class="fas fa-phone"></i> ${t["btn_phone"]}
                    </a>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// Menampilkan Slider Tur
function renderTourSlider() {
  const container = document.getElementById("tourSliderContainer");
  if (!container) return;

  const t = getTranslation();
  const slideSize = window.innerWidth <= 768 ? 1 : window.innerWidth <= 992 ? 2 : 3;
  const slides = [];

  for (let i = 0; i < tours.length; i += slideSize) {
    slides.push(tours.slice(i, i + slideSize));
  }
  totalSlides = slides.length;

  if (currentSlide >= totalSlides) {
    currentSlide = Math.max(0, totalSlides - 1);
  }

  container.innerHTML = slides
    .map(
      (slideTours, index) => `
        <div class="tour-slide" data-index="${index}">
            ${slideTours
          .map(
            (tour) => `
                <div class="tour-card">
                    <div class="tour-image" style="background-image: url('${tour.image}');">
                        <span class="tour-badge">${tour.badge[currentLang] || tour.badge.id}</span>
                    </div>
                    <div class="tour-info">
                        <h3>${tour.title}</h3>
                        <p>${tour.description}</p>
                        <div class="tour-footer">
                            <span class="tour-price">${t["tour_start_from"]} ${tour.price}</span>
                            <a href="${tour.link}" class="btn-tour">${t["btn_see_details"]}</a>
                        </div>
                    </div>
                </div>
            `
          )
          .join("")}
        </div>
    `
    )
    .join("");

  updateDots();
  updateSliderPosition();
}

function updateSliderPosition() {
  const container = document.getElementById("tourSliderContainer");
  if (!container) return;
  const offset = -currentSlide * 100;
  container.style.transform = `translateX(${offset}%)`;
}

function updateDots() {
  const dotsContainer = document.getElementById("tourDots");
  if (!dotsContainer) return;

  dotsContainer.innerHTML = Array.from(
    { length: totalSlides },
    (_, i) => `<button class="dot ${i === currentSlide ? "active" : ""}" data-index="${i}"></button>`
  ).join("");

  dotsContainer.querySelectorAll(".dot").forEach((dot) => {
    dot.addEventListener("click", function () {
      goToSlide(parseInt(this.dataset.index));
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

  const prevBtn = document.getElementById("tourPrevBtn");
  if (prevBtn) prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));

  const nextBtn = document.getElementById("tourNextBtn");
  if (nextBtn) nextBtn.addEventListener("click", () => goToSlide(currentSlide + 1));

  let autoPlayInterval;
  const startAutoPlay = () => {
    if (autoPlayInterval) clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
  };
  const stopAutoPlay = () => {
    if (autoPlayInterval) clearInterval(autoPlayInterval);
  };

  const wrapper = document.querySelector(".tour-slider-wrapper");
  if (wrapper) {
    wrapper.addEventListener("mouseenter", stopAutoPlay);
    wrapper.addEventListener("mouseleave", startAutoPlay);
  }

  startAutoPlay();
  window.addEventListener("resize", renderTourSlider);
}

// Menampilkan Halaman Detail Tur
function renderTourDetail() {
  if (!window.location.pathname.includes("tour-detail.html")) return;

  const urlParams = new URLSearchParams(window.location.search);
  const tourId = parseInt(urlParams.get("id"));
  const tour = tours.find((t) => t.id === tourId);
  const t = getTranslation();

  if (!tour) {
    window.location.href = "index.html";
    return;
  }

  const bgEl = document.getElementById("tourDetailBg");
  if (bgEl) bgEl.style.backgroundImage = `url('${tour.image}')`;

  const breadcrumbEl = document.getElementById("tourBreadcrumb");
  if (breadcrumbEl) breadcrumbEl.innerText = tour.title;

  const titleParts = tour.title.split(" ");
  const firstWord = titleParts.shift();
  const restOfWords = titleParts.join(" ");
  const titleEl = document.getElementById("tourTitle");
  if (titleEl) titleEl.innerHTML = `${firstWord} <span>${restOfWords}</span>`;

  const descEl = document.getElementById("tourHeroDesc");
  if (descEl) descEl.innerText = tour.description;

  const priceMetaEl = document.getElementById("tourPriceMeta");
  if (priceMetaEl) priceMetaEl.innerHTML = `<i class="fas fa-tag"></i> ${t["tour_start_from"]} ${tour.price}`;

  const sidePriceEl = document.getElementById("tourSidebarPrice");
  if (sidePriceEl) sidePriceEl.innerText = tour.price;
}

// Inisialisasi Accordion FAQ
function initFaq() {
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", function () {
      const item = this.parentElement;
      const isActive = item.classList.contains("active");
      document.querySelectorAll(".faq-item").forEach((el) => el.classList.remove("active"));
      if (!isActive) item.classList.add("active");
    });
  });
}

// Smooth Scroll Navigasi
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Mobile Menu Toggle
function initMenuToggle() {
  const toggle = document.getElementById("menuToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      const navMenu = document.getElementById("navMenu");
      navMenu.classList.toggle("active");
      const icon = this.querySelector("i");
      icon.className = navMenu.classList.contains("active") ? "fas fa-times" : "fas fa-bars";
    });
  }
}

// Sticky Navbar Scroll
function initNavbarScroll() {
  const header = document.getElementById("header");
  if (!header) return;
  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
}

// Mobile Dropdown
function initMobileDropdown() {
  document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.closest(".dropdown").classList.toggle("active");
      }
    });
  });
}

// Jalankan saat dokumen selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  changeLanguage(currentLang);
  initTourSlider();
  initFaq();
  initSmoothScroll();
  initMenuToggle();
  initNavbarScroll();
  initMobileDropdown();
});