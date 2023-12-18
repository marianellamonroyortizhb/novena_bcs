import { useEffect } from "react";
import { Link } from "react-router-dom";
const villancicos = [
  {
    name: "Anton Tiruliruliru",
    index: "1.",
    imageSrc: "/novena/img/iconos/Villancicos_Icon.svg",
    imageAlt: "Disco de vinilo navideño",
    href: "/villancicos/anton-tiruliruliru",
  },
  {
    name: "Campana sobre campana",
    index: "2.",
    imageSrc: "/novena/img/iconos/Villancicos_Icon.svg",
    imageAlt: "Disco de vinilo navideño",
    href: "/villancicos/campana-sobre-campana",
  },
  {
    name: "Tutaina",
    index: "3.",
    imageSrc: "/novena/img/iconos/Villancicos_Icon.svg",
    imageAlt: "Disco de vinilo navideño",
    href: "/villancicos/tutaina",
  },
  {
    name: "Los peces en el río",
    index: "4.",
    imageSrc: "/novena/img/iconos/Villancicos_Icon.svg",
    imageAlt: "Disco de vinilo navideño",
    href: "/villancicos/los-peces-en-el-rio",
  },
  {
    name: "La Nanita Nana",
    index: "5.",
    imageSrc: "/novena/img/iconos/Villancicos_Icon.svg",
    imageAlt: "Disco de vinilo navideño",
    href: "/villancicos/la-nanita-nana",
  },
  {
    name: "Noche de paz",
    index: "6.",
    imageSrc: "/novena/img/iconos/Villancicos_Icon.svg",
    imageAlt: "Disco de vinilo navideño",
    href: "/villancicos/noche-de-paz",
  },
];

function Villancicos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-villancicos-pattern bg-no-repeat md:bg-contain bg-bottom md:bg-right-bottom px-3 py-3 pb-72 md:pb-40">
      <div className="justify-left">
        <h1 className="text-yellow-main text-5xl">Villancicos</h1>
        <h2 className="text-white font-semibold text-2xl pb-4 md:pb-10 md:pt-2">
          Elige un villancico para cantar
        </h2>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="mx-auto max-w-2xl py-2">
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {villancicos.map((villancico) => (
              <div key={villancico.name} className="w-full">
                <Link to={villancico.href}>
                  <div className="bg-light-blue-main shadow-cyan-200/50 hover:shadow-cyan-200/90 shadow-lg rounded-lg overflow-hidden px-1 py-2 md:p-3 flex justify-between items-center user-card">
                    <div className="flex items-center">
                      <img
                        className="w-8 h-8 md:w-14 md:h-14 rounded-full"
                        src={villancico.imageSrc}
                        alt={villancico.imageAlt}
                      />
                      <h3 className="ml-1 amd:ml-2 md:text-lg text-xs font-semibold">
                        {villancico.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            <Link to="/">
              <h3 className="text-xl text-yellow-main font-bold mt-14">
                <img
                  className="w-8 h-8 rounded-full inline"
                  src="/novena/img/iconos/Flecha_Icon.svg"
                  alt="Flecha para volver"
                  title="Flecha para volver"
                />
                Volver
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Villancicos;
