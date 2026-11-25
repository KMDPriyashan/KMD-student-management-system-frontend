const add_instructor_base_url = "http://localhost:8080/instructor/add";

async function addInstructor(event) {
    event.preventDefault();
    console.log("Button clicked!"); // Function eka wada karanawada balanna

    const instructorDTO = {
        code: document.getElementById("code").value,
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        subjectName: document.getElementById("specialization").value,
        address: document.getElementById("address").value
    }

    console.log(instructorDTO);

    try {
        const response = await fetch(add_instructor_base_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(instructorDTO)
        });

        console.log("Response Status: ", response.status);

        if (response.ok) {
            alert("Instructor added successfully!");
            document.getElementById("addInstructorForm").reset();
        } else {
            alert("Failed to add instructor. Status: " + response.status);
        }
    } catch (error) {
        console.error("Fetch Error: ", error);
        alert("Network Error! Backend ekak run wela thiyenawada balanna.");
    }
}