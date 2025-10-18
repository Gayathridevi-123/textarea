
   var textArea = document.getElementById("textArea");
    var counter = document.getElementById("counter");
    var warning = document.getElementById("warning");
    var max = 200;

    textArea.addEventListener("input", () => {
      var length = textArea.value.length;
      counter.textContent = `${length} / ${max} characters`;

      if (length >= max) {
        warning.textContent = "Character limit reached!";
      } else {
        warning.textContent = "";
      }
    });
  