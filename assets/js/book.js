const add_book_base_url = "http://localhost:8080/book/add";

async function addBook(event) {
    event.preventDefault();
    console.log("Button clicked!"); // Function eka wada karanawada balanna

    const bookDTO = {
        ISBN: document.getElementById("isbn").value,
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        category: document.getElementById("category").value,
        availableStock: document.getElementById("availableStock").value
    }

    console.log(bookDTO);

    try {
        const response = await fetch(add_book_base_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookDTO)
        });

        console.log("Response Status: ", response.status);

        if (response.ok) {
            alert("Book added successfully!");
            document.getElementById("addBookForm").reset();
        } else {
            alert("Failed to add book. Status: " + response.status);
        }
    } catch (error) {
        console.error("Fetch Error: ", error);
        alert("Network Error! Backend ekak run wela thiyenawada balanna.");
    }
}