window.onload = function () {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
      const text = box.querySelector('.text');
      setTimeout(() => {
        text.style.display = 'block';
        box.style.border = '2px solid ' + getRandomColor();
      }, index * 1000);
    });
  };
  
  function getRandomColor() {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'cyan', 'orange'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  function submitData(){
    fadeOutPage();
  }
  // function submitData() {
  //   const userText = document.getElementById('userInput').value;
  //   if (userText.length > 0) {
  //     sendEmail(userText);
  //     fadeOutPage();
  //   }
  // }
  
  // function sendEmail(content) {
  //   const email = "nandalanithin26@gmail.com";
  //   // Simulating sending an email via a backend service or email API
  //   console.log('Sending data to: ' + email);
  //   console.log('Content: ' + content);
  // }
  function fadeOutPage(){
    window.location.href = 'https://birthday.mewtru.com/cswMK8Gu';
  }
  // function fadeOutPage() {
  //   document.querySelector('.container').style.opacity = 0;
  //   document.getElementById('thankYouMessage').style.display = 'block';
  //   setTimeout(() => {
  //     window.location.href = 'https://birthday.mewtru.com/cswMK8Gu'; // Redirect to another page
  //   }, 2000);
  // }
