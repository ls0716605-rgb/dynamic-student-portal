// Display a welcome message when the homepage loads
alert("Welcome to the Dynamic Student Portal!");

// Display a message in the browser console
console.log("Dynamic Student Portal JavaScript is running.");

// Student details
let studentName = "larry smith";
let yearOfStudy = 2;

// Display student information
console.log("Student name: " + studentName);
console.log("Year of study: " + yearOfStudy);

// Check the student's year of study
if (yearOfStudy === 1) {
    console.log(studentName + " is in first year.");
} else {
    console.log(studentName + " is in year " + yearOfStudy + ".");
}
// Display numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Registration form validation
const registrationForm = document.querySelector("form");

if (registrationForm) {
    registrationForm.addEventListener("submit", function(event) {

        const studentName = document.getElementById("fullname").value.trim();

        if (studentName === "") {
            event.preventDefault();
            alert("Please enter your full name before submitting.");
        }

    });
}