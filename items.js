function solve(input) {
  const hero = [];

  input.forEach((line) => {
    const token = line.split(" / ");
    const heroName = token[0];
    const heroLevel = token[1];
    const heroItems = token[2].split(" , ");

    hero.push({ heroName, heroLevel, heroItems });
  });
  hero.sort((a, b) => a.heroLevel - b.heroLevel);

  hero.forEach((hero) => {
    console.log(
      `Hero: ${hero.heroName}\nlevel => ${hero.heroLevel}\nitems => ${hero.heroItems}`
    );
  });
}

solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

//Hero: {heroName}
//level => {heroLevel}
//Items => {item1}, {item2}, {item3}
