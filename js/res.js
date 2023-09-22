fetch("/data/data.json")
  .then(function(response) {
    if (!response.ok) {
      throw new Error("데이터를 불러오는데 실패했습니다.");
    }
    return response.json();
  })
  .then(function(data) {
    var container = document.getElementById("data-container");

    data.forEach(function(item) {
      var content = document.createElement("div");
      content.className = "content";
      content.textContent = item.text;

      container.appendChild(content);
      
      // CSS 스타일 적용
      content.style.color = item.color;
      content.style.backgroundColor = item.backgroundColor;
      content.style.fontWeight = item.bold ? "bold" : "normal";
    });
  })
  .catch(function(error) {
    alert(error.message);
  });
