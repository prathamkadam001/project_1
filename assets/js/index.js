  $(document).ready(function () {
    $(".text").waypoint(function () {
      $(".text").addClass(
        "animate__animated animate__fadeInLeft"
      );
    },
      { offset: "80%" }
    );
  });
  $(document).ready(function () {
    $(".text2").waypoint(function () {
      $(".text2").addClass(
        "animate__animated animate__fadeInRight"
      );
    },
      { offset: "80%" }
    );
  });
  $(document).ready(function () {
    $(".about-image").waypoint(function () {
      $(".about-image").addClass(
        "animate__animated animate__fadeInLeft"
      );
    },
      { offset: "80%" }
    );
  });
  $(document).ready(function () {
    $(".about-text").waypoint(function () {
      $(".about-text").addClass(
        "animate__animated animate__fadeInRight"
      );
    },
      { offset: "80%" }
    );
  });
  $(document).ready(function () {
    $(".image2").waypoint(function () {
      $(".image2").addClass(
        "animate__animated animate__fadeInUp"
      );
    },
      { offset: "80%" }
    );
  });
  $(document).ready(function () {
    $(".text3").waypoint(function () {
      $(".text3").addClass(
        "animate__animated animate__backInUp"
      );
    },
      { offset: "80%" }
    );
  });
  $(document).ready(function () {
    $(".footer-col").waypoint(function () {
      $(".footer-col").addClass(
        "animate__animated animate__bounceInUp"
      );
    },
      { offset: "80%" }
    );
  });
  $(document).ready(function () {
    $(".menu_items").waypoint(function () {
      $(".menu_items").addClass(
        "animate__animated animate__fadeInLeft"
      );
    },
      { offset: "80%" }
    );
  });
  $(document).ready(function () {
    $(".menu_items2").waypoint(function () {
      $(".menu_items2").addClass(
        "animate__animated animate__fadeInRight"
      );
    },
      { offset: "80%" }
    );
  });
  $(document).ready(function () {
    $(".bg").waypoint(function () {
      $(".bg").addClass(
        "animate__animated animate__fadeIn"
      );
    },
      { offset: "80%" }
    );
  });
  $(document).ready(function () {
    $(".book-now-image").waypoint(function () {
      $(".book-now-image").addClass(
        "animate__animated animate__fadeInLeft"
      );
    },
      { offset: "80%" }
    );
  });
  $(document).ready(function () {
    $(".book-table").waypoint(function () {
      $(".book-table").addClass(
        "animate__animated animate__fadeInRight"
      );
    },
      { offset: "80%" }
    );
  });
  document.addEventListener('DOMContentLoaded', function () {
    const sentences = [
      'Breakfast',
      'Launch',
      'Dinner',
      'Sancks'
    ];
    
    let currentIndex = 0;
    let offset = 0;
    const sentenceElement = document.querySelector('.menu_text');
    let forwards = true;
    let skipCount = 0;
    const skipDelay = 15;
    const speed = 100;
  
    const updateSentence = () => {
      sentenceElement.textContent = sentences[currentIndex].substring(0, offset);
    };
  
    const handleAnimation = () => {
      if (forwards) {
        if (offset >= sentences[currentIndex].length) {
          if (++skipCount === skipDelay) {
            forwards = false;
            skipCount = 0;
          }
        }
      } else if (offset === 0) {
        forwards = true;
        currentIndex = (currentIndex + 1) % sentences.length;
      }
  
      if (skipCount === 0) {
        forwards ? offset++ : offset--;
      }
  
      updateSentence();
    };
  
    setInterval(handleAnimation, speed);
  });

    $(document).ready(function(){
      $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
    });

    $(document).ready(function(){
      $('.menu_name').click(function(){
        var name = $(this).attr('name');
        $('#menu_data').find('#'+name).removeClass('d-none').addClass('d-block').siblings().removeClass('d-block').addClass('d-none');
      });
    });
    $(document).ready(function(){
      $('#about').hover(function(){
        $('#top_button').removeClass('d-none').addClass('d-block').css("transition", "0.6s all");
      });
    });
    $(document).ready(function(){
      $('#home').hover(function(){
        $('#top_button').removeClass('d-bolck').addClass('d-none');
      });
    });
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.item');
    const btns = document.querySelectorAll('.btn');
    
    function reset() {
      for (let i = 0; i < items.length; i++) {
        btns[i].classList.remove('expand');
        items[i].classList.remove('animation');
      } 
    }
    
    function animate(i) {
      btns[i].classList.add('expand');
      items[i].classList.add('animation');
    }
    
    function scrollTo(i) {
      slider.style.transform = `translateX(${-i * slider.offsetWidth}px)`;
      reset();
      animate(i);
    }
    
    const activate = (e) => e.target.matches('.btn') && scrollTo(e.target.dataset.index);
    
    const init = () => animate(0);
    
    window.addEventListener('load',init,false);
    window.addEventListener('click',activate,false);