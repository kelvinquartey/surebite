import { useEffect } from "react";
import { menu_list } from "../../assets/frontend_assets/assets";
import "./About.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About SureBite</h1>
        <p>
          At <strong>SureBite</strong>, food is more than just a meal - it's an
          experience. We are dedicated to serving delicious,
          freshly prepared meals across a wide variety of cuisines. From
          comforting starters to hearty rice dishes, sizzling shawarmas,
          indulgent desserts, and refreshing drinks - SureBite has something for
          everyone.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          SureBite was founded with a simple vision: to make quality, flavorful,
          and diverse meals easily accessible to our community. Every dish is
          crafted with passion, using the freshest ingredients and authentic
          recipes that bring out the best taste in every bite. Whether you're
          grabbing a quick lunch, enjoying dinner with loved ones, or craving a
          midnight snack, SureBite delivers satisfaction straight from our
          kitchen to your door.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Offer</h2>
        <div className="menu-grid">
          {menu_list.map((menu, index) => (
            <div key={index} className="menu-card">
              <img src={menu.menu_image} alt={menu.menu_name} />
              <h3>{menu.menu_name}</h3>
            </div>
          ))}
        </div>
        <p>
          Our diverse menu features everything from savory <em>Starters</em> and{" "}
          <em>Shawarmas</em>, to rich <em>Pasta</em>, <em>Rice Dishes</em>,{" "}
          <em>Pizzas</em>, refreshing <em>Salads</em>, indulgent <em>Deserts</em>{" "}
          and more. With over <strong>100 dishes</strong> to choose from, there's
          always something to satisfy your cravings.
        </p>
      </section>


      <section className="about-section highlight">
        <h2>Why Choose SureBite?</h2>
        <ul>
          <li> Wide variety of meals across different cuisines.</li>
          <li> Fresh ingredients and authentic recipes.</li>
          <li> Affordable prices without compromising quality.</li>
          <li> Quick and reliable delivery by our in-house team.</li>
          <li> A menu that caters to everyone - meat lovers, vegans, and more.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our Commitment</h2>
        <p>
          We're committed to creating not just meals, but memorable food
          experiences. Our chefs continuously innovate and refine our menu to
          bring you exciting flavors. And because your satisfaction is our
          priority, we listen to your feedback to keep improving.
        </p>
      </section>

      <section className="about-closing">
        <h2>Join the SureBite Experience</h2>
        <p>
          Hungry? Explore our menu and let us serve you flavors that will keep
          you coming back for more. With SureBite, every bite is a promise of
          quality, taste, and happiness.
        </p>
      </section>
    </div>
  );
};

export default About;
