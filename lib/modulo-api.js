const URL_LIST_TERMINATOR = "https://www.omdbapi.com/?apikey=d36b67d0&s=mr+robot&type=series";
//IN QUESTO CASO DIAMO UNA COSTANTE ALL' URL PER PERMETTERE AL CODICE DI PRODUZIONE DI ESSERE
//PIU' MALNEABILE.
export const listMrRobot = () => {
    fetch(URL_LIST_TERMINATOR)
        .then(response => response.json())
        .then((results) => {
            const movies = results.Search;
            console.log(movies);
        });
    }
