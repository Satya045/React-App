import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">SatyaApp</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" to="/">View Workout</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" to="/add">Add Workout</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" to="/graph">Graph</Link>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
  )
}