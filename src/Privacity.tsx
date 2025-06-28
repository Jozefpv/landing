import ClipeameLogo from "./assets/Clipeame_Logo.png";

export default function Privacity() {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-black pt-10 px-4 overflow-auto">
      <img
        src={ClipeameLogo}
        alt="Clipeame logo"
        className="w-32 md:w-44 lg:w-80 pb-8"
      />

      <div className="w-full max-w-3xl">
        <h1 className="text-center text-2xl md:text-3xl font-bold text-white">
          Política de Privacidad
        </h1>
        <p className="text-gray-400 text-center mt-2">
          Última actualización: 26-06-2025
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white">
            1. Responsable del tratamiento
          </h2>
          <p className="text-gray-300 mt-2">
            Responsable: Clipeame
            <br />
            Correo de contacto: soporte.clipeame@gmail.com
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-white">
            2. Datos que recopilamos
          </h2>
          <p className="text-gray-300 mt-2">
            - Nombre (opcional)
            <br />- Correo electrónico (obligatorio)
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-white">
            3. Finalidad del tratamiento
          </h2>
          <p className="text-gray-300 mt-2">
            - Enviar notificaciones relacionadas con el lanzamiento de Clipeame
            <br />- Enviar comunicaciones promocionales y campañas de marketing
            relacionadas exclusivamente con Clipeame
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-white">
            4. Base legal del tratamiento
          </h2>
          <p className="text-gray-300 mt-2">
            La base legal para el tratamiento de tus datos es tu consentimiento
            expreso, que otorgas al marcar la casilla correspondiente en el
            formulario de registro. Podrás retirar tu consentimiento en
            cualquier momento, sin que ello afecte a la licitud del tratamiento
            basado en el consentimiento previo a su retirada.
          </p>
          <p className="text-gray-300 mt-2">
            Este documento cumple con el Reglamento (UE) 2016/679 (RGPD) y la
            Ley Orgánica 3/2018 de Protección de Datos y Garantía de los
            Derechos Digitales (LOPDGDD).
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-white">
            5. Conservación de los datos
          </h2>
          <p className="text-gray-300 mt-2">
            Conservaremos tus datos mientras no revoques tu consentimiento y
            sigas interesado en recibir nuestras comunicaciones. Si decides
            darte de baja, tus datos serán eliminados de forma segura.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-white">
            6. Derechos del usuario
          </h2>
          <p className="text-gray-300 mt-2">
            Tienes derecho a:
            <br />
            - Acceder a tus datos personales
            <br />
            - Solicitar la rectificación de datos inexactos
            <br />
            - Solicitar la supresión de tus datos (derecho al olvido)
            <br />
            - Oponerte al tratamiento o solicitar su limitación
            <br />
            - Solicitar la portabilidad de tus datos
            <br />
          </p>
          <p className="text-gray-300 mt-2">
            Puedes ejercer estos derechos escribiendo a
            soporte.clipeame@gmail.com, adjuntando una copia de tu documento de
            identidad para verificar tu identidad. También tienes derecho a
            presentar una reclamación ante la Agencia Española de Protección de
            Datos (www.aepd.es).
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-white">
            7. Destinatarios y encargados del tratamiento
          </h2>
          <p className="text-gray-300 mt-2">
            No compartimos tus datos con terceros, salvo obligación legal.
            Utilizamos plataformas seguras de email marketing (por ejemplo
            Mailchimp, Brevo, etc.) que actúan como encargados del tratamiento y
            cumplen con el RGPD.
          </p>
        </section>

        <section className="mt-6 mb-10">
          <h2 className="text-xl font-semibold text-white">
            8. Medidas de seguridad
          </h2>
          <p className="text-gray-300 mt-2">
            Clipeame aplica medidas técnicas y organizativas apropiadas para
            garantizar la confidencialidad, integridad y disponibilidad de los
            datos personales, y para prevenir su pérdida, uso indebido o acceso
            no autorizado.
          </p>
        </section>
      </div>
    </div>
  );
}
