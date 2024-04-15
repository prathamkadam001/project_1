// Header

document.getElementById('Header').innerHTML=(
    `<div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img class="logo" src="assets/image/logo.png" alt="logo">
        </a>
        <div>
        <label class="hamburger">
          <input type="checkbox">
            <svg viewBox="0 0 32 32" class="navbar-toggler nav_main" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
              <path class="line" d="M7 16 27 16"></path>
            </svg>
        </label>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="Menu">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item hoverme px-3">
                  <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item hoverme px-3">
                  <a class="nav-link active" aria-current="page" href="About.html">About</a>
                </li>
                <li class="nav-item hoverme px-3">
                  <a class="nav-link active" aria-current="page" href="Menu.html">Menu</a>
                </li>
                <li class="nav-item hoverme px-3 d-none d-md-block">
                  <a class="nav-link active" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-bs-whatever="@mdo" aria-current="page" href="/website/booking.html">Book Table</a>
                </li>
                <li class="nav-item hoverme px-3">
                  <a class="nav-link active" aria-current="page" href="#Contact">Contact</a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>`
);

// footer 

document.getElementById('Footer').innerHTML=(
  `<footer class="footer">
  <div class="container row">
    <div class="footer-col">
      <h4>company</h4>
      <ul>
        <li><a href="file:///C:/website/index.html">Home</a></li>
        <li><a href="file:///C:/website/about.html">About Us</a></li>
        <li><a href="file:///C:/website/menu.html">Menu</a></li>
        <li><a href="#">visit website</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>get help</h4>
      <ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">shipping</a></li>
        <li><a href="#">returns</a></li>
        <li><a href="#">order status</a></li>
        <li><a href="#">payment options</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>online shop</h4>
      <ul>
        <li><a href="#">download</a></li>
        <li><a href="#">changelog</a></li>
        <li><a href="#">github</a></li>
        <li><a href="#">all version</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>follow us</h4>
      <div class="social-links">
        <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://twitter.com/"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://in.linkedin.com/"><i class="fa-brands fa-linkedin-in"></i></a>
      </div>
    </div>
    <div class="row w-100" style="border-top: 1px solid rgb(49, 47, 47); color: white; margin-bottom: 0px;">
      <div class="col-10" style="margin-top: 40px;">copyright @2024 All rights  reserved I this website is designed By- <span class="pratham h4">Pratham Kadam</span></div>
      <div class="col-2" style="margin-top: 25px;">
        <a href="#home"><button class="button3">
          <svg class="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </button>
        </a>
      </div>
    </div>
  </div>
</footer>`
);

document.getElementById('Booking').innerHTML=(
  `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" style="width: 730px;margin-left: -100px;">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Book The Table</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="width: 700px;">
          <div style="width: 700px;">
                  <div class="row justify-content-center">
                      <div class="col-md-10 p-5 form-wrap ">
                          <form action="#">
                          <div class="row mb-4">
                              <div class="form-group col-md-4">
                                  <label for="name" class="label">Name</label>
                                  <div class="form-field-icon-wrap">
                                      <span class="icon ion-android-person"></span>
                                      <input type="text" class="form-control" id="name">
                                  </div>
                              </div>
                              <div class="form-group col-md-4">
                                  <label for="email" class="label">Email</label>
                                  <div class="form-field-icon-wrap">
                                      <span class="icon ion-email"></span>
                                      <input type="email" class="form-control" id="email">
                                  </div>
                              </div>
                              <div class="form-group col-md-4">
                                  <label for="phone" class="label">Phone</label>
                                  <div class="form-field-icon-wrap">
                                      <span class="icon ion-android-call"></span>
                                      <input type="text" class="form-control" id="phone">
                                  </div>
                              </div>
                              <div class="form-group col-md-4">
                                  <label for="persons" class="label">Number of Persons</label>
                                  <div class="form-field-icon-wrap">
                                      <span class="icon ion-android-arrow-dropdown"></span>
                                      <select name="persons" id="persons" class="form-control">
                                          <option value="">1 person</option>
                                          <option value="">2 persons</option>
                                          <option value="">3 persons</option>
                                          <option value="">4 persons</option>
                                          <option value="">5+ persons</option>
                                      </select>
                                  </div>
                              </div>
                              <div class="form-group col-md-4">
                                  <label for="date" class="label">Date</label>
                                  <div class="form-field-icon-wrap">
                                      <span class="icon ion-calendar"></span>
                                      <input type="text" class="form-control" id="date">
                                  </div>
                              </div>
                              <div class="form-group col-md-4">
                                  <label for="time" class="label">Time</label>
                                  <div class="form-field-icon-wrap">
                                      <span class="icon ion-android-time"></span>
                                      <input type="text" class="form-control ui-timepicker-input" id="time" autocomplete="off">
                                  </div>
                              </div>
                      </div>
                      <div class="row justify-content-center">
                          <div class="col-md-4 button">
                              <a href="file:///C:/website/index.html"><input type="submit" class="button2" value="Reserve Now"></a>
                          </div>
                      </div>
                      </form>
                      </div>
                  </div>
          </div>
      </div>
    </div>
  </div>
</div>`
);
