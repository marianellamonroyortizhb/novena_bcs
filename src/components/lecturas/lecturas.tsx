import { Link } from "react-router-dom";
const lecturas = [
  {
    index: "16",
    href: "/lecturas/dia-primero",
  },
  {
    index: "17",
    href: "/lecturas/dia-segundo",
  },
  {
    index: "18",
    href: "/lecturas/dia-tercero",
  },
  {
    index: "19",
    href: "/lecturas/dia-cuarto",
  },
  {
    index: "20",
    href: "/lecturas/dia-quinto",
  },
  {
    index: "21",
    href: "/lecturas/dia-sexto",
  },
  {
    index: "22",
    href: "/lecturas/dia-septimo",
  },
  {
    index: "23",
    href: "/lecturas/dia-octavo",
  },
  {
    index: "24",
    href: "/lecturas/dia-noveno",
  },
];

function Lecturas() {
  return (
    <div className="bg-home-pattern bg-no-repeat md:bg-contain bg-bottom md:bg-right-bottom px-3 py-3 pb-72 md:pb-40">
      <div className="justify-left">
        <h1 className="text-yellow-main text-5xl mb-4">Lectura del día</h1>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="mx-auto max-w-2xl md:py-2 md:px-14">
          <div className="grid grid-cols-3 gap-x-4 gap-y-4 md:gap-x-28 md:gap-y-14">
            {lecturas.map((lectura) => (
              <div
                key={lectura.index}
                className="flex flex-col max-[768px]:flex-row max-[768px]:items-center group relative"
                style={{ width: "100px" }} // Añadir un ancho fijo para cada tarjeta
              >
                <Link to={lectura.href}>
                  <div className="bg-light-blue-main rounded-lg p-3 w-full h-full">
                    <div className="bg-blue-medium-main rounded-lg p-3 h-full">
                      <div className="flex items-center bg-yellow-main rounded-full overflow-hidden py-3 px-4 h-full w-full">
                        <h3 className="text-lg font-extrabold text-blue-main">
                          <span className="text-blue-main">
                            {lectura.index}
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
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
  );
}

export default Lecturas;
