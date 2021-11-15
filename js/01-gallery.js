import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery');

const imagesList = galleryItems.map(image =>
  `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`
).join("");


galleryEl.insertAdjacentHTML("beforeend", imagesList);


galleryEl.addEventListener('click', onImageClick);

function onImageClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
    return
    };
    const largeImage = evt.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img src="${largeImage}" width="800" height="600">
`)

    instance.show()
    
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            instance.close()
        }
    });    
    
}




