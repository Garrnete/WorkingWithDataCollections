// Starting String
let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

//  Variables
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let commas = 0; // Counter variable

// Loop through string, for loop to have access to the index
for (let i = 0; i < csvStr.length; i++) {
  if (csvStr[i] == ",") {
    // If comma
    commas++; // Add to comma counter
  } else if (csvStr[i] == "\n") {
    // If new line
    console.log(cell1, cell2, cell3, cell4); // print new line

    // Clear previous data for new row
    commas = 0;
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
  } else {
    // for all chars
    if (commas == 0) {
      // put in the appropriate cell, based on commas
      cell1 += csvStr[i];
    } else if (commas == 1) {
      cell2 += csvStr[i];
    } else if (commas == 2) {
      cell3 += csvStr[i];
    } else {
      cell4 += csvStr[i];
    }
  }

  // If last char in string print final cells
  if (csvStr.length - 1 == i) {
    console.log(cell1, cell2, cell3, cell4);
  }
}

// Part 1: Refactoring Old Code
// // Split rows by newline

// let rows = csvStr.split('\n');

// Split each row into columns
 let table = rows.map(row => row.split(','));

console.log(table);


// Part 2: Expanding Functionality
// Step: Split the first row (header) by commas
// let headerRow = rows[0].split(',');

// Declare a variable to store the number of columns
let numColumns = headerRow.length;

console.log("Number of columns:", numColumns); // Output: 4

// Store your results in a two-dimensional array.
// // Each row should be its own array, with individual entries for each column.
// // Each row should be stored in a parent array, with the heading row located at index 0.
// let table = rows.map(row => row.split(','));

// Cache this two-dimensional array in a variable for later use.
let cachedTable = table;
console.log("2D Array result:");
console.log(cachedTable);