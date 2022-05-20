let man = document.getElementById("man");
let woman = document.getElementById("women");
let kids = document.getElementById("kids");
let electronics = document.getElementById("electronics");
let kitchen = document.getElementById("kitchen");
let travel = document.getElementById("travel");
let appliances = document.getElementById("appliances");

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
let name_man = [];
let price_man = [];
let img_man = [];
fetch(`https://shopping-api01.herokuapp.com/men`)
  .then((response) => response.json())
  .then((json) => {
    (name_man = json.map((man) => man.name)),
      (price_man = json.map((man) => man.price)),
      (img_man = json.map((man) => man.img));
    for (let i = 0; i < 4; i++) {
      
      man.innerHTML += addProduct(name_man[i], price_man[i], img_man[i]);
    }
  })
  .catch((err) => {
    console.log("error -> ", err);
  });

let name_women = [];
let price_women = [];
let img_women = [];
fetch(`https://shopping-api01.herokuapp.com/women`)
  .then((response) => response.json())
  .then((json) => {
    (name_women = json.map((women) => women.name)),
      (price_women = json.map((women) => women.price)),
      (img_women = json.map((women) => women.img));
    for (let i = 0; i < 4; i++)
      women.innerHTML += addProduct(
        name_women[i],
        price_women[i],
        img_women[i]
      );
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
let name_kids = [],
  price_kids = [],
  img_kids = [];
fetch(`https://shopping-api01.herokuapp.com/kids`)
  .then((response) => response.json())
  .then((json) => {
    (name_kids = json.map((kids) => kids.name)),
      (price_kids = json.map((kids) => kids.price)),
      (img_kids = json.map((kids) => kids.img));
    for (let i = 0; i < 4; i++)
      kids.innerHTML += addProduct(name_kids[i], price_kids[i], img_kids[i]);
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
let name_electronics = [],
  price_electronics = [],
  img_electronics = [];
fetch(`https://shopping-api01.herokuapp.com/computer`)
  .then((response) => response.json())
  .then((json) => {
    (name_electronics = json.map((electronics) => electronics.name)),
      (price_electronics = json.map((electronics) => electronics.price)),
      (img_electronics = json.map((electronics) => electronics.img));
    for (let i = 0; i < 4; i++)
      electronics.innerHTML += addProduct(
        name_electronics[i],
        price_electronics[i],
        img_electronics[i]
      );
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
let name_kitchen = [],
  price_kitchen = [],
  img_kitchen = [];
fetch(`https://shopping-api01.herokuapp.com/kitchen`)
  .then((response) => response.json())
  .then((json) => {
    (name_kitchen = json.map((kitchen) => kitchen.name)),
      (price_kitchen = json.map((kitchen) => kitchen.price)),
      (img_kitchen = json.map((kitchen) => kitchen.img));
    for (let i = 0; i < 4; i++)
      kitchen.innerHTML += addProduct(
        name_kitchen[i],
        price_kitchen[i],
        img_kitchen[i]
      );
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
let name_travel = [],
  price_travel = [],
  img_travel = [];
fetch(`https://shopping-api01.herokuapp.com/travel`)
  .then((response) => response.json())
  .then((json) => {
    (name_travel = json.map((travel) => travel.name)),
      (price_travel = json.map((travel) => travel.price)),
      (img_travel = json.map((travel) => travel.img));
    for (let i = 0; i < 4; i++)
      travel.innerHTML += addProduct(
        name_travel[i],
        price_travel[i],
        img_travel[i]
      );
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
let name_appliances = [],
  price_appliances = [],
  img_appliances = [];
function content(event) {
  event.parentElement.innerHTML =
    '<form > <input required type="text" placeholder="Enter Your name">\n   <input required type="email" placeholder="Enter Your Gmail ">\n   <select required type="text" placeholder="">\n       <option value="support">content</option>\n       <option value="support">support</option>\n       <option value="help">help</option>\n       <option value="outer">outer</option>\n   </select>\n   <textarea required placeholder="Enter Description" cols="10" rows="10"></textarea>\n   <button onclick="content(this)">Send </button>\n</form>';
}
fetch(`https://shopping-api01.herokuapp.com/appliances`)
  .then((response) => response.json())
  .then((json) => {
    (name_appliances = json.map((appliances) => appliances.name)),
      (price_appliances = json.map((appliances) => appliances.price)),
      (img_appliances = json.map((appliances) => appliances.img));
    for (let i = 0; i < 4; i++)
      appliances.innerHTML += addProduct(
        name_appliances[i],
        price_appliances[i],
        img_appliances[i]
      );
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
