//const CRUD = require("./crud1");
import { itemList } from "./crud1"

const UI = {

//DOM variables
addButton : document.getElementById("plus_button"),
minusButton : document.getElementById("minus_button"),
addBar : document.getElementById("add_items_bar"),
titleInput : document.getElementById("add_title"),
urlInput : document.getElementById("add_image"),
itemListDOM : document.getElementById("object_list"),
searchInput : document.getElementById("search_bar"),

// showElement(element) {
//     element.className = "visible"
// },

construct() {
this.addButton.addEventListener("click", () => this.showAddBar());
this.minusButton.addEventListener("click", () => this.hideAddBar());
},

showAddBar() {
    this.addButton.style = "display:none";
    this.minusButton.style = "display:block";
    this.addBar.style = "display:block";
},

hideAddBar() {
    addButton.style = "display:block";
    minusButton.style = "display:none";
    addBar.style = "display:none";
},

render() {
    let template = "";
    for (let i = 0; i < itemList.list.length; i++) {
      template += `<li class="item_container" id="item-${itemList.list[i].id}">
              <div class="item_img_container">
                  <img
                      class="item_img"
                      id="img-${itemList.list[i].id}"
                      src="${itemList.list[i].imgUrl}"
                      alt="#"
                  />
              </div>
              <div class="item_text">
                  <p class="item_title">Title:</p>
                  <input
                      type="text"
                      id="item0${itemList.list[i].id}_name"
                      class="item_name"
                      value="${itemList.list[i].title}"
                      readonly
                      style
                      maxlength="24"
                  />
                  <i id="editButton0${itemList.list[i].id}" style="display: initial" onclick="editItem(${itemList.list[i].id})"class="fa-solid fa-pen-to-square"></i>
                  <i id="cancelEditButton0${itemList.list[i].id}" style="display: none" onclick="cancelEdit(${itemList.list[i].id})"class="fa-solid fa-xmark"></i>
                  <i id="confirmEditButton0${itemList.list[i].id}" style="display: none" onclick="confirmEdit(${itemList.list[i].id})" class="fa-solid fa-check"></i>
              </div>
              <i style onclick="deleteItem(${itemList.list[i].id})"class="fa-solid fa-trash"></i>
          </li>`;
    }
    
    itemListDOM.innerHTML = template;
  }
} 

const DOMitem = document.createElement("navbar");
DOMitem.className = "invisible";
console.log(DOMitem);
console.log(DOMitem.className);

