import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  static instances = 0;

  constructor(name: string) {
    super(name);
    Warrior.instances += 1;
  }

  override get energyType(): EnergyType { return this._energyType; }

  static override createdArchetypeInstances(): number {
    return this.instances;
  }
}

export default Warrior;
