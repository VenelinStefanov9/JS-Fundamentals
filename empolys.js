function solve(arr) {
  const empl = ;

  arr.forEach((name) => {
    empl[name] = name.length;
  });
  for (const name of empl) {
    console.log(name);
    //console.log(`Name: ${name} --    Personal Number: ${empl[name]}`);
  }
}

solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
