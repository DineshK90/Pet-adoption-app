const pets = [];

function addPets(){
  const name = prompt("What is the pet's name?");
  const type = prompt("What type of animal is it?");
  const age = parseInt(prompt("How old is the pet?"));
  const pet = {
    name: name,
    type: type,
    age: age,
  };
  pets.push(pet)
  alert('Pet added!')
}


function viewPets(){
  let petList = "List of pets :\n";
  for(const pet of pets){
    petList += `The ${pet.type}s name is ${pet.name}. It is ${pet.age} years old. \n`
  }
  alert(petList)
}