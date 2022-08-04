export default function Footer() {
  return (
    <footer class="footer__bg">
      <div class="footer__container">
          <div class="footer__container--left">
              <div class="footer__section--header">
                <img src="/resources/images/examine_logo_white.png"/>
              </div>
              <div class="footer__title">Never miss an update!</div>
              <div class="footer__subtitle">We are always updating our research and adding new stuff. Sign-up and always stay on top of our updates!</div>
              <div class="footer__search relative">
                <input id="footerSearchInput" placeholder="Your Email Address"></input>
                <img class='absolute' src="/resources/images/send.png"/>
                </div>
          </div>

          <div class="footer__container--right md:mt-5 ">
              <div class="footer__box">
                  <div class="footer__box--title">About Us</div>
                    <ul>
                        <li class="footer__box--link">Our Story</li>
                        <li class="footer__box--link">Our Team</li>
                        <li class="footer__box--link">Our Editorial</li>
                        <li class="footer__box--link">Policy Our</li>
                        <li class="footer__box--link">Mistakes</li>
                    </ul>
              </div>

              <div class="footer__box">
                  <div class="footer__box--title">Resources</div>
                  <ul>
                      <li class="footer__box--link">Continuing Education</li>
                      <li class="footer__box--link">For Journalists</li>
                      <li class="footer__box--link">Student Discount</li>
                      <li class="footer__box--link">Senior Discount</li>
                  </ul>
              </div>

              <div class="footer__box">
                  <div class="footer__box--title">Social</div>
                  <ul>
                      <li class="footer__box--link">Facebook</li>
                      <li class="footer__box--link">Twitter</li>
                      <li class="footer__box--link">Linkedin</li>
                      <li class="footer__box--link">Email Us</li>
                  </ul>
              </div>
          </div>
      </div>

      <div class="footerBottom">
        <div class="footerBottom__left">Copyright 2010 - 2022 Examine Inc.</div>
        <div class="footerBottom__right">Privacy Policy  I  Website Terms</div>
      </div>
    </footer>
  );
}
