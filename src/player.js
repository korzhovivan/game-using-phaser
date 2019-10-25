let player = null;
let physicsGroup = null;

const velocity = {
  x: 0,
  y: 0
};

export const createPlayer = scene => {
  physicsGroup = scene.physics.add.group({
    angularDrag: 5,
    angularVelocity: 300,
    bounceX: 0,
    bounceY: 0,
    collideWorldBounds: true,
    dragX: 300,
    dragY: 300
  });
  player = scene.add.circle(200, 200, 10, 0x6666ff);
  physicsGroup.add(player);
};

export const updatePlayerPosition = (velocityX, velocityY) => {
  velocity.x = velocity.x + velocityX;
  velocity.y = velocity.y + velocityY;

  physicsGroup.setVelocity(velocity.x, velocity.y);
};
