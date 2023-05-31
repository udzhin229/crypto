$(document).ready(function() {
    var coinAbbreviations = {
        'btc': { name: 'BTC', wallet: 'iqgweg1yt23987cbt29es1234' },
        'dog': { name: 'DOGE', wallet: 'examplewallet1' },
        'tezos': { name: 'XTZ', wallet: 'examplewallet2' },
        'zcash': { name: 'ZEC', wallet: 'examplewallet3' },
        'tron': { name: 'TRX', wallet: 'examplewallet4' },
        'litecoin': { name: 'LTC', wallet: 'examplewallet5' },
        'eth': { name: 'ETH', wallet: 'examplewallet6' },
        'stellar': { name: 'XLM', wallet: 'examplewallet7' },
        'monero': { name: 'XMR', wallet: 'examplewallet8' },
        'dash': { name: 'DASH', wallet: 'examplewallet9' },
        'erc20': { name: 'ERC20', wallet: 'examplewallet8' },
        'trc20': { name: 'TRC20', wallet: 'examplewallet8' }
    }
    // Получаем значения из localStorage
    var inFromVal = localStorage.getItem('inFromVal');
    var inToVal = localStorage.getItem('inToVal');
    var inWall = localStorage.getItem('inWall');
    var inMail = localStorage.getItem('inMail');
    var selFrom = localStorage.getItem('selFrom');
    var selTo = localStorage.getItem('selTo');

    if (inFromVal && inToVal && inWall && selFrom && selTo) {
        $('#valFrom').text(inFromVal);
        $('#valTo').text(inToVal);
        $('#wallet').text(coinAbbreviations[selFrom].wallet);
        $('#fromSymb').text(coinAbbreviations[selFrom].name);
        $('#toSymb').text(coinAbbreviations[selTo].name);

        var imageName = "images/svg/" + selFrom + ".svg";
        $("#coin1").attr("src", imageName);
        $("#coin2").attr("src", imageName);
        var imageName1 = "images/svg/" + selTo + ".svg";
        $("#coin3").attr("src", imageName1);
      // Очищаем данные из localStorage
      localStorage.removeItem('inFromVal');
      localStorage.removeItem('inToVal');
      localStorage.removeItem('inWall');
      localStorage.removeItem('inMail');
      localStorage.removeItem('selForm');
      localStorage.removeItem('selTo');
    } else {
      location.href = 'index.html';
    }

    $('#copy1').on('click', function() {
        // Получаем значение из поля с id="name"
        var value = $('#wallet').text();
      
        // Копируем значение в буфер обмена
        navigator.clipboard.writeText(value)
          .then(function() {
            // Выводим сообщение об успешном копировании
            alert('Кошелёк скопирован в буфер обмена.');
          })
          .catch(function(error) {
            // Выводим сообщение об ошибке, если не удалось скопировать текст
            console.error('Ошибка при копировании текста: ', error);
          });
      });

      $('#copy2').on('click', function() {
        // Получаем значение из поля с id="name"
        var value = $('#valFrom').text();
      
        // Копируем значение в буфер обмена
        navigator.clipboard.writeText(value)
          .then(function() {
            // Выводим сообщение об успешном копировании
            alert('Сумма скопирована в буфер обмена.');
          })
          .catch(function(error) {
            // Выводим сообщение об ошибке, если не удалось скопировать текст
            console.error('Ошибка при копировании текста: ', error);
          });
      });

      $('#btnPaid').on('click', function() {
            $('#payData').hide();
            $('#timerAndBtn').hide();
            $('#chek').show();
            $('#status1').removeClass('statusRight').addClass('statusFull');
            $('#status2').removeClass('statusEmpty').addClass('statusRight');
      });
      startTimer('divTimer', 'checkTimer');
  });

  var minutes = 20;
var seconds = 0;

function formatTime(time) {
    return (time < 10 ? "0" : "") + time;
}

function startTimer(divTimerId, checkTimerId) {
    var timer = setInterval(function() {
        seconds--;

        if (seconds < 0) {
            seconds = 59;
            minutes--;

            if (minutes < 0) {
                clearInterval(timer);
                window.location.href = "index.html"; // замените "index.html" на URL вашей главной страницы
                return;
            }
        }

        var formattedTime = formatTime(minutes) + ":" + formatTime(seconds);
        $(`#${divTimerId}`).text(formattedTime);
        $(`#${checkTimerId}`).text(formattedTime);
    }, 1000);
}

