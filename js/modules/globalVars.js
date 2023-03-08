const wrapper = document.querySelector(".wrapper");
// let booksContainer;

let dataList;
let basketItemsList = [];

const setData = (data) => (dataList = data);
const setBasketList = (data) => (basketItemsList = data);

export { wrapper, dataList, setData, basketItemsList, setBasketList };
