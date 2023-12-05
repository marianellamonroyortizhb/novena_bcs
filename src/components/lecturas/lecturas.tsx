import { Link } from "react-router-dom";
const lecturas = [
  {
    index: "16",
    imageSrc: "/img/iconos/Para_todos_los_dias_Icon.svg",
    imageAlt: "Billetera",
    href: "/lecturas/dia-primero",
  },
  {
    index: "17",
    imageSrc: "/img/iconos/Lectura_hoy_Icon.svg",
    imageAlt: "Avión sobrevolando el mapamundi",
    href: "/lecturas/dia-segundo",
  },
  {
    index: "18",
    imageSrc: "/img/iconos/Virgen_Icon.svg",
    imageAlt: "Casa azul",
    href: "/lecturas/dia-tercero",
  },
  {
    index: "19",
    imageSrc: "/img/iconos/San_Jose_Icon.svg",
    imageAlt: "Choque entre dos manos",
    href: "/lecturas/dia-cuarto",
  },
  {
    index: "20",
    imageSrc: "/img/iconos/Nino_Jesus_Icon.svg",
    imageAlt: "Avión sobrevolando el mapamundi",
    href: "/lecturas/dia-quinto",
  },
  {
    index: "21",
    imageSrc: "/img/iconos/Gozos_Icon.svg",
    imageAlt: "Casa azul",
    href: "/lecturas/dia-sexto",
  },
  {
    index: "22",
    imageSrc: "/img/iconos/Villancicos_Icon.svg",
    imageAlt: "Choque entre dos manos",
    href: "/lecturas/dia-septimo",
  },
  {
    index: "23",
    imageSrc: "/img/iconos/Villancicos_Icon.svg",
    imageAlt: "Choque entre dos manos",
    href: "/lecturas/dia-octavo",
  },
  {
    index: "24",
    imageSrc: "/img/iconos/Villancicos_Icon.svg",
    imageAlt: "Choque entre dos manos",
    href: "/lecturas/dia-noveno",
  },
];

function Lecturas() {
  return (
    <div className="bg-home-pattern bg-no-repeat bg-contain bg-right-bottom px-6 py-2">
      <div className="justify-left">
        <h1 className="text-yellow-main text-5xl mb-4">Lectura del día</h1>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="mx-auto max-w-2xl py-2">
          <div className="grid grid-cols-3 gap-x-14 gap-y-14">
            {lecturas.map((lectura) => (
              <div
                key={lectura.index}
                className=" flex flex-col max-[768px]:flex-row max-[768px]:items-center group relative"
              >
                <Link to={lectura.href}>
                  <div className="bg-light-blue-main rounded-lg p-4">
                    <div className="bg-blue-medium-main rounded-lg p-2">
                      <div className="bg-yellow-main rounded-full overflow-hidden py-3 px-4 flex justify-between items-center h-full w-full">
                        <div className="flex items-center">
                          <h3 className="text-lg font-extrabold text-blue-main">
                            <span className="text-blue-main">
                              {lectura.index}
                            </span>
                          </h3>
                        </div>
                      </div>
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

export default Lecturas;
