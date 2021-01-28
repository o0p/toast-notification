const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const msg = [
    'Message 1',
    'Message 2',
    'Message 3',
    'Message 4',
];

button.addEventListener('click', () => createNotification());

function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.innerText = getRandomMsg();
    toasts.appendChild(notif)
}

function getRandomMsg() {
    return msg[Math.floor(Math.random() * msg.length)]
}