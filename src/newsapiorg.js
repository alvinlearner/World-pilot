window.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#search");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let technology = document.getElementById("technology");
    







    const _0x657377=_0x2e70;(function(_0x33b660,_0xe20ac8){const _0x1cb0e9=_0x2e70,_0x54c3dc=_0x33b660();while(!![]){try{const _0x2d9d86=-parseInt(_0x1cb0e9(0xea))/0x1*(parseInt(_0x1cb0e9(0xf0))/0x2)+-parseInt(_0x1cb0e9(0xec))/0x3*(parseInt(_0x1cb0e9(0xef))/0x4)+parseInt(_0x1cb0e9(0xf4))/0x5+parseInt(_0x1cb0e9(0xed))/0x6*(-parseInt(_0x1cb0e9(0xf3))/0x7)+parseInt(_0x1cb0e9(0xeb))/0x8+parseInt(_0x1cb0e9(0xe9))/0x9*(-parseInt(_0x1cb0e9(0xf1))/0xa)+parseInt(_0x1cb0e9(0xee))/0xb;if(_0x2d9d86===_0xe20ac8)break;else _0x54c3dc['push'](_0x54c3dc['shift']());}catch(_0xcd165e){_0x54c3dc['push'](_0x54c3dc['shift']());}}}(_0x19b5,0xd188a));let api=_0x657377(0xf2);function _0x2e70(_0x288bd3,_0x48146c){const _0x19b5e6=_0x19b5();return _0x2e70=function(_0x2e70e8,_0xd64954){_0x2e70e8=_0x2e70e8-0xe9;let _0x1dcaa3=_0x19b5e6[_0x2e70e8];return _0x1dcaa3;},_0x2e70(_0x288bd3,_0x48146c);}function _0x19b5(){const _0x2052f1=['660087qMGWNu','66873wOYPPS','3549440mYnQrG','1540362dTBZiD','6IIqGKN','35877380gSHOXH','8SrEqWV','46HoOwHY','120OVWXwp','cbe5e4be705e46479aad0781844cafff','7670285GpJOgE','8469240DRMFWZ'];_0x19b5=function(){return _0x2052f1;};return _0x19b5();}








    let topic = document.getElementById("topic").value;

    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${api}`;

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let articles = data.articles;
      let newsHTML = "";
      articles.forEach(function (article) {
        let title = article.title;
        let author = article.author;
        let description = article.description;
        let link = article.url;
        let image = article.urlToImage;
        if (author === null) {
          author = "unknown";
        }
        let fallbackImage = "./src/error.gif"
        newsHTML += `
          <div class="news-item" data-aos="zoom-in">
            <h3><a href="${link}" style="color: inherit;">${title}</a></h3>
            <h2>Author: ${author}</h2>
            <p>${description}</p><br>
            <img src="${image}" alt="${title}" onerror="this.onerror=null;this.src='${fallbackImage}';">
          </div>
        `;
      });
      technology.innerHTML = newsHTML;
      AOS.init(); // initialize AOS after the news items have been added to the DOM
    }).catch((error) => {
        console.error(error);
        let errorImg = document.createElement('img')

       errorImg.src= './src/error.gif'

       errorImg.style.textAlign= "center"

        technology.appendChild(errorImg);

        // technology.innerHTML = "An error occurred while fetching news.";
      });
   form.reset()
  });

});
