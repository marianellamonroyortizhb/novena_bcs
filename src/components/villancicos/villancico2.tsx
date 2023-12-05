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
        <h1 className="text-yellow-main text-5xl">Campana sobre campana</h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20">
        <div className="mx-auto max-w-2xl py-2 lg:max-w-none lg:py-4 text-white">
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

export default Lectura1;
