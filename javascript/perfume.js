let  
  perfume = document.getElementById("perfume");
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
let name_perfume = [],
  price_perfume = [],
  img_perfume = [];

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
fetch(`https://shopping-api01.herokuapp.com/perfume`)
  .then((response) => response.json())
  .then((json) => {
    (name_perfume = json.map((perfume) => perfume.name)),
      (price_perfume = json.map((perfume) => perfume.price)),
      (img_perfume = json.map((perfume) => perfume.img));
    for (let i = 0; i < name_perfume.length; i++)
      perfume.innerHTML += addProduct(
        name_perfume[i],
        price_perfume[i],
        img_perfume[i]
      );
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
