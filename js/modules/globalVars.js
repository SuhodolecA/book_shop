const wrapper = document.querySelector(".wrapper");
// let booksContainer;

let dataList;
const basketItemsList = [];

const setData = (data) => (dataList = data);
// const setBooksContainer = (data) => (booksContainer = data);

export { wrapper, dataList, setData, basketItemsList };
