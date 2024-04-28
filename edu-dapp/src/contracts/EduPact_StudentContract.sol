// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./EduPact_CourseContract.sol";
import "./EduPact_NFT.sol";

// Contract to manage students
contract StudentContract {
    // Struct to represent a student
    struct Student {
        address studentAddress; // Address of the student
        string name; // Name of the student
        string surname; // Surname of the student
        bool isRegistered; // Flag to check if the student is registered
        mapping(string => bool) completedCourses; // Mapping from course name to completion status
    }

    // Instance of the CourseContract
    CourseContract private courseContract;

    // Instance of the EduPact_NFT contract
    EduPact_NFT private nftContract;
    

    // Mapping from student address to Student struct
    mapping(address => Student) private students;

    // Mapping from student address to course name
    mapping(address => string) private studentCourses;

    // Constructor to initialize the CourseContract instance
    constructor(CourseContract _courseContract, EduPact_NFT _nftContract) {
        courseContract = _courseContract;
        nftContract = _nftContract;

    }

    

    // Function to register a new student
    // Requires that the student is not already registered
    function registerStudent(string memory name, string memory surname) public {
    require(!students[msg.sender].isRegistered, "User is already registered");

    Student storage student = students[msg.sender];
    student.studentAddress = msg.sender;
    student.name = name;
    student.surname = surname;
    student.isRegistered = true;
    }

    function setNFTContract(EduPact_NFT _nftContract) public {
        nftContract = _nftContract;
    }

    // Function to register a student for a course
    // Requires that the student is registered and the course exists
    function registerForCourse(string memory courseName) public {
    address studentAddress = msg.sender;
    require(students[studentAddress].isRegistered, "Student is not registered");
    require(courseContract.courseExists(courseName), "Course does not exist");
    studentCourses[studentAddress] = courseName;
    courseContract.incrementStudentCount(courseName);
}

    // Function to get the details of a student
    // Requires that the student is registered
    function getStudent(address studentAddress) public view returns (string memory, string memory) {
        require(students[studentAddress].isRegistered, "Student is not registered");
        return (students[studentAddress].name, students[studentAddress].surname);
    }

    // Function to get the course for a student
    // Requires that the student is registered
    function getCourseForStudent(address studentAddress) public view returns (string memory) {
        require(students[studentAddress].isRegistered, "Student is not registered");
        return studentCourses[studentAddress];
    }

    function completeCourse(string memory courseName) public {
    address studentAddress = msg.sender;
    require(students[studentAddress].isRegistered, "Student is not registered");
    require(!students[studentAddress].completedCourses[courseName], "Course is already completed");

    students[studentAddress].completedCourses[courseName] = true;

    // Call the NFT creation function
    nftContract.issueCertificate(studentAddress, courseName);
}

    function isRegistered(address studentAddress) public view returns (bool) {
        return students[studentAddress].isRegistered;
    }

    function hasCompletedCourse(address studentAddress, string memory courseName) public view returns (bool) {
        return students[studentAddress].completedCourses[courseName];
    }

    
}
