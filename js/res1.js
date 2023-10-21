
document.addEventListener('DOMContentLoaded', function() {
   const body = document.querySelector('body');
   const inputDataId = body.getAttribute('data-id');


   fetch(`https://raw.githubusercontent.com/pje9978/portfolio-parallax/main/data/data.json`)
      .then(response => response.json())
      .then(data => {

         const container = document.getElementById('data-container');
         const title = document.querySelector('.title');
         const subTitle = document.querySelector('.subTitle');


         data.forEach(itemData => {
            const itemId = itemData.id;
            console.log(itemId)
            if (itemId === parseInt(inputDataId)) {
               const itemName = itemData.name; // name 속성 가져오기
               title.textContent = itemData.title;
               subTitle.textContent = itemData.subTitle;
            
            
            
            
            }
         });
      })
      .catch(error => console.log(error));
});
