export const findClosestObject = (arr, target) => {

  let closest = [arr[0]];
  let diff = Math.abs(target - closest[0].average);

  for (let i = 1; i < arr.length; i++) {

    let currDiff = Math.abs(target - arr[i].average);

    if (currDiff < diff) {
      diff = currDiff;
      closest = [];
    }

    if (currDiff === diff) {
      closest.push(arr[i]);
    }
  }

  return closest.sort((a, b) => a.name.localeCompare(b.name)).map(el => ({ bestStyle: el.name, playlist: {} }));
};