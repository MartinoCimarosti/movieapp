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

export const apiListTitle = (s) => {
    const url = BASE_URL + `t=${s}`;
    fetch(url)
        .then((response) => response.json())
        .then((results) => {
            const items = results.Search;
            viewItems2(items);
        });
}





//tirare fuori film
const viewItems = (items) => {
    //devo posizionarmi sul mio html e beccare l'elemento iflms su cui agganciarmi


    const pagina = document.getElementById("movies");
    while (pagina.hasChildNodes()) {
        pagina.removeChild(pagina.firstChild);
    }

    //cicla per ogni item
    items.map((item) => {
        pagina.appendChild(createHTMLMovie(item));
    });
};
const viewItems2 = (items) => {
    //devo posizionarmi sul mio html e beccare l'elemento iflms su cui agganciarmi


    const pagina = document.getElementById("movies");

   
    pagina.appendChild(createMovieFull(items));

};

const createMovieFull = (movie) => {
    const node_title = (movie.Title);
    const card = document.createElement("a");
    background.classList.add("card__background");
    const card_content = document.createElement("div");
    card_content.classList.add("card__content");
    const card__heading = document.createElement("h3");
    const heading_content = document.createTextNode(node_title);

    card.appendChild(background);
    //card_category.appendChild(text_content);
    card.appendChild(card_content);
    //card_content.appendChild(card_category);
    card_content.appendChild(card__heading);
    card__heading.appendChild(heading_content);

    return card;

}

/*
 "Title": "M",
  "Year": "1931",
  "Rated": "Passed",
  "Released": "31 Aug 1931",
  "Runtime": "99 min",
  "Genre": "Crime, Mystery, Thriller",
  "Director": "Fritz Lang",
  "Writer": "Thea von Harbou, Fritz Lang, Egon Jacobsohn",
  "Actors": "Peter Lorre, Ellen Widmann, Inge Landgut",
  "Plot": "When the police in a German city are unable to catch a child-murderer, other criminals join in the manhunt.",
  "Language": "German",
  "Country": "Germany",
  "Awards": "2 wins",
  "Poster": "https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_SX300.jpg",
*/




const createHTMLMovie = (movie) => {
    //Crea un Tag hi vuoto
    const node_title = (movie.Title);
    const node_year = (movie.Year);
    let node_poster = (movie.Poster);
    console.log(node_poster);

    if (node_poster == "N/A") {
        node_poster = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    }


    //<a class="card" href="https://www.google.it/search?q=${node_title}"></a> 
    const card = document.createElement("a");
    card.classList.add("card");
    card.href = 'https://www.google.it/search?q=' + node_title;

    //div class="card__background" style="background-image: url(${node_poster})"></div>
    const background = document.createElement("div");
    background.classList.add("card__background");
    background.style.backgroundImage = "url(" + node_poster + ")";

    //<div class="card__content">

    const card_content = document.createElement("div");
    card_content.classList.add("card__content");

    //<p class="card__category">${node_year}</p>
    const card_category = document.createElement("p");
    card_category.classList.add("card__category");
    const text_content = document.createTextNode(node_year);

    //<h3 class="card__heading">${node_title}</h3>
    const card__heading = document.createElement("h3");
    const heading_content = document.createTextNode(node_title);

    //append
    card.appendChild(background);
    card_category.appendChild(text_content);
    card.appendChild(card_content);
    card_content.appendChild(card_category);
    card_content.appendChild(card__heading);
    card__heading.appendChild(heading_content);




    return card;

};

