import React from "react";
import "./home.css";
import profile from "../../assets/3cbc181e-833f-47a3-a293-54bf158e548d.png";
import shapeOne from "../../assets/icon-react.png";
import shapetwo from "../../assets/icon-js.png";
import shapethree from "../../assets/icon-node.png";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import CV from "../../assets/Currículo Jorge-2.pdf";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Olá, <span>Meu nome é</span>
          </p>

          <h1 className="home__title text-cs">
            <span>JOSÉ </span> JORGE
          </h1>

          <p className="home__job">
            <span className="text-cs">Eu sou um</span>{" "}
            <b>Desenvolvedor Full-Stack</b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img
                src={profile}
                alt="Minha imagem de perfil"
                className="home__profile"
              />
            </div>

            {/*<p className="home__data home__data-one">
                        <span className="text-lg">
                            2 <b>+</b>
                        </span>

                        <span className="text-sm text-cs">
                            Years of <span>Experience</span>
                        </span>
                    </p>

                    <p className="home__data home__data-two">
                        <span className="text-lg">30</span>

                        <span className="text-sm text-cs">
                            Completed <span>Projects</span>
                        </span>
                    </p>*/}

            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapetwo} alt="" className="shape shape__2" />
            <img src={shapethree} alt="" className="shape shape__3" />
          </div>

          <p className="home__text">
            Sou Natural de Rio Claro - Sp atualmente estudante de Engenharia da
            Computação e apaixonado por desenvolvimento Front-end utilizando
            Vue.js e back-end utilizando GO{" "}
          </p>

          <div className="home__socials">
            <a
              href="https://www.linkedin.com/in/jos%C3%A9-jorge-falasco-520505207/"
              className="home__social-link"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Jose6348"
              className="home__social-link"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.instagram.com/jose.jorge019/"
              className="home__social-link"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="home__btns">
            <a download="" href={CV} className="btn text-cs">
              Dowload CV
            </a>
            {/*<a href="" className="btn text-cs">Dowload CV</a>*/}
            <a href="#skills" className="hero__link text-cs">
              Minhas Skills
            </a>
          </div>
        </div>

        {/* <div className="section__deco deco__left"></div> */}
      </div>
    </section>
  );
};

export default Home;
