fetch('/news.json')
  .then(response => response.json())
  .then(data => {
    const categoryList = document.getElementById('categoryList');

    for (let i = 0; i < data.articles.length; i++) {
      if (data.articles[i].category === 'Technology') {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `/pages/category/${data.articles[i].category.toLowerCase()}/`;
        a.className = 'dropdown-item';
        a.innerText = data.articles[i].category;
        li.appendChild(a);
        categoryList.appendChild(li);
        break; // exit the loop after finding the first item in the 'Technology' category
      }
    }
  });
fetch('/news.json')
  .then(response => response.json())
  .then(data => {
    const categoryList = document.getElementById('categoryList');

    for (let i = 0; i < data.articles.length; i++) {
      if (data.articles[i].category === 'Web-Development') {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `/pages/category/${data.articles[i].category.toLowerCase()}/`;
        a.className = 'dropdown-item';
        a.innerText = data.articles[i].category;
        li.appendChild(a);
        categoryList.appendChild(li);
        break; // exit the loop after finding the first item in the 'Technology' category
      }
    }
  });

