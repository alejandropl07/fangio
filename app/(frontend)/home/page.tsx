"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import heroImgMobile from "@/public/assets/img/hero/img-mobile.png";
import cancelImg from "@/public/assets/img/cancel.svg";
import AboutMain from "../about/page";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Footer from "@/src/components/Footer";
import Services from "../services/page";
// import Blog from "../blog/page";
import { useAppSelector } from "@/src/redux/hooks";

const heroContent = {
  heroImage: "/assets/img/hero/dark.png",
  heroMobileImage: heroImgMobile,
  heroTitleName: "Dos experiencias que enamoran: Asia de Cuba & Fangio Habana",
  heroDesignation: "",
  heroDescriptions: `Es un verdadero placer presentarles dos espacios que celebran la magia de la gastronomía desde miradas distintas, pero igualmente memorables: Asia de Cuba y Fangio Habana. Ambos nacen del deseo de crear momentos que permanezcan, de ofrecer sabores que conecten con la emoción y de recibir a cada invitado con un sentido profundo de hospitalidad y excelencia.

Asia de Cuba es un viaje sensorial donde Oriente y el Caribe se encuentran con armonía y sorpresa. Sus platos, llenos de color, textura y energía, despiertan curiosidad y entusiasmo desde el primer bocado. Es un lugar que vibra: moderno, luminoso, pensado para quienes disfrutan descubrir nuevos sabores sin renunciar a la calidez de lo local.

Fangio Habana, en cambio, abraza la elegancia serena y el encanto de lo clásico. Su cocina reinterpreta tradiciones con un respeto profundo por el buen gusto, ofreciendo creaciones que reconfortan, emocionan y despiertan nostalgia. Es un espacio donde el tiempo parece detenerse, donde cada detalle —del servicio al ambiente— está concebido para que los comensales se sientan cuidados y apreciados.

Juntos, estos dos restaurantes prometen regalar experiencias que conmuevan, inspiren y reúnan. Les invitamos a descubrirlos y a dejarse sorprender por la sensibilidad, el sabor y la dedicación que los hacen únicos.`,

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
                {/* <button
                  className="button"
                  onClick={toggleModalOne}
                  style={{ marginBottom: "1rem" }}
                >
                  <span className="button-text">{heroContent.heroBtn}</span>
                  <span className="button-icon fa fa-arrow-right"></span>
                </button>
                 */}
              </div>
            </div>
          </div>
          {/* End home-details-container */}

          {/* Start Modal for About More */}
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModalOne}
            contentLabel="My dialog"
            className="custom-modal dark hero"
            overlayClassName="custom-overlay dark"
            closeTimeoutMS={500}
          >
            <div>
              <button className="close-modal" onClick={toggleModalOne}>
                <Image src={cancelImg} alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner about">
                <AboutMain />
              </div>
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End  Modal for About More */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
