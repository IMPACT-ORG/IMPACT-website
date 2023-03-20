gsap.registerPlugin(ScrollTrigger);

var startCount = {var: 0};

gsap.to(startCount, {
  var: 1, duration: 1, ease:"none",
  onUpdate: changeNumber,
  scrollTrigger: {
    trigger: "#number",
  },
})

function changeNumber() {
  number.innerHTML = (startCount.var).toFixed();
}

var startCount2 = {var: 0};

gsap.to(startCount2, {
  var: 13, duration: 1, ease:"none",
  onUpdate: changeNumber2,
  scrollTrigger: {
    trigger: "#number2",
  },
})

function changeNumber2() {
  number2.innerHTML = (startCount2.var).toFixed();
}

var startCount3 = {var: 0};

gsap.to(startCount3, {
  var: 20, duration: 1, ease:"none",
  onUpdate: changeNumber3,
  scrollTrigger: {
    trigger: "#number3",
  },
})

function changeNumber3() {
  number3.innerHTML = (startCount3.var).toFixed();
}