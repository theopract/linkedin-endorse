
(function (window, undefined) {  // [2] нормализуем window
  var w;
  if (typeof unsafeWindow != 'undefined') {
    w = unsafeWindow;
  } else {
    w = window;
  }
  // В юзерскрипты можно вставлять практически любые javascript-библиотеки.
  // Код библиотеки копируется прямо в юзерскрипт.
  // При подключении библиотеки нужно передать w в качестве параметра окна window
  // Пример: подключение jquery.min.js
  // (function(a,b){function ci(a) ... a.jQuery=a.$=d})(w);

  // [3] не запускаем скрипт во фреймах
  // без этого условия скрипт будет запускаться несколько раз на странице с фреймами
  if (w.self != w.top) {
    return;
  }
  // страница со списком друзей
  // ВАЖНО - после перехода на новую страницу сбрасываются все перменные и функции
  var friendsURL = 'https://www.linkedin.com/mynetwork/invite-connect/connections/';


  function scrollPage() {
    // промотка текущей страницы
    var timerId = setInterval(function () {
      w.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }, 50);
    setTimeout(function () {
      clearInterval(timerId);
    }, 1000);
  }


  function init() {
    //debugger;
    //w.location.href = friendsURL;

    setTimeout(function () {
      // промотка текущей страницы
      var timerId = setInterval(function () {
        w.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
      }, 50);
      setTimeout(function () {
        clearInterval(timerId);
      }, 1000);
    }, 10000);
  }

  init();

})(window);
