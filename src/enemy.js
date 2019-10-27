let enemy = null;
let physicsGroup = null;

export const createEnemy = scene => {
  physicsGroup = scene.physics.add.group({
    angularDrag: 5,
    collideWorldBounds: true,
    dragX: 6000,
    dragY: 6000
  });
  enemy = scene.add.rectangle(
    getRndInteger(10, 490),
    getRndInteger(10, 390),
    20,
    20,
    0xf31515
  );

  physicsGroup.add(enemy);

  return enemy;
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
