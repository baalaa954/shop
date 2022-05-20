let electronics = document.getElementById("electronics"),
  tv = document.getElementById("tv"),
  accessories = document.getElementById("accessories");
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
let name_electronics = [],
  price_electronics = [],
  img_electronics = [];
fetch(`https://shopping-api01.herokuapp.com/computer`)
  .then((response) => response.json())
  .then((json) => {
    (name_electronics = json.map((electronics) => electronics.name)),
      (price_electronics = json.map((electronics) => electronics.price)),
      (img_electronics = json.map((electronics) => electronics.img));
    for (let i = 0; i < name_electronics.length; i++)
      electronics.innerHTML += addProduct(
        name_electronics[i],
        price_electronics[i],
        img_electronics[i]
      );
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
let name_tv = [],
  price_tv = [],
  img_tv = [];
fetch(`https://shopping-api01.herokuapp.com/tv`)
  .then((response) => response.json())
  .then((json) => {
    (name_tv = json.map((tv) => tv.name)),
      (price_tv = json.map((tv) => tv.price)),
      (img_tv = json.map((tv) => tv.img));
    for (let i = 0; i < name_tv.length; i++)
      tv.innerHTML += addProduct(name_tv[i], price_tv[i], img_tv[i]);
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
let name_accessories = [],
  price_accessories = [],
  img_accessories = [];
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
fetch(`https://shopping-api01.herokuapp.com/accessories`)
  .then((response) => response.json())
  .then((json) => {
    (name_accessories = json.map((accessories) => accessories.name)),
      (price_accessories = json.map((accessories) => accessories.price)),
      (img_accessories = json.map((accessories) => accessories.img));
    for (let i = 0; i < name_accessories.length; i++)
      accessories.innerHTML += addProduct(
        name_accessories[i],
        price_accessories[i],
        img_accessories[i]
      );
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
