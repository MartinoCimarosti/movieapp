const URL_LIST_SERIE_TV = "https://www.omdbapi.com/?apikey=d36b67d0&s=mr+robot&type=series";
const URL_LIST_FILM = "https://www.omdbapi.com/?apikey=d36b67d0&s=Terminator";
//IN QUESTO CASO DIAMO UNA COSTANTE ALL' URL PER PERMETTERE AL CODICE DI PRODUZIONE DI ESSERE
//PIU' MALNEABILE.


/*
Estrapola Film
*/
export const listMrRobot = () => {
    fetch(URL_LIST_SERIE_TV)
        .then(response => response.json())
        .then((results) => {
            const movies = results.Search;
            console.log(movies);
        });
    }


//tirare fuori serie tv
export const listTerminator = () => {
    fetch(URL_LIST_FILM)
        .then(response => response.json())
        .then((results) => {
            const movies = results.Search;
            console.log(movies);
        });
    }

