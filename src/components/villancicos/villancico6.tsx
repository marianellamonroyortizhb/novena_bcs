import { Link } from "react-router-dom";
function Villancico6() {
  return (
    <div className="bg-villancicos-pattern bg-no-repeat bg-contain md:bg-right-bottom bg-bottom pb-36 px-6 md:px-0 md:py-2">
      <div className="flex flex-col md:flex-row items-center">
        <img
          className="w-24 h-24 md:w-20 md:h-20 md:mr-4 rounded-full md:rounded-none"
          src="/img/iconos/Villancicos_Icon.svg"
          alt="Disco de vinilo navideño"
        />
        <h1 className="text-yellow-main md:text-5xl text-3xl mt-3 md:mt-0 text-center md:text-center">
        Noche de Paz
        </h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20">
      <div className="pl-4 max-w-2xl pt-2 lg:max-w-none md:pt-4 text-white">
          <div className="text-sing">
            <p>Noche de paz, noche de amor</p>
            <p>Todo duerme en derredor</p>
            <p>Entre sus astros que esparcen su luz</p>
            <p>Bella anunciando al niñito Jesús</p>
            <p>Brilla la estrella de paz</p>
            <p>Brilla la estrella de paz</p>
          </div>
          <div className="text-sing">
            <p>Noche de paz, noche de amor</p>
            <p>Todo duerme en derredor</p>
            <p>Sólo velan en la oscuridad</p>
            <p>Los pastores que en el campo están</p>
            <p>y la estrella de belén</p>
            <p>y la estrella de belén</p>
          </div>
          <div className="text-sing">
            <p>Noche de paz, noche de amor</p>
            <p>Todo duerme en derredor</p>
            <p>Sobre el santo Niño Jesús</p>
            <p>Una estrella esparce su luz</p>
            <p>Brilla sobre el rey</p>
            <p>brilla sobre el rey</p>
          </div>
          <div className="text-sing">
            <p>Noche de paz, noche de amor</p>
            <p>Todo duerme en derredor</p>
            <p>Fieles velando allí en Belén</p>
            <p>Una estrella esparce su luz</p>
            <p>Los pastores, la madre también</p>
            <p>Y la estrella de paz</p>
            <p>Y la estrella de paz</p>
          </div>
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

export default Villancico6;
