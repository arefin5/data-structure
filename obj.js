const person={
    name:"arefin talukder",
    email:"arefintalukder5@gmail.com",
    "2a@": "its test purpose spacial charecter key "
}
console.log(person["email"])
console.log(person.name)
console.log(person["name"])
console.log(person["2a@"])
for(let key in person){
    console.log(key)
    console.log(person[key])

}
// searching in key or index  O(1)
console.log("email" in person)
