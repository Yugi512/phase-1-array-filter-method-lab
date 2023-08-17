findMatching = (driver,nameWeAreLooking4) => {
  return driver.filter((name) => {
    return name.toUpperCase() === nameWeAreLooking4.toUpperCase()
  }) 
}

fuzzyMatch = (driver,nameWeAreLooking4) => {
  return driver.filter((name) => {
    return name[0,1] === nameWeAreLooking4[0,1]
  });
}

matchName = (driver, nameWeAreLooking4) => {
  return driver.filter((obj) => {
    return obj.name === nameWeAreLooking4
  });
}

















































































// function findMatching(driver,nameWeAreLookingFor){
//   return driver.filter((name) => {
//     return name.toLowerCase() === nameWeAreLookingFor.toLowerCase(); 
//   });

// }
// function fuzzyMatch(driver,names){
//   return driver.filter((name) => {
//     return name[0] === names[0]; 
//   });

// }

// function matchName(driver,nameWeAreLookingFor){
//   return driver.filter((object) => {
//     return object.name === nameWeAreLookingFor; 
//   });

// }
