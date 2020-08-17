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
    
  });
});