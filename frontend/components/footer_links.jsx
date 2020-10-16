import React from 'react'

const footerLinks = () => {
    return(
        <div className="footer-container">
          <div className="footer-border">
            <footer className="footer-nav">
              <div className="footer-title">BidUp</div>
                <ul className="footer-links">
                  <a href="https://github.com/pmin825/BidUp/wiki">
                    <li><i class="fab fa-github"></i></li>
                  </a>
                  <a href="https://www.linkedin.com/in/peter-min-02a62a13a/">
                    <li><i class="fab fa-linkedin"></i></li>
                  </a>
                </ul>
            </footer>
          </div>
        </div> 
    )
}

export default footerLinks; 

