// Transform data rows into objects
const transformedData = cachedTable.slice(1).map(row => {
  let obj = {};
  for (let i = 0; i < headers.length; i++) {
    obj[headers[i]] = row[i];
  }
  return obj;
});

console.log(transformedData);
