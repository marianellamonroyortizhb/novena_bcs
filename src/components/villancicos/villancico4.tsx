import { Link } from "react-router-dom";
function Villancico4() {
  return (
    <div className="bg-villancicos-pattern bg-no-repeat bg-contain md:bg-right-bottom bg-bottom pb-36 px-6 md:px-0 md:py-2">
            <div className="flex flex-col md:flex-row items-center">
        <img
          className="w-24 h-24 md:w-20 md:h-20 md:mr-4 rounded-full md:rounded-none"
          src="/img/iconos/Villancicos_Icon.svg"
          alt="Disco de vinilo navideño"
        />
        <h1 className="text-yellow-main md:text-5xl text-3xl mt-3 md:mt-0 text-center md:text-center">
        Los peces en el río
        </h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20">
        <div className="pl-4 max-w-2xl pt-2 lg:max-w-none md:pt-4 text-white">
          <div className="text-sing">
            <p>Pero mira cómo beben los peces en el río</p>
            <p>Pero mira cómo beben por ver al Dios nacido</p>
            <p>Beben y beben y vuelven a beber</p>
            <p>Los peces en el río por ver a Dios nacer.</p>
          </div>
          <div className="text-sing">
            <p>La Virgen está lavando</p>
            <p>Y tendiendo en el romero</p>
            <p>Los pajaritos cantando</p>
            <p>Y el romero floreciendo.</p>
          </div>
          <div className="text-sing">
            <p>Pero mira cómo beben los peces en el río</p>
            <p>Pero mira cómo beben por ver al Dios nacido</p>
            <p>Beben y beben y vuelven a beber</p>
            <p>Los peces en el río por ver a Dios nacer.</p>
          </div>
          <div className="text-sing">
            <p>La Virgen se está peinando</p>
            <p>Entre cortina y cortina</p>
            <p>Los cabellos son de oro</p>
            <p>Y el peine de plata fina.</p>
          </div>
          <div className="text-sing">
            <p>Pero mira cómo beben los peces en el río</p>
            <p>Pero mira cómo beben por ver al Dios nacido</p>
            <p>Beben y beben y vuelven a beber</p>
            <p>Los peces en el río por ver a Dios nacer.</p>
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

export default Villancico4;
