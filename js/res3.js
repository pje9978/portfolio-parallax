
// 1
fetch(
    `https://raw.githubusercontent.com/pje9978/portfolio-parallax/main/data/data.json`
    ).then(function(response) {
        return response.json();
    }).then(function (json) {
        // 2
        console.log(JSON.stringify(json));
        
        // 3
        workData(json);
        
    }).catch(function(error) {
        console.log(error);
});
    
var sectionGroup = document.querySelector('#work');
    
function workData(data) {
    for (const key in data) {
        console.log(key);
        console.log(key);
        const sectionElement = document.createElement('section');
        sectionElement.id = key;
        sectionElement.classList.add('work');
        const workItems = data[key];
        sectionGroup.appendChild(sectionElement);

        for (let i = 0; i < workItems.length; i++) {
   
            const workItemSection = document.createElement('section');
            workItemSection.id = `workitem${i + 1}`;
            workItemSection.classList.add('workitem');

            // category
            const categoryElement = document.createElement('p');
            categoryElement.classList.add(`work__${key}`);
            categoryElement.textContent = `${key}`;

            //title
            const titleElement = document.createElement('h2');
            titleElement.classList.add('title');
            titleElement.textContent = workItems[i].title;
            
            //subtitle
            const subtitleElement = document.createElement('h3');
            subtitleElement.classList.add('subtitle');
            subtitleElement.textContent = workItems[i].subTitle;
            
            //lang
            const langElement = document.createElement('h4');
            const langItem = workItems[i].lang;
            langElement.classList.add('lang');

            langItem.forEach((element) => {
                const langItemElement = document.createElement('h5');
                langItemElement.textContent = element;
                langElement.appendChild(langItemElement);
            });

            //date
            const dataElement = document.createElement('h5');
            dataElement.classList.add('date');
            dataElement.textContent = workItems[i].date;

            //url
            const urlElement = document.createElement('h5');
            const urlItem = workItems[i].url;
            urlElement.classList.add('url');
            
            Object.entries(urlItem).forEach(([key,values]) => {
                console.log(key)
                const urlItemElement = document.createElement('span');
                const urlItemLink = document.createElement('a');
                urlItemLink.setAttribute('href', `${values}`);
                urlItemElement.classList.add(`${key}`);
                urlItemLink.textContent = key;
                urlItemElement.appendChild(urlItemLink);
                urlElement.appendChild(urlItemElement);
            });

            //percent
            const percentElement = document.createElement('h5');
            percentElement.classList.add('percent');
            percentElement.textContent = workItems[i].percent;


            workItemSection.appendChild(categoryElement);
            workItemSection.appendChild(titleElement);
            workItemSection.appendChild(subtitleElement);
            workItemSection.appendChild(langElement);
            workItemSection.appendChild(dataElement);
            workItemSection.appendChild(percentElement);
            workItemSection.appendChild(urlElement);
        
            // 다른 요소들도 sectionElement에 추가
            
            

            sectionElement.appendChild(workItemSection);
        }
    }
  }