 // Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
    // Get the current date and time in the timezone "Australia/Brisbane"
    let brisbaneTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
    return brisbaneTime; // Return the formatted date and time
    return aestTime; // Return the formatted date and time
};
