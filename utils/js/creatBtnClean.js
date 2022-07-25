import '/utils/css/btnClean.css'

export function creatBtnClean() {
  const container = document.querySelector("#container")

  let divBtnClean = document.createElement('div');
  divBtnClean.classList.add('btnClean')
  divBtnClean.innerHTML = `<p>Limpar</p> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
  <path d="M0 0h24v24H0z" fill="none"/>
  <path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"/> </svg> `;

  document.querySelector("#container").appendChild(divBtnClean);
  funcClean();
}

function funcClean() {
  const btnClean = document.querySelector(".btnClean")

  btnClean.addEventListener('click', function () {
    const itensInContainer = document.querySelectorAll(".itemStyle ")

    itensInContainer.forEach((element, index) => { element.remove() })
    document.querySelector(".btnClean ").remove()
  })
}