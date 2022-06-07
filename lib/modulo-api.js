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
const node_poster = (movie.Poster);

const htmldata = document.createElement("div");

htmldata.innerHTML = `
            

<!--card -->   
<a class="card" href="#">
  <div class="card__background" style="background-image: url(${node_poster})"></div>
  <div class="card__content">
    <p class="card__category">${node_year}</p>
    <h3 class="card__heading">${node_title}</h3>
  </div>
</a>
<!------->
            `



return htmldata;

};

