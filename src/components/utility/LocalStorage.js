const removeWish = (id) =>{
    const getWishLocal = getWishToLocalStorage();
    const newWishList = getWishLocal.filter((wishId)=> wishId !== id);
    localStorage.setItem('wish-books', JSON.stringify(newWishList));
}


const getToLocalStorage = () => {
    const storedBooks = localStorage.getItem('read-books')
    if(storedBooks){
        return JSON.parse(storedBooks)
    }
    return [];
}
const saveToLocalStorage = (id) => {
    const storedBooks = getToLocalStorage();

    const isExists = storedBooks.find(bookId => parseInt(bookId) === parseInt(id));
    if(!isExists) {
        storedBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedBooks));
    }
}


const getWishToLocalStorage = () => {
    const storedBooks = localStorage.getItem('wish-books')
    if(storedBooks){
        return JSON.parse(storedBooks)
    }
    return [];
}
const saveWishToLocalStorage = (id) => {
    const storedBooks = getWishToLocalStorage();
    const isExists = storedBooks.find(bookId => bookId === id);
    if(!isExists) {
        storedBooks.push(id);
        localStorage.setItem('wish-books', JSON.stringify(storedBooks));
    }

}

export { getToLocalStorage, saveToLocalStorage, saveWishToLocalStorage, getWishToLocalStorage,removeWish };