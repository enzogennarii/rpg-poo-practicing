import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(
    name: string,
    race: Race | null = null,
    archetype: Archetype | null = null,
  ) {
    this._dexterity = getRandomInt();
    this._strength = getRandomInt();
    this._defense = getRandomInt();

    this._race = race || new Elf(name, this._dexterity);
    this._archetype = archetype || new Mage(name);

    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(),
    };

    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;

    this._name = name;
  }

  public get name(): string { return this._name; }
  private set name(name: string) { this._name = name; }

  public get race(): Race { return this._race; }
  private set race(race: Race) { this._race = race; }

  public get archetype(): Archetype { return this._archetype; }
  private set archetype(archetype: Archetype) { this._archetype = archetype; }

  public get maxLifePoints(): number { return this._maxLifePoints; }
  private set maxLifePoints(maxHp: number) { this._maxLifePoints = maxHp; }

  public get lifePoints(): number { return this._lifePoints; }
  private set lifePoints(hp: number) { this._lifePoints = hp; }

  public get strength(): number { return this._strength; }
  private set strength(strength: number) { this._strength = strength; }

  public get defense(): number { return this._defense; }
  private set defense(defense: number) { this._defense = defense; }

  public get dexterity(): number { return this._dexterity; }
  private set dexterity(dexterity: number) { this._dexterity = dexterity; }

  public get energy(): Energy {
    const energy = { ...this._energy };
    return energy;
  }

  private set energy(energy: Energy) { this._energy = energy; }

  public receiveDamage(attackPoints: number): number {
    const calcDamage = attackPoints - this._defense;
    const damage = calcDamage > 0 ? calcDamage : 1;
    this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  public attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  public levelUp(): void {
    this._maxLifePoints += getRandomInt();
    this._strength += getRandomInt();
    this._dexterity += getRandomInt();
    this._defense += getRandomInt();
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  public special(enemy: Fighter): void {
    console.log(`${this._name} usou seu especial em um inimigo
    com ${enemy.defense} de defesa`);
  }
}

export default Character;
