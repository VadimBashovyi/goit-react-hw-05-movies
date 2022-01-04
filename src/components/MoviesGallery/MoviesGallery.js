import React from 'react'
import MoviesGalleryItem from './MoviesGalleryItem/MoviesGalleryItem'

import styles from './MoviesGallery.module.css'

export default function MoviesGallery({ MoviesData }) {
  return (
    <ul className={styles.list}>
      {MoviesData.map(({ id, poster_path, title, release_date }, idx) => (
        <MoviesGalleryItem
          key={idx}
          id={id}
          poster={poster_path}
          title={title}
          release={release_date}
        />
      ))}
    </ul>
  )
}
