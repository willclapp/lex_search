

let filler_codes = []

// generate list of filler trials
for (const [key, value] of Object.entries(filler_trials)) {
  filler_codes.push(key)
}

console.log(filler_trials[filler_codes[0]])

// generate list of critical trials
let critical_codes = []
for (const [key, value] of Object.entries(critical_trials)) {
  if (value.det == det) {
    critical_codes.push(key)
  }
}

critical_talker_order = []
for (let i = 0; i < 8; i++) {
  critical_talker_order.push(anchor_talker)
  critical_talker_order.push(int_talkers[Math.floor(i/2)])
}
// Add accented talker for pilot
critical_talker_order.push(anchor_talker)
critical_talker_order.push(pilot_talker)

// shuffle everything
filler_codes = shuffle_array(filler_codes)
critical_codes = shuffle_array(critical_codes)
critical_talker_order = shuffle_array(critical_talker_order)

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
  if (critical_nums.includes(i)) {
    curr_trial = critical_codes[j]
    curr_talker = critical_talker_order[j]
    j++;
  } else {
    curr_trial = filler_codes[k]
    curr_talker = "AnF"
    k++;
  }
  console.log(curr_trial)
}


// console.log(critical_talker_order)