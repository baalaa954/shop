let  img = document.getElementById("img");
let  name = document.getElementById("name");
let  price = document.getElementById("price");
let  total = document.getElementById("total");
let  sum = document.getElementById("sum");
let  after = document.getElementById("after");
let  btn = document.getElementById("btn");

img.src = localStorage.getItem("data-img");
name.innerHTML = localStorage.getItem("data-name");
price.innerHTML = localStorage.getItem("data-price");
total.innerHTML = localStorage.getItem("data-total");
sum.innerHTML = localStorage.getItem("data-sum");
btn.innerHTML += localStorage.getItem("data-price");
