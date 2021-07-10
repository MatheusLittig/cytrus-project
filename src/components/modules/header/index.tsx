import { SearchBar, MainMenu } from '../../elements'

export function Header(): JSX.Element {
  return (
    <div className="h-full max-w-screen-xl flex items-center justify-between my-0 mx-auto">
      <div className="h-full space-x-10 flex items-center">
        <img src="/logo.svg" width={100} />
        <MainMenu />
      </div>

      <SearchBar />
    </div>
  )
}
