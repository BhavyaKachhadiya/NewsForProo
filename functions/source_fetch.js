fetch('/news.json')
  .then(response => response.json())
  .then(data => {
    const categoryList = document.getElementById('sourceList');

    for (let i = 0; i < data.articles.length; i++) {
      if (data.articles[i].source === 'BBC') {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `/pages/source/${data.articles[i].source.toLowerCase()}/`;
        a.className = 'dropdown-item';
        a.innerText = data.articles[i].source;
        li.appendChild(a);
        categoryList.appendChild(li);
        break; // exit the loop after finding the first item in the 'Technology' category
      }
    }
  });
fetch('/news.json')
  .then(response => response.json())
  .then(data => {
    const categoryList = document.getElementById('sourceList');

    for (let i = 0; i < data.articles.length; i++) {
      if (data.articles[i].source === 'Gadgets360') {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `/pages/source/${data.articles[i].source.toLowerCase()}/`;
        a.className = 'dropdown-item';
        a.innerText = data.articles[i].source;
        li.appendChild(a);
        categoryList.appendChild(li);
        break; // exit the loop after finding the first item in the 'Technology' category
      }
    }
  });
fetch('/news.json')
  .then(response => response.json())
  .then(data => {
    const categoryList = document.getElementById('sourceList');

    for (let i = 0; i < data.articles.length; i++) {
      if (data.articles[i].source === 'infoworld') {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `/pages/source/${data.articles[i].source.toLowerCase()}/`;
        a.className = 'dropdown-item';
        a.innerText = data.articles[i].source;
        li.appendChild(a);
        categoryList.appendChild(li);
        break; // exit the loop after finding the first item in the 'Technology' category
      }
    }
  });