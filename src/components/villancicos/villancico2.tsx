import { Link } from "react-router-dom";
function Villancico2() {
  return (
    <div className="bg-villancicos-pattern bg-no-repeat bg-contain md:bg-right-bottom bg-bottom pb-36 px-6 md:pb-2 md:py-2">
      <div className="flex flex-col md:flex-row items-center">
        <img
          className="w-24 h-24 md:w-20 md:h-20 md:mr-4 rounded-full md:rounded-none"
          src="/img/iconos/Villancicos_Icon.svg"
          alt="Disco de vinilo navideño"
        />
        <h1 className="text-yellow-main md:text-5xl text-3xl mt-3 md:mt-0 text-center md:text-center">
          Campana sobre campana
        </h1>
      </div>
      <div className="grid md:grid-cols-2 pb-4">
        <div className="pl-4 max-w-2xl pt-2 lg:max-w-none md:pt-4 text-white">
          <div className="text-sing">
            <p>Campana sobre campana</p>
            <p>Y sobre campana una</p>
            <p>Asómate a la ventana</p>
            <p>Verás el niño en la cuna</p>
          </div>
          <div className="text-sing">
            <p>Belén, campanas de Belén</p>
            <p>Que los ángeles tocan</p>
            <p>¿Qué nuevas me traéis?</p>
          </div>
          <div className="text-sing">
            <p>Recogido tu rebaño</p>
            <p>¿A dónde vas, pastorcito?</p>
            <p>Voy a llevar al portal</p>
            <p>Requesón, manteca y vino</p>
          </div>
          <div className="text-sing">
            <p>Belén, campanas de Belén</p>
            <p>Que los ángeles tocan</p>
            <p>¿Qué nuevas me traéis?</p>
          </div>
          <div>
            <p>Campana sobre campana</p>
            <p>Y sobre campana dos</p>
            <p>Asómate a la ventana</p>
            <p>Porque está naciendo Dios</p>
          </div>
          <div className="text-sing">
            <p>Belén, campanas de Belén</p>
            <p>Que los ángeles tocan</p>
            <p>¿Qué nuevas me traéis?</p>
          </div>
          <div className="text-sing">
            <p>Caminando a medianoche</p>
            <p>¿Dónde caminas, pastor?</p>
            <p>Le llevo al niño que nace</p>
            <p>Como Dios mi corazón</p>
          </div>
          <div className="text-sing">
            <p>Belén, campanas de Belén</p>
            <p>Que los ángeles tocan</p>
            <p>¿Qué nuevas me traéis?</p>
          </div>
          <div className="text-sing">
            <p>Campana sobre campana</p>
            <p>Y sobre campana una</p>
            <p>Asómate a la ventana</p>
            <p>Verás el niño en la cuna</p>
          </div>
          <div className="text-sing">
            <p>Belén, campanas de Belén</p>
            <p>Que los ángeles tocan</p>
            <p>¿Qué nuevas me traéis?</p>
          </div>
          <div className="text-sing">
            <p>Recogido tu rebaño</p>
            <p>¿A dónde vas, pastorcito?</p>
            <p>Voy a llevar al portal</p>
            <p>Requesón, manteca y vino</p>
          </div>
          <div className="text-sing">
            <p>Belén, campanas de Belén</p>
            <p>Que los ángeles tocan</p>
            <p>¿Qué nuevas me traéis?</p>
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

export default Villancico2;
