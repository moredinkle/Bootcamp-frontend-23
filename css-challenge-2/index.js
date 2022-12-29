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


function displayCard(cardData) {
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
  const cards = data.map(it => displayCard(it));
  const cardsHTML = cards.join('');
  const box = document.querySelector('.cardsBox');
  box.insertAdjacentHTML('beforeend', cardsHTML);
}

loadCards();

