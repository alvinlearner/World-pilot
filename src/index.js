window.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  let technology = document.getElementById("technology");
  form.reset();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let topic = document.getElementById("topic").value;
    console.log(topic);
    let url2 = `https://api.newscatcherapi.com/v2/search?q=${topic}&lang=en`;

    fetch(url2, {
      method: "GET",
      headers: {
        "x-api-key": "fQNAKTTdUmsQ7rEA_CqkRUHnDU5chzsCw_AvUuCt2-M",
        "x-rapidapi-host": "newscatcher.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // create a div to hold the data
        let dataDiv = document.createElement("div");
        dataDiv.classList.add("news-container");

        // loop through the articles and create an HTML element for each one
        for (let i = 0; i < data.articles.length; i++) {
          let articleDiv = document.createElement("div");
          articleDiv.classList.add("news-item");

          let articleTitle = document.createElement("h2");
          articleTitle.classList.add("news-title");

          let articleDescription = document.createElement("p");
          articleDescription.classList.add("news-description");

          let publish = document.createElement("h4");
          publish.classList.add("news-published");

          let articleURL = document.createElement("a");
          articleURL.classList.add("news-url");

          let articleImage = document.createElement("img");
          articleImage.classList.add("news-image");

          publish.textContent = new Date(
            data.articles[i].published_date
          ).toDateString();
          articleTitle.textContent = data.articles[i].title;
          articleDescription.textContent = data.articles[i].summary;
          articleImage.src = data.articles[i].media;
          articleURL.textContent = "Read more";

          articleURL.href = data.articles[i].link;
          articleURL.setAttribute("target", "_blank");

          articleDiv.appendChild(articleTitle);

          articleImage.onerror = function () {
            let fallbackImage = "./src/error.gif";
            this.onerror = null;
            this.src = fallbackImage;
          };
          articleImage.style.width = "240px";
          articleDiv.appendChild(articleImage);

          articleDiv.appendChild(articleDescription);

          articleURL.style.textDecoration = "none";
          articleDiv.appendChild(articleURL);

          articleDiv.appendChild(publish);

          dataDiv.appendChild(articleDiv);
        }

        // append the data div to the technology div
        technology.appendChild(dataDiv);
      })
      .catch((error) => {
        console.error(error);
        let errorImg = document.createElement("img");

        errorImg.src = "./src/error.gif";

        errorImg.style.textAlign = "center";

        technology.appendChild(errorImg);

        // technology.innerHTML = "An error occurred while fetching news.";
      });
    form.reset();
  });
});
