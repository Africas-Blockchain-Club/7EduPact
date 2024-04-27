// SPDX-License-Identifier: MIT
// CourseContract.sol
pragma solidity ^0.8.0;

// Contract to manage courses
contract CourseContract {
    // Struct to represent a course
    struct Course {
        string name; // Name of the course
        string description; // Description of the course
        uint256 studentCount; // Number of students registered in the course
        bool exists; // Flag to check if the course exists
    }

    // Array to keep track of course names
    string[] private courseNames;

    // Mapping from course name to Course struct
    mapping(string => Course) private courses;

    // Function to create a new course
    // Requires that a course with the same name does not already exist
    function createCourse(string memory name, string memory description) public {
        require(!courses[name].exists, "Course already exists");
        courses[name] = Course(name, description, 0, true);
    }

    // Function to check if a course exists
    function courseExists(string memory name) public view returns (bool) {
        return courses[name].exists;
    }

    // Function to increment the student count for a course
    // Requires that the course exists
    function incrementStudentCount(string memory name) public {
        require(courses[name].exists, "Course does not exist");
        courses[name].studentCount++;
    }

    // Function to get the details of a course
    // Requires that the course exists
    function getCourse(string memory name) public view returns (string memory, string memory, uint256) {
        require(courses[name].exists, "Course does not exist");
        return (courses[name].name, courses[name].description, courses[name].studentCount);
    }

    function getCourses() public view returns (string[] memory, uint256[] memory) {
        uint256 length = courseNames.length;
        uint256[] memory studentCounts = new uint[](length);

        for (uint256 i = 0; i < length; i++) {
            studentCounts[i] = courses[courseNames[i]].studentCount;
        }

        return (courseNames, studentCounts);
    }

    // Function to get course details by index
    function getCourseByIndex(uint256 index) public view returns (string memory, string memory, uint256) {
        require(index < courseNames.length, "Index out of range");
        string memory name = courseNames[index];
        return (courses[name].name,courses[name].description,courses[name].studentCount);
    }
}
