const gallerySection = document.getElementById("gallery-section");

Object.keys(localStorage).forEach((key)=>{

    const book = JSON.parse(localStorage.getItem(key));

    const div = document.createElement("div");
    // div.classList.add('border');
    div.classList.add('flex-column');

    // image cover
    const img = document.createElement("img");
    book.imagelink ? img.src=book.imagelink : img.src="images/no-image.jpg";
    div.appendChild(img);

    // title 
    const title = document.createElement("h1");
    title.textContent = book.title;
    div.appendChild(title);

    // author
    const author = document.createElement("p");
    author.textContent = book.author;
    div.appendChild(author);

    gallerySection.appendChild(div);

})
