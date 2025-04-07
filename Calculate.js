function calculatebmi(){
    let weight=document.getElementById("weight").value
    let height=document.getElementById("height").value

    let resultArea = document.querySelector(".comment");

    height=(height/100)

    let bmi=(weight/(height*height)).toFixed(2);

    document.getElementById('bmiResult').innerText = `Your BMI is ${bmi}`;


    if (bmi<=18.5)
        {document.getElementById("message").innerHTML="You are Underweight."}
    else if(bmi>=18.6 && bmi<=24.9)
        {document.getElementById("message").innerHTML="You are Normal."}
    else if(bmi>=25 && bmi<=29.9)
        {document.getElementById("message").innerHTML="You are Overweight."}
    else if(bmi>=30 && bmi<=34.9)
        {document.getElementById("message").innerHTML="You are Obese."}
    else if(bmi>=35)
        {document.getElementById("message").innerHTML="You are Extermely Obese."}
}

function clearInputs() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("age").value = "";

    let genderRadios = document.getElementsByName("gender"); 
    for (let i = 0; i < genderRadios.length; i++) { genderRadios[i].checked = false; }

    document.getElementById("female").innerText = ""; 
    document.getElementById("male").innerText = ""; 
    document.getElementById("bmiResult").innerText = "Your BMI is 00.00"; 
    document.getElementById("heading").innerHTML = "";
    document.getElementById("message").innerHTML= "";

}
