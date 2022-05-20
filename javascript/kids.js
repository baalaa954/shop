let kids = document.getElementById("kids"),
  game = document.getElementById("game"),
  kids2 = document.getElementById("kids2");
function addProduct(name, price, src) {
  return `  <div class="product">
                <div>    
                    <img src="${src}" alt="not found this image">    
                </div>   
                <div class="name-product">
                    <h1>${name}</h1>  
                </div>    
                <div class="button"> 
                    <button > ${price} </button>    
                <button onclick="Details(this)" >view details</button>   
                </div>   
            </div>   `;
}
let name_kids = [],
  price_kids = [],
  img_kids = [];
fetch(`https://shopping-api01.herokuapp.com/kids`)
  .then((response) => response.json())
  .then((json) => {
    (name_kids = json.map((kids) => kids.name)),
      (price_kids = json.map((kids) => kids.price)),
      (img_kids = json.map((kids) => kids.img));
    for (let i = 0; i < name_kids.length; i++)
      kids.innerHTML += addProduct(name_kids[i], price_kids[i], img_kids[i]);
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
let name_women = [],
  price_women = [],
  img_women = [];
fetch(`https://shopping-api01.herokuapp.com/game`)
  .then((response) => response.json())
  .then((json) => {
    (name_game = json.map((game) => game.name)),
      (price_game = json.map((game) => game.price)),
      (img_game = json.map((game) => game.img));
    for (let i = 0; i < name_game.length; i++)
      game.innerHTML += addProduct(name_game[i], price_game[i], img_game[i]);
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
let name_kids2 = [],
  price_kids2 = [],
  img_kids2 = [];
  function Details(event) {
    let info = event.parentElement.parentElement.childNodes,
      data_title = info[3].childNodes[0].innerHTML,
      data_price = info[5].childNodes[1].innerHTML,
      data_img = info[1].childNodes[1].src;
    localStorage.setItem("title", `${data_title}`),
      localStorage.setItem("price", `${ data_price}`),
      localStorage.setItem("img", `${data_img}`),
      window.location.replace("./details.html");
  }
fetch(`https://shopping-api01.herokuapp.com/baby-products`)
  .then((response) => response.json())
  .then((json) => {
    (name_kids2 = json.map((kids2) => kids2.name)),
      (price_kids2 = json.map((kids2) => kids2.price)),
      (img_kids2 = json.map((kids2) => kids2.img));
    for (let i = 0; i < name_kids2.length; i++)
      kids2.innerHTML += addProduct(
        name_kids2[i],
        price_kids2[i],
        img_kids2[i]
      );
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
