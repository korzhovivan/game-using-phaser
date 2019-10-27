let physicsGroup = null;
let globalScene = null;

const SPEED = 500;

export const createGun = scene => {
  globalScene = scene;
};

export const shootGun = ({ fromX, fromY, toX, toY }) => {
  const physicsGroup = globalScene.physics.add.group({
    angularDrag: 5,
    angularVelocity: 60,
    dragX: 60,
    dragY: 60
  });

  const bullet = globalScene.add.circle(fromX, fromY, 5, 0xff66ff);
  physicsGroup.add(bullet);

  const d = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
  const velocityX = (SPEED / d) * (toX - fromX);
  const velocityY = (SPEED / d) * (toY - fromY);

  physicsGroup.setVelocity(velocityX, velocityY);
};

//1.25 minute
