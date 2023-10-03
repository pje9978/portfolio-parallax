function createUserList(users) {
    let list = "";
    for (let user of users) {



      const urls = user.url.reduce((acc,url) => {
        Object.entries(url).forEach(([key,value]) => {
          const buttonContainer = document.getElementById("buttonContainer");
          const linkValue = url[key];
          if(value != ""){
            acc.push(value);
            const button = document.createElement("a");
            button.textContent = key;
            button.href = linkValue;
            button.onclick = function(event){
              event.preventDefault();
              window.open(this.href, '_blank');
            }
            buttonContainer.appendChild(button);
          }
        });
        return acc;
      }, []);
      
      console.log(urls)

      console.log(buttonContainer.innerHTML);




      list += `
        <div class="items">
          <p>${user.part}</p>
          <p class="desc-title">
            <span class="title">${user.title}</span>
            <span class="sub-title">${user.subTitle}</span>
          </p>
          <p><b>디바이스 :</b>&nbsp;${user.device}</p>
          <p class="desc-date"><b>작업 기간 :</b>${user.date}</p>
          <p class="desc-date"><b>기여도 :</b>${user.percent}</p>
          <p class="desc-lang">
            <span><b>사용 프로그램:</b></span>
            <span>${user.lang}</span>
          </p>
        </div>
        ${buttonContainer.innerHTML}
      `;
    }
    return list;
} 





fetch("/data/data.json")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const work1 = document.getElementById("work1");
    const work2 = document.getElementById("work2");
    const work3 = document.getElementById("work3");
    // 각 그룹에 대한 데이터를 가져와서 동적으로 div 요소 생성
    work1.innerHTML = createUserList(data.work1);
    work2.innerHTML = createUserList(data.work2);
    work3.innerHTML = createUserList(data.work3);

  })
  .catch(error => console.error(error));

