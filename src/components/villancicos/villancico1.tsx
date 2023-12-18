import { Link } from "react-router-dom";
function Villancico1() {
  return (
    <div className="bg-villancicos-pattern bg-no-repeat bg-contain md:bg-right-bottom bg-bottom pb-36 px-6 md:px-0 md:py-2">
      <div className="flex flex-col md:flex-row items-center">
        <img
          className="w-24 h-24 md:w-20 md:h-20 md:mr-4 rounded-full md:rounded-none"
          src="/img/iconos/Villancicos_Icon.svg"
          alt="Disco de vinilo navideño"
          title="Disco de vinilo navideño"
        />
        <h1 className="text-yellow-main md:text-5xl text-3xl mt-3 md:mt-0 text-center md:text-center">
          Anton Tiruliruliru
        </h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20">
        <div className="pl-4 max-w-2xl pt-2 lg:max-w-none md:pt-4 text-white">
          <div className="text-sing">
            <p>Antón Tiruliru Liru</p>
            <p>Antón Tiruliru-rá</p>
            <p>Antón Tiruliru Liru</p>
            <p>Antón Tiruliru-rá</p>
          </div>
          <div className="text-sing">
            <p>Jesús al pesebre vamos a adorar</p>
            <p>Jesús al pesebre vamos a adorar</p>
          </div>
          <div className="text-sing">
            <p>Duérmete niño chiquito</p>
            <p>Que la noche viene ya</p>
            <p>Cierra pronto tus ojitos</p>
            <p>Que el viento te arrullará</p>
          </div>
          <div className="text-sing">
            <p>Antón Tiruliru Liru</p>
            <p>Antón Tiruliru-rá</p>
            <p>Antón Tiruliru Liru</p>
            <p>Antón Tiruliru-rá</p>
          </div>
          <div className="text-sing">
            <p>Jesús al pesebre vamos a adorar</p>
            <p>Jesús al pesebre vamos a adorar</p>
          </div>
          <div className="text-sing">
            <p>Duérmete niño chiquito</p>
            <p>Que tu madre velará</p>
            <p>Cierra pronto tus ojitos</p>
            <p>Porque la entristecerás</p>
          </div>
          <div className="text-sing">
            <p>Antón Tiruliru Liru</p>
            <p>Antón Tiruliru-rá</p>
            <p>Antón Tiruliru Liru</p>
            <p>Antón Tiruliru-rá</p>
          </div>
          <div className="text-sing">
            <p>Jesús al pesebre vamos a adorar</p>
            <p>Jesús al pesebre vamos a adorar</p>
          </div>
          <div>
            <Link to="/villancicos">
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
    </div>
  );
}

export default Villancico1;
