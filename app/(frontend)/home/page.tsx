"use client";
import React, { useState } from "react";
import heroImgMobile from "@/public/assets/img/hero/img-mobile.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Footer from "@/src/components/Footer";
import { useAppSelector } from "@/src/redux/hooks";

const heroContent = {
  heroImage: "/assets/img/hero/dark.png",
  heroMobileImage: heroImgMobile,
  heroTitleName: "Dos experiencias que enamoran: Asia de Cuba & Fangio Habana",
  heroDesignation: "",
  heroDescriptions: `Eres de la casa y por eso queremos invitarte a celebrar la magia de la gastronomía desde dos miradas distintas, pero igualmente memorables: Asia de Cuba y Fangio Habana.

                  Prometemos regalar experiencias que conmuevan, inspiren y reúnan. Déjate sorprender por la sensibilidad, el sabor y la dedicación que nos hacen únicos. 

                  Te esperamos.`,

  // heroBtn: "Más sobre nosotros",
};

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  const { isDark } = useAppSelector((state) => state.ui);

  const router = useRouter();

  return (
    <>
      <div className="home mb-5">
        <div
          className="container-fluid main-container container-home p-0 g-0 "
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="color-block d-none d-lg-block"></div>
          <div className="row home-details-container align-items-center">
            <div
              className="col-lg-4 bg position-fixed d-none d-lg-block"
              style={{ backgroundImage: `url(${heroContent.heroImage})` }}
            ></div>
            <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
              <div>
                <Image
                  src={heroContent.heroMobileImage}
                  className="img-fluid main-img-mobile d-sm-block d-lg-none"
                  alt="hero man"
                  // style={{width:'100%',height:'100%'}}
                />
                <h1 className="text-uppercase poppins-font mt-10">
                  {heroContent.heroTitleName}
                  <span>{heroContent.heroDesignation}</span>
                </h1>

                <p
                  className="open-sans-font p-3"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {heroContent.heroDescriptions}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
