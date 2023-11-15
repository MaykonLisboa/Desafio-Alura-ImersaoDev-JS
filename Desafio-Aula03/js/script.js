const listaDeAnimes = ["https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/e60626c56bf7437857e0caf7cbc4bf4a.jpg", "https://images.justwatch.com/poster/138565989/s718/zhan-guo-ojia-cao-zi-quan-ye-cha.jpg", "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/cbb55a6382682bf71e91f685c6473c5a.jpg", "https://m.media-amazon.com/images/I/61bn4mimcYL._AC_UF894,1000_QL80_.jpg"];
const listaDeNomesAnimes = ["Yu Yu Hakusho", "Inuyasha", "HunterXHunter", "Samurai X"];
const imagensContainer = document.getElementById("imagensContainer");

let i = 0;
while (i < listaDeAnimes.length) {
    const divAnime = document.createElement("div");
    divAnime.classList.add("anime-container");
    const imgAnime = document.createElement("img");

    if (listaDeAnimes[i].toLowerCase().endsWith(".jpg")) {
        imgAnime.src = listaDeAnimes[i];
        imgAnime.style.width = "200px";
        imgAnime.style.height = "400px";

        const nomeAnime = document.createElement("h2");
        nomeAnime.textContent = listaDeNomesAnimes[i];

        divAnime.appendChild(imgAnime);
        divAnime.appendChild(nomeAnime);
        imagensContainer.appendChild(divAnime);
    }

    i++;
}