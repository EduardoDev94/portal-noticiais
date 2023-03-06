console.log('JS Vinculado')
const listaDeNoticias = document.querySelector('#listaDeNoticias')

const apiKey = '4d352007640942af9d9092d6bc6d6da3'

const GET_FETCH_CONFIG = {
    method: "get",
    headers: {
        'X-Api-Key': apiKey
    }
}
const NEWS_API_BASE_URL = 'https://newsapi.org'

/*  fetch ('https://newsapi.org/v2/everything?q=bitcoin&apiKey=4d352007640942af9d9092d6bc6d6da3',{
  method: "GET",
  headers: {
      'X-Api-Key': '4d352007640942af9d9092d6bc6d6da3'
  }
}).then(response => response.json())
  .then (data => console.log(data))
      .catch(e=> console.log(e))*/

async function getNewsNotices() {
    const response = await fetch(`${NEWS_API_BASE_URL}/v2/top-headlines?country=us&category=sports`, GET_FETCH_CONFIG);
    const data = await response.json();
    console.log(data);
  
    data.articles.forEach(article => {
      const card = `        <div class="col-3">
    <div class="card">
      <img src="${article.urlToImage}" class="card-img-top" alt="${article.title}" />
      <div class="card-body">
        <h5 class="card-title">${article.title}</h5>
        <p class="card-text">
          ${article.description}
        </p>
        <a href="${article.url}" target="_blank" class="btn btn-primary">Go to ${article.source.name}</a>
      </div>
    </div>
  </div>`

    listaDeNoticias.insertAdjacentHTML('beforeend', card)
      
    });

}
getNewsNotices();



// aula hora 1:17min