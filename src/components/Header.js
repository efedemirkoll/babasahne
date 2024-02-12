import React from 'react'
import '../Style/Header.css';
import logo from "../img/logo.jpg";

function header() {
  return (

      <nav class="navbar navbar-expand-lg">
        <div className='container-fluid'>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">

            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link" href="#">ANA SAYFA</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">OYUNLAR</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">KONUK OYUNLAR</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">BABA TAKVİM</a>
              </li>
            </ul>

            <div className='headerorta'>
              <img className='headerlogo' src={logo}></img>
            </div>


            <ul class=" navbar-nav ">
              <li class="nav-item">
                <a class="nav-link" href="#">TURNELERİMİZ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">GALERİ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">SAHNE HAKKINDA</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">İLETİŞİM</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default header