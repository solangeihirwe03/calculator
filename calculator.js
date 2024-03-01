 
function calculate() {
    var result = eval(document.form[0].display.value);
    if (result=== infinity || result=== -infinity){
      result = "error"
    }
  }
