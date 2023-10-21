
document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const inputDataId = body.getAttribute('data-id');


fetch(`https://raw.githubusercontent.com/pje9978/portfolio-parallax/main/data/data.json`)
    .then(response => response.json())
    .then(data => {

        const container = document.getElementById('data-container');
        const title = document.querySelector('.title');
        const subTitle = document.querySelector('.subTitle');
        const mackbook = document.querySelector('.viewport');
        const iphone = document.querySelector('.display-content');
        const pageLink = document.querySelectorAll('.pageLink');
        const pageImg = document.querySelectorAll('.pageImg');


        data.forEach(itemData => {

        const itemId = itemData.id;

        if (itemId === parseInt(inputDataId)) {
            console.log(itemData.subTitle)
            // title 
            title.textContent = itemData.title;
            subTitle.textContent = itemData.subTitle;
            console.log(mackbook)
            
            // macbook Img
            if (mackbook) {
                mackbook.style.backgroundImage = `url(${itemData.img.desktop[0]})`;
            } 
            
            //page Img
            pageImg.forEach((a,i) => {
                const imgUrl = itemData.img.desktop;
                a.src = imgUrl[i];
            })
        
            //link Img
            pageLink.forEach((a,i) => {
                const linkUrl = Object.values(itemData.url);
                a.href = linkUrl[i];
            })

            //iphone Img
            iphone.style.backgroundImage = `url(${itemData.img.mobile[0]})`;
        }
        });
    })
    .catch(error => console.log(error));
});
