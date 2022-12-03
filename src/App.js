import logo from "/src/images/logo.svg";
import bgHeroMobile from "/src/images/bg-hero-mobile.svg";
import bgHeroDesktop from "/src/images/bg-hero-desktop.svg";
import illustrationMockups from "/src/images/illustration-mockups.svg";

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
            <img className="hero__mockup" alt="Illustration mockup" src={illustrationMockups} />
          </div>
          <picture>
            <source srcSet={bgHeroDesktop} media="(min-width: 1024px)" />
            <img className="hero__bg" alt="" src={bgHeroMobile} />
          </picture>
        </section>
        <section className="features">
          <article>
            <img alt="" src="" />
            <h2>Grow Together</h2>
            <p>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </article>
          <article>
            <img alt="" src="" />
            <h2>Flowing Conversations</h2>
            <p>
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </p>
          </article>

          <article>
            <img alt="" src="" />
            <h2>Your Users</h2>
            <p>
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </article>
        </section>
        <section className="cta">
          <h2>Ready To Build Your Community?</h2>
          <button>Get Started For Free</button>
        </section>
      </main>
      <footer className="footer">
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </li>
          <li>+1-543-123-4567</li>
          <li>example@huddle.com</li>
        </ul>

        <nav>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>

            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </nav>

        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
