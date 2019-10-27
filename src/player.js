import { createGun, shootGun } from "./gun";
import { createEnemy } from "./enemy";
import { globalScene } from "./gun";

let player = null;
let physicsGroup = null;
let globalEnemy = null;

const velocity = {
  x: 0,
  y: 0
};

export const createPlayer = ({ scene, enemy }) => {
  globalEnemy = enemy;
  physicsGroup = scene.physics.add.group({
    angularDrag: 0,
    collideWorldBounds: true,
    dragX: 60,
    dragY: 60
  });
  player = scene.add.circle(200, 200, 10, 0xf0a2);
  physicsGroup.add(player);

  createGun(scene);
};

export const updatePlayerPosition = (velocityX, velocityY) => {
  velocity.x = velocity.x + velocityX;
  velocity.y = velocity.y + velocityY;

  physicsGroup.setVelocity(velocity.x, velocity.y);
};

export const shoot = ({ x, y }) => {
  const { x: playerX, y: playerY } = player;
  let kill = shootGun({
    fromX: playerX,
    fromY: playerY,
    toX: x,
    toY: y,
    enemy: globalEnemy
  });

  globalEnemy = createEnemy(globalScene);
};
