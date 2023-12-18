import { Link } from "react-router-dom";
function OracionVirgenMaria() {
  return (
    <div className="bg-virgen-pattern bg-no-repeat bg-contain md:bg-right-bottom bg-bottom pb-36 md:pb-40 px-6 md:py-2">
      <div className="flex flex-col md:flex-row items-center">
        <img
          className="w-24 h-24 md:w-20 md:h-20 md:mr-4 rounded-full md:rounded-none"
          src="/novena/img/iconos/Virgen_Icon.svg"
          alt="Virgen María"
          title="Virgen María"
        />
        <h1 className="text-yellow-main md:text-5xl text-3xl mt-3 md:mt-0 text-center md:text-center">
          Oración a la Santísima Virgen
        </h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20 pt-4">
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
          <h3 className="font-bold mb-3">Amén</h3>
          <small className="mb-4 text-yellow-main text-sm">
            Se reza tres veces el Avemaría
          </small>
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
  );
}

export default OracionVirgenMaria;
