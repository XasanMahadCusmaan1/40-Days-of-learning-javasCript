const input = document.querySelector(".movie__search--input");
const searchBtn = document.querySelector(".movie__search--btn");
const result = document.querySelector(".result");
const loading = document.querySelector(".loading");
const moviesContainer = document.querySelector(".movies__container");

const apiKey = "f29972c6";

searchBtn.addEventListener("click", () => {
  movieSearch(input.value);
});

loading.style.display = "none";

async function movieSearch(title) {
  result.textContent = "";
  moviesContainer.textContent = "";
  loading.style.display = "block";

  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(
        title
      )}&page=1`
    );

    if (!title) {
      result.textContent = "Hey enter name";
      return;
    }

    if (!res.ok) throw new Error("request error");

    const data = await res.json();
    console.log(data);
    let uniqueMov = new Set(data.Search.Title);
    console.log(uniqueMov);

    data.Search.forEach((movie) => {
      const html = `
      <div class="movies">
        <img src="${
          movie.Poster === "N/A"
            ? (movie.Poster = "not-found.jpg")
            : movie.Poster
        }" alt="${movie.Title}"/>
        <p class="movies__title">${movie.Title}</p>
        <div class="movies__card--footer">
          <p class="movies__year">${movie.Year} </p>
          <p class="type">${movie.Type}</p>
        </div>
      </div>
      `;

      moviesContainer.insertAdjacentHTML("beforeend", html);

      input.value = "";
    });
  } catch (e) {
    result.textContent = "No movies found !";
    console.log(e);
  } finally {
    loading.style.display = "none";
  }
}
