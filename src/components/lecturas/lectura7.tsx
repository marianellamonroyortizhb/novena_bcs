import { Link } from "react-router-dom";
function Lectura7() {
  return (
    <div className="bg-home-pattern bg-no-repeat bg-contain md:bg-right-bottom bg-bottom pb-36 md:pb-54 px-6 md:py-2">
      <div className="flex flex-col md:flex-row items-center">
        <img
          className="w-24 h-24 md:w-20 md:h-20 md:mr-4 rounded-full md:rounded-none"
          src="/img/iconos/Lectura_hoy_Icon.svg"
          alt="Manos en oración"
        />
        <h1 className="text-yellow-main md:text-5xl text-3xl mt-3 md:mt-0 text-center md:text-center">
          Día Séptimo
        </h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20">
        <div className="mx-auto max-w-2xl py-2 lg:max-w-none lg:py-4 text-white">
          <p className="mb-3">
            Representémonos el viaje de María y José hacia Belén, llevando
            consigo, aún no nacido, al Creador del universo hecho hombre.
          </p>
          <p className="mb-3">
            Contemplemos la humanidad y la obediencia de este Divino Niño que
            aunque de raza judía y habiendo amado durante siglos a su pueblo con
            una predilección inexplicable, obedece así a un príncipe extranjero
            que forma el censo de población de su provincia, como si hubiese
            para Él en esa circunstancia algo que le halagase, y quisiese
            apresurarse a aprovechar la ocasión de hacerse empadronar oficial y
            auténticamente como súbdito en el momento en el que venía al mundo.
          </p>
          <p className="mb-3">
            ¿No es extraño que la humillación, que causa tan invencible
            repugnancia a la criatura, parezca ser la única cosa creada que
            tenga atractivos para el Creador? ¿No nos enseñará la humildad de
            Jesús a amar esa hermosa virtud?.
          </p>
          <p className="mb-3">
            ¡Ah...!Que llegue el momento en que aparezca el deseado de las
            naciones, porque todo clama por este feliz acontecimiento, el mundo,
            sumido en la oscuridad y el malestar buscando y no encontrando el
            alivio de sus males, suspira por su Libertador.
          </p>
          <p className="mb-3">
            El anhelo de José, la expectativa de María, son cosa que no puede
            expresar el lenguaje humano.
          </p>
          <p className="mb-3">
            El Padre Eterno se halla, si es lícito emplear esta expresión
            adorablemente impaciente por dar a su Hijo único al mundo, y verle
            ocupar su puesto entre las criaturas visibles.
          </p>
          <p className="mb-3">
            El Espíritu Santo arde en deseos de presentar a la luz del día esta
            santa humanidad tan bella que Él mismo ha formado con tan especial y
            divino esmero, en cuanto al Divino Niño, objeto de tantos anhelos,
            recordemos que hacia nosotros avanza lo mimo que hacia Belén.
          </p>
          <p className="mb-3">
            Apresuremos con nuestro deseo el momento de su llegada; purifiquemos
            nuestras almas para que sean su mística morada, y nuestros corazones
            para que sean su Manis terrenal; que nuestros actos de mortificación
            desprendimiento, preparen los caminos del Señor y hagan rectos sus
            senderos.
          </p>
          <Link to="/lecturas">
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
  );
}

export default Lectura7;
