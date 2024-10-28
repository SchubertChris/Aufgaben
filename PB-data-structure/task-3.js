// Erstellen der Spielercharaktere
const ryu = {
  name: "Ryu",
  health: 100,
  attackSkill: "Schlag",
  attackDamage: 16,
  attack(target) {
      if (target.health > 0) {
          target.health -= this.attackDamage;
          if (target.health < 0) target.health = 0;
          console.log(`${this.name} griff ${target.name} mit einem ${this.attackSkill} an und fügte ${this.attackDamage} Schaden zu. ${target.name}s Gesundheit beträgt jetzt ${target.health}.`);
          
          // Überprüfung, ob der angegriffene Charakter noch Gesundheit hat
          if (target.health === 0) {
              console.log(`${target.name} hat keine Gesundheit mehr und ist besiegt.`);
          }
      } else {
          console.log(`${target.name} ist bereits besiegt.`);
      }
  }
};

const ken = {
  name: "Ken",
  health: 100,
  attackSkill: "fliegenden Tritt",
  attackDamage: 24,
  attack(target) {
      if (target.health > 0) {
          target.health -= this.attackDamage;
          if (target.health < 0) target.health = 0;
          console.log(`${this.name} griff ${target.name} mit einem ${this.attackSkill} an und fügte ${this.attackDamage} Schaden zu. ${target.name}s Gesundheit beträgt jetzt ${target.health}.`);
          
          if (target.health === 0) {
              console.log(`${target.name} hat keine Gesundheit mehr und ist besiegt.`);
          }
      } else {
          console.log(`${target.name} ist bereits besiegt.`);
      }
  }
};

// Beispielangriffe
ryu.attack(ken); // Ryu greift Ken an
ken.attack(ryu); // Ken greift Ryu an
