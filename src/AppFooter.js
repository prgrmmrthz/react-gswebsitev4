import React from "react";

function AppFooter() {
  return (
    <div id="about" className="container">
      <footer className="py-5">
        <div className="d-flex justify-content-between py-4 my-4 border-top">
          <p>&copy; 2022 Golden Seed. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a
                className="link-dark"
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/people/Golden-Seed/100070871015444/"
              >
                <i class="bi bi-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default AppFooter;
