const refs = {
  days: document.querySelector('.value[data-value="days"]'),
  hours: document.querySelector('.value[data-value="hours"]'),
  mins: document.querySelector('.value[data-value="mins"]'),
  secs: document.querySelector('.value[data-value="secs"]')
}
 
 class CountdownTimer {
   constructor({selector, targetDate}) {
     this.selector = selector;
     this.targetDate = targetDate;
     this.intervalId = null;
     this.start();
   }
    start (){
      this.intervalId = setInterval(() => {
    const curentTime = Date.now();
    const deltaTime = this.targetDate - curentTime;
    const time = this.getTimeComponent(deltaTime);

    this.updateClockFace(time);

  }, 1000);
    }
   

   getTimeComponent(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
   
    return { days, hours, mins, secs };
  }

   pad(value){
    return String(value).padStart(2, '0');
 }

  updateClockFace ({days, hours, mins, secs}){
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}
 }



new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2019'),
  });



   
