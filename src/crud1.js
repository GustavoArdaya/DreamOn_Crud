const itemList = {
    list: [],
    createItem() {
        let newObject = {
            id: Math.floor((Math.random() * 10**10)),
            title: "nameless item",
            imgUrl: "https://static.wixstatic.com/media/ea71bb_5c8f1a2d38954c5d8422d8d706593d54~mv2.png/v1/fill/w_872,h_873,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ea71bb_5c8f1a2d38954c5d8422d8d706593d54~mv2.png"
        }
    },
    initialize(data) {
        this.list = data;
        return this;
    },
    deleteById(id) {
        let index = this.list.findIndex((item) => item.id == id);
        this.list.splice(index, 1);
    },
    addNewItem(item) {
        let newItem = {
            title: item.title,
            imgUrl: item.imgUrl
        }
    }
}

module.exports = { itemList }

//console.log(crud.addItemtoList());


let randomIdItem = {
    id: Math.floor((Math.random() * 10**10)),
    title: "nameless item",
    imgUrl: "https://static.wixstatic.com/media/ea71bb_5c8f1a2d38954c5d8422d8d706593d54~mv2.png/v1/fill/w_872,h_873,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ea71bb_5c8f1a2d38954c5d8422d8d706593d54~mv2.png"
}
 console.log(randomIdItem)


