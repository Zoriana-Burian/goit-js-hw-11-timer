const refs = {
  days: document.querySelector('value[data-value="days"]'),
  hours: document.querySelector('value[data-value="hours"]'),
  mins: document.querySelector('value[data-value="mins"]'),
  secs: document.querySelector('value[data-value="secs"]')
}
 
 class CountdownTimer {
   constructor({selector, targetDate}) {
     this.selector = selector;
     this.targetDate = targetDate;
     this.intervalId = null;
   }
   
   intervalId = setInterval(() => {
    const curentTime = Date.now();
    const deltaTime = this.targetDate - curentTime;
    const time = getTimeComponent(deltaTime);

  }, 1000);

   getTimeComponent(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
   
    return { days, hours, mins, secs };
  }
 }



new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2019'),
  });



  function pad(value){
     return String(value).padStart(2, '0');
  }
