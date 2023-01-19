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

showElement(element) {
    element.className = "visible"
},
addEventListener() {
    
},
showAddBar() {
    this.addButton.style = "display:none";
    this.minusButton.style = "display:block";
    this.addBar.style = "display:block";
  }

} 

const DOMitem = document.createElement("navbar");
DOMitem.className = "invisible";
console.log(DOMitem);
console.log(DOMitem.className);

