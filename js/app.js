$(document).ready(function () {

  /* ── Preloader ─────────────────────────────────────────── */
  $(window).on('load', function () {
    $('.preloader').addClass('complete');
  });

  /* ── Sticky Nav ────────────────────────────────────────── */
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 50) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });

  /* ── Skill Progress Bars (Waypoint) ────────────────────── */
  var skillWaypoint = new Waypoint({
    element: document.getElementById('experience'),
    handler: function () {
      var bars = document.querySelectorAll('.progress-bar');
      var widths = ['95%', '90%', '85%', '80%', '85%', '80%'];
      var delays = ['1s', '1.4s', '1.7s', '2s', '2.3s', '2.6s'];
      bars.forEach(function (bar, i) {
        bar.style.width      = widths[i];
        bar.style.transition = delays[i] + ' all';
      });
    },
    offset: '90%'
  });

  /* ── Scroll Animations (Waypoint) ──────────────────────── */
  function bindWayFade(selector, animClass) {
    var $children = $(selector).children();
    $children.each(function () {
      var self = $(this);
      $(this).waypoint(function () {
        self.addClass('animated ' + animClass);
      }, { offset: '90%' });
    });
  }
  bindWayFade('.way-fade-up',    'fadeInUp');
  bindWayFade('.way-fade-left',  'fadeInLeft');
  bindWayFade('.way-fade-right', 'fadeInRight');

  /* ── Filterizr (Project Grid) ──────────────────────────── */
  var filterizd = $('.filter-container').filterizr({ animationDuration: 0.5 });

  // Filter buttons
  $('.filter-btn').on('click', function () {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');
    var cat = $(this).data('filter');
    if (cat === 'all') {
      filterizd.filterizr('filter', 'all');
    } else {
      filterizd.filterizr('filter', String(cat));
    }
  });
  // Set "All" active on load
  $('.filter-btn[data-filter="all"]').addClass('active');

  /* ── Typed.js ───────────────────────────────────────────── */
  var typed = new Typed(".element", {
    strings: ["Abdul Rahim", "a Solution Architect", "a Senior Backend Engineer"],
    smartBackspace: true,
    typeSpeed: 90,
    backSpeed: 60,
    loop: true,
    loopCount: Infinity,
    startDelay: 800
  });

  /* ── Smooth Scroll ─────────────────────────────────────── */
  $('a[href^="#"]').smoothScroll({ speed: 1800 });

});
