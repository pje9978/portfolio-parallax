
document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const inputDataId = body.getAttribute('data-id');


fetch(`https://raw.githubusercontent.com/pje9978/portfolio-parallax/main/data/data.json`)
    .then(response => response.json())
    .then(data => {
        const main = document.querySelector('main');
        const loadingScreen = document.getElementById('loading-screen');
        const docTitle = document.querySelector('title');
        const container = document.getElementById('data-container');
        const title = document.querySelector('.title');
        const subTitle = document.querySelector('.subTitle');
        const mackbook = document.querySelector('.viewport');
        const iphone = document.querySelector('.display-content');
        const pageLink = document.querySelectorAll('.pageLink');
        const pageImg = document.querySelectorAll('.pageImg');
        const pdf = document.querySelector('.pdf');
        const linkElement = document.createElement("link");

        function favicon(){
            linkElement.rel = "icon";
            linkElement.type = "image/png";
            linkElement.sizes = "16x16";
            linkElement.href = "http://pje9978.ipdisk.co.kr:8000/list/HDD2/portfolio/favicons/favicon-16x16.png";
        
            const headElement = document.head || document.getElementsByTagName("head")[0];
            headElement.appendChild(linkElement);
        }
        favicon();

        data.forEach(itemData => {

        const itemId = itemData.id;

            if (itemId === parseInt(inputDataId)) {
                console.log(itemData.subTitle)
                // title 
                docTitle.textContent = itemData.name;
                title.textContent = itemData.title;
                subTitle.textContent = itemData.subTitle;
                
                // macbook Img
                if (mackbook) {
                    // hideLoadingScreen();
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
                if (iphone) {
                
                    iphone.style.backgroundImage = `url(${itemData.img.mobile[0]})`;
                }

                //기획서 url
                pdf.href = itemData.link.pdf;
                console.log(itemData.link.pdf)
            }
        });
    })
    .catch(error => console.log(error));
});
