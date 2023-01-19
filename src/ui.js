//const CRUD = require("./crud1");
import { itemList } from "./crud1"

const UI = {
showElement(element) {
    element.className = "visible"
},
addEventListener() {
    
}
} 

const DOMitem = document.createElement("navbar");
DOMitem.className = "invisible";
console.log(DOMitem);
console.log(DOMitem.className);

