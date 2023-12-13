import { Link } from "react-router-dom";
function Villancico3() {
  return (
    <div className="bg-villancicos-pattern bg-no-repeat bg-contain md:bg-right bg-bottom">
      <div className="flex flex-col md:flex-row items-center">
        <img
          className="w-24 h-24 md:w-20 md:h-20 md:mr-4 rounded-full md:rounded-none"
          src="/img/iconos/Villancicos_Icon.svg"
          alt="Disco de vinilo navideño"
        />
        <h1 className="text-yellow-main md:text-5xl text-3xl mt-3 md:mt-0 text-center md:text-center">
          Tutaina
        </h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20">
        <div className="pl-4 max-w-2xl pt-2 lg:max-w-none md:pt-4 text-white">
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

export default Villancico3;
