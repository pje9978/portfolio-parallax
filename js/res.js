
async function populate() {

  const requestURL = 'https://github.com/pje9978/portfolio-parallax/blob/main/data/data.json';
  const request = new Request(requestURL);
  const response = await fetch(request);
  const superHeroesText = await response.text();
  const data = JSON.parse(superHeroesText);

  const rawData = data.payload.blob.rawLines
  const jsonData = rawData.join('\n');
  const parsedData = JSON.parse(jsonData);

  const work1 = parsedData.work1[0];
  console.log(work1)
  work1Data(work1);


}
populate()

function work1Data(work) {
  if (Array.isArray(work)) {
    for (const workItem of work) {
      console.log(workItem);
      const item = document.createElement('div');
      const h2Element = document.createElement('h2');
      const para1Element = document.createElement('p');
      const para2Element = document.createElement('p');
      const para3Element = document.createElement('span');

      h2Element.textContent = workItem.title;

      item.appendChild(h2Element);
      item.appendChild(para1Element);
      item.appendChild(para2Element);
      item.appendChild(para3Element);

     // Add the 'item' to the desired location in your HTML document
    }
  } else {
    console.error("Invalid 'work' parameter. Expected an array.");
  }
}