var section = document.querySelector('#work1');

// 1
fetch(
    `https://raw.githubusercontent.com/pje9978/portfolio-parallax/main/data/data.json`
).then(function(response) {
    return response.json();
}).then(function (json) {
    // 2
    console.log(JSON.stringify(json));

    // 3
    showHeroes(json);

}).catch(function(error) {
    console.log(error);
});

// 3
function showHeroes(jsonObj) {
    const workData1 = jsonObj.work1;
    const workData2 = jsonObj.work2;

    console.log(jsonObj.work2)

    for (var i = 0; i < workData1.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var groupElement = document.createElement('div');
        var p1Element = document.createElement('p');
        var p2Element = document.createElement('span');

        myH2.textContent = workData1[i].title;
        // myPara1.textContent = 'Secret identity: ' + workData1[i].secretIdentity;
        // myPara2.textContent = 'Age: ' + workData1[i].age;
        // myPara3.textContent = 'Superpowers:';

        // var superPowers = workData1[i].powers;
        // for (var j = 0; j < superPowers.length; j++) {
        //     var listItem = document.createElement('li');
        //     listItem.textContent = superPowers[j];
        //     myList.appendChild(listItem);
        // }

        myArticle.appendChild(myH2);
        // myArticle.appendChild(myPara1);
        // myArticle.appendChild(myPara2);
        // myArticle.appendChild(myPara3);
        // myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}