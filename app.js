// Инициализация Telegram WebApp
if (window.Telegram && Telegram.WebApp) {
    Telegram.WebApp.expand();
    Telegram.WebApp.enableClosingConfirmation();
}

// Обработка выбора роли
document.addEventListener('DOMContentLoaded', function() {
    const studentCard = document.getElementById('studentCard');
    const authorCard = document.getElementById('authorCard');
    
    if (studentCard) {
        studentCard.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
    
    if (authorCard) {
        authorCard.addEventListener('click', function() {
            alert('Раздел для авторов в разработке!');
        });
    }

    // Проверка поддержки и регистрация
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('SW registered:', reg))
        .catch(err => console.log('SW failed:', err));
    });
  }

  // В app.js
Telegram.WebApp.expand();
Telegram.WebApp.enableClosingConfirmation();
location.reload(true);  // Принудительная перезагрузка


app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0  

});
