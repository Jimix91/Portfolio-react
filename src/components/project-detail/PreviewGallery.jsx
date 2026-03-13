function PreviewGallery({ images, onOpenImage }) {
  if (!images?.length) return null;

  return (
    <div className="showcase-gallery">
      {images.map((image) => (
        <figure className="showcase-gallery-item" key={image.alt}>
          <button
            type="button"
            className="showcase-image-button"
            onClick={() => onOpenImage(image)}
            aria-label={`Expand image: ${image.alt}`}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </button>
          <figcaption>{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default PreviewGallery;
