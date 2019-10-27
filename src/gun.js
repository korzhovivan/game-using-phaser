export let globalScene = null;

const SPEED = 500;

export const createGun = scene => {
  globalScene = scene;
};

export const shootGun = ({ fromX, fromY, toX, toY, enemy }) => {
  //draw the bullet
  const bullet = globalScene.add.circle(fromX, fromY, 5, 0xff66ff);
  const physicsGroup1 = globalScene.physics.add.group({
    angularDrag: 5,
    angularVelocity: 60,
    coliiderWorldBounds: true,
    dragX: 60,
    dragY: 60
  });

  //add bullet to physcics group
  physicsGroup1.add(bullet);

  // calculate velocity towarrds the point
  const d = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
  const velocityX = (SPEED / d) * (toX - fromX);
  const velocityY = (SPEED / d) * (toY - fromY);

  physicsGroup1.setVelocity(velocityX, velocityY);

  let kill = false;

  globalScene.physics.add.collider(enemy, physicsGroup1, () => {
    bullet.destroy();
    enemy.destroy();
    kill = true;
  });

  return kill;
};
