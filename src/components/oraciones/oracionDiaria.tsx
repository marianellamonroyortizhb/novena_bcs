import { Link } from "react-router-dom";
function OracionDiaria() {
  return (
    <div className="bg-home-pattern bg-no-repeat bg-contain bg-right-bottom px-6 py-2">
      <div className=" flex justify-left">
        <img
          className="w-12 h-12 mr-2 rounded-full"
          src="/img/iconos/Para_todos_los_dias_icon.svg"
          alt=""
        />
        <h1 className="text-yellow-main text-5xl">
          Oración para todos los días
        </h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20">
        <div className="mx-auto max-w-2xl py-2 lg:max-w-none lg:py-4 text-white">
          <p className="mb-4 font-medium">
            Benignísimo Dios de infinita caridad, que tanto amasteis a los
            hombres, que les disteis en vuestro Hijo la mejor prenda de vuestro
            amor, para que hecho hombre en las entrañas de una Virgen, naciese
            en un pesebre para nuestra salud y remedio; yo, en nombre de todos
            los mortales, os doy infinitas gracias por tan soberano beneficio.{" "}
          </p>
          <p className="mb-4">
            En retorno de él, os ofrezco la pobreza, humildad, y demás virtudes
            de vuestro Hijo humanado, suplicándoos por sus divinos méritos, por
            las incomodidades con que nació, por las tiernas lágrimas que
            derramó en el pesebre, dispongáis nuestros corazones con humildad
            profunda, con amor encendido, con total desprecio de todo lo
            terreno, para que Jesús recién nacido tenga en ellos su cuna y more
            eternamente.
          </p>
          <h3 className="font-bold">Amén</h3>
          <small className="mb-4 text-yellow-main">
            Se reza tres veces el Gloria al Padre.
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

export default OracionDiaria;
