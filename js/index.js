const menu = () => {
  let button = document.getElementById('hamburguer')
  let menu = document.getElementById('menu')

  if (button.classList.contains('open') && menu.classList.contains('open')) {
    button.classList.add('close');
    button.classList.remove('open');
    menu.classList.add('close');
    menu.classList.remove('open');
  } else if (button.classList.contains('close') && button.classList.contains('close')) {
    button.classList.add('open');
    button.classList.remove('close');
    menu.classList.add('open');
    menu.classList.remove('close');
  }
}