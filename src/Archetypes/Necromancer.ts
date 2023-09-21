import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  static instances = 0;

  constructor(name: string) {
    super(name);
    Necromancer.instances += 1;
  }

  override get energyType(): EnergyType { return this._energyType; }

  static override createdArchetypeInstances(): number {
    return this.instances;
  }
}

export default Necromancer;
