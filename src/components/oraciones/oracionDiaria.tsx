import { Link } from "react-router-dom";
function OracionDiaria() {
  return (
    <div className="bg-home-pattern bg-no-repeat bg-contain md:bg-right-bottom bg-bottom pb-36 md:pb-20 px-6 md:py-2">
      <div className="flex flex-col md:flex-row items-center">
        <img
          className="w-24 h-24 md:w-20 md:h-20 md:mr-4 rounded-full md:rounded-none"
          src="/img/iconos/Para_todos_los_dias_icon.svg"
          alt="Manos en oración"
          title="Manos en oración"
        />
        <h1 className="text-yellow-main md:text-5xl text-3xl mt-3 md:mt-0 text-center md:text-center">
          Oración para todos los días
        </h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20 pt-4">
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
          <h3 className="font-bold mb-3">Amén</h3>
          <small className="mt-4 text-yellow-main text-sm">
            Se reza tres veces el Gloria al Padre.
          </small>
          <Link to="/">
            <h3 className="text-xl text-yellow-main font-bold mt-14">
              <img
                className="w-8 h-8 rounded-full inline"
                src="/img/iconos/Flecha_Icon.svg"
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

export default OracionDiaria;
