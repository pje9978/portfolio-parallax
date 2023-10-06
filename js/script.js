document.addEventListener("DOMContentLoaded", function () {

    const popup = document.querySelector(".popup");
    const popupItem = document.querySelectorAll(".popup-item");
    const popupContent = document.querySelectorAll(".popup-content");
    const closeBtn =  document.querySelector(".closeBtn");


    function openPopup() {
        popupItem.forEach((item, index) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                gsap.to(popup, { display: "flex", opacity: 1, duration: 0.5 });
                
                popupContent.forEach((content) => {
                content.classList.remove("active");
                closeBtn.addEventListener('click', () => closePopup())
                });
        
                popupItem[index].classList.add("active");
                popupContent[index].classList.add("active");
                closeBtn.classList.add("active");
            });
        });
    }
    
    function closePopup() {
        gsap.to(popup, { opacity: 0, duration: 0.5, onComplete: () => {
        popup.style.display = 'none';
        closeBtn.classList.remove("active");
        
        popupContent.forEach((content) => {
            content.classList.remove("active");
        });
        }});
    }

    openPopup();
    closePopup();


    function goToPage(index) {
        mySwiper.slideTo(index);
    }
    
    // Swiper 컴포넌트 초기화
    var bullet = ['1번', '2번', '3번'];
    
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    // const slides = document.querySelectorAll('.swiper-slide');
    const pagination = document.querySelector('.swiper-pagination');
    // const buttonLock = document.querySelector('.swiper-button-lock ');
    pagination.style.width = '60%';
    pagination.style.bottom = '0';

    // slides.forEach(slide => {
    //    slide.style.width = '50%';
    // });


    // 현재 시간을 가져오는 함수
    function getCurrentTime() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? '오후' : '오전';
    
        // 12시간 형식으로 변환
        hours = hours % 12;
        hours = hours ? hours : 12; // 0시일 경우 12로 표기
    
        // 시간과 분이 한 자리 수인 경우 앞에 0을 추가하여 두 자리로 만듦
        if (hours < 10) {
            hours = "0" + hours;
        }
        
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
    
       return ampm + " " + hours + ":" + minutes + " ";
    }

    
    document.getElementById("currentTime").innerHTML = getCurrentTime();

    var divs = document.querySelectorAll(".items");
    var visibleCount = 3; // 초기 보이는 갯수
    var increment = 2; // 클릭 시 추가로 보이는 갯수


    function showMoreDivs(e) {
        e.preventDefault(); // 클릭 이벤트의 기본 동작 중지

        for (
        var i = visibleCount;
        i < Math.min(visibleCount + increment, divs.length);
        i++
        ) {
        divs[i].style.display = "block";
        }
        visibleCount += increment;

        if (visibleCount >= divs.length) {
        // 컨텐츠 남아있는지 확인
        alert("게시물의 끝입니다."); // 컨텐츠 없을 시 alert 창 띄우기
        loadButton.removeEventListener("click", showMoreDivs);
        loadButton.disabled = true;
        }
    }

    for (var j = visibleCount; j < divs.length; j++) {
        divs[j].style.display = "none";
    }

    // var loadButton = document.getElementById("load");
    // loadButton.addEventListener("click", showMoreDivs);

});
