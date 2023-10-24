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
  let curr_trial = 0
  let audio_filename = "";
  let imgs = []
  let trial_code = ""
  let competitor = "none"
  let distractor_3 = "none"
  let target_img = "none"
  let competitor_img = "none"
  let distractor_1_img = "none"
  let distractor_2_img = "none"
  let distractor_3_img = "none"
  if (critical_nums.includes(i)) {
    curr_trial = critical_trials[critical_codes[j]]
    curr_talker = critical_talker_order[j]
    audio_filename = critical_talker_order[j] == "AnF" ? curr_trial.audio_filename : curr_trial[critical_talker_order[j]+"_audio_filename"]
    if (stim_condition == "image") {
      imgs.push(curr_trial.target_filename, curr_trial.Distractor1_filename, curr_trial.Distractor2_filename)
    } else {
      imgs.push(curr_trial.target.toUpperCase(), curr_trial.Distractor1.toUpperCase(), curr_trial.Distractor2.toUpperCase())
    }
    target_img = curr_trial.target_filename
    distractor_1_img = curr_trial.Distractor1_filename
    distractor_2_img = curr_trial.Distractor2_filename
    if (comp_codes[j] == "comp") {
      if (stim_condition == "image") {
        imgs.push(curr_trial.competitor_filename)
      } else {
        imgs.push(curr_trial.competitor.toUpperCase())
      }
      competitor = curr_trial.competitor
      competitor_img = curr_trial.competitor_filename
    } else {
      if (stim_condition == "image") {
        imgs.push(curr_trial.Distractor3_filename)
      } else {
        imgs.push(curr_trial.Distractor3.toUpperCase())
      }
      distractor_3 = curr_trial.Distractor3
      distractor_3_img = curr_trial.Distractor3_filename
    }
    trial_code = critical_codes[j]
    j++;
  } else {
    curr_trial = filler_trials[filler_codes[k]]
    curr_talker = "AnF"
    audio_filename = curr_trial.audio_filename
    if (stim_condition == "image") {
      imgs.push(curr_trial.target_filename, curr_trial.Distractor1_filename, curr_trial.Distractor2_filename, curr_trial.Distractor3_filename)
    } else {
      imgs.push(curr_trial.target.toUpperCase(), curr_trial.Distractor1.toUpperCase(), curr_trial.Distractor2.toUpperCase(), curr_trial.Distractor3.toUpperCase())

    }
    target_img = curr_trial.target_filename
    distractor_1_img = curr_trial.Distractor1_filename
    distractor_2_img = curr_trial.Distractor2_filename
    distractor_3_img = curr_trial.Distractor3_filename
    distractor_3 = curr_trial.Distractor3
    trial_code = filler_codes[k]
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
    target_img: target_img,
    competitor_img: competitor_img,
    distractor_1_img: distractor_1_img,
    distractor_2_img: distractor_2_img,
    distractor_3_img: distractor_3_img,
    block: 0,
    trial_num: i,
    sentence: curr_trial.sentence,
    talker: curr_talker,
    det: det,
    stim_condition: stim_condition,
    status: curr_trial.status,
    trial_code: trial_code
  }
  stims.push(trial_obj)

  preload_audio.push("./audio/" + audio_filename)
  for (let l=0; l<imgs.length; l++) {
    preload_imgs.push("../img/" + imgs[l])
  }
}
