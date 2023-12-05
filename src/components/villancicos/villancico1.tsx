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
        <h1 className="text-yellow-main text-5xl">Anton Tiruliruliru</h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20">
        <div className="mx-auto max-w-2xl py-2 lg:max-w-none lg:py-4 text-white">
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
