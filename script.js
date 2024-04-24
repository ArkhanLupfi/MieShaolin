document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Loop melalui setiap elemen navigasi
    navLinks.forEach(function(navLink) {
        // Menambahkan event listener untuk setiap elemen navigasi
        navLink.addEventListener("click", function() {
            // Menghapus kelas 'active' dari semua elemen navigasi
            navLinks.forEach(function(link) {
                link.classList.remove("active");
                link.style.color = ""; // Mengatur warna teks kembali ke default untuk semua link
            });
            // Menambahkan kelas 'active' ke elemen navigasi yang sedang diklik
            this.classList.add("active");
            // Mengatur warna teks menjadi #D82525 untuk link yang sedang diklik
            this.style.color = "#D82525";

            // Mengatur warna teks tautan "Contact" menjadi putih saat tautan "Contact" diklik
            if (this.classList.contains("cons")) {
                this.style.color = "#FFFFFF";
            }
        });
    });

    // Mendapatkan button "Order Now"
    const orderButton = document.querySelector('.btn.order');

    // Simpan konten asli button
    const originalContent = orderButton.innerHTML;

    // Konten baru saat di-hover
    const newContent = '<i class="fas fa-phone"></i> +62 666';

    // Event saat hover dimulai
    orderButton.addEventListener('mouseenter', function() {
        // Mengubah konten menjadi konten baru
        orderButton.innerHTML = newContent;
        // Mengubah warna latar belakang dan teks saat di-hover
        orderButton.style.color = 'white';
        orderButton.classList.add('hover');
        orderButton.style.backgroundColor = '#FCC025'; 
    });

    // Event saat hover selesai
    orderButton.addEventListener('mouseleave', function() {
        // Mengembalikan konten ke konten asli
        orderButton.innerHTML = originalContent;
        // Mengembalikan warna latar belakang dan teks ke nilai default
        orderButton.style.color = '';
        orderButton.classList.remove('hover');
        orderButton.style.backgroundColor = '';
    });

    // Mendapatkan semua button dengan kelas .btn-whatsapp
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp');

    // Loop melalui setiap button WhatsApp
    whatsappButtons.forEach(function(button) {
        const originalButton = button.innerHTML;
        const menuName = button.parentElement.querySelector('h3').textContent.trim(); // Mendapatkan nama menu dari teks di dalam elemen h3

        // Event saat hover dimulai jika lebar layar lebih dari 768px
        if (window.innerWidth > 768) {
            button.addEventListener('mouseenter', function() {
                // Simpan konten asli ke dalam atribut data
                button.dataset.originalButton = originalButton;
                // Ganti konten dengan ikon WhatsApp
                button.innerHTML = '<i class="fab fa-whatsapp" style="font-size: 20px;"></i>';
                // Mengubah warna latar belakang dan teks saat di-hover
                button.style.color = 'white';
                button.style.backgroundColor = '#25D366';
            });

            // Event saat hover selesai jika lebar layar lebih dari 768px
            button.addEventListener('mouseleave', function() {
                // Mengembalikan konten ke konten asli
                button.innerHTML = button.dataset.originalButton;
                button.style.backgroundColor = '#f25d5d';
            });
        } else {
            button.addEventListener('mouseenter', function() {
                // Simpan konten asli ke dalam atribut data
                button.dataset.originalButton = originalButton;
                // Ganti konten dengan ikon WhatsApp
                button.style.backgroundColor = '#f25d5d';
            });
        }

        // Mendengarkan event klik pada setiap tombol
        button.addEventListener('click', function() {
            // Memanggil fungsi chat dengan nama menu sebagai argumen
            chat(menuName);
        });
    });

    // Fungsi untuk mengirim pesan WhatsApp
    function chat(menuName) {
        // Pesan yang ingin Anda kirim melalui WhatsApp
        const message = `Halo, saya ingin memesan ${menuName} apakah masih ada?`;
        // Mengodekan pesan untuk URL
        const encodedMessage = encodeURIComponent(message);
        // Nomor WhatsApp yang akan menerima pesan
        const whatsappNumber = '6285175452355';
        // URL ke WhatsApp dengan pesan yang diencode
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        // Membuka WhatsApp di tab atau jendela baru
        window.open(whatsappURL, "_blank");
    }

    // Mendapatkan semua button dengan kelas .btn-love
    const loveButtons = document.querySelectorAll('.btn-love');

    // Loop melalui setiap button
    loveButtons.forEach(button => {
        // Variabel penanda untuk mengetahui status button (diklik atau tidak)
        let isClicked = false;

        // Mendengarkan event klik pada setiap button
        button.addEventListener('click', function() {
            // Jika button belum diklik sebelumnya
            if (!isClicked) {
                button.style.border = 'none';
                button.style.boxShadow = '0 0 12px rgba(0, 0, 0, 0.2)'; // Menambahkan drop shadow
                button.innerHTML = '<img src="Assets/Icon/LoveHover.png" alt="Love Icon" width="20" height="20">';
                button.classList.remove('hover'); // Hilangkan gaya hover jika ada
                // Mengubah status button menjadi sudah diklik
                isClicked = true;
            } else {
                button.style.border = '1px solid #e4e4e4';
                button.style.boxShadow = 'none'; // Menghapus drop shadow
                button.innerHTML = '<img src="Assets/Icon/Love.png" alt="Love Icon" width="15" height="15">';
                button.classList.add('hover'); // Tambahkan gaya hover kembali
                // Mengubah status button menjadi belum diklik
                isClicked = false;
            }
        });

        // Mendengarkan event saat mouse masuk ke button
        button.addEventListener('mouseenter', function() {
            // Jika button belum diklik sebelumnya
            if (!isClicked) {
                button.style.border = '1px solid #606060'; // Tambahkan border saat hover
            }
        });

        // Mendengarkan event saat mouse meninggalkan button
        button.addEventListener('mouseleave', function() {
            // Jika button belum diklik sebelumnya
            if (!isClicked) {
                button.style.border = '1px solid #e4e4e4'; // Hapus border saat tidak dihover
            }
        });
    });

    // Mendapatkan button "Order Now"
    const specialButton = document.querySelector('.btn.specialmenu');

    // Simpan konten asli button
    const specialContent = specialButton.innerHTML;

    // Konten baru saat di-hover
    const newButton = '<i class="fas fa-phone"></i> +62 666';

    // Event saat hover dimulai
    specialButton.addEventListener('mouseenter', function() {
        // Mengubah konten menjadi konten baru
        specialButton.innerHTML = newButton;
        // Mengubah warna latar belakang dan teks saat di-hover
        specialButton.style.color = 'white';
        specialButton.classList.add('hover');
        specialButton.style.backgroundColor = '#FCC025'; 
    });

    // Event saat hover selesai
    specialButton.addEventListener('mouseleave', function() {
        // Mengembalikan konten ke konten asli
        specialButton.innerHTML = specialContent;
        // Mengembalikan warna latar belakang dan teks ke nilai default
        specialButton.style.color = '';
        specialButton.classList.remove('hover');
        specialButton.style.backgroundColor = '';
    });

 
});
