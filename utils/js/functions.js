import { setOffsetHeight } from '/utils/js/setOffsetHeight.js'

export function addClickClose() {

  const btnClose = document.querySelectorAll(".btnClose")

  btnClose.forEach((element, index) => {
    element.addEventListener('click', function () {

      const targetItem = document.querySelector(`#container .item_${index + 1}`)
      const targetModal = document.querySelector('.modal')
      const targetModalContent = document.querySelector('.modal-content')

      if (targetItem) {
        targetItem.remove()
      }
      else if (targetModal || targetModalContent) {
        targetModal.remove()
        targetModalContent.remove()
      }

      let itemCount = document.querySelectorAll(`#container .itemStyle`).length

      setOffsetHeight(itemCount);
    })
  });
}
