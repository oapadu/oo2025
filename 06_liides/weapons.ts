interface Weapon {
  name: string;
  damage: number;
  use(): void;
}

class Sword implements Weapon {
  name: string;
  damage: number;

  constructor(name: string, damage: number) {
    this.name = name;
    this.damage = damage;
  }

  use(): void {
    console.log(`${this.name} lõikab vaenlast! Kahju: ${this.damage}`);
  }
}

class LaserGun implements Weapon {
  name: string;
  damage: number;
  range: number;

  constructor(name: string, damage: number, range: number) {
    this.name = name;
    this.damage = damage;
    this.range = range;
  }

  use(): void {
    console.log(`${this.name} tulistab laserkiirega! Kahju: ${this.damage}, Ulatus: ${this.range}m`);
  }
}

class Pistol implements Weapon {
  name: string;
  damage: number;
  accuracy: number;

  constructor(name: string, damage: number, accuracy: number) {
    this.name = name;
    this.damage = damage;
    this.accuracy = accuracy;
  }

  use(): void {
    console.log(`${this.name} laseb! Kahju: ${this.damage}, Täpsus: ${this.accuracy}%`);
  }
}

const inventory: Weapon[] = [
  new Sword("KV Multitool", 25),
  new LaserGun("Punane Laser", 40, 300),
  new Pistol("Glock", 15, 150),
  new Pistol("Revolver", 40, 100),
];

console.log("Mängija relvad:");
inventory.forEach(weapon => {
  console.log(`- ${weapon.name} ${weapon.damage} `);
  weapon.use();
});
