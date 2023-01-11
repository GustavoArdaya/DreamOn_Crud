// DOM variables:
let addButton = document.getElementById("plus_button");
let minusButton = document.getElementById("minus_button");
let addBar = document.getElementById("add_items_bar");
let titleInput = document.getElementById("add_title");
let urlInput = document.getElementById("add_image");

// main variables
const item = {
    name: "",
    photoUrl: ""
}
let itemList = [];

// const item01 = new Object();
// item01.name = "cosa1";
// item01.photoUrl = "url1";

// console.log(item01);

// itemList = [item];
// console.log(itemList);
// itemList.push(item01);
// console.log(itemList);

// Add Bar functions

function showAddBar() {
    addButton.style = "display:none";
    minusButton.style = "";
    addBar.style = "";
}

function hideAddBar() {
    addButton.style = "";
    minusButton.style = "display:none";
    addBar.style = "display:none";
}

function createNewItem() {
    if ((titleInput.value != "" && titleInput.value != "name") && 
    (urlInput.value != "" && urlInput.value != "url")) {
        console.log("correct input");
        let example01 = new Object();
        example01.name = titleInput.value;
        example01.photoUrl = urlInput.value;
        console.log(example01);
        itemList.push(example01);
        console.log(itemList);
    } else console.log("incorrect input"); 
}

function render() {
    
}

