export function addAnimation(num) {

  for (let index = 0; index < num; index++) {
    let container = document.getElementById('container');

    container.children[index].style.cssText = `
              animation: animate 03s ${(index / 7) + 0.5}s both;
              animation-duration: .7s;
              `
  };
}