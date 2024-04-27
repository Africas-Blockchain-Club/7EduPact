// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./EduPact_CourseContract.sol";
import "./EduPact_NFT.sol";
import "./EduPact_StudentContract.sol";

contract ContractFactory {
    EduPact_NFT public nftContract;
    StudentContract public studentContract;
    CourseContract public courseContract;

    constructor() {
        // Deploy the CourseContract first
        courseContract = new CourseContract();

        // Deploy the StudentContract with the address of the CourseContract
        studentContract = new StudentContract(courseContract, nftContract);

        // Deploy the EduPact_NFT contract with the address of the StudentContract and CourseContract
        nftContract = new EduPact_NFT(address(studentContract), address(courseContract));

        // Set the address of the EduPact_NFT in the StudentContract
        studentContract.setNFTContract(nftContract);

        // Set the address of the StudentContract in the EduPact_NFT contract
        nftContract.setStudentContract(studentContract);
    }
}
