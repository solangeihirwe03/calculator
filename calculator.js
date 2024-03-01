 
function calculate() {
  try{
    var result = eval(document.form[0].display.value);
    if (result=== infinity || result=== -infinity){
      throw "infinity"
    }
    else{
      document.forms[0].display.value = result;
    }
  }
    catch(error){
      document.forms[0].display.value = "error";
    }
  }
