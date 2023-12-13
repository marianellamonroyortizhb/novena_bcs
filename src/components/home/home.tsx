import { Link } from "react-router-dom";
const indices = [
  {
    name: "Oración para todos los días",
    index: "1. ",
    imageSrc: "/img/iconos/Para_todos_los_dias_icon.svg",
    imageAlt: "Manos en oración",
    href: "/oracion-diaria",
    target: "_self",
  },
  {
    name: "Lectura del día",
    index: "2. ",
    imageSrc: "/img/iconos/Lectura_hoy_Icon.svg",
    imageAlt: "Libro sobre mano",
    href: "/lecturas",
    target: "_self",
  },
  {
    name: "Oración a la Santísima Virgen",
    index: "3. ",
    imageSrc: "/img/iconos/Virgen_Icon.svg",
    imageAlt: "Virgen María",
    href: "/oracion-virgen-maria",
    target: "_self",
  },
  {
    name: "Oración a San José",
    index: "4. ",
    imageSrc: "/img/iconos/San_Jose_Icon.svg",
    imageAlt: "San José",
    href: "/oracion-san-jose",
    target: "_self",
  },
  {
    name: "Oración al Niño Jesús",
    index: "5. ",
    imageSrc: "/img/iconos/Nino_Jesus_Icon.svg",
    imageAlt: "Niño Jesús",
    href: "/oracion-nino-jesus",
    target: "_self",
  },
  {
    name: "Gozos",
    index: "6. ",
    imageSrc: "/img/iconos/Gozos_Icon.svg",
    imageAlt: "Ángel",
    href: "/gozos",
    target: "_self",
  },
  {
    name: "Villancicos",
    index: "7. ",
    imageSrc: "/img/iconos/Villancicos_Icon.svg",
    imageAlt: "Disco de vinilo navideño",
    href: "/villancicos",
    target: "_self",
  },
  {
    name: "Conozca nuestros productos digitales",
    index: "",
    imageSrc: "/img/iconos/Productos_Icon.svg",
    imageAlt: "Caja con estrella dentro",
    href: "https://digital.bancocajasocial.com/aperturaoficinas?utm_source=novena_digital&utm_medium=medios_propios&utm_campaign=novena_cross&utm_term=boton_novena_digital",
    target: "_blank",
  },
];

function Home() {
  return (
    <div className="bg-home-pattern bg-no-repeat md:bg-contain bg-bottom md:bg-right-bottom px-3 py-3 pb-72 md:pb-44">
      <div className="justify-left">
        <h1 className="text-yellow-main text-5xl">Novena de aguinaldos</h1>
        <h2 className="text-white font-semibold text-2xl pb-4 md:pb-10 md:pt-2">
          Sigue cada paso y reza en familia
        </h2>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="mx-auto max-w-2xl py-2">
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {indices.map((indice) => (
              <div key={indice.name} className="w-full">
                <Link to={indice.href} target={indice.target}>
                  <div className="bg-light-blue-main shadow-cyan-200/50 hover:shadow-cyan-200/90 shadow-lg rounded-lg overflow-hidden px-1 py-2 md:p-3 flex justify-between items-center user-card">
                    <div className="flex items-center">
                      <img
                        className="w-8 h-8 md:w-14 md:h-14 rounded-full"
                        src={indice.imageSrc}
                        alt={indice.imageAlt}
                      />
                      <h3 className="ml-1 md:ml-2 md:text-lg text-xs font-semibold">
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
