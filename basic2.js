
let person = {

     firstName : "test",

     lastName : "automation",
    
      age : 20 ,

      fullName : function()
      { 
          console.log(this.firstName+this.lastName) 
     }
}

person.gender = "male "

console.log(person.firstName)
console.log(person['lastName'])
console.log(person)
console.log(person.fullName())

for (let key in person)
{
    console.log(key)
}