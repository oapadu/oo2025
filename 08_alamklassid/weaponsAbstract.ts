abstract class Weapon {
  name: string;
  damage: number;

  constructor(name: string, damage: number) {
    this.name = name;
    this.damage = damage;
  }

  abstract use(): void;
}

class Sword extends Weapon {
  constructor(name: string, damage: number) {
    super(name, damage);
  }

  use(): void {
    console.log(`${this.name} lõikab vaenlast! Kahju: ${this.damage}`);
  }
}

class LaserGun extends Weapon {
  range: number;

  constructor(name: string, damage: number, range: number) {
    super(name, damage);
    this.range = range;
  }

  use(): void {
    console.log(`${this.name} tulistab laserkiirega! Kahju: ${this.damage}, Ulatus: ${this.range}m`);
  }
}

class Pistol extends Weapon {
  accuracy: number;

  constructor(name: string, damage: number, accuracy: number) {
    super(name, damage);
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
  console.log(`- ${weapon.name} ${weapon.damage}`);
  weapon.use();
});
