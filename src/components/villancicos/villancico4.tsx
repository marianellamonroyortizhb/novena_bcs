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
        <h1 className="text-yellow-main text-5xl">Los peces en el río</h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20">
        <div className="mx-auto max-w-2xl py-2 lg:max-w-none lg:py-4 text-white">
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

export default Lectura1;
