age = 12 
myname = "Pavlo"
isStudent = false
myString = "Немає"
myNumber = 6 + 10
myNull = null
console.log("Вік: " + age)
console.log("Ім'я: " + myname)
console.log("Студент: "+ isStudent)
console.log("Число:" + myString)
console.log("Null: " + myNull) 
userName = prompt("Як вас звати ?")
console.log("Привіт "+ userName)
userConfirm = confirm("Підтвердити дію ?")
if (userConfirm == true){
    console.log("Дякую за підтвердження!")
}
else{
    console.log("Дію відмінено!")
}

function unsafe(){
alert("Дія не безпечна")
userConfirm = confirm("Підтвердити дію ?")
if (userConfirm == true){
    console.log("Дякую за підтвердження!")
}
else{
    console.log("Дію відмінено!")
}
}

unsafe()
