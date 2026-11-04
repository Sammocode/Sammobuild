let sound
//add a global slider 
let slider 

async function setup() {
  // set the size of the canvas to the available space 
  createCanvas(windowWidth, windowHeight);

  // use the p5 DOM to create another paragraph
  let p = createP('added this paragraph html with p5')
  p.center()
  p.style('background-color', 'red')

sound = await loadSound('GTA III.mp3')
  sound.play()
  sound.loop()

  slider = createSlider(0, 10, 1, 0.5)
  slider.position(20, 40)
  slider.changed(newSliderValue)
}


function draw() {
  background(220);

  text('this is p5 text', 40, 40)
}


// under the draw }

function newSliderValue(){
  print(slider.value())
  sound.rate(slider.value())
}


