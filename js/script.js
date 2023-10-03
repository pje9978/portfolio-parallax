document.addEventListener("DOMContentLoaded", function () {

    const slideItems = document.querySelector('.slide--visible');
    
    const popBtns = document.querySelectorAll('.content__close');
    const desc = document.querySelectorAll('.desc');
    
    // 모달 팝업 열기 버튼 클릭 시
    
 

    slideItems.addEventListener('click', () => {
        console.log(slideItems)
        const desc = slideItems.getElementsByClassName('desc');
        for (let i = 0; i < desc.length; i++) {
            desc[i].style.display = 'flex';
        }
    });

        // function hidecontent(){
        //     document.querySelector('.desc').style.display = 'none';
        // }
        // a.addEventListener('mouseleave',hidecontent)
        // a.addEventListener('click', showContent);
        // a.addEventListener('mouseenter', showContent);



    // 모달 팝업 닫기 버튼 클릭 시
    popBtns.forEach((a,i) =>{
        a.addEventListener('click', slideshow.hideContent);
    });;

    function descShow() {
        const items = document.querySelectorAll(".section .item");
        const content = document.getElementById("content");

        items.forEach(function (item) {
            item.addEventListener("click", function () {
            const itemContent = this.textContent;
            content.textContent = "Selected Item: " + itemContent;
            });
        });
    }
    descShow();

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
