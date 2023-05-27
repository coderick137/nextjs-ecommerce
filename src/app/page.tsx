import { Header } from '@/components/Header'
import { ProductList } from '@/components/ProductList'
import { TabMenu } from '@/components/TabMenu'

export default function Home() {
  return (
    <div>
      <Header />
      <TabMenu />
      <ProductList />
    </div>
  )
}
