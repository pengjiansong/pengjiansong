const filters = document.querySelectorAll('[data-filter]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  document.querySelectorAll('[data-category]').forEach(card => { card.hidden = button.dataset.filter !== '全部作品' && card.dataset.category !== button.dataset.filter; });
}));
const viewer = document.querySelector('#viewer');
if (viewer) {
  document.querySelectorAll('[data-full]').forEach(button => button.addEventListener('click', () => {
    const image = viewer.querySelector('img');
    image.src = button.dataset.full;
    image.alt = button.dataset.alt;
    viewer.showModal();
    viewer.scrollTop = 0;
    document.body.classList.add('viewing');
  }));
  viewer.querySelector('.close-viewer').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => { if(event.target === viewer) viewer.close(); });
  viewer.addEventListener('close', () => document.body.classList.remove('viewing'));
}

// Only one clip plays at a time.
document.querySelectorAll("video").forEach(video => video.addEventListener("play", () => { document.querySelectorAll("video").forEach(other => { if(other !== video) other.pause(); }); }));
