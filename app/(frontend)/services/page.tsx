"use client";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import { useAppDispatch } from "@/src/redux/hooks";

interface Services {
  ServiceKey: number;
  title: string;
  description: string;
  image_url: string;
}

const Services = () => {
  
  return (
    <>
      <div
        className="title-section text-start text-sm-center "
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h1>
          nuestras <span>redes</span>
        </h1>
        <span className="title-bg">Redes</span>
      </div>
    </>
  );
};

export default Services;
