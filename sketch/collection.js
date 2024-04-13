// // let video;
// // let poseNet;
// // let pose;
// // let skeleton;

// // let dump;

// // let state = 'waiting';
// // let targetLabel;

// // // ... other code ...

// // function keyPressed() {
// //   if (key === "s" ) {
// //     dump.saveData();
// //   } else {
// //     targetLabel = key;  // Now a single value
// //     console.log(targetLabel);
// //     state = 'collecting';
// //     console.log(state);
// //     setTimeout(function () {
// //       console.log('not collecting');
// //       state = 'waiting';
// //     }, 10000);
// //   }
// // }

// // function setup() {
// //   createCanvas(720, 640);
// //   video = createCapture(VIDEO);
// //   video.hide();
// //   poseNet = ml5.poseNet(video, modelLoaded);
// //   poseNet.on('pose', gotPoses);

// //   let options = {
// //     inputs: 34,
// //     outputs: 1,  // Single output
// //     task: 'classification',
// //     debug: true
// //   };
// //   dump = ml5.neuralNetwork(options);
// // }

// // function gotPoses(poses) {

// //   if (poses.length > 0 ) {
// //     pose = poses[0].pose;
// //     skeleton = poses[0].skeleton;
// //     if (state == 'collecting') {
// //       console.log(poses);
// //       let inputs = [];
// //       for (let i = 0; i < pose.keypoints.length; i++) {
// //         let x = pose.keypoints[i].position.x;
// //         let y = pose.keypoints[i].position.y;
// //         inputs.push(x);
// //         inputs.push(y);
// //       }
// //       let target = [targetLabel]; // Single value target
// //       dump.addData(inputs, target);
// //     }
// //   }
// // }

// // // ... other code ...

// // // function keyPressed() {
// // //   if (key === "s" ) {
// // //       dump.saveData();
// // //   } else {
// // //     targetLabel = key;
// // //       console.log(targetLabel);
// // //       state = 'collecting';
// // //       console.log(state);
// // //       setTimeout(function () {
// // //           console.log('not collecting');
// // //           state = 'waiting';
// // //       }, 10000);
// // //   }
// // // }

// // // function setup() {
// // //     createCanvas(720, 640);
// // //     video = createCapture(VIDEO);
// // //     video.hide();
// // //     poseNet = ml5.poseNet(video, modelLoaded);
// // //     poseNet.on('pose', gotPoses);
  
// // //     let options = {
// // //       inputs: 34,
// // //       outputs: 4,
// // //       task: 'classification',
// // //       debug: true
// // //     };
// // //     dump = ml5.neuralNetwork(options);
// // // }

// // //   function gotPoses(poses) {
    
// // //     if (poses.length > 0 ) {
// // //       pose = poses[0].pose;
// // //       skeleton = poses[0].skeleton;
// // //       if (state == 'collecting') {
// // //         console.log(poses);
// // //         let inputs = [];
// // //         for (let i = 0; i < pose.keypoints.length; i++) {
// // //           let x = pose.keypoints[i].position.x;
// // //           let y = pose.keypoints[i].position.y;
// // //           inputs.push(x);
// // //           inputs.push(y);
// // //         }
// // //         let target = [targetLabel];
// // //         dump.addData(inputs, target);
// // //       }
// // //   }
// // // }

// // function modelLoaded() {
// //   console.log("poseNet ready");
// // }

// // function draw() {
// //   translate(video.width, 0);
// //   scale(-1, 1);
// //   image(video, 0, 0, video.width,  video.height);
// //   if (pose) {
// //     for (let i = 0; i < skeleton.length; i++) {
// //         let a = skeleton[i][0];
// //         let b = skeleton[i][1];
// //         strokeWeight(2);
// //         stroke(0);
// //         line(a.position.x, a.position.y, b.position.x, b.position.y);
// //       }
// //     for (let i = 0; i < pose.keypoints.length; i++) {
// //       let x = pose.keypoints[i].position.x;
// //       let y = pose.keypoints[i].position.y;
// //       fill(0);
// //       stroke(255);
// //       ellipse(x, y, 16, 16);
// //     }
// //   }
// // }

// let video;
// let poseNet;
// let pose;
// let skeleton;

// let dump;

// let state = 'waiting';
// let targetLabel;

// function keyPressed() {
//   if (key === "s" ) {
//     dump.saveData();
//   } else {
//     targetLabel = key;  // Now a single value
//     console.log(targetLabel);
//     state = 'collecting';
//     console.log(state);
//     setTimeout(function () {
//       console.log('not collecting');
//       state = 'waiting';
//     }, 10000);
//   }
// }

// function setup() {
//   createCanvas(720, 640);
//   video = createCapture(VIDEO);
//   video.hide();
//   poseNet = ml5.poseNet(video, modelLoaded);
//   poseNet.on('pose', gotPoses);

//   let options = {
//     inputs: 34,
//     outputs: 2,  // Change to 2 for binary classification
//     task: 'classification',
//     debug: true
//   };
//   dump = ml5.neuralNetwork(options);
// }

// function gotPoses(poses) {

//   if (poses.length > 0 ) {
//     pose = poses[0].pose;
//     skeleton = poses[0].skeleton;
//     if (state == 'collecting') {
//       console.log(poses);
//       let inputs = [];
//       for (let i = 0; i < pose.keypoints.length; i++) {
//         let x = pose.keypoints[i].position.x;
//         let y = pose.keypoints[i].position.y;
//         inputs.push(x);
//         inputs.push(y);
//       }
//       let target = [targetLabel]
//       dump.addData(inputs, target);
//     }
//   }
// }

// function modelLoaded() {
//   console.log("poseNet ready");
// }

// function draw() {
//   translate(video.width, 0);
//   scale(-1, 1);
//   image(video, 0, 0, video.width,  video.height);
//   if (pose) {
//     for (let i = 0; i < skeleton.length; i++) {
//         let a = skeleton[i][0];
//         let b = skeleton[i][1];
//         strokeWeight(2);
//         stroke(0);
//         line(a.position.x, a.position.y, b.position.x, b.position.y);
//       }
//     for (let i = 0; i < pose.keypoints.length; i++) {
//       let x = pose.keypoints[i].position.x;
//       let y = pose.keypoints[i].position.y;
//       fill(0);
//       stroke(255);
//       ellipse(x, y, 16, 16);
//     }
//   }
// }

// // let video;
// // let poseNet;
// // let pose;
// // let skeleton;

// // let dump;

// // let state = 'waiting';
// // let targetLabel;

// // // Confidence threshold for filtering low-confidence poses
// // const confidenceThreshold = 0.5;

// // // Number of frames for temporal smoothing
// // const smoothingFrames = 5;
// // let smoothedPoses = [];

// // function keyPressed() {
// //   if (key === "s" ) {
// //     dump.saveData();
// //   } else {
// //     targetLabel = key;  // Now a single value
// //     console.log(targetLabel);
// //     state = 'collecting';
// //     console.log(state);
// //     setTimeout(function () {
// //       console.log('not collecting');
// //       state = 'waiting';
// //     }, 10000);
// //   }
// // }

// // function setup() {
// //   createCanvas(720, 640);
// //   video = createCapture(VIDEO);
// //   video.hide();
// //   poseNet = ml5.poseNet(video, modelLoaded);
// //   poseNet.on('pose', gotPoses);

// //   let options = {
// //     inputs: 34,
// //     outputs: 2,  // Change to 2 for binary classification
// //     task: 'classification',
// //     debug: true
// //   };
// //   dump = ml5.neuralNetwork(options);
// // }

// // function gotPoses(poses) {
// //   if (poses.length > 0 ) {
// //     pose = poses[0].pose;
// //     skeleton = poses[0].skeleton;

// //     // Filter low-confidence poses
// //     if (pose.score >= confidenceThreshold) {
// //       // Temporal smoothing
// //       smoothedPoses.push(pose);
// //       if (smoothedPoses.length > smoothingFrames) {
// //         smoothedPoses.shift(); // Remove oldest pose
// //       }
// //       pose = averagePoses(smoothedPoses);

// //       if (state == 'collecting') {
// //         console.log(pose);
// //         let inputs = [];
// //         for (let i = 0; i < pose.keypoints.length; i++) {
// //           let x = pose.keypoints[i].position.x;
// //           let y = pose.keypoints[i].position.y;
// //           inputs.push(x);
// //           inputs.push(y);
// //         }
// //         let target = [targetLabel];
// //         dump.addData(inputs, target);
// //       }
// //     }
// //   }
// // }

// // // Function to average poses over multiple frames for temporal smoothing
// // function averagePoses(poses) {
// //   let avgPose = {
// //     keypoints: []
// //   };
// //   let numFrames = poses.length;
// //   for (let i = 0; i < poses[0].keypoints.length; i++) {
// //     let avgX = 0;
// //     let avgY = 0;
// //     for (let j = 0; j < numFrames; j++) {
// //       avgX += poses[j].keypoints[i].position.x;
// //       avgY += poses[j].keypoints[i].position.y;
// //     }
// //     avgX /= numFrames;
// //     avgY /= numFrames;
// //     avgPose.keypoints.push({
// //       position: {
// //         x: avgX,
// //         y: avgY
// //       }
// //     });
// //   }
// //   return avgPose;
// // }

// // function modelLoaded() {
// //   console.log("poseNet ready");
// // }

// // function draw() {
// //   translate(video.width, 0);
// //   scale(-1, 1);
// //   image(video, 0, 0, video.width,  video.height);
// //   if (pose) {
// //     for (let i = 0; i < skeleton.length; i++) {
// //         let a = skeleton[i][0];
// //         let b = skeleton[i][1];
// //         strokeWeight(2);
// //         stroke(0);
// //         line(a.position.x, a.position.y, b.position.x, b.position.y);
// //       }
// //     for (let i = 0; i < pose.keypoints.length; i++) {
// //       let x = pose.keypoints[i].position.x;
// //       let y = pose.keypoints[i].position.y;
// //       fill(0);
// //       stroke(255);
// //       ellipse(x, y, 16, 16);
// //     }
// //   }
// // }

let video;
let openpose;
let pose;
let skeleton;

let dump;

let state = 'waiting';
let targetLabel;

function keyPressed() {
  if (key === "s" ) {
    dump.saveData();
  } else {
    targetLabel = key;  // Now a single value
    console.log(targetLabel);
    state = 'collecting';
    console.log(state);
    setTimeout(function () {
      console.log('not collecting');
      state = 'waiting';
    }, 10000);
  }
}

function setup() {
  createCanvas(720, 640);
  video = createCapture(VIDEO);
  video.hide();
  openpose = new OpenPose();
  openpose.on('pose', gotPoses);
  openpose.on('ready', () => console.log('OpenPose model loaded'));
}

function gotPoses(data) {
  if (state == 'collecting') {
    console.log(data);
    let inputs = [];
    for (let i = 0; i < data.length; i++) {
      let x = data[i].pose.keypoints[0].position.x;
      let y = data[i].pose.keypoints[0].position.y;
      inputs.push(x);
      inputs.push(y);
    }
    let target = [targetLabel]
    dump.addData(inputs, target);
  }
}

function draw() {
  image(video, 0, 0, width, height);
}
