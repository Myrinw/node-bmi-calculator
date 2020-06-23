function calculateBMI(weight, height) {
    return weight / (height * height);
  }
  
  function calculateBMR(weight, height, ageOfUser, genderOfUser) {
    console.log("input to function ok?", weight, height, ageOfUser, genderOfUser);
    const heightInCm = height * 100;
  
    let BMR;
  
    if (genderOfUser === "m") {
      BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser + 50;
    } else {
      BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser - 150;
    }
  
    return BMR;
  }

  function dailyCalories(exercise, bmr){
      let dailyCalories;

      if(exercise === "yes"){
        dailyCalories = bmr * 1.6;
      }else{
          dailyCalories = bmr * 1.4;
      }
      return dailyCalories;
      //console.log("daily calories:" , dailyCalories);
  }

  function dietWeeks(lose){
      
    const weeks = Math.abs(lose / 0.5);
    console.log("weeks:" , weeks);
  }

  function dietCalories(lose, daily){
    let diet;
    if(lose >= 0){
        diet = daily -500;
    }else{
        diet = daily + 500;
    }
    console.log("your daily calories should be:" , diet);

  }

  
  function bmiCalculator() {
    const weightInKg = parseInt(process.argv[2]);
    const heightInM = parseFloat(process.argv[3]);
    const age = parseInt(process.argv[4]);
    const dailyExercise = process.argv[5];
    const gender = process.argv[6];


    const idealWeightKg = 22.5 * heightInM * heightInM;
    const BMI = calculateBMI(weightInKg, heightInM);
    const BMR = calculateBMR(weightInKg, heightInM, age, gender);
    const daily = dailyCalories(dailyExercise, BMR);
    const weightToLoseKg = weightInKg - idealWeightKg;
    const weeks = dietWeeks(weightToLoseKg);
    dietCalories(weightToLoseKg, daily);

  
      
    //   console.log("WEIGHT: ", weightInKg);
    //   console.log("HEIGHT: ", heightInM);
    //   console.log("AGE: ", age);
    //   console.log("DAILY EXERCISE: ", dailyExercise);
    //   console.log("GENDER: ", gender);
    //   console.log("BMI: ", BMI);
  } 
  
  bmiCalculator();