const joinList = function(conceptlistArray) {
    let newString = "";
    for(let i = 0;i< conceptlistArray.length;i++){
    newString += conceptlistArray[i];
    }
    return conceptlistArray;
}

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
