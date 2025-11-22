import React from "react";
import x984942 from "./98494-2.png";
import capturaDePantalla20251104150430RemovebgPreview1 from "./captura-de-pantalla-2025-11-04-150430-removebg-preview-1.png";
import capturaDePantalla20251104150430RemovebgPreview2 from "./captura-de-pantalla-2025-11-04-150430-removebg-preview-2.png";
import rectangle5 from "./rectangle-5.png";
import vector from "./vector.svg";

export const Desktop = () => {
  return (
    <div className="bg-terciario overflow-hidden w-full min-w-[1440px] h-[1024px] relative">
      <div className="absolute top-0 left-[720px] w-[720px] h-[1024px] bg-neutral-100" />

      <img
        className="absolute top-[35px] left-[1254px] w-[114px] h-[113px] aspect-[1.01] object-cover"
        alt="Captura de pantalla"
        src={capturaDePantalla20251104150430RemovebgPreview1}
      />

      <img
        className="absolute top-[35px] left-[1254px] w-[114px] h-[113px] aspect-[1.01] object-cover"
        alt="Captura de pantalla"
        src={capturaDePantalla20251104150430RemovebgPreview2}
      />

      <div className="top-0 left-0 w-[720px] h-[1026px] absolute flex">
        <img
          className="w-[720px] h-[1024px] object-cover"
          alt="Rectangle"
          src={rectangle5}
        />
      </div>

      <div className="absolute top-[167px] left-[805px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal]">
        ¡Bienvenido!
      </div>

      <p className="absolute top-[223px] left-[805px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
        Ingresa tu correo y contraseña para iniciar
      </p>

      <div className="absolute top-[440px] left-[833px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
        Correo electrónico
      </div>

      <div className="absolute top-[353px] left-[829px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
        Correo electrónico
      </div>

      <div className="absolute top-[525px] left-[829px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
        Contraseña
      </div>

      <div className="absolute top-[697px] left-[1060px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
        ¿Olvidaste tu contraseña?
      </div>

      <p className="absolute top-[830px] left-[910px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
        <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-2xl tracking-[0]">
          ¿No tienes cuenta?{" "}
        </span>

        <span className="[font-family:'Inter-Bold',Helvetica] font-bold">
          Regístrate
        </span>
      </p>

      <div className="absolute top-[399px] left-[805px] w-[550px] h-[70px] bg-white rounded-[10px] border-[3px] border-solid border-primario" />

      <div className="absolute top-[571px] left-[805px] w-[550px] h-[70px] bg-white rounded-[10px] border-[3px] border-solid border-primario" />

      <div className="top-[743px] left-[805px] w-[550px] h-[70px] bg-primario rounded-[10px] absolute flex">
        <div className="mt-[21px] w-[156px] h-[29px] ml-[201px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]">
          Iniciar sesión
        </div>
      </div>

      <div className="top-[353px] absolute left-[805px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#ff0000] text-2xl tracking-[0] leading-[normal]">
        *
      </div>

      <div className="top-[525px] absolute left-[805px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#ff0000] text-2xl tracking-[0] leading-[normal]">
        *
      </div>

      <a
        className="absolute top-[419px] left-[829px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#4f4f4f] text-2xl tracking-[0] leading-[normal]"
        href="mailto:correo@ejemplo.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        correo@ejemplo.com
      </a>

      <div className="absolute top-[591px] left-[829px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#4f4f4f] text-2xl tracking-[0] leading-[normal]">
        Ingresa aquí la contraseña
      </div>

      <img
        className="absolute top-[591px] left-[1292px] w-[37px] h-[37px] aspect-[1] object-cover"
        alt="Element"
        src={x984942}
      />

      <img
        className="absolute w-0 h-[2.73%] top-[41.02%] left-[90.35%]"
        alt="Vector"
        src={vector}
      />
    </div>
  );
};
