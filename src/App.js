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
        <img className="header__img" alt="Huddle logo" src={logo} />
        <button className="header__btn">Try It Free</button>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
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
              <a className="footer__link" href="#">About Us</a>
            </li>
            <li>
              <a className="footer__link" href="#">What We Do</a>
            </li>
            <li>
              <a className="footer__link" href="#">FAQ</a>
            </li>

            <li>
              <a className="footer__link" href="#">Career</a>
            </li>
            <li>
              <a className="footer__link" href="#">Blog</a>
            </li>
            <li>
              <a className="footer__link" href="#">Contact Us</a>
            </li>
          </ul>

          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
