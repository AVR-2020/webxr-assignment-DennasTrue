AFRAME.registerComponent('videoplayer', {
  
    init: function () {
      
      let audiosource = document.querySelector('#musicpanel');

      let musicplay = () => {
      videoource.components.video.playVideo()
      }
      
      this.el.addEventListener('click', videoplay);

    }});
  
  AFRAME.registerComponent('videopstopper', {
    init: function () {
    
      let videosource = document.querySelector('#musicpanel');

      let musicstop = () => {
      audiosource.components.sound.stopSound()
      }
      
      this.el.addEventListener('click', musicstop);
      
    }});

// AFRAME.registerComponent('songpauser', {


//   init: function (){
//   let audiosource = document.querySelector('#musicpanel');
//   let musicpause = () =>{
//     audiosource.components.sound.pauseSound()
//   }
//     this.el.addEventListener('click', musicpause);


// }});

  AFRAME.registerComponent('songpauser', {
    init: function () {
    
      let audiosource = document.querySelector('#musicpanel');

      let musicpause = () => {
      audiosource.components.sound.pauseSound()
      }
      
      this.el.addEventListener('click', musicpause);
      
    }});
  