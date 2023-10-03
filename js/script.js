document.addEventListener("DOMContentLoaded", function () {

    const popupItem = document.querySelectorAll(".popup-item");
    const popupContent = document.querySelectorAll(".popup-content");
    const closeBtn =  document.querySelector(".closeBtn");


    function openPopup() {
        popupItem.forEach((item,index) => {
            item.addEventListener("click", (e)=>{
                e.preventDefault();

                popupContent.forEach((content)=>{
                    content.classList.remove("active");
                    closeBtn.addEventListener('click', () => closePopup())
                })

                popupItem[index].classList.add("active");
                popupContent[index].classList.add("active")
                closeBtn.classList.add("active")
               
            })
        })
    }
    function closePopup() {
        closeBtn.classList.remove("active");
        popupContent.forEach((content)=>{
            content.classList.remove("active");
        })
    }
    openPopup();
    closePopup();

    
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

    var loadButton = document.getElementById("load");
    loadButton.addEventListener("click", showMoreDivs);

});
