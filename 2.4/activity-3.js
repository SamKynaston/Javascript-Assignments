let films = ["The Shawshank Redemption", "Forrest Gump", "Theory of Everything", "Apollo 13", "Schindler's List"]

function addFilm(name) {
    films.push(name);
}

addFilm("Der Untergang (Downfall)");
addFilm("The Matrix");

for (i=0; i<films.length; i++) {
    console.log(films[i]);
}