const data = [
    {
        title: 'Dragon alado de Ra',
        stars: 8,
        src: './images/ra.PNG',
        description: 'Mucho texto',
        atk: 'ATK / 1000',
        def: 'DEF / 1000'
    },
    {
        title: 'Imitador',
        stars: 5,
        src: './images/imitador.PNG',
        description: 'Mucho texto',
        atk: 'ATK / 1000',
        def: 'DEF / 1000'
    },
    {
        title: 'Mercader mágico',
        stars: 3,
        src: './images/mercader.PNG',
        description: 'Mucho texto',
        atk: 'ATK / 1000',
        def: 'DEF / 1000'
    },
    {
        title: 'Mago oscuro del caos',
        stars: 6,
        src: './images/mago.PNG',
        description: 'Mucho texto',
        atk: 'ATK / 1000',
        def: 'DEF / 1000'
    },
    {
        title: 'Gaia, el caballero feroz',
        stars: 10,
        src: './images/gaia.PNG',
        description: 'Mucho texto',
        atk: 'ATK / 1000',
        def: 'DEF / 1000'
    },
];


function displayStars(numberOfStars){
    let stars = '';
    for (let i = 0; i < numberOfStars; i++) {
        stars += `<img class="star" src="./images/star2.png" alt="star">`;
    }
    return stars;
}


function addCard(cardData) {
  const { title, stars, src, description, atk, def } = cardData;
  const starsHTML = displayStars(stars);
  const card = `
  <div class="card">
    <div class="cardTitle">
      <h2>${title}</h2>
      <img class="titleSymbol" src="./images/Field.png" alt="title symbol">
    </div>
    <div class="cardStars"> ${starsHTML} </div>
    <img class="cardImage" src="${src}"  />
    <div class="cardInfo">
      <h3>[ Tipo ]</h3>
      <p>${description}</p>
      <div class="cardNumbers">
        <p>${atk}</p>
        <p>${def}</p>
      </div>
    </div>
  </div>
  `;
  return card;
}


function loadCards(){
  const cards = [];
  for (let i = 0; i < 10; i++) {
    const card = data[i % data.length];
    cards.push(addCard(card));
  }
  const cardsHTML = cards.join('');
  const d1 = document.getElementById('d1');
  d1.insertAdjacentHTML('beforeend', cardsHTML);
  const d2 = document.getElementById('d2');
  d2.insertAdjacentHTML('beforeend', cardsHTML);
}

loadCards();

