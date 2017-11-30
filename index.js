/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

function transitionPage(el, groupOut, groupIn) {
  // debugger;
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/

function delayedFadeOut(div, range, min=0) {
  setTimeout(() => {
      fadeOut(div)
    }, Math.random() * range + min)
}


function delayedFadeIn(div, range, min=0) {
  setTimeout(() => {
    fadeIn(div)
  }, Math.random() * range + min)
}

function fadeAllOut(el, group, min=0) {
  group.forEach(div => {
    if (div !== el)
      delayedFadeOut(div, SHORTRANGE)
  })
  delayedFadeOut(el, LONGRANGE)
}

function fadeAllIn(group) {
  group.forEach(div => {
    delayedFadeIn(div, SHORTRANGE)
  })
}
