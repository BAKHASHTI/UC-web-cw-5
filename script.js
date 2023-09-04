alert("مرحبا بك في موقعي! انا اسمي بدر و سوف أحسب درجاتك");
let grade = prompt("ادخل درجتك");
console.log(grade);
if (grade >= 90) {
 console.log("لقد حصلت على امتياز");
} else if (grade >= 80){
    console.log("لقد حصلت على جيد جدا")
} else if (grade >= 70){
    console.log("لقد حصلت على جيد")
} else if (grade >= 60){
    console.log("لقد حصلت على درجة مقبول")
} else if (grade >= 50){
    console.log("لقد حصلت على درجة ضعيف")
} else if (grade < 50){
    console.log("راسب")
}

// جافا سكربت ليست جافا/