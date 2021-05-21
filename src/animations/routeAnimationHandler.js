import anime from 'animejs';

export function enterHandler(el, done) {
  anime({
    targets: el,
    opacity: [0, 1],
    translateY: [-10, 0],
    duration: 200,
    easing: 'linear',
    complete: done,
  });
}

export function leaveHandler(el, done) {
  anime({
    targets: el,
    opacity: [1, 0],
    translateY: [0, 10],
    duration: 200,
    easing: 'linear',
    complete: done,
  });
}
