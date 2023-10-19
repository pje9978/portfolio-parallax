
fetch(
    `https://raw.githubusercontent.com/pje9978/portfolio-parallax/main/data/data.json`
    ).then(function(response) {
        return response.json();
    }).then(function (json) {
        // 2
        console.log(JSON.stringify(json));
        // const jsonData = JSON.stringify(json)
        // 3
        const jsonData = JSON.parse(JSON.stringify(json));

        workData(jsonData);
        console.log(jsonData)


    }).catch(function(error) {
        console.log(error);
});
    

    
function workData(data) {
    console.log(data)
    const sections = document.querySelectorAll('.workItem');

    Object.keys(data).forEach((key, index) => {
        const section = sections[index];
        const item = data[key];
        // console.log((data[key]))
        
        Object.keys(item).forEach(subKey => {
            const value = item[subKey];
            
            const div = document.createElement('div');
            const divtitle = document.createElement('div');
            div.classList.add(subKey);
            divtitle.style.opacity = '0.5';
            const output = divtitle.textContent = "> " + subKey;
            div.textContent = "> " + value;
            
            section.querySelector('.work').appendChild(divtitle);
            section.querySelector('.work').appendChild(div);
        });
    });
 

}