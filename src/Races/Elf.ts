import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;
  static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._instances += 1;
  }

  get maxLifePoints() { return this._maxLifePoints; }

  static override createdRacesInstances(): number {
    return Elf._instances;
  }
}

export default Elf;
