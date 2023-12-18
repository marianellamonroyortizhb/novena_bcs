import { Link } from "react-router-dom";
function Lectura4() {
  return (
    <div className="bg-home-pattern bg-no-repeat bg-contain md:bg-right-bottom bg-bottom pb-36 md:pb-54 px-6 md:py-2">
      <div className="flex flex-col md:flex-row items-center">
        <img
          className="w-24 h-24 md:w-20 md:h-20 md:mr-4 rounded-full md:rounded-none"
          src="/img/iconos/Lectura_hoy_Icon.svg"
          alt="Manos en oración"
          title="Manos en oración"
        />
        <h1 className="text-yellow-main md:text-5xl text-3xl mt-3 md:mt-0 text-center md:text-center">
          Día Cuarto
        </h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20">
        <div className="mx-auto max-w-2xl py-2 lg:max-w-none lg:py-4 text-white">
          <p className="mb-3">
            Desde el seno de su madre comenzó el Niño Jesús a poner en práctica
            su entera sumisión a Dios, que continuó sin la menor interrupción
            durante toda su vida.
          </p>
          <p className="mb-3">
            Adoraba a su Eterno Padre, le amaba, se sometía a su voluntad,
            aceptaba con resignación el estado en que se hallaba conociendo toda
            su debilidad, toda su humillación, todas sus incomodidades.
          </p>
          <p className="mb-3">
            ¿Quién de nosotros quisiera retroceder a un estado semejante con el
            pleno goce de la razón y de la reflexión?, ¿quién pudiera sostener a
            sabiendas un martirio tan prolongado, tan penoso de todas maneras?.
          </p>
          <p className="mb-3">
            Por ahí entró el Divino Niño en su dolorosa y humilde carrera; así
            empezó a anonadarse delante de su Padre, a enseñarnos lo que Dios
            merece por parte de su criatura, a expiar nuestro orgullo, origen de
            todos nuestros pecados, y hacemos sentir toda la criminalidad y
            desórdenes del orgullo.
          </p>
          <p className="mb-3">
            Deseamos hacer una verdadera oración; empecemos por formarnos de
            ella una exacta idea contemplando al Niño en el seno de su madre, El
            Divino Niño ora y ora del modo más excelente.
          </p>
          <p className="mb-3">
            No habla, no medita ni se deshace en tiernos afectos. Su mismo
            estado, aceptado con la intención de honrar a Dios, es su oración y
            ese estado expresa altamente todo lo que Dios merece y de qué modo
            quiere ser adorado por nosotros.
          </p>
          <p className="mb-3">
            Unámonos a las oraciones del Niño Dios en el seno de María; unámonos
            al profundo abatimiento y sea este el primer afecto de nuestro
            sacrificio a Dios.
          </p>
          <p className="mb-3">
            Démonos a Dios, no para ser algo como lo pretende continuamente
            nuestra vanidad, sino para ser nada, para quedar eternamente
            consumidos y anonadados, para renunciar a la estimulación de
            nosotros mismos, a todo cuidado de nuestra grandeza aunque sea
            espiritual, a todo movimiento de vanagloria.
          </p>
          <p className="mb-3">
            Desaparezcamos a nuestros propios ojos y que Dios sólo sea todo para
            nosotros.
          </p>
          <Link to="/lecturas">
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
  );
}

export default Lectura4;
