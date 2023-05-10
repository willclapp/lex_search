function shuffle_array(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffle_imgs(stims) {
  for (let i=0; i<stims.length; i++) {
    stims[i].imgs = shuffle_array(stims[i].imgs)
  }
  return stims;
}

function divide_blocks(stims) {
  stims = shuffle_array(stims)
  let blocks = []
  let total = 0;
  for (let i=0; i<4; i++) {
    let block = []
    for (let j=0; j<stims.length/4; j++) {
      let curr = stims[total]
      curr.trial_num = total+1
      curr.block = i
      block.push(curr)
      total++
    }
    blocks.push(block)
  }
  return blocks
}
