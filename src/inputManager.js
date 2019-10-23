import Phaser from "phaser";

class InputManager {
  constructor() {
    this.keys = [
      { name: "W", value: Phaser.Input.KeyBoard.KeyCodes.W },
      { name: "A", value: Phaser.Input.KeyBoard.KeyCodes.A },
      { name: "S", value: Phaser.Input.KeyBoard.KeyCodes.S },
      { name: "D", value: Phaser.Input.KeyBoard.KeyCodes.D }
    ];
  }

  setupListeners(game) {
    this.bindings = {};
    this.keys.forEach(({ name, value }) => {
      this.bindings[name] = game.input.keyBoard.addKey(value);
    });
  }

  handleUpdate() {}
}
const InputManagerInstance = new InputManager();

export const setup = game => {
  InputManagerInstance.setupListeners(game);
};
export const handleUpdate = () => {
  InputManagerInstance.handleUpdate();
};
