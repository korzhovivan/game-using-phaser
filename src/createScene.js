import { createPlayer } from "./player";
import { setupListeners } from "./inputManager";

export default function() {
  createPlayer(this);
  setupListeners(this);
}
