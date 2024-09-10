// problem 01:
function calculateTax(income, expenses) {
    if((income < expenses) || (income < 0) || (expenses < 0)){
        return "Invalid Input";
    }

    const profit = income - expenses;
    const tax = (profit / 100) * 20;
    return tax;
}

// console.log(calculateTax(200, 100));

// problem 02:
function sendNotification(email) {
    let atTheRate = [];
    const checkValidity = email.split('');

    for(const letter of checkValidity){
        if(letter === "@"){
            atTheRate.push(letter);
        }
    }

    if(atTheRate.length > 1 || atTheRate.length === 0){
        return "Invalid Email";
    }

    const userData = email.split('@');
    return `${userData[0]} sent you an email from ${userData[1]}`;
}

// console.log(sendNotification('tanjimrahman@gmail.com'));

// problem 03:
function checkDigitsInName(name) {
    if(typeof name !== "string"){
        return  "Invalid Input";
    }
    
    const checkName = /\d/;
    if(checkName.test(name)){
        return true;
    }else{
        return false;
    }
}

// console.log(checkDigitsInName("tanjim1"));

// problem 04:
function calculateFinalScore(obj) {
    if(typeof obj !== 'object' || typeof obj.name !== 'string' || typeof obj.testScore !== 'number' || obj.testScore > 50 || typeof obj.schoolGrade !== 'number' || obj.schoolGrade > 30 || typeof obj.isFFamily !== "boolean"){
        return "Invalid Input";
    }

    let boolScore = 0;
    if(obj.isFFamily === true){
        boolScore = 20;
    }else if(obj.isFFamily === false){
        boolScore = 0
    }

    const totalNumber = obj.testScore + obj.schoolGrade + boolScore;
    if(totalNumber >= 80){
        return true;
    }else{
        return false;
    }
}

// console.log(calculateFinalScore({ name: "Rajib", testScore: 50,  schoolGrade: 30, isFFamily : true  }));

// problem 05:
function  waitingTime(waitingTimes  , serialNumber) {
    if(serialNumber <= waitingTimes.length || !Array.isArray(waitingTimes) || typeof serialNumber !== "number"){
        return "Invalid Input";
    }

    let totalTime = 0;
    for(const num of waitingTimes){
        totalTime = totalTime + num;
    }
    let avgTime = Math.round(totalTime / waitingTimes.length);

    const remainingPeople = (serialNumber - 1) - waitingTimes.length;
    const remainingTime = avgTime * remainingPeople;
    return remainingTime;
}

// console.log(waitingTime( [6,2] , 7));