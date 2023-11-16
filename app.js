const searchForm = document.getElementById('searchForm');    
const giphyList = document.getElementById('giphyList');
const searchTerm = document.getElementById('searchTerm');
const searchGiphy = document.getElementById('searchGiphy');
const removeImages = document.getElementById('removeImages');

function createGiphy(giphy) {
    const newCol = document.createElement('div');
    newCol.classList.add('col-12');
    newCol.classList.add('col-sm-6');
    newCol.classList.add('col-md-4');
    const newGiphy = document.createElement('img');
    const randomIdx = Math.floor(Math.random()*giphy.data.data.length);
    newGiphy.classList.add('w-100');
    newGiphy.src = giphy.data.data[randomIdx].images.original.url;
    newCol.appendChild(newGiphy);
    giphyList.appendChild(newCol);
}
 
searchGiphy.addEventListener('click', async function(event){
    event.preventDefault();
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', { params: {q: searchTerm.value, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'} });
    createGiphy(res);
    searchTerm.value = '';
}); 

removeImages.addEventListener('click', function(event){
    event.preventDefault();
    giphyList.innerHTML = ''
});


