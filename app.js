//handlerfunction to take in user form data
function handleFormInfo(event){
  event.preventDefault();
  var inputGender = event.target.inputGender.value;
  var inputWeight = parseInt(event.target.inputWeight.value);
  var inputHeight = parseInt(event.target.inputHeight.value);
  var inputAge = parseInt(event.target.inputAge.value);

  event.target.inputWeight.value = null;
  event.target.inputHeight.value = null;
  event.target.inputAge.value = null;

  if (!inputGender || !inputWeight || !inputHeight || !inputAge) {
    alert ('Fields cannot be empty!');
  }
  calculateBMR();
}

function calculateBMR (){
  if (inputGender === 'Male') {
    10 * inputWeight + 6.25 * inputHeight - 5 * inputAge + 5;
  }
  if (inputGender === 'Female') {
    10 * inputWeight + 6.25 * inputHeight - 5 * inputAge - 161;
  }
}
