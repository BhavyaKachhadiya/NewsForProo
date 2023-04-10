function createCard(img, title, description, category, link, source) {
  var card = document.createElement('div');
  card.className = "col-lg-4 col-md-6 mb-4";

  var innerCard = document.createElement('div');
  innerCard.className = 'card h-100';
  card.appendChild(innerCard);

  var cardImg = document.createElement('img');
  cardImg.className = 'card-img-top';
  cardImg.setAttribute('src', img);
  cardImg.setAttribute('alt', 'Card image cap');
  innerCard.appendChild(cardImg);

  var cardBody = document.createElement('div');
  cardBody.className = 'card-body d-flex flex-column justify-content-between';
  innerCard.appendChild(cardBody);

  var cardTitle = document.createElement('h5');
  cardTitle.className = 'card-title';
  cardTitle.textContent = title;
  cardBody.appendChild(cardTitle);

  var cardText = document.createElement('p');
  cardText.className = 'card-text';
  if (description.split(" ").length > 20) {
    description = description.split(" ").splice(0, 20).join(" ") + "...";
}
  cardText.textContent = description;
  cardBody.appendChild(cardText);

  var badge = document.createElement('p');
  badge.className = 'badge mr-auto  badge-primary category-' + category.toLowerCase();
  badge.textContent = category;
  cardBody.appendChild(badge);

  var linkText = document.createElement('p');
  linkText.className = 'card-link mt-auto';
  linkText.innerHTML = '<small class="text-muted">Source: <a href="' + link + '">' + source + '</a></small>';
  cardBody.appendChild(linkText);
  return card;
}


fetch('/news.json')
  .then(response => response.json())
  .then(data => {
    const articles = data.articles;

    const filteredData = articles.filter(articles => articles.category === "Technology");
    const newsRow = document.getElementById('Tech');
    filteredData.forEach(news => {
      const card = createCard(news.img, news.title, news.description, news.category, news.link , news.source);
      newsRow.appendChild(card);
    });
  })
  .catch(error => console.error(error));
