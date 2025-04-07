<script>
document.getElementById('bmiForm').addEventListener('submit', function(event)){
    event.preventDefault(); // Prevent the form from submitting
    
    // Get the values from the input fields
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
    
    // Calculate BMI
    var bmi = weight / (height * height);
    
    // Round to two decimal places
    bmi = bmi.toFixed(2);
    
    // Display the result
    var resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Your BMI is ' + bmi;
    
    // Optionally, provide a basic health message
    if (bmi < 18.5) {
        resultDiv.textContent += '. You are underweight.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultDiv.textContent += '. You have a normal weight.';
    } else if (bmi >= 25 && bmi < 29.9) {
        resultDiv.textContent += '. You are overweight.';
    } else {
        resultDiv.textContent += '. You are obese.';
    }
};
</script>


