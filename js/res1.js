

document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const inputDataId = body.getAttribute('data-id');


fetch(`https://raw.githubusercontent.com/pje9978/portfolio-parallax/main/data/data.json`)
    .then(response => response.json())
    .then(data => {
       
        var loadingScreen = document.getElementById('loading-sub');
        var main = document.querySelector('main');
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
                
                function loadImage(url, element, successCallback, errorCallback) {
                    var image = new Image();
                    image.src = url;

                    image.onload = function() {
                        successCallback(element);
                        console.log("로드됨");
                        loadingScreen.style.display = "none";
                        main.style.display = "flex";
                        element.style.backgroundImage = `url(${url})`;
                        element.src = url;
                    };
                    
                    image.onerror = function() {
                        errorCallback(element);
                    };
                }
                
                function handleImageLoad(element) {
                    element.style.display = "block"; 
                }
                function handleImageError(element) {
                    // Add your logic for handling image loading errors here
                    console.error("Failed to load image");
                }
                // macbook Img
                if (mackbook) {
                    loadImage(itemData.img.desktop[0], mackbook, handleImageLoad, handleImageError);
                }
                
                //page Img
                pageImg.forEach((imgElement, i) => {
                    const imgUrl = itemData.img.desktop;
                    loadImage(imgUrl[i], imgElement, handleImageLoad, handleImageError);
                });
            
                //link Img
                pageLink.forEach((linkElement, i) => {
                    const linkUrlArray = Object.values(itemData.url);
                    loadImage(linkUrlArray[i], linkElement, handleImageLoad, handleImageError);
                });
                

                //iphone Img
                if (iphone) { 
                    loadImage(itemData.img.mobile[0], iphone, handleImageLoad, handleImageError);
                }

                //기획서 url
                if(pdf) {
                    pdf.href = itemData.link.pdf;
                }

            }
        });


    })
    .catch(error => console.log(error));
});
