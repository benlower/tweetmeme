document.addEventListener("DOMContentLoaded", function () {
  // Find all elements with the specified class and replace the text
  var elements = document.getElementsByClassName("drhed");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.innerHTML === "X:") {
      element.innerHTML = "Twitter:";
    }
  }
});
