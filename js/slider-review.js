        /* Индекс слайда по умолчанию */
        var slideIndexR = 1;
        showSlidesR(slideIndexR);
        
        /* Функция увеличивает индекс на 1, показывает следующй слайд*/
        function plusSlideR() {
            showSlidesR(slideIndexR += 1);
        }
        
        /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
        function minusSlideR() {
            showSlidesR(slideIndexR -= 1);  
        }
        
        /* Устанавливает текущий слайд */
        function currentSlide(n) {
            showSlidesR(slideIndexR = n);
        }
        
        /* Основная функция слайдера */
        function showSlidesR(n) {
            var i;
            var slidesR = document.getElementsByClassName("review-item");
            var dotsR = document.getElementsByClassName("slider-review-dots_item");
            if (n > slidesR.length) {
            slideIndexR = 1
            }
            if (n < 1) {
                slideIndexR = slidesR.length
            }
            for (i = 0; i < slidesR.length; i++) {
                slidesR[i].style.display = "none";
            }
            for (i = 0; i < dotsR.length; i++) {
                dotsR[i].className = dotsR[i].className.replace("active", "");
            }
            slidesR[slideIndexR - 1].style.display = "flex";
            dotsR[slideIndexR - 1].className += " active";
        }