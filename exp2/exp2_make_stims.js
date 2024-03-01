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
let critical_talker_order = []
for (let i = 0; i < 8; i++) {
  critical_talker_order.push(anchor_talker)
}
for (let i = 0; i < 8; i++) {
  critical_talker_order.push(int_talkers[Math.floor(i/4)])
}
let cto_anch = critical_talker_order.slice(0, critical_talker_order.length/2)
let cto_int = shuffle_array(critical_talker_order.slice(critical_talker_order.length/2, critical_talker_order.length))
critical_talker_order = []
for (let i = 0; i < cto_anch.length; i++) {
  critical_talker_order.push(cto_anch[i])
  critical_talker_order.push(cto_int[i])
}

// create order of comp/noComp
// fully random for now
let comp_codes = []
for (let i = 0; i < (critical_codes.length/2); i++) {
  comp_codes.push("comp", "no_comp")
}

// shuffle everything
filler_codes = shuffle_array(filler_codes)
critical_codes = shuffle_array(critical_codes)
comp_codes = shuffle_array(comp_codes)

// figure out where the critical trials will fall
// no critical trials in the first 5, 4 per block, alternate anch and int
critical_nums = []
let n_trials = filler_codes.length + critical_codes.length;
let i = 0;
while (i < critical_codes.length/4) {
  let num = Math.floor(Math.random() * ((n_trials)/4 - 5)) + 5
  if (!critical_nums.includes(num)) {
    critical_nums.push(num)
    i++
  }
}
while (i < critical_codes.length/4 * 2) {
  num = Math.floor(Math.random() * (n_trials)/4) + (n_trials)/4
  if (!critical_nums.includes(num)) {
    critical_nums.push(num)
    i++
  }
}
while (i < critical_codes.length/4 * 3) {
  num = Math.floor(Math.random() * (n_trials)/4) + ((n_trials)/4) * 2
  if (!critical_nums.includes(num)) {
    critical_nums.push(num)
    i++
  }
}
  while (i < critical_codes.length/4 * 4) {
  num = Math.floor(Math.random() * (n_trials)/4) + ((n_trials)/4) * 3
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
    audio_filename = curr_trial["audio_"+anchor_talker+"_"+critical_talker_order[j]]
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
    curr_talker = anchor_talker
    audio_filename = curr_trial["audio_"+anchor_talker]
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
  if (stim_condition == "image") {
    for (let l=0; l<imgs.length; l++) {
      preload_imgs.push("../img/" + imgs[l])
    }
  }
}

