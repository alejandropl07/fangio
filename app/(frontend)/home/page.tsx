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
  heroDescriptions: `Es un placer presentarles dos espacios que celebran la magia de la gastronomía desde miradas distintas, pero igualmente memorables: Asia de Cuba y Fangio Habana. Ambos nacen del deseo de crear momentos que permanezcan, de ofrecer sabores que conecten con la emoción y de recibir a cada invitado con un sentido profundo de hospitalidad y excelencia.

Asia de Cuba es un viaje sensorial donde Oriente y el Caribe se encuentran con armonía y sorpresa. Sus platos, llenos de color, textura y energía, despiertan curiosidad y entusiasmo desde el primer bocado. 

Fangio Habana, en cambio, abraza la elegancia serena y el encanto de lo clásico. Su cocina reinterpreta tradiciones con un respeto profundo por el buen gusto, ofreciendo creaciones que reconfortan, emocionan y despiertan nostalgia. 

Juntos, estos dos restaurantes prometen regalar experiencias que conmuevan, inspiren y reúnan. Les invitamos a descubrirlos y a dejarse sorprender por la sensibilidad, el sabor y la dedicación que los hacen únicos.`,

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
                  className="open-sans-font p-3 mb-5 pb-5"
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
