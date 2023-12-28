const getTheTitles = function(books) {
let bookArr = [];
books.forEach(book => { bookArr.push(book.title)
});
return bookArr;
};

// Do not edit below this line
module.exports = getTheTitles;
