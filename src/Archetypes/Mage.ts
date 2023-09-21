import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  static instances = 0;

  constructor(name: string) {
    super(name);
    Mage.instances += 1;
  }

  override get energyType(): EnergyType { return this._energyType; }

  static override createdArchetypeInstances(): number {
    return this.instances;
  }
}

export default Mage;
