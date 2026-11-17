
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

        const enteredName = document.getElementById("fullname").value.trim();

        if (enteredName === "") {
            event.preventDefault();
            alert("Please enter your full name before submitting.");
        }

    });
}

// Lab 9: Add one student object to the webpage
function addStudentToPage(student) {
    const studentList = document.getElementById("student-list");

    const listItem = document.createElement("li");

    listItem.textContent = student.name + " - " +
        student.course + " - Year " + student.year;

    studentList.appendChild(listItem);
}

// Display all students and update the student count
function displayAllStudents(students) {
    const studentList = document.getElementById("student-list");
    const studentCount = document.getElementById("student-count");

    // Clear the existing student list
    studentList.innerHTML = "";

    // Update the total number of students
    studentCount.textContent = "Registered Students: " + students.length;

    // Display each student
    for (let i = 0; i < students.length; i++) {
        addStudentToPage(students[i]);
    }
}

// Lab 9: Fetch student data from the JSON file
const showStudentsButton = document.getElementById("show-students");

if (showStudentsButton) {
    showStudentsButton.addEventListener("click", function() {

        fetch("students.json")
            .then(function(response) {

                if (!response.ok) {
                    throw new Error("Could not load student data.");
                }

                return response.json();
            })

            .then(function(data) {
                displayAllStudents(data);
            })

            .catch(function(error) {

                const studentList = document.getElementById("student-list");

                studentList.textContent =
                    "Unable to load student data. Please try again later.";

                console.error("Error loading students:", error);
            });

    });
}
