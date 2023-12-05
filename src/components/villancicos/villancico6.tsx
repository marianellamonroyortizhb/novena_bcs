import { Link } from "react-router-dom";
function Lectura1() {
  return (
    <div className="bg-home-pattern bg-no-repeat bg-contain md:bg-right bg-bottom">
      <div className="flex md:justify-left self-center lg:justify-left md:pt-10 pt-4 pb-4">
        <img
          className="w-12 h-12 mr-2 rounded-full"
          src="/img/iconos/Lectura_hoy_Icon.svg"
          alt=""
        />
        <h1 className="text-yellow-main text-5xl">Noche de Paz</h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20">
        <div className="mx-auto max-w-2xl py-2 lg:max-w-none lg:py-4 text-white">
          <p className="mb-3">
            Noche de paz, noche de amor, todo duerme en derredor entre sus
            astros que esparcen su luz bella anunciando al niñito Jesús brilla
            la estrella de paz brilla la estrella de paz
          </p>
          <p className="mb-3">
            Noche de paz, noche de amor, todo duerme en derredor sólo velan en
            la oscuridad los pastores que en el campo están; y la estrella de
            belén y la estrella de belén
          </p>
          <p className="mb-3">
            Noche de paz, noche de amor, todo duerme en derredor; sobre el santo
            Niño Jesús una estrella esparce su luz, brilla sobre el rey brilla
            sobre el rey
          </p>
          <p className="mb-3">
            Noche de paz, noche de amor, todo duerme en derredor fieles velando
            allí en Belén los pastores, la madre también y la estrella de paz y
            la estrella de paz
          </p>

          <div>
            <Link to="/villancicos">
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

export default Lectura1;
