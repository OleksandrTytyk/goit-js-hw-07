import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imgGalleryRef = document.querySelector(".gallery");

const marcupList = galleryItems
  .map((img) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${img.original}">
        <img
          class="gallery__image"
          src="${img.preview}"
          data-source="${img.original}"
          alt="${img.description}"
        />
      </a>
    </div>`;
  })
  .join("");

imgGalleryRef.innerHTML = marcupList;

imgGalleryRef.addEventListener("click", onGalleryModalOpen);

function onGalleryModalOpen(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${evt.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: (instance) => window.addEventListener("keydown", onGalleryModalClose),
      onClose: (instance) => window.removeEventListener("keydown", onGalleryModalClose),
    }
  );
  function onGalleryModalClose(evt) {
    if (evt.code === 'Escape') {
     instance.close();
  }
}

  instance.show();
}
