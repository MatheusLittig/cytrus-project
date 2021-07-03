import { FiSearch } from 'react-icons/fi'

export function SearchBar(): JSX.Element {
  return (
    <div
      className="
        h-12 w-72
        border border-gray-600
        rounded-full
        flex items-center justify-between
        px-6
        text-gray-50
        focus:ring-1
        "
    >
      <input
        type="text"
        placeholder="Pesquise algo..."
        className="border-none outline-none w-4/5 bg-transparent"
      />
      <button className="hover:bg-gray-800 p-2 rounded-full">
        <FiSearch className="text-gray-600 text-lg" />
      </button>
    </div>
  )
}
