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
        <h1 className="text-yellow-main text-5xl">Tutaina</h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20">
        <div className="mx-auto max-w-2xl py-2 lg:max-w-none lg:py-4 text-white">
          <div className="text-sing">
            <p>Tutaina tuturuma</p>
            <p>Tutaina tuturumaina</p>
            <p>Tutaina tuturuma turuma</p>
            <p>Tutaina tuturumaina</p>
          </div>
          <div className="text-sing">
            <p>Los pastores de Belén</p>
            <p>Vienen a adorar al niño</p>
            <p>La Virgen y San José</p>
            <p>Los reciben con cariño</p>
          </div>
          <div className="text-sing">
            <p>Tutaina tuturuma</p>
            <p>Tutaina tuturumaina</p>
            <p>Tutaina tuturuma turuma</p>
            <p>Tutaina tuturumaina</p>
          </div>
          <div className="text-sing">
            <p>Tres reyes vienen también</p>
            <p>Con incienso, mirra y oro</p>
            <p>A ofrendar a Dios su bien</p>
            <p>Con el más grande tesoro</p>
          </div>
          <div className="text-sing">
            <p>Tutaina tuturuma</p>
            <p>Tutaina tuturumaina</p>
            <p>Tutaina tuturuma turuma</p>
            <p>Tutaina tuturumaina</p>
          </div>
          <div className="text-sing">
            <p>Vamos todos a cantar</p>
            <p>Con amor y alegría</p>
            <p>Porque acaba de llegar</p>
            <p>De los cielos el Mesías</p>
          </div>
          <div className="text-sing">
            <p>Tutaina tuturuma</p>
            <p>Tutaina tuturumaina</p>
            <p>Tutaina tuturuma turuma</p>
            <p>Tutaina tuturumaina</p>
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
