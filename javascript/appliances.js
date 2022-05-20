let appliances = document.getElementById("appliances");
function addProduct(e, t, a) {
  return `\n    <div class="product">\n    <div>\n    <img src="${a}" alt="not found this image">\n    </div>\n    <div class="name-product"><h1>${e}</h1>  </div>\n    <div class="button">\n    <button > ${t} </button>\n    <button onclick="Details(this)" >view details</button>\n    </div>\n    </div>\n    `;
}
let name_appliances = [],
  price_appliances = [],
  img_appliances = [];

function shopNow(e) {
  const t = e.parentElement.childNodes;
  localStorage.setItem("data-img", `${localStorage.getItem("img")}`),
    localStorage.setItem("data-name", `${t[1].innerHTML}`),
    localStorage.setItem("data-price", `${t[3].innerHTML}`),
    localStorage.setItem("data-total", `${t[5].innerHTML}`),
    localStorage.setItem("data-sum", `${t[7].value}`),
    window.location.replace("../checkout.html");
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
fetch(`https://shopping-api01.herokuapp.com/appliances`)
  .then((e) => e.json())
  .then((e) => {
    (name_appliances = e.map((e) => e.name)),
      (price_appliances = e.map((e) => e.price)),
      (img_appliances = e.map((e) => e.img));
    for (let e = 0; e < name_appliances.length; e++)
      appliances.innerHTML += addProduct(
        name_appliances[e],
        price_appliances[e],
        img_appliances[e]
      );
  })
  .catch((e) => {
    console.log("error -> ", e);
  });
