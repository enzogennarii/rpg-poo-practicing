/* eslint-disable sonarjs/no-duplicate-string */
import { Mage, Warrior } from './Archetypes';
import { PVP } from './Battle';
import Character from './Character';
import { Orc } from './Races';

const orcRace = new Orc('Romanos', 7);
const warriorArchetype = new Warrior('Spartano');
const Leonidas = new Character('Leonidas', orcRace, warriorArchetype);

const mageArchetype = new Mage('Strange');
const DoctorStrange = new Character('Steven Strange', orcRace, mageArchetype);

// DoctorStrange.levelUp();
// DoctorStrange.levelUp();
// DoctorStrange.levelUp();

console.log('--------------ANTES DA BATALHA---------------');
console.log('--------------Leonidas--------------');
console.log('name:', Leonidas.name);
// console.log('archetype:', Leonidas.archetype);
console.log('defense:', Leonidas.defense);
console.log('dexterity:', Leonidas.dexterity);
// console.log('energy:', Leonidas.energy);
console.log('lifePoints:', Leonidas.lifePoints);
// console.log('maxLifePoints:', Leonidas.maxLifePoints);
// console.log('race:', Leonidas.race);
console.log('strength:', Leonidas.strength);

console.log('\n--------------Doutor Estranho--------------');
console.log('name:', DoctorStrange.name);
// console.log('archetype:', DoctorStrange.archetype);
console.log('defense:', DoctorStrange.defense);
console.log('dexterity:', DoctorStrange.dexterity);
// console.log('energy:', DoctorStrange.energy);
console.log('lifePoints:', DoctorStrange.lifePoints);
// console.log('maxLifePoints:', DoctorStrange.maxLifePoints);
// console.log('race:', DoctorStrange.race);
console.log('strength:', DoctorStrange.strength);

const result = new PVP(Leonidas, DoctorStrange).fight();
const winner = result === 1
  ? 'LEONIDAS VENCEU'
  : 'DOUTOR ESTRANHO VENCEU';
console.log('\n\n', winner);

console.log('\n\n--------------DEPOIS DA BATALHA---------------');
console.log('--------------Leonidas--------------');
console.log('name:', Leonidas.name);
// console.log('archetype:', Leonidas.archetype);
console.log('defense:', Leonidas.defense);
console.log('dexterity:', Leonidas.dexterity);
// console.log('energy:', Leonidas.energy);
console.log('lifePoints:', Leonidas.lifePoints);
// console.log('maxLifePoints:', Leonidas.maxLifePoints);
// console.log('race:', Leonidas.race);
console.log('strength:', Leonidas.strength);

console.log('\n--------------Doutor Estranho--------------');
console.log('name:', DoctorStrange.name);
// console.log('archetype:', DoctorStrange.archetype);
console.log('defense:', DoctorStrange.defense);
console.log('dexterity:', DoctorStrange.dexterity);
// console.log('energy:', DoctorStrange.energy);
console.log('lifePoints:', DoctorStrange.lifePoints);
// console.log('maxLifePoints:', DoctorStrange.maxLifePoints);
// console.log('race:', DoctorStrange.race);
console.log('strength:', DoctorStrange.strength);
