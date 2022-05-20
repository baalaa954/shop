let kitchen = document.getElementById("kitchen"),
  detergents = document.getElementById("detergents"),
  appliances = document.getElementById("appliances");
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
let name_kitchen = [],
  price_kitchen = [],
  img_kitchen = [];
fetch(`https://shopping-api01.herokuapp.com/kitchen`)
  .then((response) => response.json())
  .then((json) => {
    (name_kitchen = json.map((kitchen) => kitchen.name)),
      (price_kitchen = json.map((kitchen) => kitchen.price)),
      (img_kitchen = json.map((kitchen) => kitchen.img));
    for (let i = 0; i < name_kitchen.length; i++)
      kitchen.innerHTML += addProduct(
        name_kitchen[i],
        price_kitchen[i],
        img_kitchen[i]
      );
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
let name_detergents = [],
  price_detergents = [],
  img_detergents = [];
fetch(`https://shopping-api01.herokuapp.com/detergents`)
  .then((response) => response.json())
  .then((json) => {
    (name_detergents = json.map((detergents) => detergents.name)),
      (price_detergents = json.map((detergents) => detergents.price)),
      (img_detergents = json.map((detergents) => detergents.img));
    for (let i = 0; i < name_detergents.length; i++)
      detergents.innerHTML += addProduct(
        name_detergents[i],
        price_detergents[i],
        img_detergents[i]
      );
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
let name_appliances = [],
  price_appliances = [],
  img_appliances = [];
function Details(event) {
  let info = event.parentElement.parentElement.childNodes,
    data_title = info[3].childNodes[0].innerHTML,
    data_price = info[5].childNodes[1].innerHTML,
    data_img = info[1].childNodes[1].src;
  localStorage.setItem("title", ``),
    localStorage.setItem("price", ``),
    localStorage.setItem("img", ``),
    window.location.replace("../details.html");
}
fetch(`https://shopping-api01.herokuapp.com/appliances`)
  .then((response) => response.json())
  .then((json) => {
    (name_appliances = json.map((appliances) => appliances.name)),
      (price_appliances = json.map((appliances) => appliances.price)),
      (img_appliances = json.map((appliances) => appliances.img));
    for (let i = 0; i < name_appliances.length; i++)
      appliances.innerHTML += addProduct(
        name_appliances[i],
        price_appliances[i],
        img_appliances[i]
      );
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
