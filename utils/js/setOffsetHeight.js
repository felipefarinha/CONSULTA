export let setOffsetHeight = (search_value) => {
  let bgContent = document.getElementById('background-content');

  if (search_value <= 3) {
    let headerOffset = document.getElementsByTagName('header')[0].offsetHeight
    let footerOffset = document.getElementsByTagName('footer')[0].offsetHeight
    let containerOffset = document.getElementById('container').offsetHeight

    // let bgContentHeight = containerOffset - (footerOffset + headerOffset)
    let bgContentHeight = headerOffset

    bgContent.style.height = bgContentHeight + 'px'
  }
  else if (search_value >= 4) {
    let bgContentHeight = document.getElementsByTagName('section')[0].childNodes[1].offsetHeight
    bgContent.style.height = bgContentHeight + 'px'
  }
  else {
    console.log('fora height ' + search_value)
  }
}