import { CheckCircle } from 'lucide-react'

const features = [
  {
    name: 'Especialistas en accidentes de tráfico',
    description:
      'Nos centramos en reclamaciones relacionadas con accidentes de circulación y sus consecuencias.'
  },
  {
    name: 'Atención en toda España',
    description:
      'Gestionamos casos de accidentes ocurridos en cualquier punto de España mediante atención online y seguimiento personalizado.'
  },
  {
    name: 'Equipo de abogados y tramitadores',
    description:
      'Nuestro equipo trabaja conjuntamente para estudiar y realizar el seguimiento de cada expediente.'
  },
  {
    name: 'Estudiamos tu caso',
    description:
      'Analizamos las circunstancias del accidente, las lesiones, la documentación disponible y los posibles perjuicios reclamables.'
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
