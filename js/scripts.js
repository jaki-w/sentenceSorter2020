$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    const userInput = $("#sentence").val();
    const sentenceArray = userInput.split(" ");
    let newSentenceArray = [];
    sentenceArray.forEach(function(element) {
      if (element.length >= 3 ) {
        newSentenceArray.push(element);
      }
    });
      let reversedArray = newSentenceArray.reverse();
      let joinedArray = reversedArray.join(" ");
      $("#returnSentence").text(joinedArray);
    
  
    // Take the inputed sentence and change it to an array
    const sentenceArray2 = userInput.split(" ");
    // Declare and empty object
    let inputsObject = {};
    // Loop through the array, check if the item is already in the object, if it is, add 1 to the value of that object item; if not, create a new entry in the object with a value of 1
    sentenceArray2.forEach(function (element) {
      if (element in inputsObject) {
        inputsObject[element] ++;
      } else {
        inputsObject[element] = 1;
      };
    });
    console.log(inputsObject);
    // Print that object to the screen
    for (key in inputsObject) {
      $("#returnObject").append("<li>"+key + " " + inputsObject[key]+ "</li>");
    };
    // Additional challenge: print items from the object from greatest to last
  });
});