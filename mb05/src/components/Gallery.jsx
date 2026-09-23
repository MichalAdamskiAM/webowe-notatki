import { Fragment } from 'react'
import photos from '../data/photos.json'
import PhotoCard from './PhotoCard.jsx'
import PhotoModal from './PhotoModal.jsx'

function Gallery() {
  return (
    <div id="galeria" className="row g-4">
      {photos.map(photo => (
        // Skrócony fragment <>...</> nie przyjmuje propsa `key`, dlatego
        // tutaj, gdzie zwracamy dwa elementy na jedną iterację .map()
        // (kartę i jej modalkę), używamy pełnej formy <Fragment key={...}>.
        <Fragment key={photo.id}>
          <div className="col-12 col-md-6 col-lg-4">
            <PhotoCard {...photo} />
          </div>
          <PhotoModal {...photo} />
        </Fragment>
      ))}
    </div>
  )
}

export default Gallery
