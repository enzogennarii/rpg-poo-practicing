import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  static instances = 0;

  constructor(name: string) {
    super(name);
    Ranger.instances += 1;
  }

  override get energyType(): EnergyType { return this._energyType; }

  static override createdArchetypeInstances(): number {
    return this.instances;
  }
}

export default Ranger;
