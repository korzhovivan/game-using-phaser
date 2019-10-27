import Phaser from "phaser";

let physicsGroup = null;
export let globalScene = null;
let currentEnemy = null;

const SPEED = 500;

export const createGun = scene => {
  globalScene = scene;
};

export const shootGun = ({ fromX, fromY, toX, toY, enemy }) => {
  //draw the bullet
  const bullet = globalScene.add.circle(fromX, fromY, 5, 0xff66ff);
  const physicsGroup = globalScene.physics.add.group({
    angularDrag: 5,
    angularVelocity: 60,
    coliiderWorldBounds: true,
    dragX: 60,
    dragY: 60
  });
  currentEnemy = enemy;
  //add bullet to physcics group
  physicsGroup.add(bullet);

  // calculate velocity towarrds the point
  const d = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
  const velocityX = (SPEED / d) * (toX - fromX);
  const velocityY = (SPEED / d) * (toY - fromY);

  physicsGroup.setVelocity(velocityX, velocityY);

  globalScene.physics.add.collider(currentEnemy, physicsGroup, () => {
    bullet.destroy();
    enemy.destroy();
  });
};
