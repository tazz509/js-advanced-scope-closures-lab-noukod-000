function produceDrivingRange(blockRange) {
  return function (startingBlock, endingBlock) {
    let start = parseInt(startingBlock);
    let end = parseInt(endingBlock);
    let distance = Math.abs(end - start);
    let difference = distance - blockRange;

    if (difference > 0) {
      return `${Math.abs(difference)} blocks out of range`
    } else {
      return `within range by ${Math.abs(difference)}`
    }
  }
}

function produceTipCalculator(percentTip) {
  return function(fare) {
    return fare * percentTip
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name
      this.id = ++ driverId;
    }
  }
}
