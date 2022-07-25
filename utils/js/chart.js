import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const color = '#000'
const backgroundColor = [
  'rgba(153, 102, 255, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(54, 162, 235, 1)'
]
const borderColor = 'rgba(000, 000, 000, 0.2)'
const borderWidth = 3
const fontConfig = {
  family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
  size: 16,
  style: 'normal',
  weight: 'bold',
  lineHeight: 1.4
}


//preciso fazer: const myChart = new Chart(ctx, {type: data: options: plugins:})
// let objChart = {}

export function creatChart() {
  console.log('funfando chart')

  //=============================
  //   const ctx = document.querySelectorAll("#myChart")

  //   ctx.forEach((element, index) => {
  //     // element.addEventListener('click', function () {
  //     document.querySelector(`#container .item_${index + 1}`).remove()

  //     obj = document.querySelectorAll(`#container .itemStyle`).length

  //     // })
  //   });
  // }
  //=============================

  // const ctx = document.getElementById('Chart').getContext('2d');
  const ctx = document.getElementsByClassName('Chart_1')[0].getContext('2d');
  // console.log(ctx)

  const labels = ['Jan']
  const data = [{ x: 'Jan', net: 100, cogs: 50 }];
  const datasets = [{}];


  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        label: 'Net sales',
        backgroundColor: backgroundColor[0],
        borderColor: borderColor,
        borderWidth: borderWidth,
        parsing: {
          yAxisKey: 'net'
        }
      }, {
        label: 'Cost of goods sold',
        data: data,
        backgroundColor: backgroundColor[1],
        borderColor: borderColor,
        borderWidth: borderWidth,
        parsing: {
          yAxisKey: 'cogs'
        }
      }],
    },
    options: {
      scales: {
        y: {
          type: 'linear',
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: false,
          legend: false,
          labels: {
            // This more specific font property overrides the global property
            font: fontConfig
          }
        }
      }
    }
  });
}
