interface SessionDivider {
  title: string
}

export function SessionDivider({ title }: SessionDivider): JSX.Element {
  return (
    <div className="w-full flex items-center space-x-2">
      <div className="h-px w-4 bg-gray-600" />
      <h3 className="text-xs font-medium text-gray-600 tracking-wide">
        {title}
      </h3>
      <div className="h-px flex-1 bg-gray-600" />
    </div>
  )
}
