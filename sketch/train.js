let dump;

function setup() {
  createCanvas(640, 480);
  let options = {
    inputs: 34,
    outputs: 2,
    task: 'classification',
    debug: true
  }
  dump = ml5.neuralNetwork(options);
  dump.loadData('singlenew2.json', dataReady);
}

// function setup() {
//   createCanvas(640, 480);
//   let options = {
//     inputs: 34,
//     outputs: 1, // Change the number of output neurons to 1
//     task: 'namaste', // Change 'your_task_name' to the desired task name
//     debug: true
//   }
//   dump = ml5.neuralNetwork(options);
//   dump.loadData('namaste.json', dataReady);
// }



function dataReady() {
  dump.normalizeData();
  dump.train({epochs: 50}, finished); 
}

function finished() {
  console.log('model trained');
  dump.save();
}

