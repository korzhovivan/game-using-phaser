import { createGun, shootGun } from "./gun";

let player = null;
let physicsGroup = null;

const velocity = {
  x: 0,
  y: 0
};

export const createPlayer = scene => {
  physicsGroup = scene.physics.add.group({
    angularDrag: 5,
    angularVelocity: 60,

    collideWorldBounds: true,
    dragX: 60,
    dragY: 60
  });
  player = scene.add.circle(200, 200, 10, 0x6666ff);
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
  shootGun({ fromX: playerX, fromY: playerY, toX: x, toY: y });
};
