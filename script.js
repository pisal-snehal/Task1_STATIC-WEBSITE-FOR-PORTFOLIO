var typed = new Typed('#element', {
    strings: ['MSC-CS student', 'Web Developer', 'Web Designer', 'MERN Stack Developer'],
    typeSpeed: 50,
});

// Resume
document.querySelector('.btn').addEventListener('click', (e) => {
  e.preventDefault(); 
  alert('Resume download is not available.');
});

// GitHub
document.querySelectorAll('.btn')[1].addEventListener('click', (e) => {
  e.preventDefault(); 
  alert('GitHub profile is not linked.');
});


// btn hover color changes
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#2563eb';  
  });

  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#3b82f6';  
  });
});


// Greeting based on time 
const greetingDiv = document.getElementById('greeting');
const hours = new Date().getHours();
let greetingText = 'Hello';

if (hours < 12) {
  greetingText = 'Good Morning!';
} else if (hours < 18) {
  greetingText = 'Good Afternoon!';
} else {
  greetingText = 'Good Evening!';
}

greetingDiv.textContent = greetingText;
