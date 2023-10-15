window.addEventListener('load', function() {
	var loadingScreen = document.getElementById('loading-screen');
	
	// 문서가 완전히 로드된 후에 실행되는 함수
	function showContent() {
	  // 로딩 화면 제거
	  loadingScreen.parentNode.removeChild(loadingScreen);
	  
	  // #content 내용 보이기 (필요한 경우 추가적인 스타일 변경 처리)
	  document.getElementById('content').style.visibility = 'visible';
	}
	
	// 이미지가 모두 로드될 때까지 대기
	var images = document.getElementsByTagName('img');
	var loadedImagesCount = images.length;
	
	function imageLoaded() {
	  loadedImagesCount--;
	  if (loadedImagesCount === 0) {
		showContent();
	  }
	 }
  
	 for (var i = 0; i < images.length; i++) {
	   if (images[i].complete) {
		 imageLoaded();
	   } else {
		 images[i].addEventListener('load', imageLoaded);
	   }
	 }
  });



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
	

	function copyToClipboard(text) {
		return new Promise(function(resolve, reject) {
		  navigator.clipboard.writeText(text)
			.then(function() {
			  resolve();
			})
			.catch(function(error) {
			  reject(error);
			});
		});
	  }
	  
	  function handleCopyButtonClick() {
		var emailElements = document.getElementsByClassName('email');
		var feedbackElements = document.getElementsByClassName('feedback');
	  
		// 모든 이메일 주소 처리
		for (var i = 0; i < emailElements.length; i++) {
		  var emailElement = emailElements[i];
		  var feedbackElement = feedbackElements[i];
	  
		  // 이메일 주소 가져오기
		  var email = emailElement.textContent;
	  
		  // 클립보드에 복사하기
		  copyToClipboard(email)
			.then(function() {
			  // 성공적으로 복사되었을 때 피드백 메시지 표시
			  feedbackElement.textContent = 'COPY!';
			})
			.catch(function(error) {
			  // 복사 실패 시 에러 메시지 표시
			//   feedbackElement.textContent = '복사 실패: ' + error;
			});
	  
		  // 일정 시간 후에 피드백 메시지 제거
		  setTimeout(function() {
			feedbackElement.textContent = '';
		  }, 2000);
		}
	  }
	  
	  var copyButtons = document.getElementsByClassName('copy-button');
	  for (var i = 0; i < copyButtons.length; i++) {
		copyButtons[i].addEventListener('click', handleCopyButtonClick);
	  }
	  

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

    for (var j = visibleCount; j < divs.length; j++) {
        divs[j].style.display = "none";

    }




    // Swiper 컴포넌트 초기화
    var bullet = ['1번', '2번', '3번'];
    
    var swiper1 = new Swiper('#work .swiper-container', {
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

    const pagination = document.querySelector('.swiper-pagination');
 
    pagination.style.width = '60%';
    pagination.style.bottom = '0';



	var mySwiper = new Swiper(".rfa-slide-container--chapter-select", {
		initialSlide: 1,
		direction: "horizontal",
		keyboardControl: true,
		paginationType: "bullets",
		pagination: ".swiper-pagination",
		paginationClickable: true,
		breakpoints: {
		  320: {
			slidesPerView: 1,
			spaceBetween: 0,
			centeredSlides:false
		  },
		  414:{
			  slidesPerView :1 ,
			  spaceBetween :0 ,
			  centeredSlides:false
		  },
			 1024:{
			  slidesPerView:"auto",
			  spaceBetween :50 ,
			  centeredSlides:true
		  },
		  2560:{
			  slidesPerView:"auto",
			  spaceBetween :50 ,
			  centeredSlides:true
		 }
		  
	  },
		
		mousewheelControl:true, 
		spaceBetween :0,
		
		hashnav:true, 
		hashnavWatchState:true,
		
		onInit:function(){
			console.log("Hey Guys");
			updateBackgroundImage();
		},
		on:{
			slideChange:function(){
			updateBackgroundImage();
		}
		}
	});
	
	function updateBackgroundImage() {
		const activeSlide = document.querySelector('.rfa-chap-sect-slide.swiper-slide-active');
	
		if (activeSlide) {
			const backgroundImage = window.getComputedStyle(activeSlide).getPropertyValue('background-image');
			const url = backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
			const rfaSlideContainer = document.querySelector('.slide-deco');
			rfaSlideContainer.style.backgroundImage = `url(${url})`;
			rfaSlideContainer.style.filter = 'blur(50px) saturate(1)';
			console.log(backgroundImage);
	   }
	}
	

});


$(document).ready(function () {
	"use strict";

	$("body").removeClass("fade-out");

	/* Drop down menu
	-------------------------------------------------------*/
	var menu = $(".sliding-menu").sliiide({
		place: "top",
		toggle: "#sliiider-toggle",
		exit_selector: ".slider-exit",
		animation_duration: "0.9s",
		animation_curve: "cubic-bezier(0.23, 1, 0.32, 1)",
		body_slide: false,
		no_scroll: true,
		auto_close: true
	});
	menu.activate();
	menu.deactivate();

	/* Swiper Slides 1
	-------------------------------------------------------*/
	var mySwiper = new Swiper(".rfa-slide-container--chapter-select", {
		initialSlide: 1,
		direction: "horizontal",
		keyboardControl: true,
		paginationType: "bullets",
		pagination: ".swiper-pagination",
		paginationClickable: true,
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				centeredSlides: false
			},
			414: {
				slidesPerView: 1,
				spaceBetween: 0,
				centeredSlides: false
			},
			1024: {
				//slidesPerView: 2.2,
				slidesPerView: "auto",
				spaceBetween: 50,
				centeredSlides: true
			},
			2560: {
				//slidesPerView: 2.2,
				slidesPerView: "auto",
				spaceBetween: 50,
				centeredSlides: true
			}
		},

		mousewheelControl: true,
		spaceBetween: 0,

		hashnav: true,
		hashnavWatchState: true,

		onInit: function () {
			console.log("Hey Guys");
		}
	});

	/* Swiper Slides 2
	-------------------------------------------------------*/
	var mySwiperTwo = new Swiper(".rfa-slide-container--chapter", {
		initialSlide: 1,
		slidesPerView: 1,
		direction: "horizontal",
		keyboardControl: true,
		nextButton: ".swiper-button-next",
		prevButton: ".swiper-button-prev",
		mousewheelControl: true,
		spaceBetween: 0,
		hashnav: true,
		hashnavWatchState: true
	});

	/* Swiper Two-way Nav Control
	-------------------------------------------------------*/
	var slideLinks = new Swiper(".slide-links-container", {
		initialSlide: 1,
		direction: "horizontal",
		spaceBetween: 0,
		centeredSlides: true,
		slidesPerView: 1,
		effect: "fade",
		fade: { crossFade: true }
	});
	mySwiperTwo.params.control = slideLinks;
	slideLinks.params.control = mySwiperTwo;

	mySwiper.on("onSlideChangeStart", function () {
		if (mySwiper.activeIndex > 0) {
			$("#rfaPagePagination")
				.removeClass("hide-swiper-pagination")
				.addClass("add-swiper-pagination");
		} else {
			$("#rfaPagePagination")
				.addClass("hide-swiper-pagination")
				.removeClass("add-swiper-pagination");
		}
	});

	/* Mobile Detect
    -------------------------------------------------------*/
	if (
		/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
			navigator.userAgent || navigator.vendor || window.opera
		)
	) {
		$("html").addClass("mobile");
	} else {
		$("html").removeClass("mobile");

		mySwiper.on("onSlideChangeStart", function () {
			if (mySwiper.activeIndex > 0) {
				$("#rfaCover").removeClass("show-cover").addClass("hide-cover");
			} else {
				$("#rfaCover").addClass("show-cover").removeClass("hide-cover");
			}
		});
	}
});
