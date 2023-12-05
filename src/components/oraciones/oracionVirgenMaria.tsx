import { Link } from "react-router-dom";
function OracionVirgenMaria() {
  return (
    <div className="bg-virgen-pattern bg-no-repeat bg-contain md:bg-right bg-bottom">
      <div className="flex md:justify-left self-center lg:justify-left md:pt-10 pt-4 pb-4">
        <img
          className="w-12 h-12 mr-2 rounded-full"
          src="/img/iconos/Virgen_Icon.svg"
          alt=""
        />
        <h1 className="text-yellow-main text-5xl">
          Oración a la Santísima Virgen
        </h1>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="mx-auto max-w-2xl py-2 lg:max-w-none lg:py-4 text-white">
          <p className="mb-4 font-medium">
            Soberana María, que por vuestras grandes virtudes y especialmente
            por vuestra humildad, merecisteis que todo un Dios os escogiese por
            madre suya, os suplico que vos misma preparéis y dispongáis mi alma,
            y la de todos los que en este tiempo hicieren esta novena, para el
            nacimiento espiritual de vuestro adorado Hijo.
          </p>
          <p className="mb-4">
            ¡Oh dulcísima Madre! Comunicadme algo del profundo recogimiento y
            divina ternura con que le aguardasteis vos, para que nos hagáis
            menos indignos de verle, amarle y adorarle por toda la eternidad.
          </p>
          <h3 className="font-bold">Amén</h3>
          <small className="mb-4 text-yellow-main">
            Se reza tres veces el Avemaría
          </small>
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
  );
}

export default OracionVirgenMaria;
