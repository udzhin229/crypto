$(document).ready(function() {
    var coinAbbreviations = {
      'btc': 'BTC',
      'dog': 'DOGE',
      'tezos': 'XTZ',
      'zcash': 'ZEC',
      'tron': 'TRX',
      'litecoin': 'LTC',
      'eth': 'ETH',
      'stellar': 'XLM',
      'monero': 'XMR',
      'dash': 'DASH',
      // Другие ключи и значения
    };
  
    // Установка изображения при загрузке страницы
    var selectedCoin = $("#from").val();
    var imageName = "images/svg/" + selectedCoin + ".svg";
    var abbreviation = coinAbbreviations[selectedCoin];
    $("#desc1").text(abbreviation);
    $("#coin1").attr("src", imageName);
  
    // Установка изображения при загрузке страницы
    var selectedCoin1 = $("#to").val();
    var imageName1 = "images/svg/" + selectedCoin1 + ".svg";
    var abbreviation1 = coinAbbreviations[selectedCoin1];
    $("#desc2").text(abbreviation1);
    $("#coin2").attr("src", imageName1);
    $("#coin3").attr("src", imageName1);
  
    function getExchangeRate(currency) {
      var symbol = coinAbbreviations[currency] + "USDT";
      var url = "https://api.binance.com/api/v3/ticker/price?symbol=" + symbol;
  
      return new Promise(function(resolve, reject) {
        $.ajax({
          url: url,
          method: 'GET',
          success: function(response) {
            var exchangeRate = response.price;
            resolve({ currency: currency, rate: exchangeRate });
          },
          error: function(error) {
            reject(error);
          }
        });
      });
    }
  
    function getAllExchangeRates() {
      var exchangeRates = {};
      var promises = [];
  
      for (var currency in coinAbbreviations) {
        promises.push(getExchangeRate(currency));
      }
  
      return Promise.all(promises)
        .then(function(results) {
          results.forEach(function(result) {
            exchangeRates[result.currency] = result.rate;
          });
  
          return exchangeRates;
        })
        .catch(function(error) {
          console.log('Ошибка при получении курса валют:', error);
          return exchangeRates;
        });
    }
  
    function updateExchangeAmount() {
      var fromAmount = parseFloat($("#inputFrom").val());
      var fromCoin = $("#from").val();
      var toCoin = $("#to").val();
  
      if (fromAmount >= 0) {
        var toAmount = (fromAmount * exchangeRates[fromCoin]) / exchangeRates[toCoin];
        $("#inputTo").val(toAmount.toFixed(6));
      } else {
        $("#inputTo").val("0.000000");
      }
    }
  
    function updateExchangeAmountInverse() {
      var toAmount = parseFloat($("#inputTo").val());
      var fromCoin = $("#from").val();
      var toCoin = $("#to").val();
  
      if (toAmount >= 0) {
        var fromAmount = (toAmount * exchangeRates[toCoin]) / exchangeRates[fromCoin];
        $("#inputFrom").val(fromAmount.toFixed(6));
      } else {
        $("#inputFrom").val("0.000000");
      }
    }
  
    function updateExchangeRate() {
      var fromCoin = $("#from").val();
      var toCoin = $("#to").val();
  
      var rate = exchangeRates[fromCoin] / exchangeRates[toCoin];
      var formattedRate = rate.toFixed(9).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ");
  
      $("#bCurs").text("1 " + coinAbbreviations[fromCoin] + " = " + formattedRate + " " + coinAbbreviations[toCoin]);
  
      // Обновить значения полей ввода при изменении курса
      updateExchangeAmount();
      updateExchangeAmountInverse();
    }
  
    $('#updateButton').click(function() {
      getAllExchangeRates()
        .then(function(result) {
          exchangeRates = result;
          console.log(exchangeRates);
  
          updateExchangeRate();
        });
  
      $("#from").change(updateExchangeRate);
      $("#to").change(updateExchangeRate);
    });
  
    $("#from").change(function() {
      var selectedCoin = $(this).val();
      var imageName = "images/svg/" + selectedCoin + ".svg";
      var abbreviation = coinAbbreviations[selectedCoin];
      $("#desc1").text(abbreviation);
      $("#coin1").attr("src", imageName);
      updateExchangeRate();
    });
  
    $("#to").change(function() {
      var selectedCoin1 = $(this).val();
      var imageName1 = "images/svg/" + selectedCoin1 + ".svg";
      var abbreviation1 = coinAbbreviations[selectedCoin1];
      $("#desc2").text(abbreviation1);
      $("#coin2").attr("src", imageName1);
      $("#coin3").attr("src", imageName1);
      updateExchangeRate();
    });
  
    $("#inputFrom").on("input", function() {
      updateExchangeAmount();
    });
  
    $("#inputTo").on("input", function() {
      updateExchangeAmountInverse();
    });
  
    getAllExchangeRates()
      .then(function(result) {
        exchangeRates = result;
  
        updateExchangeRate();
      });
  
    $("#from").change(updateExchangeRate);
    $("#to").change(updateExchangeRate);

    $('#submit').click(function(event) {
        event.preventDefault();
      
        // Получаем значения полей
        var inFromVal = $('#inputFrom').val();
        var inToVal = $('#inputTo').val();
        var inWall = $('#inputFio').val();
        var inMail = $('#inputEmail').val();
        var selFrom = $('#from').val();
        var selTo = $('#to').val();
      
        // Проверка на пустые значения inWall и inMail
        if (inWall === '' || inMail === '' || inFromVal <= 0 || inToVal <= 0) {
          alert('Пожалуйста, заполните все поля.');
          return;
        }
      
        // Проверка на равенство нулю значений inFromVal и inToVal
        // if () {
        //   alert('Значения не могут быть равны нулю.');
        //   return;
        // }
      
        // Сохраняем значения в localStorage
        localStorage.setItem('inFromVal', inFromVal);
        localStorage.setItem('inToVal', inToVal);
        localStorage.setItem('inWall', inWall);
        localStorage.setItem('inMail', inMail);
        localStorage.setItem('selFrom', selFrom);
        localStorage.setItem('selTo', selTo);
      
        // Переходим на другую страницу
        window.location.href = 'order.html'; // Укажите путь к странице-получателю
      });
  });