function calculateIMC(){
    //declaring the variables
    const weight = document.getElementById("weight").value
    const height = document.getElementById("height").value

    const bmi = (weight / (height * height)).toFixed(2);
    //if with creation of "description"
    if(!isNaN(bmi)){
        const value = document.getElementById("value");
        let description = "";
        value.classList.add("attention");

        document.getElementById("infos").classList.remove("hidden");
        //setting the value of the variable "description"
        if (bmi < 18.5){
            description = "Cuidado! Você está abaixo do peso";
        }else if(bmi >= 18.5 && bmi < 25){
            description = "Parabéns! Você está no peso ideal!";
            value.classList.remove("attention");
            value.classList.add("normal");
        }else if(bmi >= 25 && bmi < 30){
            description = "Cuidado! Você está acima do peso!";
            value.classList.remove("normal");
            value.classList.add("attention");
         }else {
            description = "Cuidado! Você está bem pesadinho";
            value.classList.remove("normal");
            value.classList.add("attention");
         }
         //placing the information of the variables in the HTML
         document.getElementById("description").textContent = description;
         document.getElementById("value").textContent = bmi;
    }
}