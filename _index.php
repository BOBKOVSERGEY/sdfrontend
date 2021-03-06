<?php
/**
 *
 * GZIP сжатие
 */
function obSaveCookieAfter($s)
{
  setcookie("page_size_after", strlen($s));
  return $s;
}
// Аналогично, но для Cookie page_size_before.
function obSaveCookieBefore($s)
{
  setcookie("page_size_before", strlen($s));
  return $s;
}
// Устанавливаем конвейер обработчиков.
ob_start("obSaveCookieAfter");
ob_start("ob_gzhandler", 9);
ob_start("obSaveCookieBefore");
/**
 *
 * END сжатие
 */
?>
<!doctype html>
<html lang="ru" class="wide wow-animation">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>ЭСДИ - Создание и продвижение сайтов</title>
  <meta name="description" content="Разработка и продвижение сайтов лубой сложности от landing page до крупных интернет магазинов с нестандартным функционалом">
  <link href="dist/images/favicon.ico" type="image/x-icon" rel="shortcut icon">
  <link rel="stylesheet" href="dist/css/main.css?=12">
  <meta property="og:url" content="http://esdi.ru">
  <meta property="og:site_name" content="Разработка и продвижение сайтов лубой сложности от landing page до крупных интернет магазинов с нестандартным функционалом">
  <meta property="og:image" content="http://esdi.ru/dist/images/share.jpg">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1291">
  <meta property="og:image:height" content="315">

  <meta property="twitter:creator" content="ЭСДИ">
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:title" content="Разработка и продвижение сайтов лубой сложности от landing page до крупных интернет магазинов с нестандартным функционалом">
  <meta property="twitter:description" content="">
  <meta property="twitter:image:src" content="http://esdi.ru/dist/images/share.jpg">
  <meta property="twitter:image:width" content="1291">
  <meta property="twitter:image:height" content="315">
  <meta name="msapplication-TileColor" content="#2A5977">
  <meta name="theme-color" content="#2A5977">
  <meta name="yandex-verification" content="6512f4b9bb1481ce">
</head>
<body>
<div class="page">
  <div id="loader-wrapper">
    <div id="loader"></div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
  </div>
  <header class="header">
    <!-- RD Navbar-->
    <div class="rd-navbar-wrap">
      <nav class="rd-navbar rd-navbar-thin" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-fixed" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="0" data-xl-stick-up-offset="0" data-xxl-stick-up-offset="0" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
        <div class="rd-navbar-main-outer">
          <div class="rd-navbar-main">
            <!-- RD Navbar Panel-->
            <div class="rd-navbar-panel">
              <!-- RD Navbar Toggle-->
              <button class="rd-navbar-toggle" data-rd-navbar-toggle="#rd-navbar-nav-wrap-NaN"><span></span></button>
              <!-- RD Navbar Brand--><a class="rd-navbar-brand" href="/">
              <img src="dist/images/logo.svg" alt="ЭСДИ" class="header__logo-img"> <span class="header__logo">SitesDevelopment</span><span class="header__logo--phone">ЭСДИ</span>
            </a>
              <div class="rd-navbar-block">
                <ul class="list-inline-bordered">
                  <li>
                    <button class="rd-navbar-popup-toggle btn btn--top button-winona" data-rd-navbar-toggle="#rd-navbar-login-NaN"><span class="mdi mdi-pencil hidden-desktop"></span><span class="header__button-call hidden-phone">Начать проект</span></button>
                    <div class="rd-navbar-popup" id="rd-navbar-login-NaN">
                      <div class="form-nav__wrapper">
                        <h4 class="form__heading">Начать проект</h4>
                        <form class="form form-nav" action="#" method="post" autocomplete="off">
                          <div class="form__group">
                            <input class="form__input form__input--nav" type="text" autocomplete="off" name="name" placeholder="Ваше имя">
                          </div>
                          <div class="form__group">
                            <input class="form__input form__input--nav" type="email" autocomplete="off" name="email" placeholder="Ваше email">
                          </div>
                          <div class="form__group">
                            <input class="form__input form__input--nav form__phone" type="text" autocomplete="off" name="phone" placeholder="Ваш телефон">
                          </div>
                          <div class="form__group">
                            <div class="form__checkbox--center">
                              <input id="checkbox-form-nav" type="checkbox" name="policy" class="form__checkbox--nav js-policy-4" checked><label for="checkbox-form-nav">Соглавсие на обработку персональных данных</label>
                            </div>
                          </div>
                          <div class="form__group">
                            <button class="form__btn form__btn-4 btn btn--big button-winona" type="submit" name="submit">Отправить</button>
                          </div>
                        </form>
                        <div class="form-nav__loader-wrapper">
                          <div class="form-nav__loader-body">
                            <div class="form-nav__loader"></div>
                            <div class="form-nav__loader-text">Сообщение успешно отправлено, мы свяжемся с Вами!</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li><a class="link-title" href="tel:+74956643815"><span class="mdi mdi-cellphone-android hidden-desktop"></span><span class="header__phone hidden-phone"> +7 (495) 664 38 15</span></a></li>
                </ul>

              </div>
            </div>
            <div class="rd-navbar-nav-wrap" id="rd-navbar-nav-wrap-NaN">
              <!-- RD Navbar Brand--><a class="rd-navbar-brand" href="/">
              <img src="dist/images/logo.svg" height="43" alt="ЭСДИ">
            </a>
              <!-- RD Navbar Nav-->
              <ul class="rd-navbar-nav">
                <li class="rd-nav-item active"><a class="rd-nav-link" href="/">Главная</a>
                </li>
                <li class="rd-nav-item"><a class="rd-nav-link" href="about.html">ЭсДи</a>
                </li>
                <li class="rd-nav-item"><a class="rd-nav-link" href="#">Разработка</a>
                  <!-- RD Navbar Dropdown-->
                  <ul class="rd-menu rd-navbar-dropdown">
                    <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="#">Промо-сайт</a></li>
                    <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="#">Интернет-магазин</a></li>
                  </ul>
                </li>
                <li class="rd-nav-item"><a class="rd-nav-link" href="#">Продвижение</a>
                  <!-- RD Navbar Dropdown-->
                  <ul class="rd-menu rd-navbar-dropdown">
                    <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="#">Реклама Яндекс</a></li>
                    <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="#">Реклама Google</a></li>
                  </ul>
                </li>
                <!--<li class="rd-nav-item"><a class="rd-nav-link" href="#">Pages</a>
                  <ul class="rd-menu rd-navbar-megamenu">
                    <li class="rd-megamenu-item">
                      <ul class="rd-megamenu-list">
                        <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="#">Buttons</a></li>
                        <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="#">Progress bars</a></li>
                        <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="#">Tabs</a></li>
                        <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="#">Accordions</a></li>
                        <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="#">Testimonials</a></li>
                        <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="#">Typography</a></li>
                        <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="#">Forms</a></li>
                      </ul>
                    </li>
                    <li class="rd-megamenu-item">
                      <ul class="rd-megamenu-list">
                        <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="#">404 Page</a></li>
                        <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="#">503 Page</a></li>
                        <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="#">Coming Soon</a></li>
                        <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="#">Under Construction</a></li>
                        <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="#">Gallery</a></li>
                        <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="#">Grid Gallery</a></li>
                        <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="#">Modern Gallery</a></li>
                      </ul>
                    </li>
                    <li class="rd-megamenu-item">
                      <ul class="rd-megamenu-list">
                        <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="#">Careers</a></li>
                        <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="#">Search results</a></li>
                        <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="#">Features</a></li>
                        <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="#">Single Job</a></li>
                        <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="#">Privacy policy</a></li>
                        <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="#">Team</a></li>
                        <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="#">Pricing</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>-->
                <li class="rd-nav-item"><a class="rd-nav-link" href="#">Контакты</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <section class="slider">
    <!--data-effect="coverflow" data-loop="false" data-direction="horizontal" data-autoplay="6000" data-mousewheel="false" data-keyboard="true"-->
    <div class="swiper-container swiper-slider context-dark swiper-slider_fullheight" data-effect="coverflow"
         data-loop="false" data-direction="horizontal" data-mousewheel="false"
         data-keyboard="true">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide_video context-dark video-bg-overlay vide_bg" data-vide-bg="dist/video/The-Launch-2"
             data-vide-options="posterType: jpg">
          <div class="swiper-slide-caption text-center">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-10 col-md-12 col-sm-12">
                  <h2 data-caption-animate="fadeInUpSmall" class="slider__heading">SitesDevelopment</h2>
                  <h5 class="slider__description" data-caption-animate="fadeInUpSmall" data-caption-delay="150">
  Разработка сайтов любой сложности от landing-page до крупных интернет-магазинов с нестандартным функционалом</h5>
                  <div class="slider__wrapper-form">
                    <form class="form form-slider" action="#"  method="post" autocomplete="off">
                      <input type="hidden" name="service" value="Разработка">
                      <div class="row" data-caption-animate="fadeInUpSmall" data-caption-delay="300">
                        <div class="col-md-4">
                          <div class="form__group">
                            <input class="form__input" type="text" autocomplete="off" name="name" placeholder="Ваше имя">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form__group">
                            <input class="form__input" type="text" autocomplete="off" name="email" placeholder="Ваше email">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form__group">
                            <input class="form__input form__phone" type="text" autocomplete="off" name="phone" placeholder="Ваш телефон">
                          </div>
                        </div>
                      </div>
                      <div class="row justify-content-center" data-caption-animate="fadeInUpSmall" data-caption-delay="450">
                        <div class="col-md-9">
                          <div class="form__group">
                            <div class="form__checkbox--center">
                              <input id="checkbox-development" type="checkbox" name="policy" class="form__checkbox js-policy-1" checked><label for="checkbox-development">Подтверждаю свое согласие на <a href="#">обработку</a> персональных данных</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row" data-caption-animate="fadeInUpSmall" data-caption-delay="600">
                        <div class="col-md-12">
                          <div class="form__group">
                            <button class="form__btn form__btn-1 btn btn--big button-winona" type="submit" name="submit">Заказать сайт</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="slider__button" data-caption-animate="fadeInUpSmall" data-caption-delay="450">
                    <a href="#" class="btn btn--big button-winona">Заказать сайт</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide slider__overlay context-dark" style="background-image: url(dist/images/slider-seo.jpg)">
          <div class="swiper-slide-caption text-center">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-10 col-md-12 col-sm-12">
                  <h2 data-caption-animate="fadeInUpSmall" class="slider__heading">SitesDevelopment</h2>
                  <h5 class="slider__description" data-caption-animate="fadeInUpSmall" data-caption-delay="150">
  Сделаем комплекс мер по внутренней и внешней оптимизации для поднятия позиций сайта в результатах выдачи поисковых систем.</h5>
                  <div class="slider__wrapper-form">
                    <form action="#" class="form form-slider" method="post">
                      <input type="hidden" name="service" value="Продвижение">
                      <div class="row" data-caption-animate="fadeInUpSmall" data-caption-delay="300">
                        <div class="col-md-4">
                          <div class="form__group">
                            <input class="form__input" type="text" autocomplete="off" name="name" placeholder="Ваше имя">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form__group">
                            <input class="form__input" type="text" autocomplete="off" name="email" placeholder="Ваше email">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form__group">
                            <input class="form__input form__phone" type="text" autocomplete="off" name="phone" placeholder="Ваш телефон">
                          </div>
                        </div>
                      </div>
                      <div class="row justify-content-center" data-caption-animate="fadeInUpSmall" data-caption-delay="450">
                        <div class="col-md-9">
                          <div class="form__group">
                            <div class="form__checkbox--center">
                              <input id="checkbox-promotion" type="checkbox" name="policy" class="form__checkbox js-policy-2" checked><label for="checkbox-promotion">Подтверждаю свое согласие на <a href="#">обработку</a> персональных данных</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row" data-caption-animate="fadeInUpSmall" data-caption-delay="600">
                        <div class="col-md-12">
                          <div class="form__group">
                            <button class="form__btn form__btn-2 btn btn--big button-winona" type="submit" name="submit">Продвинуть сайт</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="slider__button" data-caption-animate="fadeInUpSmall" data-caption-delay="450">
                    <a href="#" class="btn btn--big button-winona">Продвинуть сайт</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide slider__overlay context-dark" style="background-image: url(dist/images/slider-reputation.jpg)">
          <div class="swiper-slide-caption">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-10 col-md-12 col-sm-12">
                  <h2 data-caption-animate="fadeInUpSmall" class="slider__heading">SitesDevelopment</h2>
                  <h5 class="slider__description" data-caption-animate="fadeInUpSmall" data-caption-delay="150">
  Управление репутацией в интернете и в поисковой выдаче, найдем и нейтрализуем негативные отзывы, создадим положительный образ бренда.</h5>
                  <div class="slider__wrapper-form">
                    <form action="#" class="form form-slider" method="post">
                      <input type="hidden" name="service" value="Аудит репутации">
                      <div class="row" data-caption-animate="fadeInUpSmall" data-caption-delay="300">
                        <div class="col-md-4">
                          <div class="form__group">
                            <input class="form__input" type="text" autocomplete="off" name="name" placeholder="Ваше имя">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form__group">
                            <input class="form__input" type="text" autocomplete="off" name="email" placeholder="Ваше email">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form__group">
                            <input class="form__input form__phone" type="text" autocomplete="off" name="phone" placeholder="Ваш телефон">
                          </div>
                        </div>
                      </div>
                      <div class="row justify-content-center" data-caption-animate="fadeInUpSmall" data-caption-delay="450">
                        <div class="col-md-9">
                          <div class="form__group">
                            <div class="form__checkbox--center">
                              <input id="checkbox-reputation" type="checkbox" name="policy" class="form__checkbox js-policy-3" checked><label for="checkbox-reputation">Подтверждаю свое согласие на <a href="#">обработку</a> персональных данных</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row" data-caption-animate="fadeInUpSmall" data-caption-delay="600">
                        <div class="col-md-12">
                          <div class="form__group">
                            <button class="form__btn form__btn-3 btn btn--big button-winona" type="submit" name="submit">Аудит репутации</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="slider__button" data-caption-animate="fadeInUpSmall" data-caption-delay="450">
                    <a href="#" class="btn btn--big button-winona">Аудит репутации</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev linear-icon-chevron-left"></div>
      <div class="swiper-button-next linear-icon-chevron-right"></div>
    </div>
  </section>
  <!--<section class="circle-element">
    <div class="circle-element__wrapper">
    </div>
  </section>
  <section class="circle-element__after">
  </section>-->
  <section class="about" data-content="About">
    <div class="bg-decor d-flex align-items-center justify-content-end" data-parallax-scroll="{&quot;y&quot;: 50, &quot;smoothness&quot;: 30}"><img src="dist/images/bg-decor-11-2.png" alt="">
    </div>
    <div class="container">
      <div class="text-center">
        <h2 class="about__heading">О нас</h2>
      </div>
      <p>ЭСДИ - команда профессиональных, энергичных людей с талантливыми программистами, дизайнерами, интернет-маркетологами и опытными менеджерами, которые могут помочь вам в безупречном и своевременном выполнении любого проекта. С самого первого дня мы предоставляем креативные и уникальные веб-сайты нашим клиентам.</p>
      <div class="about__do">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="about__wrap-img">
              <img src="dist/images/about-develop-new.svg" alt="">
            </div>
            <!--<div class="about__icon">
              <span class="icon linear-icon-cog"></span>
            </div>-->
            <div class="about__do-description">
Разработаем современный сайт
</div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="about__wrap-img">
              <img src="dist/images/about-perfomance-new.svg" alt="">
            </div>
            <!--<div class="about__icon">
              <span class="icon linear-icon-magnifier"></span>
            </div>-->
            <div class="about__do-description">
Найдем новых клиентов на рынке
</div>
          </div>
          <div class="col-lg-3 col-md-6">
            <!--<div class="about__icon">
              <span class="icon linear-icon-chart-growth"></span>
            </div>-->
            <div class="about__wrap-img">
              <img src="dist/images/about-seo-new.svg" alt="">
            </div>
            <div class="about__do-description">
Улучшим позиции в выдаче поисковых систем
</div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="about__wrap-img">
              <img src="dist/images/about-reputation-new.svg" alt="">
            </div>
            <!--<div class="about__icon">
              <span class="icon linear-icon-diamond2"></span>
            </div>-->
            <div class="about__do-description">
Создадим имидж надежной компании
</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="services" data-content="Services">
    <div class="bg-decor d-flex align-items-center" data-parallax-scroll="{&quot;y&quot;: 100,  &quot;smoothness&quot;: 30}"><img src="dist/images/bg-decor-1.png" alt=""/>
    </div>
    <div class="bg-decor d-flex align-items-end" data-parallax-scroll="{&quot;x&quot;: -150, &quot;from-scroll&quot;: 420, &quot;smoothness&quot;: 30}"><img src="dist/images/bg-decor-2.png" alt=""/>
    </div>
    <div class="bg-decor" data-parallax-scroll="{&quot;x&quot;: 80, &quot;y&quot;: 80,  &quot;smoothness&quot;: 30}"><img src="dist/images/bg-decor-3.png" alt=""/>
    </div>
    <div class="container">
      <div class="text-center">
        <h2 class="services__heading">Что делаем</h2>
      </div>
      <!-- Circle carousel data-speed="1000" data-autoplay="5000" -->
      <div class="carousel-wrapper">
        <div class="circle-carousel" data-speed="1000" data-autoplay="5000">
          <!-- slides -->
          <div class="slides">
            <div class="content-box">
              <div class="content-box-inner">
                <div class="content-box-img bg-overlay-dark" style="background-image: url(dist/images/service-promo-site.svg)">
                  <div class="content-title-wrap">
                    <div class="content-title">
                      <h4 class="services__item-heading"><a href="#">Промо-сайты</a></h4>
                      <div class="services__price">от 50 000 <i class="fas fa-ruble-sign"></i></div>
                      <!--<div class="services__hit"><span>Хит</span></div>
                      <div class="services__new">new</div>-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-box">
              <div class="content-box-inner">
                <div class="content-box-img bg-overlay-dark" style="background-image: url(dist/images/service-shop-new.svg)">
                  <div class="content-title-wrap">
                    <div class="content-title">
                      <h4 class="services__item-heading"><a href="#">Интернет-магазины</a></h4>
                      <div class="services__price">от 200 000 <i class="fas fa-ruble-sign"></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-box">
              <div class="content-box-inner">
                <div class="content-box-img bg-overlay-dark" style="background-image: url(dist/images/service-site-company-new.svg)">
                  <div class="content-title-wrap">
                    <div class="content-title">
                      <h4 class="services__item-heading"><a href="#">Сайты компаний</a></h4>
                      <div class="services__price">от 100 000 <i class="fas fa-ruble-sign"></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-box">
              <div class="content-box-inner">
                <div class="content-box-img bg-overlay-dark" style="background-image: url(dist/images/service-blog-new.svg)">
                  <div class="content-title-wrap">
                    <div class="content-title">
                      <h4 class="services__item-heading"><a href="#">Блоги</a></h4>
                      <div class="services__price">от 150 000 <i class="fas fa-ruble-sign"></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-box">
              <div class="content-box-inner">
                <div class="content-box-img bg-overlay-dark" style="background-image: url(dist/images/service-support-new.svg)">
                  <div class="content-title-wrap">
                    <div class="content-title">
                      <h4 class="services__item-heading"><a href="#">Техническую поддержку</a></h4>
                      <div class="services__price">от 1 500 <i class="fas fa-ruble-sign"></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-box">
              <div class="content-box-inner">
                <div class="content-box-img bg-overlay-dark" style="background-image: url(dist/images/service-prodvizhenie-new.svg)">
                  <div class="content-title-wrap">
                    <div class="content-title">
                      <h4 class="services__item-heading"><a href="#">Продвигаем сайты</a></h4>
                      <div class="services__price">от 70 000 <i class="fas fa-ruble-sign"></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-box">
              <div class="content-box-inner">
                <div class="content-box-img bg-overlay-dark" style="background-image: url(dist/images/service-reklama-new.svg)">
                  <div class="content-title-wrap">
                    <div class="content-title">
                      <h4 class="services__item-heading"><a href="#">Запускаем рекламу</a></h4>
                      <div class="services__price">от 50 000 <i class="fas fa-ruble-sign"></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-box">
              <div class="content-box-inner">
                <div class="content-box-img bg-overlay-dark" style="background-image: url(dist/images/service-reputition-new.svg)">
                  <div class="content-title-wrap">
                    <div class="content-title">
                      <h4 class="services__item-heading"><a href="#">Создаем имидж надежной компании</a></h4>
                      <div class="services__price">от 70 000 <i class="fas fa-ruble-sign"></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- pagination-->
          <div class="pagination">
            <div class="item">
              <div class="dot"><i class="fas fa-home"></i><span></span></div>
            </div>
            <div class="item">
              <div class="dot"><i class="fas fa-shopping-basket"></i><span></span></div>
            </div>
            <div class="item">
              <div class="dot"><i class="fas fa-building"></i><span></span></div>
            </div>
            <div class="item">
              <div class="dot"><i class="fas fa-blog"></i><span></span></div>
            </div>
            <div class="item">
              <div class="dot"><i class="far fa-life-ring"></i><span></span></div>
            </div>
            <div class="item">
              <div class="dot"><i class="fas fa-rocket"></i><span></span></div>
            </div>
            <div class="item">
              <div class="dot"><i class="fas fa-bullhorn"></i><span></span></div>
            </div>
            <div class="item">
              <div class="dot"><i class="fas fa-smile"></i><span></span></div>
            </div>
          </div>
          <div class="prev"><span>PREV</span></div>
          <div class="next"><span>NEXT</span></div>
        </div>
      </div>
    </div>
  </section>
  <section class="portfolio">
    <div class="bg-decor d-flex align-items-center" data-parallax-scroll="{&quot;y&quot;: 50,  &quot;smoothness&quot;: 30}"><img src="dist/images/bg-decor-6.png" alt="">
    </div>
    <div class="container">
      <div class="text-center">
        <h2 class="services__heading">Портфолио</h2>
      </div>
      <div class="isotope-wrap row">
        <div class="col-sm-12">
          <ul class="portfolio__list isotope-filters isotope-filters-horizontal">
            <li><a class="active" data-isotope-filter="*" data-isotope-group="gallery" href="#">Все</a></li>
            <li><a data-isotope-filter="Category 1" data-isotope-group="gallery" href="#">Сайт компании</a></li>
            <li><a data-isotope-filter="Category 2" data-isotope-group="gallery" href="#">Интернет-магазин</a></li>
            <li><a data-isotope-filter="Category 3" data-isotope-group="gallery" href="#">Промо-сайт</a></li>
            <li><a data-isotope-filter="Category 4" data-isotope-group="gallery" href="#">Блог</a></li>
          </ul>
          <div class="isotope row" data-isotope-layout="fitRows" data-isotope-group="gallery">
            <div class="col-12 col-md-6 col-lg-4 isotope-item" data-filter="Category 1">
              <a class="img-thumbnail-variant-3" href="https://lawyersoffice.ru/" target="_blank">
                <img src="dist/images/advocatti-s.jpg" alt="">
                <span class="label-custom label-white">Ссылка</span>
                <div class="caption">
                  <span class="icon hover-top-element linear-icon-unlink"></span>
                  <ul class="list-inline-tag hover-top-element">
                    <li>Адвокатский кабинет</li>
                    <li>Юридическая помощь</li>
                  </ul>
                  <p class="heading-5 hover-top-element">Адвокатский кабинет Тыняной И.И.</p>
                  <div class="divider"></div>
                  <p class="small hover-bottom-element">Смотреть сайт</p><span class="icon arrow-right linear-icon-arrow-right"></span>
                </div>
              </a>
            </div>
            <div class="col-12 col-md-6 col-lg-4 isotope-item" data-filter="Category 1">
              <a class="img-thumbnail-variant-3" href="http://kosmetic.pro/" target="_blank">
                <img src="dist/images/kosmetic-pro-s.jpg" alt="">
                <span class="label-custom label-white">Ссылка</span>
                <div class="caption">
                  <span class="icon hover-top-element linear-icon-unlink"></span>
                  <ul class="list-inline-tag hover-top-element">
                    <li>Сайт компании</li>
                    <li>Профессиональная косметика</li>
                  </ul>
                  <p class="heading-5 hover-top-element">De'lakrua</p>
                  <div class="divider"></div>
                  <p class="small hover-bottom-element">Смотреть сайт</p><span class="icon arrow-right linear-icon-arrow-right"></span>
                </div>
              </a>
            </div>
            <div class="col-12 col-md-6 col-lg-4 isotope-item" data-filter="Category 4">
              <a class="img-thumbnail-variant-3" href="http://mexico.esdi.ru/" target="_blank">
                <img src="dist/images/stm-s.jpg" alt="">
                <span class="label-custom label-white">Ссылка</span>
                <div class="caption">
                  <span class="icon hover-top-element linear-icon-unlink"></span>
                  <ul class="list-inline-tag hover-top-element">
                    <li>Блог</li>
                    <li>Сайт для туристов</li>
                  </ul>
                  <p class="heading-5 hover-top-element">Savetravelmexico</p>
                  <div class="divider"></div>
                  <p class="small hover-bottom-element">Смотреть сайт</p><span class="icon arrow-right linear-icon-arrow-right"></span>
                </div>
              </a>
            </div>
            <div class="col-12 col-md-6 col-lg-4 isotope-item" data-filter="Category 1">
              <a class="img-thumbnail-variant-3" href="http://spetstrub.ru/" target="_blank">
                <img src="dist/images/spetctrub-s.jpg" alt="">
                <span class="label-custom label-white">Ссылка</span>
                <div class="caption">
                  <span class="icon hover-top-element linear-icon-unlink"></span>
                  <ul class="list-inline-tag hover-top-element">
                    <li>Сайт компании</li>
                    <li>Продажа стальных труб</li>
                  </ul>
                  <p class="heading-5 hover-top-element">СпецТруб</p>
                  <div class="divider"></div>
                  <p class="small hover-bottom-element">Смотреть сайт</p><span class="icon arrow-right linear-icon-arrow-right"></span>
                </div>
              </a>
            </div>
            <div class="col-12 col-md-6 col-lg-4 isotope-item" data-filter="Category 3">
              <a class="img-thumbnail-variant-3" href="http://stroymekhanizatsiya.ru/" target="_blank">
                <img src="dist/images/stmchaniz-s.jpg" alt="">
                <span class="label-custom label-white">Ссылка</span>
                <div class="caption">
                  <span class="icon hover-top-element linear-icon-unlink"></span>
                  <ul class="list-inline-tag hover-top-element">
                    <li>Промо-сайт</li>
                    <li>Грузоперевозки</li>
                  </ul>
                  <p class="heading-5 hover-top-element">СТРОЙМЕХАНИЗАЦИЯ</p>
                  <div class="divider"></div>
                  <p class="small hover-bottom-element">Смотреть сайт</p><span class="icon arrow-right linear-icon-arrow-right"></span>
                </div>
              </a>
            </div>
            <div class="col-12 col-md-6 col-lg-4 isotope-item" data-filter="Category 1">
              <a class="img-thumbnail-variant-3" href="https://universal-m.ru/" target="_blank">
                <img src="dist/images/universal-m-s.jpg" alt="">
                <span class="label-custom label-white">Ссылка</span>
                <div class="caption">
                  <span class="icon hover-top-element linear-icon-unlink"></span>
                  <ul class="list-inline-tag hover-top-element">
                    <li>Сайт компании</li>
                    <li>Управляющая компания</li>
                  </ul>
                  <p class="heading-5 hover-top-element">Универсал М</p>
                  <div class="divider"></div>
                  <p class="small hover-bottom-element">Смотреть сайт</p><span class="icon arrow-right linear-icon-arrow-right"></span>
                </div>
              </a>
            </div>
            <div class="col-12 col-md-6 col-lg-4 isotope-item" data-filter="Category 3">
              <a class="img-thumbnail-variant-3" href="https://pktitan.ru/lp/" target="_blank">
                <img src="dist/images/pktitan-s.jpg" alt="">
                <span class="label-custom label-white">Ссылка</span>
                <div class="caption">
                  <span class="icon hover-top-element linear-icon-unlink"></span>
                  <ul class="list-inline-tag hover-top-element">
                    <li>Промо-сайт</li>
                    <li>Вентиляционный завод</li>
                  </ul>
                  <p class="heading-5 hover-top-element">ПК Титан</p>
                  <div class="divider"></div>
                  <p class="small hover-bottom-element">Смотреть сайт</p><span class="icon arrow-right linear-icon-arrow-right"></span>
                </div>
              </a>
            </div>
            <div class="col-12 col-md-6 col-lg-4 isotope-item" data-filter="Category 2">
              <a class="img-thumbnail-variant-3" href="http://autokote.esdi.ru/" target="_blank">
                <img src="dist/images/autokote.jpg" alt="">
                <span class="label-custom label-white">Ссылка</span>
                <div class="caption">
                  <span class="icon hover-top-element linear-icon-unlink"></span>
                  <ul class="list-inline-tag hover-top-element">
                    <li>Интернет-магазин</li>
                    <li>Автозапчасти</li>
                  </ul>
                  <p class="heading-5 hover-top-element">Autokote</p>
                  <div class="divider"></div>
                  <p class="small hover-bottom-element">Смотреть сайт</p><span class="icon arrow-right linear-icon-arrow-right"></span>
                </div>
              </a>
            </div>
            <div class="col-12 col-md-6 col-lg-4 isotope-item" data-filter="Category 1">
              <a class="img-thumbnail-variant-3" href="https://trastinveststroy.ru/" target="_blank">
                <img src="dist/images/trast-s.jpg" alt="">
                <span class="label-custom label-white">Ссылка</span>
                <div class="caption">
                  <span class="icon hover-top-element linear-icon-unlink"></span>
                  <ul class="list-inline-tag hover-top-element">
                    <li>Сайт компании</li>
                    <li>Продажа металлических труб</li>
                  </ul>
                  <p class="heading-5 hover-top-element">ТРАСТИНВЕСТСТРОЙ</p>
                  <div class="divider"></div>
                  <p class="small hover-bottom-element">Смотреть сайт</p><span class="icon arrow-right linear-icon-arrow-right"></span>
                </div>
              </a>
            </div>
            <!--<div class="col-12 col-md-6 col-lg-4 isotope-item" data-filter="Category 2">
              <a class="img-thumbnail-variant-3" href="dist/images/portfolio-original-7-1280x1920.jpg" data-lightgallery="item">
                <img src="dist/images/portfolio-7-418x315.jpg" alt="">
                <div class="caption"><span class="icon hover-top-element linear-icon-picture"></span>
                  <ul class="list-inline-tag hover-top-element">
                    <li>People</li>
                  </ul>
                  <p class="heading-5 hover-top-element">Photo</p>
                  <div class="divider"></div>
                  <p class="small hover-bottom-element">Creating Portfolio.</p><span class="icon arrow-right linear-icon-plus"></span>
                </div>
              </a>
            </div>
            <div class="col-12 col-md-6 col-lg-4 isotope-item" data-filter="Category 2">
              <a class="img-thumbnail-variant-3" href="dist/images/portfolio-original-8-1920x1336.jpg" data-lightgallery="item">
                <img src="dist/images/portfolio-8-418x315.jpg" alt="">
                <div class="caption"><span class="icon hover-top-element linear-icon-picture"></span>
                  <ul class="list-inline-tag hover-top-element">
                    <li>People</li>
                  </ul>
                  <p class="heading-5 hover-top-element">Photo</p>
                  <div class="divider"></div>
                  <p class="small hover-bottom-element">Creating Portfolio.</p><span class="icon arrow-right linear-icon-plus"></span>
                </div>
              </a>
            </div>
            <div class="col-12 col-md-6 col-lg-4 isotope-item" data-filter="Category 1">
              <a class="img-thumbnail-variant-3" href="#">
                <img src="dist/images/portfolio-3-418x315.jpg" alt="">
                <span class="label-custom label-white">Link</span>
              <div class="caption"><span class="icon hover-top-element linear-icon-folder-picture"></span>
                <ul class="list-inline-tag hover-top-element">
                  <li>9 photos</li>
                  <li>Objects</li>
                </ul>
                <p class="heading-5 hover-top-element">Portfolio Album</p>
                <div class="divider"></div>
                <p class="small hover-bottom-element">Creating Portfolio.</p><span class="icon arrow-right linear-icon-arrow-right"></span>
              </div>
              </a>
            </div> -->

          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="reviews" data-content="Reviews">
    <div class="bg-decor" data-parallax-scroll="{&quot;x&quot;: 80, &quot;y&quot;: -80,  &quot;smoothness&quot;: 30}"><img src="dist/images/bg-decor-3.png" alt=""/>
    </div>
    <div class="bg-decor d-flex align-items-center" data-parallax-scroll="{&quot;x&quot;: 80,  &quot;smoothness&quot;: 30}"><img src="dist/images/bg-decor-1.png" alt=""/>
    </div>
    <div class="container">
      <div class="text-center">
        <h2 class="services__heading">Отзывы</h2>
      </div>
      <div class="slick-widget-testimonials">
        <div class="slick-slider carousel-child" id="child-carousel" data-for=".carousel-parent"  data-arrows="true" data-loop="true" data-dots="false" data-swipe="true" data-items="1" data-sm-items="3" data-md-items="5" data-lg-items="5" data-xl-items="5" data-center-mode="true" data-slide-to-scroll="1">
          <div class="item new-reviews-item-img"><img class="" src="dist/images/testimonials-person-2-96x96.jpg" alt="">
          </div>
          <div class="item new-reviews-item-img"><img class="" src="dist/images/testimonials-person-3-96x96.jpg" alt="">
          </div>
          <div class="item new-reviews-item-img"><img class="" src="dist/images/k-typov.jpg" alt="">
          </div>
          <div class="item new-reviews-item-img"><img class="" src="dist/images/testimonials-person-5-96x96.jpg" alt="">
          </div>
          <div class="item new-reviews-item-img"><img class="" src="dist/images/testimonials-person-1-96x96.jpg" alt="">
          </div>
          <div class="item new-reviews-item-img"><img class="" src="dist/images/v-kuznezov.jpg" alt="">
          </div>

        </div>
        <!-- Slick Carousel-->
        <div class="slick-slider carousel-parent" data-autoplay="true" data-arrows="false" data-loop="true" data-dots="false" data-swipe="true" data-items="1" data-fade="true" data-child="#child-carousel" data-for="#child-carousel">
          <div class="item">
            <!-- Quote Light 1-->
            <blockquote class="quote-light">
              <cite class="quote-light-cite">Сергей Владимиров</cite>
              <p class="quote-light-caption">Генеральный директор ООО "СТРОЙМЕХАНИЗАЦИЯ"</p>
              <svg class="quote-light-mark" x="0px" y="0px" width="35px" height="25px" viewbox="0 0 35 25">
                <path d="M27.461,10.206h7.5v15h-15v-15L25,0.127h7.5L27.461,10.206z M7.539,10.206h7.5v15h-15v-15L4.961,0.127h7.5                L7.539,10.206z"></path>
              </svg>
              <div class="quote-light-text">
                <p>От лица ООО "Строймеханизация" выражаем признательность компании "Сайтс Девелопмент" и в частности Бобкову Сергею за оперативную и качественную работу по разработке промо-сайта компании stroymekhanizatsiya.ru. Работа проведена в соответствии с Договором в указанные сроки, с учетом всех пожеланий. Желаем успехов вашей компании.</p>
              </div>
              <div class="quote-light-footer"><img class="quote-light-image" src="dist/images/logo-stroy-mechanizaciya.png" alt="" width="300">
              </div>
            </blockquote>
          </div>
          <div class="item">
            <!-- Quote Light 2-->
            <blockquote class="quote-light">
              <cite class="quote-light-cite">Илья Кузин</cite>
              <p class="quote-light-caption">Руководитель проекта ООО "ФГК-ГРУПП"</p>
              <svg class="quote-light-mark" x="0px" y="0px" width="35px" height="25px" viewbox="0 0 35 25">
                <path d="M27.461,10.206h7.5v15h-15v-15L25,0.127h7.5L27.461,10.206z M7.539,10.206h7.5v15h-15v-15L4.961,0.127h7.5                L7.539,10.206z"></path>
              </svg>
              <div class="quote-light-text">
                <p>От лица ООО "ФГК ГРУПП" выражаем благодарность за разработку красивого, качественного, приятного в обращении сайта. Хотим отметить скорость исполнения - от подачи заявки до сдачи нам готового продукта прошло не более 10 дней.</p>
              </div>
              <div class="quote-light-footer"><img class="quote-light-image" src="dist/images/logo-fgk.png" alt="" width="100">
              </div>
            </blockquote>
          </div>
          <div class="item">
            <!-- Quote Light 3-->
            <blockquote class="quote-light">
              <cite class="quote-light-cite">Александр Фисун</cite>
              <p class="quote-light-caption">Руководитель интернет-магазина consul-coton.ru</p>
              <svg class="quote-light-mark" x="0px" y="0px" width="35px" height="25px" viewbox="0 0 35 25">
                <path d="M27.461,10.206h7.5v15h-15v-15L25,0.127h7.5L27.461,10.206z M7.539,10.206h7.5v15h-15v-15L4.961,0.127h7.5                L7.539,10.206z"></path>
              </svg>
              <div class="quote-light-text">
                <p>От всего коллектива выражаем Вам глубокую благодарность за профессиональную и эффективную работу по созданию и продвижению нашего интернет-магазина.</p>
              </div>
              <div class="quote-light-footer"><img class="quote-light-image" src="dist/images/logo-consul.png" alt="" width="150">
              </div>
            </blockquote>
          </div>
          <div class="item">
            <!-- Quote Light 4 -->
            <blockquote class="quote-light">
              <cite class="quote-light-cite">Константин Тяпов</cite>
              <p class="quote-light-caption">Генеральный директор ООО "Паньковское"</p>
              <svg class="quote-light-mark" x="0px" y="0px" width="35px" height="25px" viewbox="0 0 35 25">
                <path d="M27.461,10.206h7.5v15h-15v-15L25,0.127h7.5L27.461,10.206z M7.539,10.206h7.5v15h-15v-15L4.961,0.127h7.5                L7.539,10.206z"></path>
              </svg>
              <div class="quote-light-text">
                <p>От всей души выражаю Вам искреннюю благодарность за качественно проделанную работу по созданию, оптимизации и продвижению сайта нашего общества. Проделанная Вами работа выполнена с высоким профессионализмом и личным вежливым отношением.</p>
              </div>
              <div class="quote-light-footer"><img class="quote-light-image" src="dist/images/logo-pankovskoe.png" alt="" width="100">
              </div>
            </blockquote>
          </div>
          <div class="item">
            <!-- Quote Light 5-->
            <blockquote class="quote-light">
              <cite class="quote-light-cite">Валентина Щенникова</cite>
              <p class="quote-light-caption">Руководитель отдела маркетинга</p>
              <svg class="quote-light-mark" x="0px" y="0px" width="35px" height="25px" viewbox="0 0 35 25">
                <path d="M27.461,10.206h7.5v15h-15v-15L25,0.127h7.5L27.461,10.206z M7.539,10.206h7.5v15h-15v-15L4.961,0.127h7.5                L7.539,10.206z"></path>
              </svg>
              <div class="quote-light-text">
                <p>От лица руководства компании, выражаем признательность за оперативную и качественную работу по созданию корпоративного сайта. Работа проведена со строгим соблюдением оговоренных сроков и учетом всех пожеланий. Ваш высокий профессионализм подкрепленный опытом оставляет благоприятное впечатление от сотрудничества.</p>
              </div>
              <div class="quote-light-footer"><img class="quote-light-image" src="dist/images/logo-steneco.png" alt="" width="100">
              </div>
            </blockquote>
          </div>
          <div class="item">
            <!-- Quote Light 3-->
            <blockquote class="quote-light">
              <cite class="quote-light-cite">Вадим Кузнецов</cite>
              <p class="quote-light-caption">Генеральный директор ООО "Универсал-М"</p>
              <svg class="quote-light-mark" x="0px" y="0px" width="35px" height="25px" viewbox="0 0 35 25">
                <path d="M27.461,10.206h7.5v15h-15v-15L25,0.127h7.5L27.461,10.206z M7.539,10.206h7.5v15h-15v-15L4.961,0.127h7.5                L7.539,10.206z"></path>
              </svg>
              <div class="quote-light-text">
                <p>Хотелось бы от лица всего нашего коллектива и, от себя лично, поблагодарить Вас за качественную и оперативную работу по созданию сайта. Искренне желаем Вам успехов, процветания и покорнения новых вершин в вашем деле.</p>
              </div>
              <div class="quote-light-footer"><img class="quote-light-image" src="dist/images/logo-universal-m.png" alt="" width="100">
              </div>
            </blockquote>
          </div>
        </div>
      </div>
      <div class="reviews__button-all-review text-center">
        <a href="#" class="btn btn--big button-winona">Все отзывы</a>
      </div>
      <!--<div class="row">
        <div class="col-md-10 offset-md-1 text-center">
          <div class="owl-carousel js-reviews">
            <div class="owl-item">
              <div class="reviews__item">
                <div class="reviews__item-img">
                  <img src="dist/images/review-1.jpg" alt="">
                </div>
                <div class="reviews__item-description">
                  <p>От лица ООО "Строймеханизация" выражаем признательность компании "Сайтс Девелопмент" и в частности Бобкову Сергею за оперативную и качественную работу по разработке промо-сайта компании stroymekhanizatsiya.ru. Работа проведена в соответствии с Договором в указанные сроки, с учетом всех пожеланий. Желаем успехов вашей компании.</p>
                </div>
                <div class="reviews__item-author">
                  Генеральный директор ООО "СТРОЙМЕХАНИЗАЦИЯ"
                </div>
              </div>
            </div>
            <div class="owl-item">
              <div class="reviews__item">
                <div class="reviews__item-img">
                  <img src="dist/images/review-1.jpg" alt="">
                </div>
                <div class="reviews__item-description">
                  От лица ООО "ФГК ГРУПП" выражаем благодарность за разработку красивого, качественного, приятного в обращении сайта. Хотим отметить скорость исполнения - от подачи заявки до сдачи нам готового продукта прошло не более 10 дней.
                </div>
                <div class="reviews__item-author">
                  Генеральный директор "ФГК-ГРУПП"
                </div>
              </div>
            </div>
            <div class="owl-item">
              <div class="reviews__item">
                <div class="reviews__item-img">
                  <img src="dist/images/review-1.jpg" alt="">
                </div>
                <div class="reviews__item-description">
                  От всего коллектива выражаем Вам глубокую благодарность за профессиональную и эффективную работу по созданию и продвижению нашего интернет-магазина.
                </div>
                <div class="reviews__item-author">
                  Руководитель интернет-магазина "Холдинг-Консул"
                </div>
              </div>
            </div>
            <div class="owl-item">
              <div class="reviews__item">
                <div class="reviews__item-img">
                  <img src="dist/images/review-1.jpg" alt="">
                </div>
                <div class="reviews__item-description">
                  От всей души выражаю Вам искреннюю благодарность за качественно проделанную работу по созданию, оптимизации и продвижению сайта нашего общества. Проделанная Вами работа выполнена с высоким профессионализмом и личным вежливым отношением.
                </div>
                <div class="reviews__item-author">
                  Генеральный директор "Паньковское"
                </div>
              </div>
            </div>
          </div>
          <div class="reviews__button-all-review">
            <a href="#" class="btn btn--big button-winona">Все отзывы</a>
          </div>
        </div>
      </div>-->
    </div>
  </section>
  <section class="contact-form">
    <div class="container">
      <div class="text-center">
        <h2 class="contact-form__heading">Связаться</h2>
      </div>
      <div class="row">
        <div class="col-md-10 offset-md-1 text-center">
          <div class="contact-form__wrapper">
            <form action="#" class="form form-contact" method="post" autocomplete="off" enctype="multipart/form-data">
              <div class="row">
                <div class="col-lg-4">
                  <div class="form__group">
                    <input class="form__input form__input--nav" type="text" autocomplete="off" name="name" placeholder="Ваше имя">
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form__group">
                    <input class="form__input form__input--nav" type="email" autocomplete="off" name="email" placeholder="Ваше email">
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form__group">
                    <input class="form__input form__input--nav form__phone" type="text" autocomplete="off" name="phone" placeholder="Ваш телефон">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form__group">
                    <textarea name="comment" class="form__textarea form__textarea--nav" placeholder="Комментарий"></textarea>
                  </div>
                  <div class="form__group">
                    <input type="file" id="file-contact-form" class="hide-type-file inputfile" data-multiple-caption="{count} files selected" name="attachment">
                    <label class="upload-file" for="file-contact-form">
                      <i class="fa fa-paperclip upload-file-icon" aria-hidden="true"></i>
                      <span class="upload-text-reset">Прикрепить файл</span>
                    </label>
                  </div>
                  <div class="form__group">
                    <div class="form__checkbox--center">
                      <input id="checkbox-form-contact" type="checkbox" name="policy" class="form__checkbox--nav js-policy-6" checked>
                      <label for="checkbox-form-contact">Соглавсие на <a href="#">обработку</a> персональных данных</label>
                    </div>
                  </div>
                  <div class="form__group">
                    <button class="form__btn form__btn-6 btn btn--big button-winona" type="submit" name="submit">Отправить</button>
                  </div>
                </div>
              </div>
            </form>
            <div class="contact-form__d-element-1"></div>
            <div class="contact-form__d-element-2"></div>
            <div class="contact-form__d-element-3"></div>
            <div class="contact-form__d-element-4"></div>
            <div class="contact-form__d-element-5"></div>
            <div class="contact-form__d-element-6"></div>
            <div class="contact-form__d-element-7"></div>
            <div class="contact-form__d-element-8"></div>
            <div class="contact-form__loader-wrapper">
              <div class="contact-form__loader-body">
                <div class="contact-form__loader"></div>
                <div class="contact-form__loader-text">Сообщение успешно отправлено, мы свяжемся с Вами!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="row align-items-center">
          <div class="col-md-4">
            <div class="footer__item">
              <div class="footer__item-icon">
                <span class="fa fa-phone"></span>
              </div>
              <div class="footer__item-info">
                <div class="footer__item-heading">
                  Позвонить нам
                </div>
                <div class="footer__item-desc">
                  <a href="tel:+74956643815">+7 (495) 664 38 15</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="footer__item">
              <div class="footer__item-icon">
                <span class="fa fa-envelope"></span>
              </div>
              <div class="footer__item-info">
                <div class="footer__item-heading">
                  Написать нам
                </div>
                <div class="footer__item-desc">
                  <a href="mailto:info@esdi.ru">info@esdi.ru</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="footer__item">
              <div class="footer__item-icon">
                <span class="fa fa-map-marker-alt"></span>
              </div>
              <div class="footer__item-info">
                <div class="footer__item-heading">
                  Приехать к нам
                </div>
                <div class="footer__item-desc">
                  <a href="https://yandex.ru/maps/213/moscow/?ll=37.584694%2C55.812408&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fll%3D37.584698%252C55.812412%26spn%3D0.001000%252C0.001000%26text%3D%25D0%25A0%25D0%25BE%25D1%2581%25D1%2581%25D0%25B8%25D1%258F%252C%2520%25D0%259C%25D0%25BE%25D1%2581%25D0%25BA%25D0%25B2%25D0%25B0%252C%2520%25D1%2583%25D0%25BB%25D0%25B8%25D1%2586%25D0%25B0%2520%25D0%25A0%25D1%2583%25D1%2581%25D1%2582%25D0%25B0%25D0%25B2%25D0%25B5%25D0%25BB%25D0%25B8%252C%25203%25D0%25BA2%2520&z=17" target="_blank">Москва, Руставели 3к2, офис 6</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="row align-items-center">
          <div class="col-lg-4">
            <a href="#" class="link-logo">
              <div class="footer__logo">
                <div class="footer__logo-img">
                  <img src="dist/images/logo-footer.svg" alt="">
                </div>
                <div class="footer__logo-text">
                  <span>Sites</span><span>Development</span>
                </div>
              </div>
            </a>
            <div class="footer__copy">
              Copyright &copy;
              <span id="year-footer">2018</span>.<br>
              ООО "Сайтс Девелопмент".<br>
              Все права защищиены.<br>
              <a href="#" class="link-ps">Пользовательское соглашение</a>.</div>
          </div>
          <div class="col-lg-2">
            <ul class="footer__link">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Vk</a></li>
              <li><a href="#">GooglePlus</a></li>
            </ul>
          </div>
          <div class="col-lg-2">
            <ul class="footer__link">
              <li><a href="#">О нас</a></li>
              <li><a href="#">Разработка</a></li>
              <li><a href="#">Продвижение</a></li>
              <li><a href="#">Блог</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </div>
          <div class="col-lg-4">
            <h3 class="footer__heading-subscribe">Подписаться на рассылку</h3>
            <form class="form form--subscribe" method="post" autocomplete="off">
              <div class="form__group form__group--subscribe">
                <input class="form__input form__input--nav" type="text" autocomplete="off" name="email" placeholder="Ваш email">
                <button class="form__btn form__btn-5 btn button-winona btn--subscribe" type="submit" name="subscribe">Отправить</button>
              </div>

              <div class="form__group">
                <div class="form__checkbox--center">
                  <input id="checkbox-form-subscribe" type="checkbox" name="policy" class="form__checkbox--nav js-policy-5" checked>
                  <label for="checkbox-form-subscribe">Соглавсие на <a href="#">обработку</a> персональных данных</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>
<script src="dist/js/lib.js?v=12"></script>
<script src="dist/js/main.js?v=12"></script>
<script>
  (function(i,s,o,g,r,a,m){
    i['GoogleAnalyticsObject']=r;
    i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},
      i[r].l=1*new Date();
    a=s.createElement(o),m=s.getElementsByTagName(o)[0];
    a.async=1;
    a.src=g;
    m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-134982988-1', 'auto');
  ga('send', 'pageview');
</script>
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(52468930, "init", {
    id:52468930,
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
  });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/52468930" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
</body>
</html>