 // STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
(function (window) {
    'use strict';
    var helloSpeaker = {};
    helloSpeaker.name = "Yaakov";
    helloSpeaker.name = "John";
    helloSpeaker.name = "Jen";
    helloSpeaker.name = "Jason";
    helloSpeaker.name = "Paul";
    helloSpeaker.name = "Frank";
    helloSpeaker.name = "Larry";
    helloSpeaker.name = "Paula";
    helloSpeaker.name = "Laura";
    var speakWord = "Hello";
// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
    

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
    helloSpeaker.sayHello = function speak(names) {
        console.log(speakWord + " " + helloSpeaker.names);
    };
    
})(window);

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;
