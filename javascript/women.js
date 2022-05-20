let fashion = document.getElementById("fashion"),
  shoes = document.getElementById("shoes"),
  bags = document.getElementById("bags"),
  beauty = document.getElementById("beauty");
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
let name_fashion = [],
  price_fashion = [],
  img_fashion = [];
fetch(`https://shopping-api01.herokuapp.com/women`)
  .then((response) => response.json())
  .then((json) => {
    (name_fashion = json.map((fashion) => fashion.name)),
      (price_fashion = json.map((fashion) => fashion.price)),
      (img_fashion = json.map((fashion) => fashion.img));
    for (let i = 0; i < name_fashion.length; i++)
      fashion.innerHTML += addProduct(
        name_fashion[i],
        price_fashion[i],
        img_fashion[i]
      );
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
let name_shoes = [],
  price_shoes = [],
  img_shoes = [];
fetch(`https://shopping-api01.herokuapp.com/woman-shoes`)
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
let name_bags = [],
  price_bags = [],
  img_bags = [];
fetch(`https://shopping-api01.herokuapp.com/women-bags`)
  .then((response) => response.json())
  .then((json) => {
    (name_bags = json.map((bags) => bags.name)),
      (price_bags = json.map((bags) => bags.price)),
      (img_bags = json.map((bags) => bags.img));
    for (let i = 0; i < name_bags.length; i++)
      bags.innerHTML += addProduct(name_bags[i], price_bags[i], img_bags[i]);
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
let name_beauty = [],
  price_beauty = [],
  img_beauty = [];
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
fetch(`https://shopping-api01.herokuapp.com/beauty`)
  .then((response) => response.json())
  .then((json) => {
    (name_beauty = json.map((test) => test.name)),
      (price_beauty = json.map((beauty) => beauty.price)),
      (img_beauty = json.map((beauty) => beauty.img));
    for (let i = 0; i < name_beauty.length; i++)
      beauty.innerHTML += addProduct(
        name_beauty[i],
        price_beauty[i],
        img_beauty[i]
      );
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
