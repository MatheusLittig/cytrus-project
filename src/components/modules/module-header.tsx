import { MainMenu, SearchBar } from '../elements'

export function Header(): JSX.Element {
  return (
    <header className="border-b border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between h-full m-screen">
        <div className="flex items-center h-full">
          <img src="/logo.svg" width={120} className="mr-16" />
          <MainMenu />
        </div>

        <SearchBar />
      </div>
    </header>
  )
}
