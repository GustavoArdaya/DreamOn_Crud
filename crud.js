// DOM variables:
let addButton = document.getElementById("plus_button");
let minusButton = document.getElementById("minus_button");
let addBar = document.getElementById("add_items_bar");
let titleInput = document.getElementById("add_title");
let urlInput = document.getElementById("add_image");
let itemListDOM = document.getElementById("object_list");

// main variables
const item = {
    name: "",
    photoUrl: ""
}
let itemList = [{name: "Paisaje 1", photoUrl: "https://expertphotography.b-cdn.net/wp-content/uploads/2022/05/Landscape-Photography-Sophie-Turner.jpg" }, 
{name: "Paisaje 2", photoUrl: "https://www.blogdelfotografo.com/wp-content/uploads/2014/08/61.jpg"},
{name: "Paisaje 3", photoUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"}];

// Render at load

render();

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
    render();
    }

// Render function    
function render() {
    let template = "";
    for (let i = 0; i < itemList.length; i++) {
        template += 
        `<li class="item_container" id="item-${i}">
            <div class="item_img_container">
                <img
                    class="item_img"
                    id="img-${i}"
                    src="${itemList[i].photoUrl}"
                    alt="#"
                />
            </div>
            <div class="item_text">
                <p class="item_title">Title:</p>
                <input
                    type="text"
                    id="item0${i}_name"
                    class="item_name"
                    value="${itemList[i].name}"
                    readonly="true"
                    style
                />
                <i id="editButton0${i}" style onclick="editItem(${i})"class="fa-solid fa-pen-to-square"></i>
                <i id="cancelEditButton0${i}" style="display: none" onclick="cancelEdit()"class="fa-solid fa-xmark"></i>
                <i id="confirmEditButton0${i}" style="display: none" class="fa-solid fa-check"></i>
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
    console.log(inputToModify.readonly);
    editButton.style = "display: none"
    cancelButton.style = "";
    confirmButton.style = "";
    inputToModify.readonly="false";
    inputToModify.style="pointer-events: auto; background-color: white; color: black";
    inputToModify.value= itemList[indexToEdit].name;
}

function cancelEdit() {

}

function deleteItem(indexToDelete) {
    itemList.splice(indexToDelete, 1);
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


