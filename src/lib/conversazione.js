export const chat = {
    1: {
        text: 'Benvenuto Su Films Js🦾 ! Ti aiuterò a trovare film da vere questa sera!🤖',
        options: [
            {
                text: 'Grazie!',
                next: 2
            },
            {
                text: "Preferisco cercare da solo!",
                next: 3
            }
        ]
    },
    2: {
        text: 'Che genere di film cerchi?',
        options: [
            {
                text: 'Cult👑',
                next: 4
            },
            {
                text: "Action🚁",
                next: 8
            },
            {
                text: "Anime🌸",
                next: 5
            },
            {
                text: "Horror👻",
                next: 5
            },
            {
                text: "Noir Film 🚬",
                next: 5
            },
            {
                text: "Spy Film 🤵",
                next: 5
            },
            {
                text: "Fantasy 🐲",
                next: 5
            }
            
        ]
    },
    3: {
        text: 'Allora usa La barra di ricerca qua sotto!👇👇',

    },
    4: {
        text: 'Ti piace fight club?💪',
        options: [
            {
                text: 'si',
                next: 7
            },
            {
                text: "No / non l'ho mai visto",
                next: 6
            }
        ]
    },
    5: {
        text: 'Allora ti consiglio un film ',
        //script che esce il film
    },
    6: {//cult
        text: 'Ti piace Pulp Ficition',
        options: [
            {
                text: 'si',
                next: 7
            },
            {
                text: "No non l'ho mai visto",
                next: 5
            }
        ]
    },
    7: {
        text: 'Allora ti consiglo un film!',
        options: [
            {
                text: "Nightcrawler👈",
                url: "./index.html?nightcrawler"
            }
        ]
    },
    8: {//action
        text: 'Ti piace Die Hard?',
        options: [
            {
                text: 'si',
                next: 9
            },
            {
                text: "No / non l'ho mai visto",
                next: 11
            }
        ]
    },
    9: {
        text: 'Allora ti consiglo un film!',
        options: [
            {
                text: "Demolition man👈",
                url: "./index.html?demolition man"
            }
        ]
    },
    11: {
        text: 'Ti piace Full Metal Jacket?',
        options: [
            {
                text: 'si',
                next: 12
            },
            {
                text: "No / non l'ho mai visto",
                next: 9
            }
        ]
    },
    12: {
        text: 'Allora ti consiglo un film!',
        options: [
            {
                text: "Platoon👈",
                url: "./index.html?platoon"
            }
        ]
    }




};

