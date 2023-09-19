let timeline = [];

const jsPsych = initJsPsych({
  extensions: [
    {type: jsPsychExtensionWebgazer}
  ],
  on_finish: function() {
    jsPsych.data.displayData('csv');
  }
})

const irb = {
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p><font size="3">We invite you to participate in a research study on language production and comprehension. Your experimenter will ask you to do a linguistic task such as reading sentences or words, naming pictures or describing scenes, making up sentences of your own, or participating in a simple language game. <br><br>There are no risks or benefits of any kind involved in this study. <br><br>You will be paid for your participation at the posted rate.<br><br>If you have read this form and have decided to participate in this experiment, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at anytime without penalty or loss of benefits to which you are otherwise entitled. You have the right to refuse to do particular tasks. Your individual privacy will be maintained in all published and written data resulting from the study. You may print this form for your records.<br><br>CONTACT INFORMATION: If you have any questions, concerns or complaints about this research study, its procedures, risks and benefits, you should contact the Protocol Director Meghan Sumner at (650)-725-9336. If you are not satisfied with how this study is being conducted, or if you have any concerns, complaints, or general questions about the research or your rights as a participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team at (650)-723-2480 or toll free at 1-866-680-2906. You can also write to the Stanford IRB, Stanford University, 3000 El Camino Real, Five Palo Alto Square, 4th Floor, Palo Alto, CA 94306 USA.<br><br>If you agree to participate, please proceed to the study tasks.</font></p>',
  choices: ['Continue']
};
timeline.push(irb)


var camera_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <p>This experiment uses your camera for eye tracking.</p>
        <p>In order to participate you must allow the experiment to use your camera.</p>
        <p>You will be prompted to do this on the next screen.</p>
        <p>If you do not want to permit the experiment to use your camera, please close the page.</p>
    `,
    choices: ['Click to begin'],
    post_trial_gap: 1000
};

let init_camera_trial = {
    type: jsPsychWebgazerInitCamera
}

var calibration = {
    type: jsPsychWebgazerCalibrate,
    // calibration_points: [
    //     [10,10],[10,30],[10,50],[10,70],[10,90],
    //     [30,10],[30,30],[30,50],[30,70],[30,90],
    //     [50,10],[50,30],[50,50],[50,70],[50,90],
    //     [70,10],[70,30],[70,50],[70,70],[70,90],
    //     [90,10],[90,30],[90,50],[90,70],[90,90]
    // ],
    // calibration_points: [
    //     [10,10],[10,30],[10,50],[10,70],[10,90],
    //     [50,10],[50,30],[50,50],[50,70],[50,90],
    //     [90,10],[90,30],[90,50],[90,70],[90,90]
    // ],
    // calibration_points: [
    //   [10,10],[10,50],[10,90],
    //   [50,10],[50,50],[50,90],
    //   [90,10],[90,50],[90,90]
    // ],
    calibration_points: [
      [50,50]
    ],
    repetitions_per_point: 2,
    calibration_mode: 'view',
    randomize_calibration_order: true,
  };

let validation_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
      <p>Let's see how accurate the eye tracking is. </p>
      <p>Keep your head still, and move your eyes to focus on each dot as it appears.</p>
      <p>You do not need to click on the dots. Just move your eyes to look at the dots.</p>
    `,
    choices: ['Click to begin'],
    post_trial_gap: 1000
};

let validation = {
    type: jsPsychWebgazerValidate,
    validation_points: [[25,25], [25,75], [75,25], [75,75]],
    show_validation_data: true
};

// timeline.push(camera_instructions, init_camera_trial, calibration, validation_instructions, validation)
// timeline.push(camera_instructions, init_camera_trial, calibration)

stims = shuffle_imgs(stims)
let all_trials = divide_blocks(stims);

// To reduce experiment length for testing:
for (let i=0; i<all_trials.length; i++) {
  all_trials[i] = [all_trials[i][0]]
}
console.log(all_trials)


for (let i=0; i<all_trials.length; i++) {
  const trials = {
    timeline: [
      {
        type: jsPsychAudioButtonResponse,
        stimulus: jsPsych.timelineVariable('stimulus'),
        choices: jsPsych.timelineVariable('imgs'),
        button_html: '<img src="../img/%choice%" id="%choice%" style="padding-top:40px"/>',
        margin_horizontal: '0px',
        response_allowed_while_playing: false,
        data: function() { 
          console.log(jsPsych.timelineVariable('imgs')[0])
          console.log(jsPsych.timelineVariable('imgs')[1])
          console.log(jsPsych.timelineVariable('imgs')[2])
          console.log(jsPsych.timelineVariable('imgs')[3])
          console.log(jsPsych.timelineVariable('target'))
          return {
            loc_top_left: jsPsych.timelineVariable('imgs')[0],
            loc_top_right: jsPsych.timelineVariable('imgs')[1],
            loc_bot_left: jsPsych.timelineVariable('imgs')[2],
            loc_bot_right: jsPsych.timelineVariable('imgs')[3],
            target: jsPsych.timelineVariable('target'),
            competitor: jsPsych.timelineVariable('competitor'),
            distractor_1: jsPsych.timelineVariable('distractor_1'),
            distractor_2: jsPsych.timelineVariable('distractor_2'),
            distractor_3: jsPsych.timelineVariable('distractor_3'),
            trial_num: jsPsych.timelineVariable('trial_num'),
            block: jsPsych.timelineVariable('block'),
            sentence: jsPsych.timelineVariable('sentence'),
            det: jsPsych.timelineVariable('det'),
            status: jsPsych.timelineVariable('status'),
            talker: jsPsych.timelineVariable('talker'),
            trial_code: jsPsych.timelineVariable('trial_code'),
            target_loc: jsPsych.timelineVariable('imgs').indexOf(jsPsych.timelineVariable('target')),
            competitor_loc: jsPsych.timelineVariable('imgs').indexOf(jsPsych.timelineVariable('competitor')),
            distractor_1_loc: jsPsych.timelineVariable('imgs').indexOf(jsPsych.timelineVariable('distractor_1')),
            distractor_2_loc: jsPsych.timelineVariable('imgs').indexOf(jsPsych.timelineVariable('distractor_2')),
            distractor_3_loc: jsPsych.timelineVariable('imgs').indexOf(jsPsych.timelineVariable('distractor_3'))
          }; 
        },
        extensions: [
          {
            type: jsPsychExtensionWebgazer, 
            params: {
              targets: [
                "#jspsych-audio-button-response-button-0",
                "#jspsych-audio-button-response-button-1",
                "#jspsych-audio-button-response-button-2",
                "#jspsych-audio-button-response-button-3"
              ]
            }
          }
        ]
      }
    ],
    timeline_variables: all_trials[i]
  }
  timeline.push(trials)
}

jsPsych.run(timeline);