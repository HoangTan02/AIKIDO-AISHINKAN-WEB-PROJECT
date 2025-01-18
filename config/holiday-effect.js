document.addEventListener('DOMContentLoaded', function () {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0, cần +1
    const year = currentDate.getFullYear();

    // Hiển thị hiệu ứng dựa trên thời gian
    if (month === 12 && day >= 1 && day <= 25) {
        showSnowEffect();
    } else if ((month === 1 && day >= 18) || (month === 2 && day <= 15)) {
        showFireworkEffect();
    } else if (month === 8 && day >= 1 && day <= 18) {
        showCountdownDialog(new Date(year, 7, 18)); // Tháng cần set -1
    }
});

//Giáng sinh
function showSnowEffect() {
    const snowContainer = document.createElement('div');
    snowContainer.classList.add('snow-container');
    document.body.appendChild(snowContainer);

    // Danh sách các bông tuyết
    const snowflakeImages = [
        '../images/snowflake.png',
        '../images/snowflake2.png',
        '../images/snowflake3.png',
        '../images/snowflake4.png',
    ];

    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Chọn ngẫu nhiên một hình ảnh bông tuyết
        const randomImage = snowflakeImages[Math.floor(Math.random() * snowflakeImages.length)];
        snowflake.style.backgroundImage = `url(${randomImage})`;

        // Vị trí và tốc độ ngẫu nhiên
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // 2-5 giây
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Thời gian bắt đầu ngẫu nhiên

        snowContainer.appendChild(snowflake);
    }

    // Gỡ hiệu ứng sau 3 giây
    setTimeout(() => {
        snowContainer.remove();
    }, 8000);
}


//Tết
function showFireworkEffect() {
    const fireworkContainer = document.createElement('div');
    fireworkContainer.classList.add('firework-container');
    document.body.appendChild(fireworkContainer);

    // Danh sách các icon và lì xì
    const fireworkIcons = [
        '../images/red-envelope.png',
        '../images/red-envelope1.png',
        '../images/red-envelope2.png',
        '../images/red-envelope3.png',
    ];
    

    for (let i = 0; i < 50; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');

        // Icon ngẫu nhiên
        const randomIcon = fireworkIcons[Math.floor(Math.random() * fireworkIcons.length)];
        firework.style.backgroundImage = `url(${randomIcon})`;

        // Tạo hiệu ứng rơi
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.animationDuration = `${Math.random() * 3 + 2}s`;
        firework.style.animationDelay = `${Math.random() * 5}s`;

        fireworkContainer.appendChild(firework);
    }

    // Hiển thị thông báo "Chúc mừng năm mới!"
    const newYearMessage = document.createElement('div');
    newYearMessage.classList.add('new-year-message');
    newYearMessage.innerHTML = `
        <div>🌸 <strong>CHÚC MỪNG NĂM MỚI!</strong> 🌸</div>
        <div><strong>AN KHANG THỊNH VƯỢNG</strong> , <strong>VẠN SỰ NHƯ Ý!</strong></div>
    `;
    document.body.appendChild(newYearMessage);

    // Gỡ hiệu ứng sau 8 giây
    setTimeout(() => {
        fireworkContainer.remove();
        newYearMessage.remove();
    }, 5000);
}


function showCountdownDialog(targetDate) {
    const countdownDialog = document.createElement('div');
    countdownDialog.classList.add('countdown-dialog');
    
    const countdownText = document.createElement('p');
    const footerText = document.createElement('div');
    footerText.classList.add('footer');
    footerText.textContent = 'Hãy chuẩn bị cho ngày lễ AISHINKAN DAY!';
    
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-btn');
    closeButton.textContent = 'X'; // Nút đóng
    
    countdownDialog.appendChild(countdownText);
    countdownDialog.appendChild(footerText);
    countdownDialog.appendChild(closeButton); // Thêm nút đóng vào thông báo
    document.body.appendChild(countdownDialog);

    closeButton.addEventListener('click', () => {
        countdownDialog.remove(); // Xóa thông báo khi nhấn nút đóng
    });

    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
            countdownText.innerHTML = "<span class='highlight'>AISHINKAN DAY đã đến!</span>";
            clearInterval(interval);
        } else {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            countdownText.innerHTML = `AISHINKAN DAY còn <span class='highlight'>${days}</span> ngày!`;
        }
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000); // Cập nhật mỗi giây
}





