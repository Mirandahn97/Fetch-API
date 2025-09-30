 async function getCats() {
  // Henter data fra TheCatAPI (10 kattebilleder)
  const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");

  // Fortolker svaret som JSON → giver et array med 10 objekter (katte)
  const data = await res.json();

  // Logger hele arrayet i browserens udvikler-console
  console.log(data);

  // Finder <div id="cats"> i HTML, hvor vi vil indsætte billederne
  const container = document.getElementById("cats");

  // Gennemløber hvert katte-objekt i arrayet
  data.forEach(cat => {
    // Opretter et <img>-element
    const img = document.createElement("img");

    // Sætter billedets kilde til cat.url (API'et giver en URL til billedet)
    img.src = cat.url;

    // Sætter billedets bredde til 200 pixels
    img.width = 200;

    // Giver billedet lidt afstand rundt om (margin 10px)
    img.style.margin = "10px";

    // Tilføjer billedet som "barn" i container-div'en, så det vises på siden
    container.appendChild(img);
  });
}

// Kalder funktionen, så den kører når scriptet loader
getCats();