import ClipeameLogo from "./assets/Clipeame_Logo.png";

export default function Legal() {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-black pt-10 px-4 overflow-auto">
      <img
        src={ClipeameLogo}
        alt="Clipeame logo"
        className="w-32 md:w-44 lg:w-80 pb-8"
      />

      <div className="w-full max-w-3xl">
        <h1 className="text-center text-2xl md:text-3xl font-bold text-white">
          Aviso legal
        </h1>
        <p className="text-gray-400 text-center mt-2">
          Última actualización: 26-06-2025
        </p>

        <section className="mt-8">
          <p className="text-gray-300 mt-2">
            Última actualización: 26-06-2025 En cumplimiento del artículo 10 de
            la Ley 34/2002, de Servicios de la Sociedad de la Información y
            Comercio Electrónico (LSSI-CE), se informa de lo siguiente: Titular
            del sitio web: Clipeame Correo electrónico de contacto:
            soporte.clipeame@gmail.com Este sitio web tiene como finalidad
            ofrecer información sobre Clipeame y facilitar la suscripción a una
            lista de espera para comunicaciones futuras sobre su lanzamiento y
            servicios relacionados. El acceso a este sitio web implica la
            aceptación de sus Términos y Condiciones de Uso y de la Política de
            Privacidad. Todos los derechos de propiedad intelectual e industrial
            sobre el contenido del sitio pertenecen a Clipeame o a sus
            respectivos titulares. Queda prohibida su reproducción o uso no
            autorizado. La relación con los usuarios se regirá por la normativa
            vigente en España. Cualquier controversia será resuelta ante los
            tribunales competentes conforme a dicha normativa. .
          </p>
        </section>
      </div>
    </div>
  );
}
