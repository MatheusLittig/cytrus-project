import { MainMenu, SearchBar } from '../elements'

export function Header(): JSX.Element {
  return (
    <header
      className="
      row-span-1
      col-span-2
      bg-transparent
      px-16
      flex items-center justify-between
      border-b
      border-gray-600
    "
    >
      <div className="flex items-center h-full">
        <img src="/logo.svg" width={120} className="mr-16" />
        <MainMenu />
      </div>

      <SearchBar />
    </header>
  )
}
