import React, { useState } from "react"; // Import useState
import "./Facilities.css";
import Background1 from "../../assets/images/facility-img-1.jpg";
import Background2 from "../../assets/images/facility-img-2.jpg";
import Outdoor1 from "../../assets/images/outdoor1.jpg";
import Outdoor2 from "../../assets/images/outdoor2.jpg";
import Outdoor3 from "../../assets/images/outdoor3.jpg";
import Outdoor4 from "../../assets/images/outdoor4.jpg";
import Indoor1 from "../../assets/images/indoor1.jpg";
import Indoor2 from "../../assets/images/indoor2.jpg";
import Indoor3 from "../../assets/images/indoor3.jpg";
import Indoor4 from "../../assets/images/indoor4.JPG";

const Facilities = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (section) => {
    setSelected(section);
  };

  return (
    <div className="facilities-container">
      <div
        className={`left-section ${selected === "outdoor" ? "selected" : ""}`}
        style={{
          backgroundImage: `url(${Background1})`,
          width: selected === "outdoor" ? "90%" : "50%",
          // filter: selected === "indoor" ? "blur(5px)" : "none"
        }}
        onClick={() => handleSelect("outdoor")}
      >
        <div
          className="content-box"
          style={{
            opacity: selected === "outdoor" ? "0" : "1",
          }}
        >
          <div className="content-body">
            {selected === "indoor" ? (
              <>
                <h2>Indoor Facilities</h2>

                <p>
                  Indoor basketball courts are usually made of hardwood,
                  providing a smooth surface and controlled environment for
                  consistent play.
                </p>
              </>
            ) : (
              <>
                <h2>Outdoor Facilities</h2>

                <p>
                  Outdoor basketball courts are <br /> often made of asphalt or{" "}
                  <br /> concrete, built for durability but <br /> exposed to
                  weather conditions.
                </p>
              </>
            )}
          </div>
          <div className="content-footer">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleSelect("outdoor");
              }}
            >
              See more
            </a>
          </div>
        </div>

        <div
          className="more-details"
          style={{
            opacity: selected === "outdoor" ? "1" : "0",
          }}
        >
          <div className="outdoor-head">
            <h1>What Are the Types of Outdoor Basketball Court Surfaces?</h1>
            <p>
              Do you know there are 4 different types of options available for
              outdoor basketball court surfaces? The surface is what most people
              think about when they first imagine a home basketball court and
              can also be considered the “material” from which the court is
              being built.  And in this post, I will help you to learn more
              about each type so that you can make a well-informed decision for
              your own outdoor basketball court surface.
            </p>
          </div>

          <div className="outdoor1">
            <h1>Concrete Basketball Court Surface</h1>
            <div className="container-content">
              <p>
                Concrete is the most basic outdoor basketball court surface. In
                most cases, homeowners opt-in for concrete because it’s the most
                convenient. Just pour the mix, level the surface, let it dry,
                and play ball. However, there are some disadvantages to concrete
                basketball surfaces. The major one is that it could crack and
                peel under harsh conditions (high and low temperatures). So
                don’t expect it to last more than a decade. The ball bounce is
                solid, but it does make a lot of noise compared to other outdoor
                basketball court surfaces on this list.
              </p>
              <div
                className="img-content"
                style={{
                  backgroundImage: `url(${Outdoor1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </div>
          <h1>Asphalt Basketball Court Surface</h1>
          <div className="container-content">
            <div
              className="img-content"
              style={{
                backgroundImage: `url(${Outdoor2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <p>
              Asphalt or blacktop is one of the most popular basketball court
              surfaces, hands down. The asphalt tarmacadam is a mixture made of
              stone and tar mix. It needs a stone subfloor. You have to pour it
              and then level it. The interesting point is that this surface is
              customizable in terms of colours and lining when dry. Asphalt
              tarmacadam also offers phenomenal slip resistance when wet. You
              can expect great ball bounce and sound reduction. However, when
              you fall on it, be ready to wince in pain. The surface easily
              lasts for an average of 15 years. Note: Asphalt surface is usually
              laid over concrete or gravel base.
            </p>
          </div>
          <h1>EPDM Basketball Court Surface</h1>
          <div className="container-content">
            <p>
              EPDM or polymeric rubber surface is a fan favourite for outdoor
              basketball courts. It is made from high-grade polymeric rubber
              obtained from granules of EPDM rubber bonded with (PU)
              Polyurethane. The surface is pretty soft as compared to asphalt
              tarmacadam. And the bounce and performance are uncompromised. The
              biggest advantage of using EPDM is its customizable bounce. This
              can be altered through shock pads beneath the polymeric top
              surface. It helps in prevention of the injuries as well. Note:
              EPDM surface is usually laid over concrete.
            </p>

            <div
              className="img-content"
              style={{
                backgroundImage: `url(${Outdoor3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>

          <h1>Sports Snapping Tiles</h1>
          <div className="container-content">
            <div
              className="img-content"
              style={{
                backgroundImage: `url(${Outdoor4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <p>
              Basketball court tiles are nowadays very popular. You can
              personalize them according to your space, and choice, as well as
              can utilize a variety of colours on them. Yes, you can snap these
              tiles and create a grid. They are easy to install, softer, and
              prevent injury, and the performance is also not too bad. Moreover,
              tiles are durable, relatively cheap, and easy to clean. Note:
              Sports tiles are laid over the concrete surface.
            </p>
          </div>
        </div>
      </div>

      <div
        className={`right-section ${selected === "indoor" ? "selected" : ""}`}
        style={{
          backgroundImage: `url(${Background2})`,
          width: selected === "indoor" ? "90%" : "50%",
        }}
        onClick={() => handleSelect("indoor")}
      >
        <div
          className="content-box"
          style={{
            opacity: selected === "indoor" ? "0" : "1",
          }}
        >
          <div className="content-body">
            {selected === "outdoor" ? (
              <>
                <h2>Outdoor Facilities</h2>

                <p>
                  Outdoor basketball courts are <br /> often made of asphalt or{" "}
                  <br /> concrete, built for durability but <br /> exposed to
                  weather conditions.
                </p>
              </>
            ) : (
              <>
                <h2>Indoor Facilities</h2>

                <p>
                  Indoor basketball courts are usually made of hardwood,
                  providing a smooth surface and controlled environment for
                  consistent play.
                </p>
              </>
            )}
          </div>
          <div className="content-footer">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleSelect("indoor");
              }}
            >
              See more
            </a>
          </div>
        </div>
        <div
          className="more-details"
          style={{
            opacity: selected === "indoor" ? "1" : "0",
          }}
        >
          <div className="indoor-head">
            <h1>What Are the Types of Indoor Basketball Court Surfaces?</h1>
            <p>
              Indoor basketball courts typically have specific surface
              requirements to ensure player safety and performance. Various
              surface types are designed to offer optimal bounce, grip, and
              durability. Here, we’ll explore the most common types of indoor
              court surfaces to help you decide which is best for your
              basketball facility.
            </p>
          </div>

          <div className="indoor1">
            <h1>Maple Hardwood Basketball Court Surface</h1>
            <div className="container-content">
              <p>
                Maple hardwood is the gold standard for indoor basketball
                courts, widely recognized for its excellent durability and
                performance. This dense wood provides a smooth, consistent
                bounce and is resistant to scuffing. The bright, glossy finish
                also makes it visually appealing and helps improve game
                visibility. However, hardwood surfaces require regular
                maintenance, including refinishing and cleaning, to retain their
                quality.
              </p>
              <div
                className="img-content"
                style={{
                  backgroundImage: `url(${Indoor1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </div>

          <h1>Vinyl Basketball Court Surface</h1>
          <div className="container-content">
            <div
              className="img-content"
              style={{
                backgroundImage: `url(${Indoor2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <p>
              Vinyl is an affordable option for indoor courts, often used in
              multi-purpose gymnasiums. It is made from layers of synthetic
              materials with shock-absorbing properties, providing a cushioned
              surface that is easy on players’ joints. Vinyl surfaces are
              available in various colors and styles, are low-maintenance, and
              can withstand high foot traffic. However, they may wear down
              faster than hardwood, especially in competitive environments.
            </p>
          </div>

          <h1>Polyurethane Basketball Court Surface</h1>
          <div className="container-content">
            <p>
              Polyurethane surfaces are popular in both school and recreational
              facilities due to their durability and versatility. This synthetic
              surface offers excellent shock absorption, minimizing injury risk,
              and provides consistent ball bounce. Polyurethane is
              slip-resistant and can handle heavy use while requiring minimal
              maintenance. It is also customizable in terms of thickness and
              color.
            </p>
            <div
              className="img-content"
              style={{
                backgroundImage: `url(${Indoor3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>

          <h1>Rubber Basketball Court Surface</h1>
          <div className="container-content">
            <div
              className="img-content"
              style={{
                backgroundImage: `url(${Indoor4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <p>
              Rubber surfaces are ideal for multipurpose indoor courts,
              providing a softer, injury-resistant option for players. They are
              made from recycled rubber or synthetic rubber, offering excellent
              grip and resilience. Rubber floors are durable, cost-effective,
              and require minimal upkeep. However, they may not provide the same
              consistent bounce as hardwood or vinyl, which may impact
              competitive play.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
