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
  let trials_per_block = [26, 26, 25, 25]
  let blocks = []
  let prev = 0;
  for (let i=0; i<4; i++) {
    let block = []
    for (let j=0; j<trials_per_block[i]; j++) {
      let curr = stims[j + prev]
      curr.block = i+1
      block.push(curr)
    }
    blocks.push(block)
    prev = prev + trials_per_block[i]
  }
  return blocks
}
