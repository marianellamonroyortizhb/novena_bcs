import { Link } from "react-router-dom";
const indices = [
  {
    name: "Oración para todos los días",
    index: "1. ",
    imageSrc: "/img/iconos/Para_todos_los_dias_Icon.svg",
    imageAlt: "Billetera",
    href: "/oracion-diaria",
    target: "_self",
  },
  {
    name: "Lectura del día",
    index: "2. ",
    imageSrc: "/img/iconos/Lectura_hoy_Icon.svg",
    imageAlt: "Avión sobrevolando el mapamundi",
    href: "/lecturas",
    target: "_self",
  },
  {
    name: "Oración a la Santísima Virgen",
    index: "3. ",
    imageSrc: "/img/iconos/Virgen_Icon.svg",
    imageAlt: "Casa azul",
    href: "/oracion-virgen-maria",
    target: "_self",
  },
  {
    name: "Oración a San José",
    index: "4. ",
    imageSrc: "/img/iconos/San_Jose_Icon.svg",
    imageAlt: "Choque entre dos manos",
    href: "/oracion-san-jose",
    target: "_self",
  },
  {
    name: "Oración al Niño Jesús",
    index: "5. ",
    imageSrc: "/img/iconos/Nino_Jesus_Icon.svg",
    imageAlt: "Avión sobrevolando el mapamundi",
    href: "/oracion-nino-jesus",
    target: "_self",
  },
  {
    name: "Gozos",
    index: "6. ",
    imageSrc: "/img/iconos/Gozos_Icon.svg",
    imageAlt: "Casa azul",
    href: "/gozos",
    target: "_self",
  },
  {
    name: "Villancicos",
    index: "7. ",
    imageSrc: "/img/iconos/Villancicos_Icon.svg",
    imageAlt: "Choque entre dos manos",
    href: "/villancicos",
    target: "_self",
  },
  {
    name: "Conozca nuestros productos digitales",
    index: "",
    imageSrc: "/img/iconos/Productos_Icon.svg",
    imageAlt: "Choque entre dos manos",
    href: "https://digital.bancocajasocial.com/aperturaoficinas",
    target: "_blank",
  },
];

function Home() {
  return (
    <div className="bg-home-pattern bg-no-repeat bg-contain bg-right-bottom px-6 py-2">
      <div className="justify-left">
        <h1 className="text-yellow-main text-5xl">Novena de aguinaldos</h1>
        <h2 className="text-white font-semibold text-2xl pb-4">
          Sigue cada paso y reza en familia
        </h2>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="mx-auto max-w-2xl py-2">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {indices.map((indice) => (
              <div
                key={indice.name}
                className="pb-4 flex flex-col max-[768px]:flex-row max-[768px]:items-center group relative"
              >
                <Link to={indice.href} target={indice.target}>
                  <div className="bg-light-blue-main shadow-cyan-200/50 hover:shadow-cyan-200/90 shadow-lg rounded-lg overflow-hidden p-3 flex justify-between items-center user-card h-full w-full">
                    <div className="flex items-center">
                      <img
                        className="w-14 h-14 rounded-full"
                        src={indice.imageSrc}
                        alt={indice.imageAlt}
                      />
                      <h3 className="ml-2 text-lg font-semibold">
                        <span className="text-blue-main">{indice.index}</span>
                        {indice.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
