import React from 'react'

export default function chientranh() {
  return (
    <div>
      <>
  <header>
    <h1>Phim Chiến Tranh</h1>
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
