import Link from 'next/link';

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-12 px-4">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-black mb-8 text-center drop-shadow-lg">
          Política de Privacidad
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-gray-100 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <section>
            <h2 className="text-2xl font-semibold text-black-900">1. Responsable del tratamiento</h2>
            <p className="text-lg">
              <strong>Accidente Legal Abogados</strong><br />
              NIF: <span className="font-mono bg-black-100 px-2 py-1 rounded text-sm">[Tu NIF]</span><br />
              Domicilio: <span className="font-mono bg-black-100 px-2 py-1 rounded text-sm">[Tu dirección, Jerez de la Frontera]</span><br />
              Email: <span className="font-mono bg-black-100 px-2 py-1 rounded text-sm">[tu@email.com]</span><br />
              Teléfono: <span className="font-mono bg-black-100 px-2 py-1 rounded text-sm">[tu teléfono]</span>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black-900">2. Datos que recopilamos</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nombre, email, teléfono (formularios contacto)</li>
              <li>Cookies técnicas y analíticas (Google Analytics)</li>
              <li>Datos de navegación (IP anonimizada)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black-900">3. Finalidad</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Atender consultas sobre accidentes de tráfico</li>
              <li>Información legal y calculadora indemnizaciones</li>
              <li>Mejorar la web (estadísticas agregadas)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black-900">4. Legitimación y plazo</h2>
            <p>
              Consentimiento (formularios), interés legítimo (cookies técnicas). 
              Conservamos datos 5 años (prescripción legal) o hasta ejercicio de derechos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black-900">5. Derechos</h2>
            <p>
              Acceso, rectificación, supresión, oposición (Art. 15-22 RGPD). 
              Escribe a <span className="font-mono bg-black-100 px-2 py-1 rounded text-sm">[tu@email.com]</span>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black-900">6. Cookies</h2>
            <p>
              Usamos cookies necesarias. Terceros: Google Analytics (anonimizado). 
              Configura en{' '}
              <Link href="/cookies" className="text-blue-600 hover:underline font-semibold bg-blue-100 px-2 py-1 rounded">
                Aviso de Cookies
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black-900">7. Seguridad</h2>
            <p>
              Encriptación SSL, medidas técnicas contra accesos no autorizados.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-black-200/50 text-center">
            <p className="text-sm text-gray-400">
              Última actualización: 9 de marzo de 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
