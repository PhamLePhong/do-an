import React from 'react'

export default function amnhac() {
  return (
    <div>
      <>
  <header>
    <h1>Phim Âm Nhạc</h1>
    <input type="text" placeholder="Search" />
  </header>
  <main>
    <div className="movie">
      <img src="movie-poster.jpg" alt="Movie Poster" />
      <h2>Movie Title</h2>
      <p>Movie Description</p>
      <button>Watch Now</button>
    </div>
    <div className="movie">
      <img src="movie-poster.jpg" alt="Movie Poster" />
      <h2>Movie Title</h2>
      <p>Movie Description</p>
      <button>Watch Now</button>
    </div>
    {/* more movies */}
  </main>
</>

    </div>
  )
}
