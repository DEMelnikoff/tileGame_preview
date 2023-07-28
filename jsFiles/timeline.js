/*
// Get ID from URL
PROLIFIC_PID = jsPsych.data.getURLVariable('subject')

// if no PROLIFIC_PID in URL, define as 9999 (so data will write)
if (typeof PROLIFIC_PID !== 'undefined') {
} else {
  PROLIFIC_PID = 9999 //  define 
}
*/


function MakeTimeline(game) {
    this.timeline = [
    game.task.round1Intro,
    game.task.round1,
    ]
};

var exp = new MakeTimeline(streakGame);

//jsPsych.init({
//    timeline: exp.timeline,
//    
//});
//

// initiate timeline
jsPsych.init({
    timeline: exp.timeline,
});
