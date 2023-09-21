import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints = 80;
  static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._instances += 1;
  }

  get maxLifePoints() { return this._maxLifePoints; }

  static override createdRacesInstances(): number {
    return Dwarf._instances;
  }
}

export default Dwarf;
