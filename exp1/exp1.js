// Second Pilot version
// New features:
//  - Anch stims are now spliced to account for stream anomalies            (IMPLEMENTED)
//  - New questions added to Questionnaire to get to the sample rate issue  (IMPLEMENTED)
//  - New fixation interval between inspection and audio                    (IMPLEMENTED)
//  - New condition with text instead of images for stimuli                 (IMPLEMENTED)
//  - Get rid of Pilot talker                                               (IMPLEMENTED)

let timeline = [];

const jsPsych = initJsPsych({
  extensions: [
    {type: jsPsychExtensionWebgazer}
  ],
  on_finish: function(data) {
    proliferate.submit({"trials": data.values()});
  }
})

const preload = {
  type: jsPsychPreload,
  audio: preload_audio,
  images: preload_imgs
}

const camera_instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
      <p>This experiment uses your camera for eye tracking.</p>
      <p>In order to participate you must allow the experiment to use your camera.</p>
      <p>You will be prompted to do this on the next screen.</p>
      <p>If you do not want to permit the experiment to use your camera, please close the page.</p>
      <p><br>Note: No video is ever recorded in this experiment. We will</p>
      <p>only measure your eye movements.</p>
  `,
  choices: ['Click to begin']
};

const init_camera_trial = {
  type: jsPsychWebgazerInitCamera
  // on_finish: function() {
  //   jsPsych.extensions.webgazer.setRegressionType("weightedRidge");
  // }
}

const enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true,
  message: `
    <p>Before beginning, please close out of any open applications other than</p>
    <p>this web browser. Also close out of any unnecessary tabs. Having other</p>
    <p>open applications and tabs can reduce the quality of the data, often to </p>
    <p>the point where it is unusable.<br><br></p>
    <p>This experiment requires use of your full screen. To enter full screen</p>  
    <p>mode and continue with the experiment, click below.<br><br></p>
  `
}

const irb = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<p><font size="3">We invite you to participate in a research study on language production and comprehension. <br>
  Your experimenter will ask you to do a linguistic task such as reading sentences or words, naming pictures or describing <br>
  scenes, making up sentences of your own, or participating in a simple language game. <br><br>
  There are no risks or benefits of any kind involved in this study. <br><br>
  You will be paid for your participation at the posted rate.<br><br>
  If you have read this form and have decided to participate in this experiment, please understand your participation is <br>
  voluntary and you have the right to withdraw your consent or discontinue participation at anytime without penalty or loss <br>
  of benefits to which you are otherwise entitled. You have the right to refuse to do particular tasks. Your individual <br>
  privacy will be maintained in all published and written data resulting from the study. You may print this form for your records.<br><br>
  CONTACT INFORMATION: If you have any questions, concerns or complaints about this research study, its procedures, risks <br>
  and benefits, you should contact the Protocol Director Meghan Sumner at (650)-725-9336. If you are not satisfied with how <br>
  this study is being conducted, or if you have any concerns, complaints, or general questions about the research or your <br>
  rights as a participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of <br>
  the research team at (650)-723-2480 or toll free at 1-866-680-2906. You can also write to the Stanford IRB, Stanford <br>
  University, 3000 El Camino Real, Five Palo Alto Square, 4th Floor, Palo Alto, CA 94306 USA.<br><br>
  If you agree to participate, please proceed to the study tasks.</font></p>`,
  choices: ['Continue']
};

const audio_check = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <p>This experiment uses audio. Please make sure that your</p>
    <p>headphones are plugged in and that your volume is turned</p>
    <p>up. The audio below is similar to what you'll hear in the</p>
    <p>experiment, so you can play it as many times as you need</p>
    <p>while you adjust your volume to a comfortable level.</p>
    <audio controls src="./audio/AnF/di_kitchen_2_AnF.wav"></audio>
  `,
  choices: ['Continue']
}

timeline.push(
  preload,
  camera_instructions, 
  init_camera_trial, 
  enter_fullscreen, 
  irb, 
  audio_check
)

let calibration_instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <p>Before we calibrate the eye-tracker, here are a few reminders and suggestions.<br><br>
    First, make sure that your computer is resting on a flat surface, like a table or a desk. <br>
    If your computer is on your lap, or moves at all, the eye-tracker will not work.<br><br>
    Also make sure that you're lit from the front, either with a lamp or facing a window. <br><br>
    They eye-tracker will also not work if you are wearing glasses. Contacts are fine. <br><br>
    Hold your head as absolutely still as possible, as if your chin was resting on an <br>
    invisible block. You might find it more comfortable to stack up some books to create <br>
    an improvised chin rest. You can also rest your chin on your hand to help you keep still. <br>
    To look around the screen, move only your eyes. <br><br>
    Click below to move on.</p>
  `,
  choices: ['Continue'],
  on_start: function() {
    jsPsych.extensions.webgazer.showVideo();
  }
}

let calibration_instructions_2 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <p>On the next page, we will calibrate the eye-tracker.</p>
    <p>You will see a series of black dots at various positions</p>
    <p>on the screen. Keep your head still, and move your eyes to</p>
    <p>focus on each dot as it appears. You do not need to click </p>
    <p>on the dots. Just move your eyes to look at the dots. </p>
  `,
  choices: ['Continue'],
  on_finish: function() {
    jsPsych.extensions.webgazer.hideVideo();
  }
}

var calibration = {
    type: jsPsychWebgazerCalibrate,
    calibration_points: [
        [10,10],[10,30],[10,50],[10,70],[10,90],
        [30,10],[30,30],[30,50],[30,70],[30,90],
        [50,10],[50,30],[50,50],[50,70],[50,90],
        [70,10],[70,30],[70,50],[70,70],[70,90],
        [90,10],[90,30],[90,50],[90,70],[90,90],
        [25,25],[25,75],[75,25],[75,75]
    ],
    // calibration_points: [
    //   [50,50]
    // ],
    repetitions_per_point: 2,
    calibration_mode: 'view',
    randomize_calibration_order: true
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

let val_points = [
  [[25,75], [75,75], [25,25], [75,25], [75,75], [25,25], [25,75], [75,25]],
  [[75,75], [25,25], [25,75], [75,25], [25,75], [75,25], [75,75], [25,25]],
  [[75,25], [25,25], [75,75], [25,75], [25,25], [75,75], [25,75], [75,25]],
  [[25,25], [25,75], [75,25], [75,75], [25,25], [25,75], [75,25], [75,75]]
]

val_points = shuffle_array(val_points)

let validation = {
    type: jsPsychWebgazerValidate,
    validation_points: function() {
      let p = val_points.pop();
      console.log(p)
      return p
    },
    show_validation_data: false,
    randomize_validation_order: false
};

let image_intructions = `<p>We're now ready to begin the main experiment. </p>
  <p>On each page, you'll see four images. Take a look around to familiarize yourself</p>
  <p>with all the images. After a second, the images will disappear and you should look to</p>
  <p>the cross in the middle of the screen. Then you will hear a sentence. Click on the image on</p>
  <p>the screen that is associated with the sentence. For example, if you hear the sentence</p>
  <p>"Ruth talked about the kitchen," you would click on the image of the kitchen. The image</p>
  <p>will always be associated with the last word in the sentence. If you do not respond within</p>
  <p>a few seconds, the experiment will proceed automatically. Between trials, try to look at the</p>
  <p>cross in the center of the screen. But please look around at the images after they reappear. <br><br></p>
  <p>There will be four sets of sentences in the experiment, and before each, we will stop so </p>
  <p>that you can take a break and we can recalibrate the eye-tracker.</p>`

let text_instructions = `<p>We're now ready to begin the main experiment. </p>
  <p>On each page, you'll see four words. Take a look around to familiarize yourself</p>
  <p>with all the words. After a second, the words will disappear and you should look to</p>
  <p>the cross in the middle of the screen. Then you will hear a sentence. Click on the word on</p>
  <p>the screen that you hear in the sentence. For example, if you hear the sentence</p>
  <p>"Ruth talked about the kitchen," you would click on the word "KITCHEN". The word you click</p>
  <p>will always be the last word in the sentence. If you do not respond within a few seconds,</p> 
  <p>the experiment will proceed automatically. Between trials, try to look at the</p>
  <p>cross in the center of the screen. But please look around at the words after they reappear. <br><br></p>
  <p>There will be four sets of sentences in the experiment, and before each, we will stop so </p>
  <p>that you can take a break and we can recalibrate the eye-tracker.</p>`

let experiment_instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function() {
    if (stim_condition == 'image') {
      return image_intructions;
    } else {
      return text_instructions;
    }
  },
  choices: ['Click to begin'],
  post_trial_gap: 1000
};

timeline.push(
  calibration_instructions, 
  calibration_instructions_2, 
  calibration, 
  validation_instructions, 
  validation,
  experiment_instructions
);


stims = shuffle_imgs(stims)
let all_trials = divide_blocks(stims);

// // To reduce experiment length for testing:
// for (let i=0; i<all_trials.length; i++) {
//   all_trials[i] = [all_trials[i][0]]
// }

for (let i=0; i<all_trials.length; i++) {
  const trials = {
    timeline: [
      {
        type: jsPsychAudioKeyboardResponse,
        margin_horizontal: '0px',
        stimulus: './audio/silence.wav',
        response_allowed_while_playing: false,
        trial_duration: 500,
        prompt: `<div id="isi_fixation_box"> </div>`,
        choices: ['']
      },
      {
        type: jsPsychAudioButtonResponse,
        stimulus: './audio/silence.wav',
        choices: function() {
          if (stim_condition == "image") {
            return jsPsych.timelineVariable('imgs')
          } else {
            return jsPsych.timelineVariable('imgs')
          }
        },
        button_html: function() {
          if (stim_condition == "image") {
            return '<img src="../img/%choice%" id="%choice%" style="padding-top:40px"/>'
          } else {
            return `<div class = "text_choice_container"><p class = "text_choice" id="%choice%">%choice%</p></div>`
          }
        },
        margin_horizontal: '0px',
        response_allowed_while_playing: false,
        trial_duration: 2500,
      },
      {
        type: jsPsychAudioKeyboardResponse,
        margin_horizontal: '0px',
        stimulus: './audio/silence.wav',
        response_allowed_while_playing: false,
        trial_duration: 750,
        prompt: `<div id="isi_fixation_box"> </div>`,
        choices: ['']
      },
      {
        type: jsPsychAudioButtonResponse,
        stimulus: jsPsych.timelineVariable('stimulus'),
        choices: function() {
          if (stim_condition == "image") {
            return jsPsych.timelineVariable('imgs')
          } else {
            return jsPsych.timelineVariable('imgs')
          }
        },
        button_html: function() {
          if (stim_condition == "image") {
            return '<img src="../img/%choice%" id="%choice%" style="padding-top:40px"/>'
          } else {
            return `<div class = "text_choice_container"><p class = "text_choice" id="%choice%">%choice%</p></div>`
          }
        },
        margin_horizontal: '0px',
        response_allowed_while_playing: false,
        trial_duration: 8000,
        data: function() { 
          let target_loc = 0
          let competitor_loc = 0
          let distractor_1_loc = 0
          let distractor_2_loc = 0
          let distractor_3_loc = 0
          if (stim_condition == "image") {
            target_loc = jsPsych.timelineVariable('imgs').indexOf(jsPsych.timelineVariable('target_img'))
            competitor_loc = jsPsych.timelineVariable('imgs').indexOf(jsPsych.timelineVariable('competitor_img'))
            distractor_1_loc = jsPsych.timelineVariable('imgs').indexOf(jsPsych.timelineVariable('distractor_1_img'))
            distractor_2_loc = jsPsych.timelineVariable('imgs').indexOf(jsPsych.timelineVariable('distractor_2_img'))
            distractor_3_loc = jsPsych.timelineVariable('imgs').indexOf(jsPsych.timelineVariable('distractor_3_img'))
          } else {
            target_loc = jsPsych.timelineVariable('imgs').indexOf(jsPsych.timelineVariable('target').toUpperCase())
            competitor_loc = jsPsych.timelineVariable('imgs').indexOf(jsPsych.timelineVariable('competitor').toUpperCase())
            distractor_1_loc = jsPsych.timelineVariable('imgs').indexOf(jsPsych.timelineVariable('distractor_1').toUpperCase())
            distractor_2_loc = jsPsych.timelineVariable('imgs').indexOf(jsPsych.timelineVariable('distractor_2').toUpperCase())
            distractor_3_loc = jsPsych.timelineVariable('imgs').indexOf(jsPsych.timelineVariable('distractor_3').toUpperCase())
          }
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
            target_img: jsPsych.timelineVariable('target_img'),
            competitor_img: jsPsych.timelineVariable('competitor_img'),
            distractor_1_img: jsPsych.timelineVariable('distractor_1_img'),
            distractor_2_img: jsPsych.timelineVariable('distractor_2_img'),
            distractor_3_img: jsPsych.timelineVariable('distractor_3_img'),
            trial_num: jsPsych.timelineVariable('trial_num'),
            block: jsPsych.timelineVariable('block'),
            sentence: jsPsych.timelineVariable('sentence'),
            det: jsPsych.timelineVariable('det'),
            stim_condition: jsPsych.timelineVariable('stim_condition'),
            status: jsPsych.timelineVariable('status'),
            talker: jsPsych.timelineVariable('talker'),
            trial_code: jsPsych.timelineVariable('trial_code'),
            target_loc: target_loc,
            competitor_loc: competitor_loc,
            distractor_1_loc: distractor_1_loc,
            distractor_2_loc: distractor_2_loc,
            distractor_3_loc: distractor_3_loc
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

  // ADD RE-Validate instructions
  if (i < (all_trials.length - 1)) {
    const post_block = {
      type: jsPsychHtmlButtonResponse,
      stimulus: `
        <p>That is the end of block #${i + 1} out of 4. </p>
        <p>Feel free to take a break if you need to.</p>
        <p>Before we continue, let's take a moment to make sure that</p>
        <p>the eye-tracker is still calibrated correctly. </p>
        <p>Remember to keep your head as still as possible, as if it</p>
        <p>were held in place by a chin rest. Just like before, you'll</p>
        <p>now see some black dots on the screen. As each one appears,</p>
        <p>focus on it using only your eyes without moving your neck or</p>
        <p>head. When you're ready to begin, click below.</p>
      `,
      choices: ['Continue'],
      on_start: function() {
        jsPsych.extensions.webgazer.showVideo();
      },
      on_finish: function() {
        jsPsych.extensions.webgazer.hideVideo();
      }
    }
    timeline.push(post_block, calibration, validation_instructions, validation)
  }
}

const quest_intstructions = {
  type: jsPsychHtmlButtonResponse,
  choices: ['Continue'],
  stimulus: `
    That's the end of the experiment! Thank you for your responses. <br>
    We're no longer measuring eye movements, so feel free to move <br>
    around now, if you like. To help us analyze our results, it <br>
    would be helpful to know know a little more about you. Please <br>
    answer the following questions. <br><br>`
}

const questionnaire = {
  type: jsPsychSurvey,
  pages: [
      [
          {
              type: 'html',
              prompt: "Please answer the following questions. None of the answers you provide will affect your compensation:"
          },
          {
              type: 'multi-choice',
              prompt: 'Did you read the instructions and do you think you did the task correctly?', 
              name: 'correct', 
              options: ['Yes', 'No', 'I was confused']
          },
          {
              type: 'drop-down',
              prompt: 'Gender:',
              name: 'gender',
              options: ['Female', 'Male', 'Non-binary/Non-conforming', 'Other']
          },
          {
              type: 'text',
              prompt: 'Age:',
              name: 'age',
              textbox_columns: 10
          },
          {
              type: 'drop-down',
              prompt: 'Level of education:',
              name: 'education',
              options: ['Some high school', 'Graduated high school', 'Some college', 'Graduated college', 'Hold a higher degree', 'Prefer not to answer']
          },
          {
              type: 'text',
              prompt: "Native language? (What was the language spoken at home when you were growing up?)",
              name: 'language',
              textbox_columns: 20
          },
          {
              type: 'drop-down',
              prompt: 'Are you wearing glasses or contacts right now?',
              name: 'glasses',
              options: ['Glasses', 'Contacts', 'Neither', 'Prefer not to answer']
          },
          {
              type: 'drop-down',
              prompt: 'Do you think the payment was fair?',
              name: 'payment',
              options: ['The payment was too low', 'The payment was fair', 'Prefer not to answer']
          },
          {
              type: 'drop-down',
              prompt: 'Which web browser are you using?',
              name: 'browser',
              options: ['Chrome', 'Firefox', 'Safari', 'Microsoft Edge', 'Other']
          },
          {
              type: 'text',
              prompt: 'What is the manufacturing year of your computer?',
              name: 'manufacture_year',
              textbox_columns: 10
          },
          {
              type: 'drop-down',
              prompt: 'Is your webcam built in or external?',
              name: 'webcam',
              options: ['Built in', 'External', 'I don\'t know']
          },
          {
              type: 'drop-down',
              prompt: 'Is your computer a laptop or a desktop?',
              name: 'computer',
              options: ['Laptop', 'Desktop', 'I don\'t know']
          },
          {
              type: 'drop-down',
              prompt: 'Did you remember to close out of all other apps before beginning the experiment?',
              name: 'other_apps',
              options: ['Yes', 'No', 'Prefer not to answer']
          },
          {
              type: 'drop-down',
              prompt: 'Did you enjoy the experiment?',
              name: 'enjoy',
              options: ['Worse than the average experiment', 'An average experiment', 'Better than the average experiment']
          },
          {
              type: 'text',
              prompt: "Do you have any other comments about this experiment?",
              name: 'comments',
              textbox_columns: 30,
              textbox_rows: 4
          }
      ]
  ]
}

const thanks = {
  type: jsPsychHtmlButtonResponse,
  choices: ['Continue'],
  stimulus: `
    <p>Thank you for your time! Please click 'Continue' and then wait a moment</p>
    <p>until you're directed back to Prolific. There's a lot of data, so this</p>
    <p>may take a minute. But please don't close the window until you're redirected.<br><br></p>
  `
}

timeline.push(quest_intstructions, questionnaire, thanks);


jsPsych.run(timeline);