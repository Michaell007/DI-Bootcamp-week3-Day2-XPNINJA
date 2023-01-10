function calculateTip() {
    // fetch bill amount, service quality, and number of people from input fields
    const billAmount = document.getElementById('billamt').value;
    const serviceQuality = document.getElementById('serviceQual').value;
    const numberOfPeople = document.getElementById('peopleamt').value;
  
    // check if bill amount or service quality are empty or zero
    if (billAmount === '' || serviceQuality === '' || serviceQuality == 0) {
        alert('Please enter valid input');
        return;
    }
  
    // set default value of 1 for number of people if it is empty or less than 1
    if (numberOfPeople === '' || numberOfPeople <= 1) {
        numberOfPeople = 1;
        document.getElementById('each').style.display = 'none';
    } else {
        document.getElementById('each').style.display = 'block';
    }
  
    // calculate total tip
    let total = (billAmount * serviceQuality) / numberOfPeople;
  
    // round total tip to two decimal points
    total = total.toFixed(2);
  
    // display total tip
    document.getElementById('totalTip').style.display = 'block';
    document.getElementById('tip').innerHTML = total;
}
  
    // hide total tip by default
document.getElementById('totalTip').style.display = 'none';
    
    // call calculateTip function when button is clicked
document.getElementById('calculate').onclick = function() {
    calculateTip();
};
  