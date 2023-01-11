// DOM variables:
let addButton = document.getElementById("plus_button");
let minusButton = document.getElementById("minus_button");
let addBar = document.getElementById("add_items_bar");
let titleInput = document.getElementById("add_title");
let urlInput = document.getElementById("add_image");
let listaDOM = document.getElementById("object_list");

// main variables
const item = {
    name: "",
    photoUrl: ""
}
let itemList = [{name: "Paisaje 1", photoUrl: "https://expertphotography.b-cdn.net/wp-content/uploads/2022/05/Landscape-Photography-Sophie-Turner.jpg" }, {name: "Paisaje 2", photoUrl: "https://www.blogdelfotografo.com/wp-content/uploads/2014/08/61.jpg"}];

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
    }

// Render function    
function render() {
    let template = "";
    for (let i = 0; i < itemList.length; i++) {
        template += 
        `<li class="item_container" id="item${i}">
            <div class="item_img_container">
                <img
                    class="item_img"
                    id="img${i}"
                    src="${itemList[i].photoUrl}"
                    alt="#"
                />
            </div>
            <div class="item_text">
                <p class="item_title">Title:</p>
                <input
                    type="text"
                    id="item_name#"
                    class="item_name"
                    value="${itemList[i].name}"
                    readonly="true"
                    style
                />
                <i onclick="alert()"class="fa-solid fa-pen-to-square"></i>
            </div>
            <i onclick="alert()"class="fa-solid fa-trash"></i>
        </li>`
    }
}

function editItem() {

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



console.log(itemList[0].name);
