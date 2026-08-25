// js/admin.js

// Salin data mobil dari script.js (harus sama)
const cars = [{
        id: 1,
        name: "Honda Brio",
        passenger: { id: "4 Penumpang", en: "4 Passengers" },
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop",
        prices: { manual: "Rp 275.000", matic: "Rp 300.000", withDriver: "Rp 550.000" },
        waNumber: "6282146320344",
        phoneNumber: "0821-4632-0344",
    },
    {
        id: 2,
        name: "Honda Brio Old",
        passenger: { id: "4 Penumpang", en: "4 Passengers" },
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop",
        prices: { manual: "Rp 275.000", matic: "Rp 300.000", withDriver: "Rp 550.000" },
        waNumber: "6282146320344",
        phoneNumber: "0821-4632-0344",
    },
    {
        id: 3,
        name: "Daihatsu Ayla",
        passenger: { id: "4 Penumpang", en: "4 Passengers" },
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
        prices: { manual: "Rp 250.000", matic: "Rp 275.000", withDriver: "Rp 500.000" },
        waNumber: "6282146320344",
        phoneNumber: "0821-4632-0344",
    },
    {
        id: 4,
        name: "Daihatsu Ayla Old",
        passenger: { id: "4 Penumpang", en: "4 Passengers" },
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
        prices: { manual: "Rp 200.000", matic: "Rp 250.000", withDriver: "Rp 450.000" },
        waNumber: "6282146320344",
        phoneNumber: "0821-4632-0344",
    },
    {
        id: 5,
        name: "Toyota Avanza",
        passenger: { id: "6 Penumpang", en: "6 Passengers" },
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop",
        prices: { manual: "Rp 300.000", matic: "Rp 350.000", withDriver: "Rp 600.000" },
        waNumber: "6282146320344",
        phoneNumber: "0821-4632-0344",
    },
    {
        id: 6,
        name: "Toyota Innova",
        passenger: { id: "7 Penumpang", en: "7 Passengers" },
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop",
        prices: { manual: "Rp 400.000", matic: "Rp 450.000", withDriver: "Rp 750.000" },
        waNumber: "6282146320344",
        phoneNumber: "0821-4632-0344",
    },
];

// Fungsi status (sama seperti di script.js)
function getCarStatus(carId) {
    const key = `car_status_${carId}`;
    if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, 'ready');
    }
    return localStorage.getItem(key);
}

function setCarStatus(carId, status) {
    localStorage.setItem(`car_status_${carId}`, status);
}

// Render daftar mobil di admin
function renderAdminCars() {
    const container = document.getElementById('adminCarList');
    if (!container) return;

    container.innerHTML = cars.map(car => {
        const status = getCarStatus(car.id);
        const isRented = status === 'rented';
        const statusClass = isRented ? 'status-rented' : 'status-ready';
        const statusLabel = isRented ? '❌ Dirental' : '✅ Ready';
        const toggleText = isRented ? 'Set Ready' : 'Set Rented';
        const toggleClass = isRented ? 'set-ready' : 'set-rented';

        return `
      <div class="admin-item" data-car-id="${car.id}">
        <div>
          <span class="car-name">${car.name}</span>
          <span class="status-badge ${statusClass}">${statusLabel}</span>
        </div>
        <button class="toggle-btn ${toggleClass}" data-id="${car.id}">
          ${toggleText}
        </button>
      </div>
    `;
    }).join('');

    // Tambahkan event listener ke setiap tombol toggle
    document.querySelectorAll('.admin-item .toggle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const carId = parseInt(this.dataset.id);
            const currentStatus = getCarStatus(carId);
            const newStatus = currentStatus === 'ready' ? 'rented' : 'ready';
            setCarStatus(carId, newStatus);
            renderAdminCars(); // re-render
        });
    });
}

// Jalankan saat halaman admin dimuat
document.addEventListener('DOMContentLoaded', function() {
    renderAdminCars();
});