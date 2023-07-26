window.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  let technology = document.getElementById("technology");
  form.reset();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let topic = document.getElementById("topic").value;
    let category = document.getElementById("category").value;

    
    const _0x24acfc=_0x3b8a;function _0x302e(){const _0x492a30=['BKd197z8ZYtkn30ZAtyaI_dEaCsFPgPmWRTdZTiaiSQ','4Yxupoc','32HythMr','3198LvbMqf','242625YeIDUB','2590klaFeg','10weXZKl','103734PYHDZX','456945mCcmFZ','1286450CwIEQm','1099rKFXnw','37498LjQAeF'];_0x302e=function(){return _0x492a30;};return _0x302e();}(function(_0x5cc0e2,_0x443a24){const _0x5ce8bb=_0x3b8a,_0x4f8a07=_0x5cc0e2();while(!![]){try{const _0xde04ff=-parseInt(_0x5ce8bb(0xce))/0x1+-parseInt(_0x5ce8bb(0xc9))/0x2+parseInt(_0x5ce8bb(0xc6))/0x3+parseInt(_0x5ce8bb(0xcb))/0x4*(-parseInt(_0x5ce8bb(0xcf))/0x5)+-parseInt(_0x5ce8bb(0xcd))/0x6*(-parseInt(_0x5ce8bb(0xc8))/0x7)+parseInt(_0x5ce8bb(0xcc))/0x8*(parseInt(_0x5ce8bb(0xc5))/0x9)+-parseInt(_0x5ce8bb(0xd0))/0xa*(-parseInt(_0x5ce8bb(0xc7))/0xb);if(_0xde04ff===_0x443a24)break;else _0x4f8a07['push'](_0x4f8a07['shift']());}catch(_0x919929){_0x4f8a07['push'](_0x4f8a07['shift']());}}}(_0x302e,0x217c6));function _0x3b8a(_0x57322d,_0x52f16d){const _0x302e37=_0x302e();return _0x3b8a=function(_0x3b8a84,_0x2a8dd6){_0x3b8a84=_0x3b8a84-0xc5;let _0x5ecd16=_0x302e37[_0x3b8a84];return _0x5ecd16;},_0x3b8a(_0x57322d,_0x52f16d);}let api=_0x24acfc(0xca);


    console.log(topic);
    let url2 = `https://api.newscatcherapi.com/v2/search?q=${category} ${topic}&lang=en`;

    fetch(url2, {
      method: "GET",
      headers: {
        "x-api-key": `${api}` ,
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
