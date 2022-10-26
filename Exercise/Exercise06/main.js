var books = [
{
  title: "Pedagogy of the Oppressed",
  author: "Paulo Freire",
  year: 1968,
  publisher: "Bloomsbury Publishing",
  pages: 192,
  ebook:false,
  cover: "https://images-na.ssl-images-amazon.com/images/I/41OtPGPAMuL._SX333_BO1,204,203,200_.jpg"

},

{
  title: "Stamped from the Beginning",
  author: "Ibram X. Kendi",
  year: 2016,
  publisher: "Public Affairs",
  pages: 594,
  ebook:false,
  cover: "https://images-na.ssl-images-amazon.com/images/I/51ZYfODpfXL._SX331_BO1,204,203,200_.jpg"

},
{
  title: "The New Jim Crow",
  author: "Michelle Alexander",
  year: 2020,
  publisher: "New Press",
  pages: 377,
  ebook:false,
  cover: "https://www.akpress.org/media/catalog/product/cache/65f09a41914b1610bb0881ad71dc88a1/n/e/newjip.jpg"

},


];

function createBookshelf(books, shelfSelector){
  let shelf= document.querySelector(shelfSelector);
  if (shelf){
    if(books instanceof Array){
      for (let book of books){
        // You will add your content here for
        let html = `
          <h1 class="title">${book.title}</h1>
          <h2 class="author">By ${book.author}</h2>
          <img class="cover" src="${book.cover}" alt="Cover Art">
          <div class="book-info">
            <span class="publisher">&copy; ${book.year} ${book.publisher}</span>,
            <span class="pages">${book.pages} pages </span>
          </div>
        `;


        let container = document.createElement("div");
        container.className="book";
        container.innerHTML = html;
        container.tabIndex = books.indexOf(book);
        shelf.append(container);
      }

    }

  }

}
