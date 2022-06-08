import { BASE_URL } from "./config.js";

//IN QUESTO CASO DIAMO UNA COSTANTE ALL' URL PER PERMETTERE AL CODICE DI PRODUZIONE DI ESSERE
//PIU' MALNEABILE.


export const apiList = (s, type) => {
    const url = BASE_URL + `s=${s}&type=${type}`;
    fetch(url)
        .then((response) => response.json())
        .then((results) => {
            const items = results.Search;
            viewItems(items);
        });
    }


//tirare fuori film
const viewItems = (items) => {
    //devo posizionarmi sul mio html e beccare l'elemento iflms su cui agganciarmi
    const pagina = document.getElementById("movies");

    //cicla per ogni item
    items.map((item) => {
        pagina.appendChild(createHTMLMovie(item));
    });
};



const createHTMLMovie = (movie) => {
//Crea un Tag hi vuoto

const node_title = (movie.Title);
const node_year = (movie.Year);
let node_poster = (movie.Poster);
console.log(node_poster);

if (node_poster == "N/A"){
    node_poster = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
}


//<a class="card" href="https://www.google.it/search?q=${node_title}"></a> 
const card = document.createElement("a");
card.classList.add("card");
card.href = 'https://www.google.it/search?q=' + node_title;
//div class="card__background" style="background-image: url(${node_poster})"></div>
const background = document.createElement("div");
background.classList.add("card__background");
background.style.backgroundImage = "url("+ node_poster+ ")";

//<div class="card__content">

const card_content = document.createElement("div");
card_content.classList.add("card__content");
//<p class="card__category">${node_year}</p>
const card_category = document.createElement("p");
const text_content = document.createTextNode(node_year);
//<h3 class="card__heading">${node_title}</h3>
const card__heading = document.createElement("h3");
const heading_content = document.createTextNode(node_title);
//append
card_category.appendChild(text_content);
card.appendChild(background);
card.appendChild(card_content);
card_content.appendChild(card_category);
card_content.appendChild(heading_content);



/*
<!--card -->   
<a class="card" href="https://www.google.it/search?q=${node_title}">
  <div class="card__background" style="background-image: url(${node_poster})"></div>
  <div class="card__content">
    <p class="card__category">${node_year}</p>
    <h3 class="card__heading">${node_title}</h3>
  </div>
</a>
<!------->
*/            


return card;

};

