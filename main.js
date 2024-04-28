


function goTo() {
      //all variables
  var input = document.querySelector('input').value;
  const cut = input.substring(input.indexOf('.c'));
  const frame = document.querySelector('iframe');
  let footer = document.querySelector('.footer');
  let header = document.querySelector('.word');
  let head_image = document.querySelector('#word');
  let cont = document.querySelector('.head');
  let link = document.querySelector('#linked');
  let bar = document.getElementById('Pbar');

  //if statements
  if (input === null) {
    alert('input empty, please enter url');
  }
  if (cut == '.com') {
    bar.style.display = 'block'
    location.href = input;
    
  }

  if (cut !== '.com') {
    bar.style.display = 'block';
    bar.value = '50';
    frame.src = 'http://www.bing.com/search?q=' + input;
    frame.style.display = 'block';

    footer.style.display = 'none';
    header.style.display = 'none';
    head_image.style.display = 'none';
    cont.style.display = 'none';
    link.href = 'next.css';

  }
}
