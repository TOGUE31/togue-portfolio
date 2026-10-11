document.documentElement.classList.add('js');

const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');

function setMenu(open) {
  menu.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
}

burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

document.getElementById('an').textContent = new Date().getFullYear();

// Ce formulaire n'envoie rien à un serveur : il ouvre WhatsApp avec un message prérempli.
document.getElementById('wa-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const nom = e.target.nom.value.trim();
  const msg = e.target.msg.value.trim();
  const texte = `Bonjour Togué, je suis ${nom}. ${msg}`;
  window.open('https://wa.me/22656995313?text=' + encodeURIComponent(texte), '_blank', 'noopener');
});
