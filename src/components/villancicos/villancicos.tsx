import { Link } from "react-router-dom";
const villancicos = [
  {
    name: "Anton Tiruliruliru",
    index: "1.",
    imageSrc: "/img/iconos/Para_todos_los_dias_Icon.svg",
    imageAlt: "Billetera",
    href: "/villancicos/anton-tiruliruliru",
  },
  {
    name: "Campana sobre campana",
    index: "2.",
    imageSrc: "/img/iconos/Lectura_hoy_Icon.svg",
    imageAlt: "Avión sobrevolando el mapamundi",
    href: "/villancicos/campana-sobre-campana",
  },
  {
    name: "Tutaina",
    index: "3.",
    imageSrc: "/img/iconos/Virgen_Icon.svg",
    imageAlt: "Casa azul",
    href: "/villancicos/tutaina",
  },
  {
    name: "Los peces en el río",
    index: "4.",
    imageSrc: "/img/iconos/San_Jose_Icon.svg",
    imageAlt: "Choque entre dos manos",
    href: "/villancicos/los-peces-en-el-rio",
  },
  {
    name: "La Nanita Nana",
    index: "5.",
    imageSrc: "/img/iconos/Nino_Jesus_Icon.svg",
    imageAlt: "Avión sobrevolando el mapamundi",
    href: "/villancicos/la-nanita-nana",
  },
  {
    name: "Noche de paz",
    index: "6.",
    imageSrc: "/img/iconos/Gozos_Icon.svg",
    imageAlt: "Casa azul",
    href: "/villancicos/noche-de-paz",
  },
];

function Home() {
  return (
    <div className="bg-villancicos-pattern bg-no-repeat bg-contain bg-right-bottom px-6 py-2">
      <div className="justify-left">
        <h1 className="text-yellow-main text-5xl">Villancicos</h1>
        <h2 className="text-white font-semibold text-2xl pb-4">
          Elige un villancico para cantar
        </h2>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="mx-auto max-w-2xl py-2">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {villancicos.map((villancico) => (
              <div
                key={villancico.name}
                className="pb-4 flex flex-col max-[768px]:flex-row max-[768px]:items-center group relative"
              >
                <Link to={villancico.href}>
                  <div className="bg-light-blue-main shadow-cyan-200/50 hover:shadow-cyan-200/90 shadow-lg rounded-lg overflow-hidden p-3 flex justify-between items-center user-card h-full w-full">
                    <div className="flex items-center">
                      <img
                        className="w-14 h-14 rounded-full"
                        src={villancico.imageSrc}
                        alt={villancico.imageAlt}
                      />
                      <h3 className="ml-2 text-lg font-semibold">
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
                  src="/img/iconos/Flecha_Icon.svg"
                  alt=""
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

export default Home;
