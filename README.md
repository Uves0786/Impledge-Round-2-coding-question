# Impledge-Round-2-coding-question
Certainly! Here's a simplified version of the README content without code:

// step by step process of sql
Open Chrome Browser:

Launch the Chrome browser on your computer.
Navigate to SQL Practice Website:

Enter the URL "https://www.sql-practice.com/" in the address bar of the browser and press Enter.
This will take you to the SQL Practice website.
View Schema:

On the left-hand side of the website, locate and click on "SQL Database".
From the dropdown menu, click on "View Schema" to understand the relationship between the patients, doctors, and admissions tables.
Execute UPDATE Queries:

Before preparing the SELECT queries, execute the provided UPDATE queries to update the data in the Admissions table:
Update [Admissions] Set attending_doctor_id = 29 where attending_doctor_id = 3;
Update [Admissions] Set patient_id = 4 where patient_id = 35;
Ensure that the UPDATE queries are executed successfully to reflect the changes in the database.
Prepare and Execute SELECT Queries:

Once the UPDATE queries have been executed, proceed to prepare and execute the SELECT queries provided.
Ensure that the UPDATE and SELECT queries are executed together to ensure accurate results.
SQL Test 1:

Solve the given problems using SQL queries without using specific clauses for ShipperID or CustomerID.
Execute the following SELECT queries:
SELECT the details of Doctors(s) who have admissions.
SELECT the details of Doctors(s) for whom there are no admissions.
SELECT the details of Patients(s) whose admission can't be completed due to missing doctor details.
Review Results:

Review the results of the executed queries to ensure they meet the desired criteria and provide the expected information.
Close Browser:

Once you have completed your tasks, you can close the Chrome browser.




// step by step process of automation

Package Management Automation

This repository contains Cypress test scripts for automating package management tasks in a web application interface.

Description
The Cypress test scripts provided in this repository automate the process of adding and deleting packages in a web application interface. These tests are designed to ensure the functionality of the package management feature and to validate its behavior under different scenarios.

Prerequisites
Before running the Cypress tests, make sure you have the following installed:

Node.js (including npm)
Cypress
Installation
Clone this repository to your local machine.
Navigate to the project directory.
Install dependencies using npm.
Usage
Ensure your web application interface is running and accessible.
Run Cypress tests using the provided npm script.
Watch the tests execute in the Cypress Test Runner and observe the results.
Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch for your feature or fix.
Make your changes and commit them.
Push your changes to your fork.
Create a pull request.

/// step by step process of postman excercise

Description:

The Postman collection named "Impledge_QA_MohdUvesKhan" contains a set of API request items.
Items:

The collection consists of multiple items, each representing an API request with its associated details.
Address - Verify:

This item represents an API request to verify an address.
Request: It's a POST request to https://api.easypost.com/v2/addresses?verify_strict[]=true.
Includes necessary headers (Authorization, Content-Type).
Request body contains JSON data with address details.
Tests: Verify response body for absence of errors and presence of a specific ZIP code.
Get Shipment Details:

This item represents an API request to retrieve shipment details.
Request: It's a GET request to https://api.easypost.com/v2/shipments/shp_e0b570fd1d7d4b62bd206917eae5881a.
Tests: Validate specific properties of response JSON data (e.g., equality of retail rates, relationship between retail and list rates).
Export and Sharing:

The collection can be exported in various formats using the provided exporter ID.
It can also be shared via a collection link, allowing collaboration and access.
Usage:

To use this collection:
Import it into your Postman application.
Ensure necessary environment variables and authentication tokens are set up.
Execute requests individually or as part of a test suite.
Contributions:

Contributions to the collection (e.g., adding new requests, improving existing ones) are welcome.
Fork the collection, make changes, and submit a pull request.
License:

The collection is provided without any specified license. Ensure compliance with relevant terms and conditions when using it.


