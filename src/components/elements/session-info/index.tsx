export function SessionInfo(): JSX.Element {
  return (
    <div className="flex items-center space-x-4">
      <img
        src="https://github.com/MatheusLittig.png"
        alt="Profile pic"
        width={50}
        className="rounded-full"
      />

      <div>
        <h1 className="text-xl font-bold text-gray-50">Matheus Littig</h1>
        <p className="text-sm text-yellow-500">littig.works@gmail.com</p>
      </div>
    </div>
  )
}
