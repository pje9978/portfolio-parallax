function createUserList(users) {
    let list = "";
    for (let user of users) {
      list += `
        <div class="items ${user.project}">
          <p>${user.categroy}</p>
          <p class="desc-title">
            <span class="title">${user.title}</span>
            <span class="part">${user.part}</span>
          </p>
          <p><b>디바이스 :</b>&nbsp;${user.device}</p>
          <p class="desc-date"><b>작업 기간 :</b>${user.date}</p>
          <p class="desc-date"><b>작업 인원 :</b>${user.count}</p>
          <p class="desc-tool">
            <span><b>사용 프로그램:</b></span>
            <span>${user.tool}</span>
          </p>
          <blockquote>
            <span><b>프로젝트의 목표 설정</b></span>
            ${user.blockquote}
          </blockquote>
          <div class="btnArea">
            <button onclick="window.open('${user.pdf}')">기획서</button>
            <button onclick="window.open('${user.url}')">LINK</button>
          </div>
          <a class="bnt-more" href="${user.detail}">More</a>
        </div>
      `;
    }
    return list;
  }

  fetch("/data/data.json")
    .then(response => response.json())
    .then(data => {

      const work1 = document.getElementById("work1");
      const work2 = document.getElementById("work2");
      const work3 = document.getElementById("work3");
      // 각 그룹에 대한 데이터를 가져와서 동적으로 div 요소 생성
      work1.innerHTML = createUserList(data.work1);
      work2.innerHTML = createUserList(data.work2);
      work3.innerHTML = createUserList(data.work3);

    })
    .catch(error => console.error(error));