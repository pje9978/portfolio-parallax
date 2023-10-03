
// function getData(obj){
//     const sectionWork = document.querySelector('#work1');
//     console.log(sectionWork)
//     const el_H1 = document.createElement('h1');
//     el_H1.textContent = obj["work"][0].title;
// }

// populate();

async function populate() {

  const requestURL = 'https://github.com/pje9978/portfolio-parallax/blob/main/data/data.json';
  const request = new Request(requestURL);
  const response = await fetch(request);
  const superHeroesText = await response.text();
  const data = JSON.parse(superHeroesText);
  sectionData(data);


}
populate()

function sectionData(data){
  const data_Work1 = data.payload.blob.rawLines;
  console.log(data_Work1)
}