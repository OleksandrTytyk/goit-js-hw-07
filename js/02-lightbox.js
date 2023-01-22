import { galleryItems } from './gallery-items.js';

const imgGalleryRef = document.querySelector(".gallery");

const marcupList = galleryItems.map(img => {
    return `<a class="gallery__item" href="${img.original}">
  <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
</a>`;
}).join('')

imgGalleryRef.innerHTML = marcupList;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: 'alt',
  captionDelay: '250'
});
