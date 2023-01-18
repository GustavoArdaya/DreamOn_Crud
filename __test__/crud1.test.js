const { itemList } = require("../src/crud1")
//import { itemList } from "../src/crud1";

test('should accept a list input and store it into object list', () => {
    //GIVEN
    const list = [
        { id: 3214987982, title: "item1", imgUrl: "ljsldjfsljf.jpg"}, 
        { id: 3214985785, title: "item2", imgUrl: "ljsldjfsljf.jpg"}
    ]
    //WHEN
    const crud = itemList.initialize(list);
    const sut = crud.list;
    //THEN
    expect(sut.length).toEqual(2);
})

test('should delete item from list by Id', () => {
    //GIVEN
    const list = [
        { id: 3214987982, title: "item1", imgUrl: "ljsldjfsljf.jpg"}, 
        { id: 3214985785, title: "item2", imgUrl: "ljsldjfsljf.jpg"}
    ]
    //WHEN
    const crud = itemList.initialize(list); // this adds items into list to work with
    crud.deleteById(3214987982)
    const sut = crud.list;
    //THEN
    expect(sut.length).toEqual(1);
})

test('should add item into list', () => {
    //GIVEN
    const list = [
        { id: 3214987982, title: "item1", imgUrl: "ljsldjfsljf.jpg"}, 
        { id: 3214985785, title: "item2", imgUrl: "ljsldjfsljf.jpg"}
    ]
    //WHEN
    const crud = itemList.initialize(list); // this adds items into list to work with
    crud.addNewItem({ title: "title", imgUrl: "imagenURL.jpg"} );
    const sut = crud.list;
    //THEN
    expect(sut.length).toEqual(3);
})

test('should change title from item by Id', () => {
    //GIVEN
    const list = [
        { id: 3214987982, title: "item1", imgUrl: "ljsldjfsljf.jpg"}, 
        { id: 3214985785, title: "item2", imgUrl: "ljsldjfsljf.jpg"}
    ]
    //WHEN
    const crud = itemList.initialize(list); // this adds items into list to work with
    crud.editTitleById(3214985785, "item3"); // parameters are id and new title
    const sut = crud.list;
    //THEN
    expect(sut).toEqual([{"id": 3214987982, "imgUrl": "ljsldjfsljf.jpg", "title": "item1"}, {"id": 3214985785, "imgUrl": "ljsldjfsljf.jpg", "title": "item3"}]);
})