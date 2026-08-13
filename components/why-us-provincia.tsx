import { CheckCircle } from 'lucide-react'

const features = [
  {
    name: "Especialistas en accidentes de tráfico",
    description: "Nos centramos en la reclamación de indemnizaciones derivadas de accidentes de circulación y en la defensa de los derechos de las personas lesionadas.",
  },
  {
    name: "Estudio individual del accidente",
    description: "Analizamos las circunstancias del siniestro, la documentación médica y los daños y perjuicios que puedan acreditarse.",
  },
  {
    name: "Reclamación frente a la aseguradora",
    description: "Gestionamos la reclamación y las comunicaciones necesarias con la compañía responsable para defender tus intereses.",
  },
  {
    name: "Atención online en toda España",
    description: "Puedes iniciar tu reclamación a distancia y realizar el seguimiento del expediente sin necesidad de desplazarte al despacho.",
  }
]

export function WhyUsProvincia () {
  return (
    <div className='bg-white dark:bg-gray-950 py-12 sm:py-16'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl'>
            ¿Por qué contar con Accidente Legal Abogados?
          </h2>
        </div>
        <div className='mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <div key={feature.name} className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 text-gray-900 dark:text-gray-50'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600'>
                    <CheckCircle className='h-6 w-6 text-white' aria-hidden='true' />
                  </div>
                  {feature.name}
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600 dark:text-gray-300'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
