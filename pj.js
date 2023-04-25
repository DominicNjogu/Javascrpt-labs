//console.log("this is my first java script file")
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(hqLocation - pickupLocation);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const distanceInBlocks = Math.abs(startBlock - endBlock);
    const feetPerBlock = 264;
    return distanceInBlocks * feetPerBlock;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;
  
    if (distance <= 400) {
      fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      fare = 25;
    } else {
      return 'cannot travel that far';
    }
  
    return fare;
  }