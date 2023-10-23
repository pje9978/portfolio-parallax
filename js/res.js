
fetch(
    `https://raw.githubusercontent.com/pje9978/portfolio-parallax/main/data/data.json`
    ).then(function(response) {
        return response.json();
    }).then(function (json) {

        const jsonData = JSON.parse(JSON.stringify(json));
        workData(jsonData);
        subPageData(jsonData);

    }).catch(function(error) {
        console.log(error);
});
    

    
function workData(data) {
    const sections = document.querySelectorAll('.workItem');
    const urlArea = document.querySelectorAll('.urlArea');
    const linkArea = document.querySelectorAll('.linkArea');
    const searchUrl = document.querySelectorAll('.search a');
    const iframeUrl = document.querySelectorAll('.window iframe');
    const editorTitle = document.querySelectorAll('.editorTitle');
    const editorSubTitle = document.querySelectorAll('.editorSubTitle');
    const loadingScreen = document.getElementById('loading-screen');


    function disableScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, scrollTop);
    }

    function showLoadingScreen() {
        loadingScreen.style.display = 'block';
    }

    window.addEventListener('load', function() {
        showLoadingScreen();
        disableScroll();
    });
    function hideLoadingScreen() {
        loadingScreen.classList.add('fade-out');
        setTimeout(function() {
            loadingScreen.style.display = 'none';
            document.querySelector('.gnb').style.opacity = '1';
            document.querySelector('.lnb').style.opacity = '1';
            document.querySelector('main').style.opacity = '1';
            document.querySelector('footer').style.opacity = '1';
            document.querySelector('.lnb').style.display = 'contents';
            window.scrollTo(0, 0);
        },500); 
    }

    setTimeout(hideLoadingScreen, 4000);

    
    Object.keys(data).forEach((key, index) => {
        const section = sections[index];
        const urlElement = urlArea[index];
        const linkElement = linkArea[index];
        const searchUrlElement = searchUrl[index];
        const iframeUrlElement = iframeUrl[index];
        const editorTitleElement = editorTitle[index];
        const editorSubTitleElement = editorSubTitle[index];

        const item = data[key];

        // editor 
        editorTitleElement.textContent = item.title;
        editorSubTitleElement.textContent = item.subTitle;


        // search
        searchUrlElement.textContent = item.url.url1;
        searchUrlElement.href = item.url.url1;
        iframeUrlElement.src = item.url.url1;

        // subpage
        

        // console createElement
        Object.keys(item).forEach(subKey => {
            const value = item[subKey];

            const div = document.createElement('div');
            const divtitle = document.createElement('div');
            div.classList.add(subKey);
            div.classList.add("output");
            
            divtitle.classList.add(subKey);
            divtitle.classList.add("input");
            divtitle.style.opacity = '0.5';
            const output = divtitle.textContent = "> " + subKey;
            div.textContent = "> " + value;
            
            section.querySelector('.work').appendChild(divtitle);
            section.querySelector('.work').appendChild(div);
        });

        // button createElement
        Object.keys(item).forEach(subKey => {
            const value = item[subKey];

            
            if (subKey === 'url') {
                Object.entries(value).forEach((a, i) => {
                    // work url
                    const aElement = document.createElement('a');
                    aElement.classList.add(subKey);
                    aElement.href = a[1];
                    aElement.target = "_blank";
                    aElement.textContent = `Page ${i + 1}`;
                    urlElement.appendChild(aElement);
                });
            }
            
            if (subKey === 'link') {
                Object.entries(value).forEach((a, i) => {
                    
        
                    const aElement = document.createElement('a');
                    aElement.href = a[1];
                    aElement.target = "_blank";
                    // aElement.classList.add(subKey);
                    aElement.classList.add("link");
                    aElement.classList.add(a[0]);
                    if(a[0] === "subpage"){
                        aElement.textContent = "자세히 보기";
                        // aElement.href = 
                    }else if(a[0] === "pdf"){
                        aElement.textContent = "기획서";
                    }else if(a[0] === "gitHub"){
                        aElement.textContent = "GitHub";
                    }
                    linkElement.appendChild(aElement);

                });
            }
        });
    });
}

