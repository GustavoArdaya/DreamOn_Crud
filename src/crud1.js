export const itemList = {
    list: [],

    initialize(listInput) {
        this.list = listInput;
        return this;
    },

    deleteById(idInput) {
        let index = this.list.findIndex((item) => item.id == idInput);
        this.list.splice(index, 1);
    },

    addNewItem(item) {
        let newItem = {
            id: Math.floor((Math.random() * 10**10)),
            title: item.title,
            imgUrl: item.imgUrl
        }
        this.list.push(newItem);
    },

    editTitleById(idInput, newTitle) {
        let index = this.list.findIndex((item) => item.id == idInput);
        this.list[index].title = newTitle;
    }
}

//module.exports = { itemList }

//console.log(crud.addItemtoList());


let randomIdItem = {
    id: Math.floor((Math.random() * 10**10)),
    title: "nameless item",
    imgUrl: "https://static.wixstatic.com/media/ea71bb_5c8f1a2d38954c5d8422d8d706593d54~mv2.png/v1/fill/w_872,h_873,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ea71bb_5c8f1a2d38954c5d8422d8d706593d54~mv2.png"
}
 console.log(randomIdItem)


