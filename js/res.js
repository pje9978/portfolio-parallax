
// async function populate() {

//   const requestURL = 'https://github.com/pje9978/portfolio-parallax/blob/main/data/data.json';
//   const request = new Request(requestURL);
//   const response = await fetch(request);
//   const superHeroesText = await response.text();
//   const data = JSON.parse(superHeroesText);

//   const rawData = data.payload.blob.rawLines
//   const jsonData = rawData.join('\n');
//   const parsedData = JSON.parse(jsonData);

//   const work1 = parsedData.work1[0];
//   console.log(work1)
//   work1Data(work1);


// }
// populate()

fetch(
  `https://github.com/pje9978/portfolio-parallax/blob/main/data/data.json`
).then(function(response) {
  return response.json();
}).then(function (json) {
  // 2
  const dataj = json.payload.blob.rawLines
  const jsonData = dataj.join('\n');
  const parsedData = JSON.parse(jsonData);
  
  // console.log(parsedData);
  // 3
  work1Data(parsedData.work1);

}).catch(function(error) {
  console.log(error);
});
const section = document.querySelector("#work1");

function work1Data(work){
  for(const key in work)  {

    console.log(work[key])
    for (const item of workItems) {
      const divElement = document.createElement("div");
      divElement.appendChild(h2Element);
    }
  }
  // console.log(work)
  // work.forEach(element => {
  //   console.log(element.title)
  //   const item = document.createElement('div');
  //   const h2Element = document.createElement('h2');
  //   h2Element.textContent = element.title;
  //   item.appendChild(h2Element);
  //   workSection.appendChild(item);
  // });
  
}