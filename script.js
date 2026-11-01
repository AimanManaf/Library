const form = document.getElementById("add-book");


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formData = new FormData(form);
    const bookObject= Object.fromEntries(formData.entries());
    const bookID = Date.now();
    localStorage.setItem(bookID,JSON.stringify(bookObject));
})



// function addToGallery() {
//     const data = JSON.parse(localStorage.getItem(bookID));
//     const div = document.createElement("div");

//     //book cover
//     const cover = document.createElement("img");
//     if (data.imagelink) {
//         cover.src = data.imagelink;
//     } else {
//         cover.src = "images/no-image.jpg";
//     }
//     div.appendChild(cover);

//     //book title 
//     const title = document.createElement("h1");
//     title.textContent = data.title;
//     div.appendChild(title);

//     //book author
//     const author = document.createElement("p");
//     author.textContent = data.author;
//     div.appendChild(author);

// }
