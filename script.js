const boxData = [
  [
    "/Image/pic1.jpg",
    "/Image/pic2.jpg",
    "/Image/pic3.jpg"
  ],
  [
    "/Image/pic4.jpg",
    "/Image/pic5.jpg",
    "/Image/pic6.jpg"
  ],
  [
    "/Image/building1.jpg",
    "/Image/building3.jpg",
    "/Image/building4.jpg"
  ],
  [
    "/Image/blue1.jpg",
    "/Image/blue2.jpg",
    "/Image/blue3.jpg"
  ]
];

document.querySelectorAll('.m3-container').forEach((container) => {
  container.querySelectorAll('.box').forEach((box, boxIdx) => {
    let current = 0;
    const img = box.querySelector('.box-image');
    const prev = box.querySelector('.box-prev');
    const next = box.querySelector('.box-next');
    const images = boxData[boxIdx % boxData.length];
    const update = () => {
      img.src = images[current];
    };
    prev.addEventListener('click', () => {
      current = (current - 1 + images.length) % images.length;
      update();
    });
    next.addEventListener('click', () => {
      current = (current + 1) % images.length;
      update();
    });
    update();
  });
});