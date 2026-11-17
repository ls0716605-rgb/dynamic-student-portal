
// Display a welcome message
alert("Welcome to the Dynamic Student Portal!");

// Display a message in the browser console
console.log("Dynamic Student Portal JavaScript is running.");

// Student details
let studentName = "larry smith";
let yearOfStudy = 2;

console.log("Student name: " + studentName);
console.log("Year of study: " + yearOfStudy);

// Check student's year of study
if (yearOfStudy === 1) {
    console.log(studentName + " is in first year.");
} else {
    console.log(studentName + " is in year " + yearOfStudy + ".");
}

// Display numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Lab 10: Student class
class Student {
    constructor(name, email, course) {
        this.name = name;
        this.email = email;
        this.course = course;
    }

    getSummary() {
        return this.name + " is registered for " +
            this.course + ". Email: " + this.email;
    }
}

// Create a student object for testing
const student1 = new Student(
    "Larry Smith",
    "larry@example.com",
    "Computer Science"
);

console.log(student1.getSummary());

// Lab 10: Regular expression patterns
const namePattern = /^[A-Za-z ]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate student information
function validateStudent(name, email) {

    if (!namePattern.test(name)) {
        return "Name must contain only letters and spaces.";
    }

    if (!emailPattern.test(email)) {
        return "Please enter a valid email address.";
    }

    return "Valid";
}

// Lab 9: Add a student object to the webpage
function addStudentToPage(student) {
    const studentList = document.getElementById("student-list");

    if (!studentList) return;

    const listItem = document.createElement("li");

    listItem.textContent = student.name + " - " +
        student.course + " - Year " + student.year;

    studentList.appendChild(listItem);
}

// Display students and update count
function displayAllStudents(students) {
    const studentList = document.getElementById("student-list");
    const studentCount = document.getElementById("student-count");

    if (!studentList || !studentCount) return;

    studentList.innerHTML = "";
    studentCount.textContent = "Registered Students: " + students.length;

    for (let i = 0; i < students.length; i++) {
        addStudentToPage(students[i]);
    }
}

// Wait until the webpage is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Lab 10: Registration form validation
    const registrationForm = document.querySelector("form");

    if (registrationForm) {
        registrationForm.addEventListener("submit", function(event) {

            // Prevent page refresh during this demonstration
            event.preventDefault();

            const enteredName =
                document.getElementById("fullname").value.trim();

            const enteredEmail =
                document.getElementById("email").value.trim();

            const validationResult =
                validateStudent(enteredName, enteredEmail);

            if (validationResult !== "Valid") {
                alert(validationResult);
                return;
            }

            const student = new Student(
                enteredName,
                enteredEmail,
                document.getElementById("course").value
            );

            console.log(student.getSummary());

            alert("Student information is valid!");
        });
    }

    // Lab 9: Fetch student data from JSON
    const showStudentsButton =
        document.getElementById("show-students");

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
                    const studentList =
                        document.getElementById("student-list");

                    if (studentList) {
                        studentList.textContent =
                            "Unable to load student data. Please try again later.";
                    }

                    console.error("Error loading students:", error);
                });
        });
    }
});
