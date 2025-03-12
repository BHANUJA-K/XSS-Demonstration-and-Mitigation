// Comment Form Submission
document.getElementById("commentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const commentInput = document.getElementById("commentInput").value;

    // Warning alert for vulnerable content
    if (commentInput.includes("<script>")) {
        alert("Warning: Your input contains potentially malicious content!");
    }

    // Display the comment without sanitizing (XSS vulnerability demo)
    const commentsList = document.getElementById("commentsList");
    const newComment = document.createElement("li");
    newComment.innerHTML = commentInput; // Vulnerable to XSS
    commentsList.appendChild(newComment);

    // Clear the input field
    document.getElementById("commentInput").value = "";
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();

    // Basic validation
    if (!username || !email) {
        alert("Please fill out all fields!");
        return;
    }

    if (!/^[\w.\-]+@[a-zA-Z_\-]+?\.[a-zA-Z]{2,}$/.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    alert("Thank you for your submission!");
});
