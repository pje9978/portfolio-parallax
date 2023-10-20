
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

    Object.keys(data).forEach((key, index) => {
        const section = sections[index];
        const urlElement = urlArea[index];
        const item = data[key];
        
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
            if(subKey === 'url' || subKey === 'link'){
                Object.values(value).forEach((a,i) => {
                    const aElement =  document.createElement('a');
                    aElement.classList.add(subKey);
                    aElement.classList.add("output");
                    aElement.href = a;
                    aElement.textContent = `Page ${i + 1}`;
                    urlElement.appendChild(aElement);
                    
                })
            }
        });
    });
}