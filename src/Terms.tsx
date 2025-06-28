import ClipeameLogo from "./assets/Clipeame_Logo.png";

export default function Terms() {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-black pt-10 px-4 overflow-auto">
      {/* Logo */}
      <img
        src={ClipeameLogo}
        alt="Clipeame logo"
        className="w-32 md:w-44 lg:w-80 pb-8"
      />

      {/* Contenedor de contenido */}
      <div className="w-full max-w-3xl">
        {/* Título principal */}
        <h1 className="text-center text-2xl md:text-3xl font-bold text-white">
          Términos y Condiciones de Uso
        </h1>
        <p className="text-gray-400 text-center mt-2">
          Última actualización: 26-06-2025
        </p>

        {/* Secciones */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white">
            1. Identidad del titular
          </h2>
          <p className="text-gray-300 mt-2">
            El presente sitio web es gestionado por Clipeame.
            <br />
            Contacto: soporte.clipeame@gmail.com
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-white">2. Objeto</h2>
          <p className="text-gray-300 mt-2">
            A través de esta web, ofrecemos la posibilidad de unirse a una lista
            de espera para recibir notificaciones sobre el lanzamiento de
            Clipeame y otras comunicaciones relacionadas, como campañas
            promocionales, novedades y actualizaciones del servicio.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-white">
            3. Registro en la lista de espera
          </h2>
          <p className="text-gray-300 mt-2">
            Los usuarios pueden registrarse voluntariamente proporcionando su
            nombre (opcional) y correo electrónico (obligatorio). Al hacerlo,
            declaran ser mayores de 18 años y aceptar expresamente estos
            Términos y Condiciones y la Política de Privacidad.
            <br />
            Se puede solicitar la baja en cualquier momento a través del enlace
            de baja en cada comunicación o contactando a
            soporte.clipeame@gmail.com.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-white">4. Uso permitido</h2>
          <p className="text-gray-300 mt-2">
            El usuario se compromete a utilizar la web de forma lícita, conforme
            a la legislación vigente, la moral y el orden público. Queda
            prohibido:
            <br />
            - Suplantar la identidad de terceros
            <br />
            - Proporcionar datos falsos o inexactos
            <br />- Usar la web con fines fraudulentos, ilegales o no
            autorizados
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-white">
            5. Propiedad intelectual
          </h2>
          <p className="text-gray-300 mt-2">
            Todos los contenidos del sitio (logotipo, textos, imágenes, diseño
            gráfico y código fuente) son propiedad de Clipeame o de sus
            respectivos titulares, y están protegidos por derechos de propiedad
            intelectual e industrial. Queda prohibida su reproducción,
            distribución o modificación sin autorización.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-white">
            6. Protección de datos personales
          </h2>
          <p className="text-gray-300 mt-2">
            Los datos personales recabados serán tratados conforme a la Política
            de Privacidad, cumpliendo el Reglamento (UE) 2016/679 (RGPD) y la
            Ley Orgánica 3/2018 (LOPDGDD). El tratamiento se basa en el
            consentimiento expreso del usuario, revocable en cualquier momento
            contactando a soporte.clipeame@gmail.com.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-white">
            7. Exclusión de responsabilidad
          </h2>
          <p className="text-gray-300 mt-2">
            Clipeame no garantiza la disponibilidad continua del sitio ni la
            ausencia de errores en su contenido. No se responsabiliza del uso
            que hagan los usuarios de la información ofrecida. El sitio es
            informativo y promocional, y no constituye una oferta vinculante de
            servicios digitales hasta el lanzamiento de la plataforma.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-white">
            8. Modificaciones
          </h2>
          <p className="text-gray-300 mt-2">
            Clipeame se reserva el derecho de modificar estos Términos y
            Condiciones en cualquier momento. Cualquier cambio será publicado en
            esta página y la fecha de última actualización será actualizada.
          </p>
        </section>

        <section className="mt-6 mb-10">
          <h2 className="text-xl font-semibold text-white">
            9. Legislación aplicable y jurisdicción
          </h2>
          <p className="text-gray-300 mt-2">
            La relación entre Clipeame y el usuario se regirá por la legislación
            española. Cualquier controversia se someterá a los Juzgados y
            Tribunales del domicilio del usuario, cuando este sea consumidor.
          </p>
        </section>
      </div>
    </div>
  );
}
