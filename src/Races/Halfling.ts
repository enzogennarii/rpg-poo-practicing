import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints = 60;
  static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instances += 1;
  }

  get maxLifePoints() { return this._maxLifePoints; }

  static override createdRacesInstances(): number {
    return Halfling._instances;
  }
}

export default Halfling;
