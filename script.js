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
// Lab 8: Store student names in an array
const students = ["Alex", "Mary", "John", "Grace", "Daniel"];
// Add one student to the webpage
function addStudentToPage(name) {
    const studentList = document.getElementById("student-list");

    const listItem = document.createElement("li");
    listItem.textContent = name;

    studentList.appendChild(listItem);
}
// Display all students from the array
function displayAllStudents(students) {
    const studentList = document.getElementById("student-list");

    // Clear the list before displaying students
    studentList.innerHTML = "";

    for (let i = 0; i < students.length; i++) {
        addStudentToPage(students[i]);
    }
}
// Display students when the button is clicked
const showStudentsButton = document.getElementById("show-students");

if (showStudentsButton) {
    showStudentsButton.addEventListener("click", function() {
        displayAllStudents(students);
    });
}