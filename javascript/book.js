let book = document.getElementById("book");
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
let name_book = [],
  price_book = [],
  img_book = [];
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
fetch(`https://shopping-api01.herokuapp.com/book`)
  .then((response) => response.json())
  .then((json) => {
    (name_book = json.map((book) => book.name)),
      (price_book = json.map((book) => book.price)),
      (img_book = json.map((book) => book.img));
    for (let i = 0; i < name_book.length; i++)
      book.innerHTML += addProduct(name_book[i], price_book[i], img_book[i]);
  })
  .catch((err) => {
    console.log("error -> ", err);
  });
