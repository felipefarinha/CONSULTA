import '/utils/css/style.css'
import '/utils/css/btnClose.css'
import { loading } from '/utils/js/loading.js'
import { creatChart } from '/utils/js/chart.js'
import { creatModal } from '/utils/js/modal.js'
import { addClickClose } from '/utils/js/functions.js'
import { creatBtnClean } from '/utils/js/creatBtnClean.js'
import { addAnimation } from '/utils/js/addAnimation.js'
import { setOffsetHeight } from '/utils/js/setOffsetHeight.js'
import { btnMakeGraphic, btnInsertChart, btnClose } from '/utils/js/buttons.js'

const num = 3;
let element = []
let result = {}
let search_value = 0

const container = document.getElementById('container')

function renderBox(numBox) {
  //function makeBox
  for (let index = 1; index <= numBox; index++) {
    element.push(`
              <div class="itemStyle item_${index}">
                ${btnClose}
                <h1>Título ${index}</h1>
                <p>Paragrafo ${index} </p>
                <canvas id="Chart" class="Chart_${index}"></canvas>
                <div class="wrap_button">
                  ${btnMakeGraphic}
                  ${btnInsertChart}
                </div>
              </div>`);
  }

  return element.join(' ')
}

function renderPage() {
  result = {
    elementbgVideo: document.querySelector('#bgImg').innerHTML = `
              <img src="https://images6.alphacoders.com/481/481285.jpg" alt="">
              `,

    elementHeader: document.querySelector('#header').innerHTML = `
              <div id="title">
                <!-- <h1><span class="boujee-text">&lt;Projetos&gt</span></h1> -->
                <h1><span class="boujee-text">{ Consulta }</span></h1>
              </div>

              <div class="search-wrapper">
                  <input id="submit" class="search-input" type="text" placeholder="Search">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" 
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search" viewBox="0 0 24 24">
                    <!-- <defs></defs> -->
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.35-4.35"></path>
                  </svg>
                </div> <!-- end search-wrapper -->
              `,

    elementContainer: document.querySelector('#container').innerHTML = renderBox(num),

    // elementTest: document.querySelector('#teste').innerHTML = ``,

    elementFooter: document.querySelector('#footer').innerHTML = `
              <div class="divVite">
                <h1>Vite!
                <sup><a href="https://vitejs.dev/guide/features.html" target="_blank"> Doc </a></sup>
                </h1>

                <div class="wrap-code">
                  <code>npm create vite@latest</code>
                  <code>cd pasta</code>
                  <code>npm install</code>
                  <code>npm run dev</code>
              </div> <!-- end divVite -->

                <p>texto texto</p>`
  }
  setOffsetHeight(num);
  addAnimation(num);
  addClickClose();
  creatModal();
  creatChart();

  return result
}
renderPage()

//==============================================================================
// loading da pesquisa
document.addEventListener("keypress", function (e) {
  search_value = Number(document.querySelector(".search-input").value);

  if (e.key === 'Enter' && search_value !== ' ') {

    container.innerHTML = ` <div class="wrap-loading">${loading}</div> `

    setTimeout(function () {
      element = [] //zera o array

      renderBox(search_value)
      container.innerHTML = `${element.join(' ')}`

      addAnimation(search_value)
      setOffsetHeight(search_value);
      creatBtnClean();
      addClickClose();
      creatModal();
      creatChart();

    }, 1000 * 1);
  }
});
//==============================================================================
