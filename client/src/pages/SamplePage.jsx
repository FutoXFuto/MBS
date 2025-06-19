import { useState } from "react"
import { Box, VStack } from "@yamada-ui/react"
import BaseInfoCard from "../components/BaseInfoCard"
import OrderCard from "../components/OrderCard"
import DeliveryCard from "../components/DeliveryCard"
import SearchInput from "../components/SearchInput"
import PageHeader from "../components/PageHeader"
import StatusTabs from "../components/StatusTabs"
import ActionButton from '../components/ActionButton'
import { HStack } from "@yamada-ui/react"

function SamplePage() {
  const [isSelected, setIsSelected] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [filter, setFilter] = useState('未配送')

  return (
    <>
      {/* ✅ ヘッダーは画面直下に固定 */}
      <PageHeader
        mode="edit"
        title="注文登録"
        onSave={() => console.log('保存')}
        onCancel={() => console.log('キャンセル')}
        showBackIcon={false}
      />

      {/* ✅ 下のコンテンツは余白を確保して描画 */}
      <Box bg="#F3F6F6" minH="100vh" w="100vw" py="6" px="4" pt="80px">

        <OrderCard
          orderId="12345"
          customerName="山田太郎"
          orderDate="2023-10-01"
          statuses={['配送済', 'キャンセル済']}
        />

        <DeliveryCard
          deliveryId="67890"
          customerName="佐藤花子"
          deliveryDate="2023-10-05"
          statuses={['未配送', '要入力']}
        />

        <SearchInput
          placeholderCore="納品番号または顧客名"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <StatusTabs selected={filter} onChange={setFilter} />

        <HStack spacing="3">
          <ActionButton onClick={() => console.log("handleOrderCreate")}>注文書作成</ActionButton>
          <ActionButton onClick={() => console.log("handleOrderDelete")}>注文書削除</ActionButton>
        </HStack>

      </Box>
    </>
  )
}


export default SamplePage