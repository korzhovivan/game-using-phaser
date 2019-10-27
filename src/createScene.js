import { createPlayer } from "./player";
import { setupListeners } from "./inputManager";
import { createEnemy } from "./enemy";

export default function() {
  const enemy = createEnemy(this);
  setupListeners(this);
  createPlayer({ scene: this, enemy: enemy });
}
