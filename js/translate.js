// $(document).ready(function() {
//     var translations = {
//       'en': {
//         'title': 'HIGH-QUALITY AND FAST CURRENCY EXCHANGE SERVICE',
//         'give': 'You give',
//         'get': 'You get',
//         'wallet': 'Wallet adress',
//         'ex': 'Ex. rate: ',
//         'button': 'Make an exchange',
//         'check1': 'I agree to the processing of personal data and accept',
//         'check2': 'exchange rules',
//         'intro-dttl1': 'Boost your reach with paid advertising.',
//         'intro-dttl2': 'Highlight your presence on social media.',
//         'intro-dttl3': 'Increase your conversions with email marketing',
//         'art': 'About us',
//         'about-title': 'Trian Agency: Strategic Marketing Experts',
//         'about-text': 'Trian Agency is a specialized agency that provides a wide range of services in the marketing field to help companies achieve their goals.',
//         'clients': 'Clients',
//         'form1': 'Get in touch with us',
//         'form2': 'We´re here to enhance your marketing strategies', 
//         'f-text1': 'Trian Agency is a specialized agency that provides a wide range of services in the marketing field to help companies achieve their goals.',
//         'f-text2': 'COMPANY',
//         'f-text3': 'CONTACTS',
//         'f-a1': 'Home',
//         'f-a2': 'About us',
//         'f-a3': 'Clients',
//         'f-a4': 'Contact',
//       },
//       'ru': {
//         'title': 'КАЧЕСТВЕННЫЙ И БЫСТРЫЙ СЕРВИС ОБМЕНА ВАЛЮТЫ',
//         'give': 'Вы даете',
//         'get': 'Вы получаете',
//         'wallet': 'Адрес кошелька',
//         'ex': 'Курс обмена: ',
//         'button': 'Произвести обмен',
//         'check1': 'Я согласен на обработку персональных данных и принимаю',
//         'check2': 'правила обмена',
//         'intro-ttl3': 'Email marketing',
//         'intro-dttl1': 'Potencialize o seu alcance com publicidade paga.',
//         'intro-dttl2': 'Destaque a sua presença nas redes sociais.',
//         'intro-dttl3': 'Aumente as suas conversões com email marketing.',
//         'art': 'Sobre nós',
//         'about-title': 'Trian Agency: Especialistas em Marketing Estratégico',
//         'about-text': 'A Trian Agency é uma agência especializada em oferecer uma ampla gama de serviços na área de marketing para ajudar as empresas a alcançarem seus objetivos.',
//         'clients': 'Clientes',
//         'form1': 'Entre em contacto connosco',
//         'form2': 'Estamos aqui para  melhorar as suas estratégias de marketing. ', 
//         'f-text1': 'A Trian Agency é uma agência especializada em oferecer uma ampla gama de serviços na área de marketing para ajudar as empresas a alcançarem seus objetivos.',
//         'f-text2': 'EMPRESA',
//         'f-text3': 'CONTACTOS',
//         'f-a1': 'Home',
//         'f-a2': 'Sobre nós',
//         'f-a3': 'Clientes',
//         'f-a4': 'Contacto',
//       }
//     };
  
//     // Получение текущего языка из localStorage или установка языка по умолчанию
//     var currentLanguage = localStorage.getItem('language');
//     if (!(currentLanguage in translations)) {
//       currentLanguage = 'en'; // Установка языка по умолчанию
//     }
  
//     // Функция для перевода контента на выбранный язык
//     function translateContent(lang) {
//       $('[data-translation-key]').each(function() {
//         var key = $(this).data('translation-key');
//         $(this).text(translations[lang][key]);
//       });
//       $('#submit').attr('value', translations[lang]['button']);
//       $('#inputFio').attr('placeholder', translations[lang]['wallet']);
//     }
  
//     // Функция для добавления класса 'active' к активной ссылке на язык
//     function setActiveLanguageLink(lang) {
//       $('.language-link').removeClass('active');
//       $('.language-link[data-lang="' + lang + '"]').addClass('active');
//     }
  
//     // Установка языка по умолчанию и перевод контента
//     translateContent(currentLanguage);
//     setActiveLanguageLink(currentLanguage);
  
//     // Обработчик клика по ссылке на язык
//     $('.language-link').click(function(e) {
//       e.preventDefault();
//       var lang = $(this).data('lang');
//       translateContent(lang);
//       setActiveLanguageLink(lang);
//       localStorage.setItem('language', lang); // Сохранение выбранного языка в localStorage
//     });
//   });