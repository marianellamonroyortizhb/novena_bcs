import { Link } from "react-router-dom";
function Villancico5() {
  return (
    <div className="bg-home-pattern bg-no-repeat bg-contain md:bg-right bg-bottom">
      <div className="flex md:justify-left self-center lg:justify-left md:pt-10 pt-4 pb-4">
        <img
          className="w-12 h-12 mr-2 rounded-full"
          src="/img/iconos/Villancicos_Icon.svg"
          alt="Disco de vinilo navideño"
        />
        <h1 className="text-yellow-main text-5xl">La Nanita Nana</h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20">
        <div className="mx-auto max-w-2xl py-2 lg:max-w-none lg:py-4 text-white">
          <div className="stepText sings">
            <div className="text-sing">
              <p>A la nanita nana, nanita ella, nanita ella</p>
              <p>Mi niña tiene sueño, bendito sea, bendito sea</p>
              <p>A la nanita nana, nanita ella, nanita ella</p>
              <p>Mi niña tiene sueño, bendito sea, bendito sea</p>
            </div>
            <div className="text-sing">
              <p>Fuentecita que corre clara y sonora</p>
              <p>Ruiseñor que en la selva, cantando y llora</p>
              <p>Calla mientras la cuna, se balancea</p>
              <p>A la nanita nana, nanita ella</p>
            </div>
            <div className="text-sing">
              <p>A la nanita nana, nanita ella, nanita ella</p>
              <p>Mi niña tiene sueño, bendito sea, bendito sea</p>
            </div>
            <div className="text-sing">
              <p>Fuentecita que corre clara y sonora</p>
              <p>Ruiseñor que en la selva, cantando y llora</p>
              <p>Calla mientras la cuna, se balancea</p>
              <p>A la nanita nana nanita ella</p>
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
    </div>
  );
}

export default Villancico5;
