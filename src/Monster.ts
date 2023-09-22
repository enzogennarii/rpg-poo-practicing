import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  protected _lifePoints = 85;
  private _strength = 63;

  public get lifePoints(): number { return this._lifePoints; }
  private set lifePoints(hp: number) { this._lifePoints = hp; }

  public get strength(): number { return this._strength; }
  private set strength(strength: number) { this._strength = strength; }

  public receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;
