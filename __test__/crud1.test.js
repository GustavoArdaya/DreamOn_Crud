const { itemList } = require("../src/crud1")
//import { itemList } from "../src/crud1";

test('should create a crud object with a list', () => {
    //GIVEN
    const list = [
        { id: 321498798, title: "item1", imgUrl: "ljsldjfsljf.jpg"}, 
        { id: 321498578, title: "item2", imgUrl: "ljsldjfsljf.jpg"}
    ]
    //WHEN
    const crud = itemList.addItemtoList(list);
    const sut = crud.list;
    //THEN
    expect(sut.length).toEqual(2);

})