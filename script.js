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

let rows = csvStr.split('\n');

// Split each row into columns
let table = rows.map(row => row.split(','));

console.log(table);


// Part 2: Expanding Functionality
// Step: Split the first row (header) by commas
let headerRow = rows[0].split(',');

// Declare a variable to store the number of columns
let numColumns = headerRow.length;

console.log("Number of columns:", numColumns); // Output: 4

// Store your results in a two-dimensional array.
// // Each row should be its own array, with individual entries for each column.
// // Each row should be stored in a parent array, with the heading row located at index 0.
//let table = rows.map(row => row.split(','));

// Cache this two-dimensional array in a variable for later use.
let cachedTable = table;
console.log("2D Array result:");
console.log(cachedTable);

// Part 3
// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
const headers = cachedTable[0].map(col => col.toLowerCase());

// Step 2: Transform data rows into objects
const transformedData = cachedTable.slice(1).map(row => {
  let obj = {};
  for (let i = 0; i < headers.length; i++) {
    obj[headers[i]] = row[i];
  }
  return obj;
});

console.log(transformedData);

// Part 4: Sorting and Manipulating Data
// Starting data from Part 3
let dataObjects = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
];

// Remove the last element
dataObjects.pop();

// Insert Barry info at index 1
dataObjects.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25"
});

// Add Bilbo to the end of the array
dataObjects.push({
  id: "7",
  name: "Bilbo",
  occupation: "None",
  age: "111"
});

console.log("Updated Data Array:", dataObjects);

// Calculate the average age using a loop
let totalAge = 0;

for (let i = 0; i < dataObjects.length; i++) {
  totalAge += parseInt(dataObjects[i].age); // Convert age to number
}

let averageAge = totalAge / dataObjects.length;

console.log("Average Age:", averageAge);

// Part 5: Full Circle
// // transform the final set of data back into CSV format
function toCSV(data) {
  const headers = Object.keys(data[0]);
  const rows = data.map(obj => headers.map(key => obj[key]).join(","));
  return [headers.join(","), ...rows].join("\n");
}

console.log(toCSV(dataObjects));
