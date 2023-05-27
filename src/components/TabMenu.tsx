export function TabMenu() {
  return (
    <>
      <div className="pt-32">
        <h1 className="text-center text-4xl font-bold text-gray-800">
          Produtos
        </h1>
      </div>
      <div className="flex justify-center space-x-4 mt-4 border-b border-gray-200 pb-4 font-bold text-xl">
        <span>Todos</span>
        <span>Novos</span>

        <span>Mais vendidos</span>
        <span>Ofertas</span>
      </div>
    </>
  )
}
