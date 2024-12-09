console.log("*Q11 Convert to Arrow Function with Default Parameters");
const multiply= (a=1,b=1) => console.log(a*b)
multiply(3,4)
console.log("-----------------");

console.log("*Q12 Square and Cube of a Number with Implicit Return");
const sqCu=(X=1) =>({Square:X*X,Cube:X*X*X}) 
console.log(sqCu(5))
//const sqCu=(X=1) =>
// console.log("Square:"+ X*X +", Cube: "+X*X*X);
console.log("-----------------");

console.log("*Q13 Multi-Level Array and Object Destructuring");
const people = [ { name: "Alice", 
      address: { city: "New York", 
        street: { name:"Broadway", number: 123 } 
                } },
          { name: "Bob", 
            address: { city: "Los Angeles",
                street: { name: "Sunset Boulevard",number: 456 } 
            } } 
        ]
        const result= people.map((person)=>
          `${person.name} lives in ${person.address.city} on ${person.address.street.name}`
          );
          console.log(result)  
      console.log("---------------------------");

      console.log("*Q14 L1 - Merging and Updating Nested Objects with Spread Operator")

      const profile = { name: "Charlie", age: 29, address: { city: "San Francisco", zipcode: "94101" } };
      const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };
      //Merging objects while preserving nested structure
      const spraded={
        ...profile,
        ...updates,
        address:{
          ...profile.address, ...updates.address
                },
      };
      console.log(spraded);
console.log("-----------------------------------")
