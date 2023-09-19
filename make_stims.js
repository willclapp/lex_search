

let filler_codes = []

// generate list of filler trials
for (const [key, value] of Object.entries(filler_trials)) {
  filler_codes.push(key)
}

// generate list of critical trials
let critical_codes = []
for (const [key, value] of Object.entries(critical_trials)) {
  if (value.det == det) {
    critical_codes.push(key)
  }
}

// generate order of talkers
critical_talker_order = []
for (let i = 0; i < 8; i++) {
  critical_talker_order.push(anchor_talker)
  critical_talker_order.push(int_talkers[Math.floor(i/2)])
}

// Add accented talker for pilot
critical_talker_order.push(anchor_talker)
critical_talker_order.push(pilot_talker)

// create order of comp/noComp
// fully random for now
let comp_codes = []
for (let i = 0; i < (critical_codes.length/2); i++) {
  comp_codes.push("comp", "no_comp")
}

// shuffle everything
filler_codes = shuffle_array(filler_codes)
critical_codes = shuffle_array(critical_codes)
critical_talker_order = shuffle_array(critical_talker_order)
comp_codes - shuffle_array(comp_codes)

// figure out where the critical trials will fall
// no critical trials in the first 5
critical_nums = []
let i = 0;
while (i < critical_codes.length) {
  let num = Math.floor(Math.random() * (filler_codes.length + critical_codes.length - 5)) + 5
  if (!critical_nums.includes(num)) {
    critical_nums.push(num)
    i++
  }
}

// populate array with trials
let stims = []
let j = 0
let k = 0
for (let i=0; i<(critical_codes.length + filler_codes.length); i++) {
  console.log(i)
  let curr_trial = 0
  let audio_filename = "";
  let imgs = []
  let competitor = "none"
  let distractor_3 = "none"
  if (critical_nums.includes(i)) {
    curr_trial = critical_trials[critical_codes[j]]
    curr_talker = critical_talker_order[j]
    audio_filename = critical_talker_order[j] == "AnF" ? curr_trial.audio_filename : curr_trial[critical_talker_order[j]+"_audio_filename"]
    imgs.push(curr_trial.target_filename, curr_trial.Distractor1_filename, curr_trial.Distractor2_filename)
    if (comp_codes[j] == "comp") {
      imgs.push(curr_trial.competitor_filename)
      competitor = curr_trial.competitor
    } else {
      imgs.push(curr_trial.Distractor3_filename)
      distractor_3 = curr_trial.Distractor3
    }
    j++;
  } else {
    curr_trial = filler_trials[filler_codes[k]]
    curr_talker = "AnF"
    audio_filename = curr_trial.audio_filename
    imgs.push(curr_trial.target_filename, curr_trial.Distractor1_filename, curr_trial.Distractor2_filename, curr_trial.Distractor3_filename)
    distractor_3 = curr_trial.Distractor3
    k++;
  }

  trial_obj = {
    stimulus: "./audio/" + audio_filename,
    imgs: imgs,
    target: curr_trial.target,
    competitor: competitor,
    distractor_1: curr_trial.Distractor1,
    distractor_2: curr_trial.Distractor2,
    distractor_3: distractor_3,
    block: 0,
    trial_num: i,
    sentence: curr_trial.sentence,
    talker: curr_talker,
    det: det,
    status: curr_trial.status
  }
  // console.log(trial_obj)
  stims.push(trial_obj)
}
console.log(stims)
