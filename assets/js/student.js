const add_student_base_url = "http://localhost:8080/student/add";

async function addStudent(event) {
    event.preventDefault();
    console.log("Button clicked!"); // Function eka wada karanawada balanna

    const studentDTO = {
        indexNumber: document.getElementById("index").value,
        fullName: document.getElementById("studentName").value,
        nic: document.getElementById("nic").value,
        dateOfBirth: document.getElementById("dob").value,
        address: document.getElementById("address").value,
        gender: document.getElementById("gender").value,
        phoneNumber: document.getElementById("contact").value,
        email: document.getElementById("email").value
    }

    console.log(studentDTO);

    try {
        const response = await fetch(add_student_base_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(studentDTO)
        });

        console.log("Response Status: ", response.status);

        if (response.ok) {
            alert("Student added successfully!");
            document.getElementById("addStudentForm").reset();
        } else {
            alert("Failed to add student. Status: " + response.status);
        }
    } catch (error) {
        console.error("Fetch Error: ", error);
        alert("Network Error! Backend ekak run wela thiyenawada balanna.");
    }
}