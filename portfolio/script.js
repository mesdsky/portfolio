const dialog = document.querySelector('#case-dialog');
const openButton = document.querySelector('#open-case');
const closeButton = document.querySelector('.dialog-close');

openButton.addEventListener('click', () => dialog.showModal());
closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

function updateClock() {
  const time = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hour12: false
  }).format(new Date());
  document.querySelector('#clock').textContent = `${time} WIB`;
}
updateClock();
setInterval(updateClock, 60000);
