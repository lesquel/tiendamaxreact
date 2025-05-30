import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/configuracion')({
    component: RouteComponent,
  })

  function RouteComponent() {
    return <div>
      <h1>Configuracion</h1>
      <p>Estoy trabajando en esto :v y en toda la pagina jaajajaja. Soy humano :(</p>
    </div>
  }
