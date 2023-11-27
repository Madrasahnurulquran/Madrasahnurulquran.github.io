// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Ambil elemen visi, profil, dan peta
const visi = document.getElementById("visi");
const profil = document.getElementById("profil");
const peta = document.getElementById("peta");

// Ambil konten visi, profil, dan peta
const visiContent = document.getElementById("visiContent");
const profilContent = document.getElementById("profilContent");
const petaContent = document.getElementById("petaContent");

// Tambahkan event listener saat opsi diklik
visi.addEventListener("click", function (event) {
  event.preventDefault();
  visiContent.style.display = "block";
  profilContent.style.display = "none";
  petaContent.style.display = "none";
});

profil.addEventListener("click", function (event) {
  event.preventDefault();
  profilContent.style.display = "block";
  visiContent.style.display = "none";
  petaContent.style.display = "none";
});

peta.addEventListener("click", function (event) {
  event.preventDefault();
  profilContent.style.display = "none";
  visiContent.style.display = "none";
  petaContent.style.display = "block";
});

// Inisialisasi peta
function initMap() {
  const myLatLng = { lat: -6.222562052639769, lng: 107.14295942391514 };
  const map = new google.maps.Map(document.getElementById("petaContent"), {
    zoom: 15,
    center: myLatLng,
  });

  // Menambahkan marker ke dalam peta
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Madrasah Nurul Qur'an",
  });
}

// Ambil semua elemen contact-item
const contactItems = document.querySelectorAll(".contact-item");

// Tambahkan event click pada setiap contact-item
contactItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Hilangkan kelas 'active' dari semua contact-item
    contactItems.forEach((element) => {
      if (element !== item) {
        element.classList.remove("active");
      }
    });

    // Toggle kelas 'active' pada elemen yang diklik
    item.classList.toggle("active");
  });
});

function toggleDescription(type) {
  const descriptions = document.querySelectorAll(".description");
  descriptions.forEach((desc) => {
    if (desc.id === type) {
      desc.parentElement.classList.toggle("active");
    } else {
      desc.parentElement.classList.remove("active");
    }
  });
}
