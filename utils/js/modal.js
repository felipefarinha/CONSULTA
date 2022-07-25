import '/utils/css/modal.css'
import { btnClose } from '/utils/js/buttons.js'
import { addClickClose } from '/utils/js/functions.js'



export function creatModal() {
  let modal = document.querySelectorAll(".startModal")

  modal.forEach((element, index) => {
    element.addEventListener('click', function () {
      creatBgModal()

      let divModalContent = document.createElement('div');
      divModalContent.classList.add('modal-content')
      divModalContent.innerHTML = `${btnClose}
                                  <p>CreateElement example </p>
                                  `;
      document.querySelector(".modal").appendChild(divModalContent);

      addClickClose();
    })
  })
}
function creatBgModal() {
  let div = document.createElement('div');
  div.classList.add('modal')
  // div.innerHTML = `<p>CreateElement example</p>`;
  document.body.appendChild(div);
  div.style.display = 'flex'
}