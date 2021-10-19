/* exported Stopwatch */

// function Stopwatch(startTimeInSeconds) {
//   this.elapsedSeconds = startTimeInSeconds;
// }

// Stopwatch.prototype.tick = function () {
//   this.elapsedSeconds++;
// };

// Stopwatch.prototype.getTime = function () {
//   const secondsPerHour = 3600;
//   const secondsPerMinute = 60;
//   let seconds = this.elapsedSeconds;
//   let hours = Math.floor(seconds / secondsPerHour);
//   seconds -= (secondsPerHour * hours);
//   let minutes = Math.floor(seconds / secondsPerMinute);
//   seconds -= (secondsPerMinute * minutes);
//   hours = hours.toString().padStart(2, '0');
//   minutes = minutes.toString().padStart(2, '0');
//   seconds = seconds.toString().padStart(2, '0');
//   return `${hours}:${minutes}:${seconds}`;
// };

// Stopwatch.prototype.reset = function () {
//   this.elapsedSeconds = 0;
// };

class Stopwatch {
  constructor(startTimeInSeconds) {
    this.elapsedSeconds = startTimeInSeconds;
  }

  tick() {
    this.elapsedSeconds++;
  }

  getTime() {
    const secondsPerHour = 3600;
    const secondsPerMinute = 60;
    let seconds = this.elapsedSeconds;
    let hours = Math.floor(seconds / secondsPerHour);
    seconds -= (secondsPerHour * hours);
    let minutes = Math.floor(seconds / secondsPerMinute);
    seconds -= (secondsPerMinute * minutes);
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  reset() {
    this.elapsedSeconds = 0;
  }
}

const newWatch = new Stopwatch(31620);
console.log('New Stopwatch set to', newWatch);

for (let i = 0; i < 3; i++) {
  newWatch.tick();
  console.log('tick!')
}

console.log(newWatch.getTime());

for (let i = 0; i < 20; i++) {
  newWatch.tick();
  console.log('tick!')
}

console.log('The time is now', newWatch.getTime());
