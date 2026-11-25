const addCourseBaseUrl = "http://localhost:8080/course/add";

async function addCourse(event) {
    event.preventDefault();
    const form = document.getElementById("addCourseForm");
    const submitButton = form.querySelector('button[type="submit"]');
    const courseDTO = {
        code: document.getElementById("code").value.trim(),
        name: document.getElementById("courseName").value.trim(),
        description: document.getElementById("description").value.trim(),
        fee: document.getElementById("fee").value,
        duration: document.getElementById("duration").value.trim(),
        credit: document.getElementById("credits").value
    };

    try {
        const response = await fetch(addCourseBaseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(courseDTO)
        });

        if (response.ok) {
            alert("Course added successfully!");
            form.reset();
            bootstrap.Modal.getInstance(document.getElementById("addCourseModal"))?.hide();
        } else {
            const errorText = await response.text();
            alert(errorText || `Failed to add course. Status: ${response.status}`);
        }
    } catch (error) {
        console.error("Fetch Error: ", error);
        alert("Network error. Please check whether the backend server is running.");
    } finally {
        submitButton.disabled = false;
    }
}

document.getElementById("courseSearch")?.addEventListener("input", (event) => {
    const searchText = event.target.value.trim().toLowerCase();
    const rows = document.querySelectorAll("table tbody tr");

    rows.forEach((row) => {
        row.hidden = !row.textContent.toLowerCase().includes(searchText);
    });
});