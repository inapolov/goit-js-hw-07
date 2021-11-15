import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const imagesList = galleryItems.map(image =>
    `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`
).join("");


galleryEl.insertAdjacentHTML("beforeend", imagesList);

galleryEl.addEventListener('click', onImageClick);

function onImageClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
    return
    };
    
    console.log(evt.target);
    var lightbox = new SimpleLightbox('.gallery a', { captionType:'attr', captionsData: 'alt', captionDelay:250, });   
    
}