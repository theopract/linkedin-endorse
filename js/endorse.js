// страница со списком друзей
// ВАЖНО - после перехода на новую страницу сбрасываются все перменные и функции
var friendsURL = 'https://www.linkedin.com/mynetwork/invite-connect/connections/';


var scrollPage = function () {
  // промотка текущей страницы
  var timerId = setInterval(function () {
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
  }, 50);
  setTimeout(function () {
    clearInterval(timerId);
  }, 1000);
}

window.location.href = friendsURL;

setTimeout(function () {
  // промотка текущей страницы
  var timerId = setInterval(function () {
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
  }, 50);
  setTimeout(function () {
    clearInterval(timerId);
  }, 1000);
}, 10000);


// ------------------------------------------------------
// по идее проверять подгрузилась ли страница нужно так
checkLoad();

function checkLoad() {
  if (window.onLoad) {
    scrollPage();
  } else {
    setTimeout('checkLoad();', 1000)
  }
}


document.addEventListener('DOMContentLoaded', function () {
  setTimeout(scrollPage, 5000);
});


// друзья
var friends = $('.mn-person-info__details');

// проходим по списку друзей, делаем Endorse и возвращаемся назад
for (var i = 0; i < 3; i++) {
  // заходим на страницу друга
  $('.mn-person-info__details').children()[i].click();
  // ждём пока загрузится страница
  document.addEventListener("DOMContentLoaded", endorseAll);
}

function endorseAll() {
  var buttons = $('.button-secondary-medium-round');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].click();
  }
  document.removeEventListener("DOMContentLoaded");
  // возврат к списку друзей
  window.history.back();
}




