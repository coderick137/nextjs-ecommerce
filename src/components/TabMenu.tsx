export function TabMenu() {
  return (
    <>
      <div className="pt-32">
        <h1 className="text-center text-4xl font-bold text-gray-800">
          Produtos
        </h1>
      </div>
      <div className="flex justify-center space-x-4 mt-4 border-b border-gray-200 pb-14 font-bold text-xl">
        <span className="border-b-2 border-blue-500 pb-2 cursor-pointer">
          Todos
        </span>
        <span className="border-b-2 border-transparent pb-2 cursor-pointer hover:border-blue-500">
          Novos
        </span>

        <span className="border-b-2 border-transparent pb-2 cursor-pointer hover:border-blue-500">
          Mais vendidos
        </span>
        <span className="border-b-2 border-transparent pb-2 cursor-pointer hover:border-blue-500">
          Ofertas
        </span>
      </div>
    </>
  )
}
