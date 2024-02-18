"use strict";

const div = document.getElementById("Div");

function leson8() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  })
    .then(function (respons) {
      if (respons.status !== 200) {
        throw respons.status;
      }
      return respons.json();
    })
    .then(function (responsText) {
      responsText.forEach((element) => {
        const DivBox = document.createElement("div");
        DivBox.classList.add("ChangeDiv");
        DivBox.addEventListener("click",function(){
            DivBox.classList.toggle("ShidaDivi");
        })
        const h2 = document.createElement("h2");
        h2.classList.add("h2Last");
        h2.innerText = element.id;
        const h3 = document.createElement("h3");
        h3.classList.add("h3Last");
        h3.innerText = element.title;
        const h4 = document.createElement("h4");
        h4.classList.add("h4last");
        h4.innerText = element.body;
        DivBox.appendChild(h4);
        DivBox.appendChild(h2);
        DivBox.appendChild(h3);
        div.appendChild(DivBox);
      });
    })
    .catch(function (error) {
      if (error == 400) {
        return "Server not Found";
      } else if (error == 500) {
        return "Server Error";
      }
    });
}
leson8();
