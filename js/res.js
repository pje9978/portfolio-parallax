
fetch(
    `https://raw.githubusercontent.com/pje9978/portfolio-parallax/main/data/data.json`
    ).then(function(response) {
        return response.json();
    }).then(function (json) {
        // 2
        // console.log(JSON.stringify(json));
        // const jsonData = JSON.stringify(json)
        // 3
        const jsonData = JSON.parse(JSON.stringify(json));

        workData(jsonData);
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

    Object.keys(data).forEach((key, index) => {
        const section = sections[index];
        const urlElement = urlArea[index];
        const linkElement = linkArea[index];
        const searchUrlElement = searchUrl[index];
        const iframeUrlElement = iframeUrl[index];
        const editorTitleElement = editorTitle[index];
        const editorSubTitleElement = editorSubTitle[index];

        const item = data[key];
        console.log(item)

        // editor 
        editorTitleElement.textContent = item.title;
        editorSubTitleElement.textContent = item.subTitle;

        // search
        Object.entries(item.url).forEach(([key,value]) => {
            searchUrlElement.textContent = item.url.url1;
            searchUrlElement.href = item.url.url1;
            iframeUrlElement.src = item.url.url1;
        });

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
            console.log(item[subKey])
            
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

                    console.log(a)
                    const aElement = document.createElement('a');
                    aElement.href = a[1];
                    aElement.target = "_blank";
                    // aElement.classList.add(subKey);
                    aElement.classList.add("link");
                    aElement.classList.add(a[0]);
                    if(a[0] === "subpage"){
                        
                        aElement.textContent = "자세히 보기";
                    }else if(a[0] === "pdf"){
                        aElement.textContent = "기획서";
                    }
                    linkElement.appendChild(aElement);

                });
            }
        });
    });
}