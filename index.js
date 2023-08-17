function distanceFromHqInBlocks(finish){
    let numberOfBlocks = (Math.abs(finish - 42));
    return(numberOfBlocks);
}

function distanceFromHqInFeet(finish){
    let feetTravelled = 264 * distanceFromHqInBlocks(finish);
    return(feetTravelled);
}

function distanceTravelledInFeet(start, finish){
    let distance = 264 * (Math.abs(finish - start));
    return(distance);
}

function calculatesFarePrice(start, finish){
    let distance = distanceTravelledInFeet(start, finish);
    if (distance <= 400){
        return(0);
      } else if (distance <= 2000){
        return(0.02 * (distance - 400));
      } else if (distance <= 2500){
        return(25);
      } else {
         return('cannot travel that far')
      }
}
