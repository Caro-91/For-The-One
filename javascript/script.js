
  window.addEventListener("DOMContentLoaded",function(e){
   console.log('working')
   const orderButtons = document.querySelectorAll("button[data-order]"); 

   orderButtons.forEach (function(button) {

     button.addEventListener("click", function(e) {
       const button = e.currentTarget;
       const container = button.parentNode;

       console.log('container', container.querySelector(".title"))
       const order = {
         id : button.getAttribute("data-order"),
         title : container.querySelector(".title").innerText,
         price : container.querySelector(".price").innerText,
         desc : container.querySelector(".desc").innerText,
       };
       localStorage.setItem("order", JSON.stringify(order));
       const url = window.location.href.replace("flowerpage.html","cart.html");
         window.location.href = url;
       });
     });
   });
   window.addEventListener("DOMContentLoaded",function(e){
      const order = localStorage.getItem ("order");
      if (order){
          const flowerOrder = JSON.parse(order);

          const orderInput = document.querySelector("#flower-order");
          orderInput.value = order;

          const flower = document.querySelector(".flower");

          const title = flower.querySelector(".title");
          const price = flower.querySelector(".price");
          const desc = flower.querySelector(".desc");

          title.innerText = flowerOrder.title;
          price.innerText = flowerOrder.price;
          desc.innerText = flowerOrder.desc;
           
          const img = flower.querySelector("img");
          img.setAttribute("scr",'images/${flowerOrder.id}.jpg');
          img.setAttribute("alt",flowerOrder.title);
      }

  });

  let btn = document.querySelector(".gallery");
  let div = document.querySelector(".container");

  btn.addEventListener('click',() => {
    if(div.style.display === 'none'){
      div.style.display = 'flex';
    }else{ div.style.display= 'none';}
    })

  