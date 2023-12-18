import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { Link } from "react-router-dom";
type GTMDataLayerProps = (event: string) => void;

const indices = [
  {
    name: "Oración para todos los días",
    index: "1. ",
    imageSrc: "/novena/img/iconos/Para_todos_los_dias_icon.svg",
    imageAlt: "Oración para todos los días",
    href: "/oracion-diaria",
    target: "_self",
    event: "click_oracion_dia",
  },
  {
    name: "Lectura del día",
    index: "2. ",
    imageSrc: "/novena/img/iconos/Lectura_hoy_Icon.svg",
    imageAlt: "Lectura del día",
    href: "/lecturas",
    target: "_self",
    event: "click_lectura_dia",
  },
  {
    name: "Oración a la Santísima Virgen",
    index: "3. ",
    imageSrc: "/novena/img/iconos/Virgen_Icon.svg",
    imageAlt: "Oración a la Santísima Virgen",
    href: "/oracion-virgen-maria",
    target: "_self",
    event: "click_oracion_virgen_maria",
  },
  {
    name: "Oración a San José",
    index: "4. ",
    imageSrc: "/novena/img/iconos/San_Jose_Icon.svg",
    imageAlt: "Oración a San José",
    href: "/oracion-san-jose",
    target: "_self",
    event: "click_oracion_san_Jose",
  },
  {
    name: "Gozos",
    index: "5. ",
    imageSrc: "/novena/img/iconos/Gozos_Icon.svg",
    imageAlt: "Gozos",
    href: "/gozos",
    target: "_self",
    event: "click_gozos",
  },
  {
    name: "Oración al Niño Jesús",
    index: "6. ",
    imageSrc: "/novena/img/iconos/Nino_Jesus_Icon.svg",
    imageAlt: "Oración al Niño Jesús",
    href: "/oracion-nino-jesus",
    target: "_self",
    event: "click_oracion_nino_jesus",
  },
  {
    name: "Villancicos",
    index: "7. ",
    imageSrc: "/novena/img/iconos/Villancicos_Icon.svg",
    imageAlt: "Villancicos",
    href: "/villancicos",
    target: "_self",
    event: "click_villancicos",
  },
  {
    name: "Conozca nuestros productos digitales",
    index: "",
    imageSrc: "/novena/img/iconos/Productos_Icon.svg",
    imageAlt: "Conozca nuestros productos digitales",
    href: "https://digital.bancocajasocial.com/aperturaoficinas?utm_source=novena_digital&utm_medium=medios_propios&utm_campaign=novena_cross&utm_term=boton_novena_digital",
    target: "_blank",
    event: "click_productos_digitales",
  },
];

export const ClickButton: GTMDataLayerProps = (event) => {
  TagManager.dataLayer({
    dataLayer: {
      event,
    },
  });
};

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    TagManager.dataLayer({
      dataLayer: {
        event: "carga_home_menu",
      },
    });
  }, []);
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
                <Link
                  to={indice.href}
                  target={indice.target}
                  onClick={() => ClickButton(indice.event)}
                >
                  <div className="bg-light-blue-main shadow-cyan-200/50 hover:shadow-cyan-200/90 shadow-lg rounded-lg overflow-hidden px-1 py-2 md:p-3 flex justify-between items-center user-card">
                    <div className="flex items-center">
                      <img
                        className="w-8 h-8 md:w-14 md:h-14 rounded-full"
                        src={indice.imageSrc}
                        alt={indice.imageAlt}
                        title={indice.imageAlt}
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
