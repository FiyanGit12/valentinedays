function checkPin() {
    const pin = document.getElementById('pin').value;
    const correctPin = "2025";  // PIN yang benar
    const errorMessage = document.getElementById('error-message');
    const hiddenContent = document.getElementById('hidden-content');
    const audio = document.getElementById('background-audio');

    if (pin === correctPin) {
        document.querySelector('.card-container').style.display = "none";  // Menyembunyikan halaman kartu
        hiddenContent.style.display = "block";  // Menampilkan konten yang tersembunyi
        audio.play();  // Memainkan audio
    } else {
        errorMessage.style.display = "block";  // Menampilkan pesan error
        errorMessage.textContent = "Incorrect PIN, please try again.";
    }
}

// Fungsi untuk mengetikkan teks satu per satu
function typeText(elementId, text, speed) {
    const element = document.getElementById(elementId);
    let index = 0;

    function typeNextCharacter() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeNextCharacter, speed); // Delay untuk karakter berikutnya
        }
    }

    typeNextCharacter();
}

// Menunggu hingga konten halaman muncul, kemudian mulai mengetik
window.onload = function() {
    // Menunggu halaman terbuka, lalu mengetikkan teks
    const text1 = "HII awaa selamat hari Valentine dari akuu, mungkin aku cuma bisa kasih suprise kaya gini aku belum bisa kasih sesuatu buat kamu but aku doain yang terbaik buat kamu semoga impian kamu terwujud dan orang tua kamu selalu sayang sama kamu, Don't let other people judge you before they know about you semangat terus awaa >_<";

    typeText("typing-text", text1, 30); // Mengetikkan teks pertama
};
