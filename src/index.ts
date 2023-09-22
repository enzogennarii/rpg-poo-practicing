/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Mage, Necromancer, Ranger, Warrior } from './Archetypes';
import { PVP } from './Battle';
import Character from './Character';
import { Dwarf, Elf, Halfling, Orc } from './Races';
import getRandomInt from './utils';

const dwarfRace = new Dwarf('Dwarf', getRandomInt());
const elfRace = new Elf('Elf', getRandomInt());
// const halflingRace = new Halfling('Halfling', getRandomInt());
// const orcRace = new Orc('Orc', getRandomInt());

const mageArchetype = new Mage('Mage');
const necromancerArchetype = new Necromancer('Necromancer');
// const rangerArchetype = new Ranger('Ranger');
// const warriorArchetype = new Warrior('Warrior');

const Player1 = new Character('Player1', dwarfRace, mageArchetype);
const Player2 = new Character('Player2', elfRace, necromancerArchetype);

// Player1.levelUp();
// Player1.levelUp();

// Player2.levelUp();
// Player2.levelUp();

console.log('-------------- ANTES DA BATALHA ---------------');
console.log('------------------ JOGADOR 1 ------------------');
console.log('name:', Player1.name);
console.log('lifePoints:', Player1.lifePoints);
console.log('strength:', Player1.strength);
console.log('defense:', Player1.defense);

console.log('------------------ JOGADOR 2 ------------------');
console.log('name:', Player2.name);
console.log('lifePoints:', Player2.lifePoints);
console.log('strength:', Player2.strength);
console.log('defense:', Player2.defense);

const result = new PVP(Player1, Player2).fight();
const winner = result === 1
  ? 'PLAYER 1 VENCEU'
  : 'PLAYER 2 VENCEU';
console.log('\n\n', winner);

console.log('\n\n-------------- DEPOIS DA BATALHA --------------');
console.log('------------------ JOGADOR 1 ------------------');
console.log('name:', Player1.name);
console.log('lifePoints:', Player1.lifePoints);
console.log('strength:', Player1.strength);
console.log('defense:', Player1.defense);

console.log('------------------ JOGADOR 2 ------------------');
console.log('name:', Player2.name);
console.log('lifePoints:', Player2.lifePoints);
console.log('strength:', Player2.strength);
console.log('defense:', Player2.defense);
