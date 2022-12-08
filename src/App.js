import logo from "/src/images/logo.svg";
import logoWhite from "/src/images/logo-white.svg";
import bgHeroMobile from "/src/images/bg-hero-mobile.svg";
import bgHeroDesktop from "/src/images/bg-hero-desktop.svg";
import illustrationMockups from "/src/images/illustration-mockups.svg";
import illustrationFlowingConversation from "/src/images/illustration-flowing-conversation.svg";
import illustrationGrowTogether from "/src/images/illustration-grow-together.svg";
import illustrationYourUsers from "/src/images/illustration-your-users.svg";

function App() {
  return (
    <div>
      <header className="header">
        <div className="header__container">
          <img className="header__img" alt="Huddle logo" src={logo} />
          <button className="header__btn">Try It Free</button>
        </div>
      </header>
      <main className="main">
        <section className="hero">
          <div className="hero__container">
            <div className="hero__main">
              <h1 className="hero__title">
                Build The Community Your Fans Will Love
              </h1>
              <p className="hero__text">
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>

              <button className="hero__btn btn">Get Started For Free</button>
            </div>
            <img
              className="hero__mockup"
              alt="Illustration mockup"
              src={illustrationMockups}
            />
          </div>
          <picture>
            <source srcSet={bgHeroDesktop} media="(min-width: 1024px)" />
            <img className="hero__bg" alt="" src={bgHeroMobile} />
          </picture>
        </section>
        <section className="features">
          <article className="features__card">
            <img
              className="features__img"
              alt="Two people standing apart"
              src={illustrationGrowTogether}
            />
            <div className="features__container">
              <h2 className="features__title">Grow Together</h2>
              <p className="features__text">
                Generate meaningful discussions with your audience and build a
                strong, loyal community. Think of the insightful conversations
                you miss out on with a feedback form.
              </p>
            </div>
          </article>
          <article className="features__card">
            <img
              className="features__img"
              alt="Four people seated around a table"
              src={illustrationFlowingConversation}
            />
            <div className="features__container">
              <h2 className="features__title">Flowing Conversations</h2>
              <p className="features__text">
                You wouldn't paginate a conversation in real life, so why do it
                online? Our threads have just-in-time loading for a more natural
                flow.
              </p>
            </div>
          </article>

          <article className="features__card">
            <img
              className="features__img"
              alt="Three people greeting eachother from a distance"
              src={illustrationYourUsers}
            />
            <div className="features__container features__container--users">
              <h2 className="features__title">Your Users</h2>
              <p className="features__text">
                It takes no time at all to integrate Huddle with your app's
                authentication solution. This means, once signed in to your app,
                your users can start chatting immediately.
              </p>
            </div>
          </article>
        </section>
        <section className="cta">
          <h2 className="cta__title">Ready To Build Your Community?</h2>
          <button className="cta__btn btn">Get Started For Free</button>
        </section>
      </main>
      <div className="bg-alt">
        <footer className="footer">
          <img className="footer__logo" alt="Huddle logo" src={logoWhite} />
          <div className="footer__container">
            <ul className="footer__info">
              <li className="footer__info-li">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.1875 3C2.74018 3 0 5.79 0 9.3C0 13.98 6.1875 21 6.1875 21C6.1875 21 12.375 13.98 12.375 9.3C12.375 5.79 9.63482 3 6.1875 3ZM6.1875 11.55C4.95 11.55 3.97768 10.56 3.97768 9.3C3.97768 8.04 4.95 7.05 6.1875 7.05C7.425 7.05 8.39732 8.04 8.39732 9.3C8.39732 10.56 7.425 11.55 6.1875 11.55Z"
                    fill="white"
                  />
                </svg>
                <p className="footer__info-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </li>
              <li className="footer__info-li">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 15.5C18.8 15.5 17.6 15.3 16.4 14.9C16.1 14.8 15.7 14.9 15.4 15.1L13.2 17.3C10.4 15.9 8.1 13.5 6.6 10.7L8.8 8.5C9.1 8.2 9.2 7.8 9 7.5C8.7 6.4 8.5 5.2 8.5 4C8.5 3.4 8.1 3 7.5 3H4C3.4 3 3 3.4 3 4C3 13.4 10.6 21 20 21C20.6 21 21 20.6 21 20V16.5C21 15.9 20.6 15.5 20 15.5ZM19 12H21C21 7 17 3 12 3V5C15.9 5 19 8.1 19 12ZM15 12H17C17 9.2 14.8 7 12 7V9C13.7 9 15 10.3 15 12Z"
                    fill="white"
                  />
                </svg>
                <p className="footer__info-p">+1-543-123-4567</p>
              </li>
              <li className="footer__info-li">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H18V9.2L12 13L6 9.2V18H4V6H5.2L12 10.2L18.8 6H20V18Z"
                    fill="white"
                  />
                </svg>
                <p className="footer__info-p">example@huddle.com</p>
              </li>
            </ul>

            <ul className="footer__links">
              <li>
                <a className="footer__link" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="footer__link" href="#">
                  What We Do
                </a>
              </li>
              <li>
                <a className="footer__link" href="#">
                  FAQ
                </a>
              </li>

              <li>
                <a className="footer__link" href="#">
                  Career
                </a>
              </li>
              <li>
                <a className="footer__link" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="footer__link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>

            <ul className="footer__socials">
              <li>
                <a className="footer__social footer__social--facebook" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>{" "}
                </a>
              </li>
              <li>
                <a className="footer__social" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                </a>
              </li>
              <li>
                <a className="footer__social" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
              </li>
            </ul>
            <p className="footer__copyright">
              &copy; Copyright 2018 Huddle. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
