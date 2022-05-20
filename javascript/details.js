
window.onload = function () {
  (document.title = `details | ${localStorage.getItem("title")}`),
    (name.innerHTML = `${localStorage.getItem("title")} `),
    (price.innerHTML = `${localStorage.getItem("price")}`),
    (img.src = localStorage.getItem("img"));
  let e = parseInt(localStorage.getItem("price").replace("$", " "));
  (total.innerHTML = `${e * number.value}`),
    number.addEventListener("change", function () {
      total.innerHTML = `${e * number.value}`;
    });
};



let name = document.getElementById("name"),
  price = document.getElementById("price"),
  img = document.getElementById("img"),
  number = document.getElementById("number"),
  total = document.getElementById("total");
function shopNow(e) {
  let t = e.parentElement.childNodes;
  (data = {
    name: t[1].innerHTML,
    price: t[3].innerHTML,
    total: t[5].innerHTML,
    number: t[7].value,
    img: localStorage.getItem("img"),
  }),
    console.log(data),
    localStorage.setItem("data-img", `${data.img}`),
    localStorage.setItem("data-name", `${data.name}`),
    localStorage.setItem("data-price", `${t[3].innerHTML}`),
    localStorage.setItem("data-total", `${t[5].innerHTML}`),
    localStorage.setItem("data-sum", `${t[7].value}`),
    window.location.replace("/checkout.html");
}
