var sectionGroup = document.querySelector('#work1');

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

// 3
function workData(data) {
    const workData1 = data.work1;
    const workData2 = data.work2;

    // console.log(data.work2)
    // for (var i = 0; i < data.length; i++){
    //     console.log(i)
    // }
    for (var i = 0; i < workData1.length; i++) {
        console.log(data[i])
        const title = workData1[i].title;
        const subTitle = workData1[i].subTitle;
        const categroy = workData1[i].categroy;
        const part = workData1[i].part;
        const date = workData1[i].date;
        const device = workData1[i].device;
        const lang = workData1[i].lang;
        const percent = workData1[i].percent;
        const url = workData1[i].url;
        const review = workData1[i].review;



        var sectionElement = document.createElement('section');
        var h2Element = document.createElement('h2');
        var elementGroup = document.createElement('div');
        var p1Element = document.createElement('p');
        var p2Element = document.createElement('span');

        h2Element.textContent = workData1[i].title;
        // for(const key of )
        // for (const partItem of part){
        //     const spanPartElement = document.createElement("span");
        //     spanPartElement.textContent=partItem;
        //     divElement.appendChild(spanPartElement);
        
        // }
        // myPara1.textContent = 'Secret identity: ' + workData1[i].secretIdentity;
        // myPara2.textContent = 'Age: ' + workData1[i].age;
        // myPara3.textContent = 'Superpowers:';

        // var superPowers = workData1[i].powers;
        // for (var j = 0; j < superPowers.length; j++) {
        //     var listItem = document.createElement('li');
        //     listItem.textContent = superPowers[j];
        //     myList.appendChild(listItem);
        // }

        sectionElement.appendChild(h2Element);
        // myArticle.appendChild(myPara1);
        // myArticle.appendChild(myPara2);
        // myArticle.appendChild(myPara3);
        // myArticle.appendChild(myList);

        sectionGroup.appendChild(sectionElement);
    }
}