import Link from 'next/link';

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Política de Privacidad
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <p className="text-lg leading-8">
            En <strong>Accidente Legal Abogados</strong> nos preocupamos por la privacidad y la
            transparencia. A continuación, le indicamos en detalle los tratamientos de datos
            personales que realizamos, así como toda la información relativa a los mismos.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              Información completa sobre Protección de Datos
            </h2>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              1. ¿Quién es el responsable del tratamiento de sus datos?
            </h2>
            <p className="text-lg leading-8">
              <strong>Accidente Legal Abogados</strong>, dirigido por{' '}
              <strong>Cristina González Bonilla</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              2. ¿Con qué finalidad tratamos sus datos personales?
            </h2>
            <p className="text-lg leading-8">
              En Accidente Legal Abogados tratamos la información que nos facilitan las personas
              interesadas con el fin de realizar la gestión administrativa, contable y fiscal de los
              servicios solicitados, así como enviar comunicaciones comerciales sobre nuestros
              productos y servicios.
            </p>
            <p className="text-lg leading-8">
              En el caso de que no facilite sus datos personales, no podremos cumplir con las
              funcionalidades descritas anteriormente.
            </p>
            <p className="text-lg leading-8">
              No se van a tomar decisiones automatizadas en base a los datos proporcionados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              ¿Por cuánto tiempo conservaremos sus datos?
            </h2>
            <p className="text-lg leading-8">
              Los datos se conservarán mientras el interesado no solicite su supresión, y en su caso,
              durante los años necesarios para cumplir con las obligaciones legales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              ¿Cuál es la legitimación para el tratamiento de sus datos?
            </h2>
            <p className="text-lg leading-8">
              Le indicamos la base legal para el tratamiento de sus datos:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg leading-8">
              <li>
                <strong>Ejecución de un contrato:</strong> gestión fiscal, contable y administrativa
                de contactos web.
              </li>
              <li>
                <strong>Interés legítimo del Responsable:</strong> envío de comunicaciones
                comerciales incluso por vía electrónica (RGPD considerando 47, LSSICE art. 21.2).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              ¿A qué destinatarios se comunicarán sus datos?
            </h2>
            <p className="text-lg leading-8">
              Los datos se comunicarán a los siguientes destinatarios:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg leading-8">
              <li>
                <strong>Administración Tributaria</strong>, con la finalidad de cumplir con las
                obligaciones legales.
              </li>
              <li>
                <strong>Entidades financieras</strong>, con la finalidad de girar los recibos
                correspondientes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              Transferencia de datos a terceros países
            </h2>
            <p className="text-lg leading-8">
              No están previstas transferencias de datos a terceros países.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              ¿Cuáles son sus derechos cuando nos facilita sus datos?
            </h2>
            <p className="text-lg leading-8">
              Cualquier persona tiene derecho a obtener confirmación sobre si en Accidente Legal
              Abogados estamos tratando, o no, datos personales que les concierne.
            </p>
            <p className="text-lg leading-8">
              Las personas interesadas tienen derecho a acceder a sus datos personales, así como
              solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión
              cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron
              recogidos. Igualmente tiene derecho a la portabilidad de sus datos.
            </p>
            <p className="text-lg leading-8">
              En determinadas circunstancias, los interesados podrán solicitar la limitación del
              tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio
              o la defensa de reclamaciones.
            </p>
            <p className="text-lg leading-8">
              En determinadas circunstancias y por motivos relacionados con su situación particular,
              los interesados podrán oponerse al tratamiento de sus datos. En este caso, Accidente
              Legal Abogados dejará de tratar los datos, salvo por motivos legítimos imperiosos, o el
              ejercicio o la defensa de posibles reclamaciones.
            </p>
            <p className="text-lg leading-8">
              Podrá ejercitar materialmente sus derechos de la siguiente forma: dirigiéndose a la
              dirección del responsable del tratamiento.
            </p>
            <p className="text-lg leading-8">
              Cuando se realice el envío de comunicaciones comerciales utilizando como base jurídica
              el interés legítimo del responsable, el interesado podrá oponerse al tratamiento de sus
              datos con ese fin.
            </p>
            <p className="text-lg leading-8">
              Si ha otorgado su consentimiento para alguna finalidad concreta, tiene derecho a retirar
              el consentimiento otorgado en cualquier momento, sin que ello afecte a la ilicitud del
              tratamiento basado en el consentimiento previo a su retirada.
            </p>
            <p className="text-lg leading-8">
              En caso de que sienta vulnerados sus derechos en lo concerniente a la aprobación de sus
              datos personales, especialmente cuando no haya obtenido satisfacción en el ejercicio de
              sus derechos, puede presentar una reclamación ante la Autoridad de Control en materia
              de Protección de Datos competente a través de su sitio web:{' '}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                www.aepd.es
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              ¿Cómo hemos obtenido sus datos?
            </h2>
            <p className="text-lg leading-8">
              Los datos personales que tratamos en Accidente Legal Abogados proceden del propio
              interesado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              Las categorías de datos que se tratan son
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-lg leading-8">
              <li>Datos identificativos.</li>
              <li>Información comercial.</li>
            </ul>
            <p className="text-lg leading-8">
              No se tratan categorías especiales de datos personales (son aquellos datos que revelen
              el origen étnico o racial, las opiniones políticas, las convicciones religiosas o
              filosóficas, o la afiliación sindical, datos genéticos, datos biométricos dirigidos a
              identificar de manera unívoca a una persona física, datos relativos a la salud o datos
              relativos a la vida sexual o a la orientación sexual de una persona física).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Enlaces relacionados</h2>
            <p className="text-lg leading-8">
              Puede consultar también nuestro{' '}
              <Link href="/politica-de-cookies" className="text-blue-600 hover:underline font-medium">
                Aviso de Cookies
              </Link>{' '}
              .
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              Última actualización: 7 de abril de 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}