let  
  travel = document.getElementById("travel");
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
let name_travel = [],
  price_travel = [],
  img_travel = [];
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
fetch(`https://shopping-api01.herokuapp.com/travel`)
  .then((response) => response.json())
  .then((json) => {
    (name_travel = json.map((travel) => travel.name)),
      (price_travel = json.map((travel) => travel.price)),
      (img_travel = json.map((travel) => travel.img));
    for (let i = 0; i < name_travel.length; i++)
      travel.innerHTML += addProduct(
        name_travel[i],
        price_travel[i],
        img_travel[i]
      );
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
