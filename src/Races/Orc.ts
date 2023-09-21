import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 74;
  static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._instances += 1;
  }

  get maxLifePoints() { return this._maxLifePoints; }

  static override createdRacesInstances(): number {
    return Orc._instances;
  }
}

export default Orc;
