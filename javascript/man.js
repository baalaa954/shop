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
let man = document.getElementById("man"),
  shoes = document.getElementById("shoes"),
  watches = document.getElementById("watches"),
  name_man = [],
  price_man = [],
  img_man = [];
fetch(`https://shopping-api01.herokuapp.com/men`)
  .then((response) => response.json())
  .then((json) => {
    let name_man = json.map((men) => men.name),
      price_man = json.map((men) => men.price),
      img_man = json.map((men) => men.img);
    for (let i = 0; i < name_man.length; i++)
      man.innerHTML += addProduct(name_man[i], price_man[i], img_man[i]);
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
let name_shoes = [],
  price_shoes = [],
  img_shoes = [];
fetch(`https://shopping-api01.herokuapp.com/men-shoes`)
  .then((response) => response.json())
  .then((json) => {
    (name_shoes = json.map((shoes) => shoes.name)),
      (price_shoes = json.map((shoes) => shoes.price)),
      (img_shoes = json.map((shoes) => shoes.img));
    for (let i = 0; i < name_shoes.length; i++)
      shoes.innerHTML += addProduct(
        name_shoes[i],
        price_shoes[i],
        img_shoes[i]
      );
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
let name_watches = [],
  price_watches = [],
  img_watches = [];
fetch(`https://shopping-api01.herokuapp.com/men-watches`)
  .then((response) => response.json())
  .then((json) => {
    (name_watches = json.map((watches) => watches.name)),
      (price_watches = json.map((watches) => watches.price)),
      (img_watches = json.map((watches) => watches.img));
    for (let i = 0; i < name_watches.length; i++)
      watches.innerHTML += addProduct(
        name_watches[i],
        price_watches[i],
        img_watches[i]
      );
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
