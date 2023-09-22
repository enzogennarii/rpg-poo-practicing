import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _player: Fighter;
  private _enemies: (SimpleFighter | Fighter)[];

  constructor(player: Fighter, enemies: (SimpleFighter | Fighter)[]) {
    super(player);
    this._player = player;
    this._enemies = enemies;
  }

  override fight(): number {
    while (
      this._player.lifePoints > 0 && this._enemies.some((e) => e.lifePoints > 0)
    ) {
      this._enemies.forEach((e) => this._player.attack(e));
      if (this._enemies.every((e) => e.lifePoints <= 0)) break;
      this._enemies.forEach((e) => e.attack(this._player));
    }

    return super.fight();
  }
}

export default PVE;
