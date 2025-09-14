$(document).ready(function () {
  // Инициализация MixItUp
  var mixer = mixitup(".directions__list", {
    controls: {
      toggleLogic: "and",
    },
  });

  // Обработчик кликов для кнопок фильтра
  $(".directions__filter-btn").on("click", function () {
    $(".directions__filter-btn").removeClass("directions__filter-btn--active");
    $(this).addClass("directions__filter-btn--active");
  });

  // Инициализация слайдера Team с правильными настройками
  $(".team__slider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 4,
    infinite: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // Аккордеон для program секции
  $(".program__acc-link").on("click", function (e) {
    e.preventDefault();

    // Закрываем другие открытые элементы
    $(".program__acc-link").not(this).removeClass("program__acc-link--active");
    $(".program__acc-link").not(this).find(".program__acc-text").slideUp();

    // Переключаем текущий элемент
    $(this).toggleClass("program__acc-link--active");
    $(this).find(".program__acc-text").slideToggle();
  });

  // Инициализация - открываем первый элемент
  $(document).ready(function () {
    $(".program__acc-link--active").find(".program__acc-text").show();
  });
  $(".testimonials__slider").slick({
    arrows: true,
    dots: false,
    prevArrow: $(".testimonials__prev"),
    nextArrow: $(".testimonials__next"),
    adaptiveHeight: true,
  });

  // Аккордеон
  $(".program__acc-link").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("program__acc-link--active");
    $(this).siblings(".program__acc-text").slideToggle();
  });

  // Бургер меню

  $(".burger, .overlay").on("click", function (e) {
    e.preventDefault();
    $(".header__top").toggleClass("header__top--open");
    $(".overlay").toggleClass("overlay--show");
    $("body").toggleClass("no-scroll");
  });

  $(".header__top a").on("click", function (e) {
    // Закрываем меню
    $(".header__top").removeClass("header__top--open");
    $(".overlay").removeClass("overlay--show");
    $("body").removeClass("no-scroll");

    // НЕ предотвращаем стандартное поведение для обычных ссылок
    // e.preventDefault() удален для ссылок
  });

  // Скролл эффект для бургера
  $(window).on("scroll", function () {
    if (
      $(window).scrollTop() > 0 &&
      !$(".header__top").hasClass("header__top--open")
    ) {
      $(".burger").addClass("burger--follow");
    } else {
      $(".burger").removeClass("burger--follow");
    }
  });

  $(".footer__top-title").on("click", function () {
    $(this).next().slideToggle();
  });
});
