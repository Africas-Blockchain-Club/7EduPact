// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./EduPact_StudentContract.sol";
import "./EduPact_CourseContract.sol";

contract EduPact_NFT is ERC721 {
    StudentContract private studentContract;
    CourseContract private courseContract;
    uint256 private nextTokenId = 0;

    constructor(address _studentContract, address _courseContract) ERC721("EduPactNFT", "EDUNFT") {
        studentContract = StudentContract(_studentContract);
        courseContract = CourseContract(_courseContract);
    }

    function issueCertificate(address studentAddress, string memory courseName) public {
        require(studentContract.isRegistered(studentAddress), "Student is not registered");
        require(courseContract.courseExists(courseName), "Course does not exist");
        require(studentContract.hasCompletedCourse(studentAddress, courseName), "Course is not completed");

        _mint(studentAddress, nextTokenId);
        nextTokenId++;
    }

    function setStudentContract(StudentContract _studentContract) public {
        studentContract = _studentContract;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
    address owner = ownerOf(tokenId); // This will throw if the token does not exist

    (string memory studentName, string memory studentSurname) = studentContract.getStudent(owner);
    (string memory courseName, string memory courseDescription, uint256 studentCount) = courseContract.getCourse(studentContract.getCourseForStudent(owner));

    string memory json = string(abi.encodePacked('{"name":"', studentName, '","description":"', studentSurname, ' completed ', courseName, '","attributes":[{"trait_type":"Course","value":"', courseName, '"},{"trait_type":"Description","value":"', courseDescription, '"},{"trait_type":"Student Count","value":', studentCount, '}]}'));
    string memory base64Json = base64encode(bytes(json));

    return string(abi.encodePacked('data:application/json;base64,', base64Json));
}

    //Function to encode data in base64
    function base64encode(bytes memory data) private pure returns (string memory) {
    string memory base64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    uint256 encodedLength = 4 * ((data.length + 2) / 3);
    string memory result = new string(encodedLength + encodedLength / 76);

    bytes memory resultBytes = bytes(result);

    uint256 i = 0;
    uint256 j = 0;
    for (; i + 2 < data.length; i += 3) {
        resultBytes[j++] = bytes(base64Alphabet)[uint256((uint8(data[i]) >> 2) & 0x3F)];
        resultBytes[j++] = bytes(base64Alphabet)[uint256(((uint8(data[i]) & 0x3) << 4) | ((uint8(data[i + 1]) >> 4) & 0x3F))];
        resultBytes[j++] = bytes(base64Alphabet)[uint256(((uint8(data[i + 1]) & 0xF) << 2) | ((uint8(data[i + 2]) >> 6) & 0x3F))];
        resultBytes[j++] = bytes(base64Alphabet)[uint256(uint8(data[i + 2]) & 0x3F)];
    }

    if (i < data.length) {
        resultBytes[j++] = bytes(base64Alphabet)[uint256((uint8(data[i]) >> 2) & 0x3F)];
        if (i + 1 < data.length) {
            resultBytes[j++] = bytes(base64Alphabet)[uint256(((uint8(data[i]) & 0x3) << 4) | ((uint8(data[i + 1]) >> 4) & 0x3F))];
            resultBytes[j++] = bytes(base64Alphabet)[uint256((uint8(data[i + 1]) & 0xF) << 2)];
        } else {
            resultBytes[j++] = bytes(base64Alphabet)[uint256((uint8(data[i]) & 0x3) << 4)];
            resultBytes[j++] = '=';
        }
        resultBytes[j++] = '=';
    }

    return string(resultBytes);
}
}
    /* Function to encode data in base64
    function base64encode(bytes memory data) private pure returns (string memory) {
    string memory base64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    uint256 encodedLength = 4 * ((data.length + 2) / 3);
    string memory result = new string(encodedLength + encodedLength / 76);

    bytes memory resultBytes = bytes(result);

    uint256 i = 0;
    uint256 j = 0;
    for (; i + 2 < data.length; i += 3) {
        resultBytes[j++] = bytes(base64Alphabet)[uint256((uint8(data[i]) >> 2) & 0x3F)];
        resultBytes[j++] = bytes(base64Alphabet)[uint256(((uint8(data[i]) & 0x3) << 4) | ((uint8(data[i + 1]) >> 4) & 0x3F))];
        resultBytes[j++] = bytes(base64Alphabet)[uint256(((uint8(data[i + 1]) & 0xF) << 2) | ((uint8(data[i + 2]) >> 6) & 0x3F))];
        resultBytes[j++] = bytes(base64Alphabet)[uint256(uint8(data[i + 2]) & 0x3F)];
    }

    if (i < data.length) {
        resultBytes[j++] = bytes(base64Alphabet)[uint256((uint8(data[i]) >> 2) & 0x3F)];
        if (i + 1 < data.length) {
            resultBytes[j++] = bytes(base64Alphabet)[uint256(((uint8(data[i]) & 0x3) << 4) | ((uint8(data[i + 1]) >> 4) & 0x3F))];
            resultBytes[j++] = bytes(base64Alphabet)[uint256((uint8(data[i + 1]) & 0xF) << 2)];
        } else {
            resultBytes[j++] = bytes(base64Alphabet)[uint256((uint8(data[i]) & 0x3) << 4)];
            resultBytes[j++] = '=';
        }
        resultBytes[j++] = '=';
    }

    return string(resultBytes);
}**/

