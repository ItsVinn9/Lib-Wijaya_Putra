document.getElementById('absenButton').addEventListener('click', function() {
    const nameInput = document.getElementById('name').value;
    const welcomeMessage = document.getElementById('welcomeMessage');



    if (nameInput) {
        welcomeMessage.textContent = `Selamat Datang, ${nameInput}!`;
        welcomeMessage.classList.remove('hidden');



        const utterance = new SpeechSynthesisUtterance(`Selamat Datang, ${nameInput}!`);
        speechSynthesis.speak(utterance);
    } else {
        alert('Silakan masukkan nama Anda!');
    }
});