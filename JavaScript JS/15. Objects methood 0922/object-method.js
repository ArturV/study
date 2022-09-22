const person = {
  age: 25,
  salary: 1_000,
};
/*
const persons = [
  age: parseInt(20+Math.random() *10),
  salary: parseInt(600+Math.random()*2_000),  // 600..2000 alga $
]
*/
console.log(person.salary);
console.log(persons);

const getPerson = () =>{
  const randomNumber= Math.random();
  const age=parseInt(20+randomNumber *10);
  const salary= parseInt(600 + randomNumber *2_000);
 
  return  {
    age,
    salary,
  };
};

console.log(getPerson());

const getPersonsSalary = () => {
  const persons [];

  for (let i=0; i<15; i++){
    const person = getPerson();

    person.push(person);
  }
  const totalAge = person.reduce((previousValue, currenValue)=> previousValue + currenValue.age,0) ;
  const totalSalary = person.reduce((previousValue, currenValue)=> previousValue + currenValue.salary,0);

  return totalSalary/totalAge;
};

