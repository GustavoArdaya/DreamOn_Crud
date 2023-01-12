// Local Storage retrieve
let jsonArr = undefined;
let parsedArr = undefined;
retrieveStoredArray();



// DOM variables:
let addButton = document.getElementById("plus_button");
let minusButton = document.getElementById("minus_button");
let addBar = document.getElementById("add_items_bar");
let titleInput = document.getElementById("add_title");
let urlInput = document.getElementById("add_image");
let itemListDOM = document.getElementById("object_list");
let searchInput = document.getElementById("search_bar");

// main variables
let itemList = [];
itemList = parsedArr;
displayList = itemList;

// commented test array*

/*itemList = [{name: "Paisaje 1", photoUrl: "https://expertphotography.b-cdn.net/wp-content/uploads/2022/05/Landscape-Photography-Sophie-Turner.jpg" }, 
{name: "Paisaje 2", photoUrl: "https://www.blogdelfotografo.com/wp-content/uploads/2014/08/61.jpg"},
{name: "Paisaje 3", photoUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"}]; */



render(); // Render at load

// Search bar functions
function filterResults() {
let keyword = searchInput.value.toLowerCase();
let regex = new RegExp(`${keyword}`, "g");
if (keyword != "") {
displayList = itemList.filter(key => regex.test(key.name.toLowerCase()));
console.log(displayList);
render();
} else {
    displayList = itemList;
    render();
}
}

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
    isValidUrl(urlInput.value)) {
        console.log("correct input");
        let example01 = new Object();
        example01.name = titleInput.value;
        example01.photoUrl = urlInput.value;
        console.log(example01);
        itemList.push(example01);
        console.log(itemList);
    } else console.log("incorrect input"); 
    console.log(isValidUrl(urlInput.value));
    storeLocally()
    render();
    }

// Render function    
function render() {
    let template = "";
    for (let i = 0; i < displayList.length; i++) {
        template += 
        `<li class="item_container" id="item-${i}">
            <div class="item_img_container">
                <img
                    class="item_img"
                    id="img-${i}"
                    src="${displayList[i].photoUrl}"
                    alt="#"
                />
            </div>
            <div class="item_text">
                <p class="item_title">Title:</p>
                <input
                    type="text"
                    id="item0${i}_name"
                    class="item_name"
                    value="${displayList[i].name}"
                    readonly
                    style
                />
                <i id="editButton0${i}" style="display: initial" onclick="editItem(${i})"class="fa-solid fa-pen-to-square"></i>
                <i id="cancelEditButton0${i}" style="display: none" onclick="cancelEdit(${i})"class="fa-solid fa-xmark"></i>
                <i id="confirmEditButton0${i}" style="display: none" onclick="confirmEdit(${i})" class="fa-solid fa-check"></i>
            </div>
            <i style onclick="deleteItem(${i})"class="fa-solid fa-trash"></i>
        </li>`
    }
    itemListDOM.innerHTML = template;
}
// Edit and delete item functions

function editItem(indexToEdit) {
    let editButton = document.getElementById(`editButton0${indexToEdit}`);
    let cancelButton = document.getElementById(`cancelEditButton0${indexToEdit}`);
    let confirmButton = document.getElementById(`confirmEditButton0${indexToEdit}`);
    let inputToModify = document.getElementById(`item0${indexToEdit}_name`);
    editButton.setAttribute("style", "display: none")
    cancelButton.setAttribute("style", "display: initial")
    //cancelButton.removeAttribute("style");
    confirmButton.setAttribute("style", "display: initial");
    //confirmButton.removeAttribute("style");
    //inputToModify.setAttribute("readonly", "readonly");
    inputToModify.removeAttribute("readonly");
    inputToModify.style="pointer-events: auto; background-color: white; color: black";
    //inputToModify.value= itemList[indexToEdit].name;
}

function cancelEdit(indexToEdit) {
    let editButton = document.getElementById(`editButton0${indexToEdit}`);
    let cancelButton = document.getElementById(`cancelEditButton0${indexToEdit}`);
    let confirmButton = document.getElementById(`confirmEditButton0${indexToEdit}`);
    let inputToModify = document.getElementById(`item0${indexToEdit}_name`);

    editButton.setAttribute("style", "display: initial");
    //editButton.removeAttribute("style");
    cancelButton.setAttribute("style", "display: none");
    confirmButton.setAttribute("style", "display: none");
    inputToModify.setAttribute("readonly", "readonly");
    inputToModify.setAttribute("style", "pointer-events: none; background-color: rgb(56, 127, 194); color: white;")
    //inputToModify.style="pointer-events: none; background-color: rgb(56, 127, 194); color: white";
    inputToModify.value= itemList[indexToEdit].name;
}
function confirmEdit(indexToEdit) {
    let editButton = document.getElementById(`editButton0${indexToEdit}`);
    let cancelButton = document.getElementById(`cancelEditButton0${indexToEdit}`);
    let confirmButton = document.getElementById(`confirmEditButton0${indexToEdit}`);
    let inputToModify = document.getElementById(`item0${indexToEdit}_name`);
    let newName = document.getElementById(`item0${indexToEdit}_name`).value;
    let oldName = itemList[indexToEdit].name;
    if (oldName != newName && newName != "") itemList[indexToEdit].name=newName;
    else inputToModify.value = oldName;
    editButton.setAttribute("style", "display: initial");
    cancelButton.setAttribute("style", "display: none");
    confirmButton.setAttribute("style", "display: none");
    inputToModify.setAttribute("readonly", "readonly");
    inputToModify.setAttribute("style", "pointer-events: none; background-color: rgb(56, 127, 194); color: white;");
    storeLocally();
}


function deleteItem(indexToDelete) {
    itemList.splice(indexToDelete, 1);
    storeLocally()
    render();
}


// check valid url function

function isValidUrl(urlString) {
    let urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
    return !!urlPattern.test(urlString);
} 

//Local Storage Functions

function storeLocally(){

jsonArr = JSON.stringify(itemList); // convert array to JSON string using JSON.stringify()
localStorage.setItem("storedList", jsonArr); // save to localStorage
}

function retrieveStoredArray(){
let str = localStorage.getItem("storedList"); // get the string from localStorage
parsedArr = JSON.parse(str); // convert string to valid object
}



