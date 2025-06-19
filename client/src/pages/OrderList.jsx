/**
 * OrderList.jsx
 *
 * 受注管理画面。注文リストの表示、検索、ステータスフィルター、作成/削除ボタンなどを含む。
 * 状態管理やダミーデータによるフィルタリングのみ対応。
 */

import { useState } from 'react'
import { Box, VStack, HStack, IconButton } from '@yamada-ui/react'
import { Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SearchInput from '../components/SearchInput'
import StatusTabs from '../components/StatusTabs'
import ActionButton from '../components/ActionButton'
import OrderCard from '../components/OrderCard'

const dummyOrders = [
    {
        id: '12345',
        customerName: '山田 太郎',
        date: '2025/04/28',
        statuses: ['未配送'],
    },
    {
        id: '12346',
        customerName: '山田 太郎',
        date: '2025/04/28',
        statuses: ['未配送', 'キャンセル済'],
    },
    {
        id: '12347',
        customerName: '山田 太郎',
        date: '2025/04/28',
        statuses: ['未配送', '要入力', 'キャンセル済'],
    },
    {
        id: '12348',
        customerName: '田中 花子',
        date: '2025/04/29',
        statuses: ['配送済'],
    },
    {
        id: '12349',
        customerName: '佐藤 次郎',
        date: '2025/04/30',
        statuses: ['未配送', '要入力'],
    },
    {
        id: '12350',
        customerName: '山本 一郎',
        date: '2025/05/01',
        statuses: ['配送済', 'キャンセル済'],
    },
    {
        id: '12351',
        customerName: '田中 花子',
        date: '2025/05/02',
        statuses: ['未配送', '要入力'],
    },
    {
        id: '12352',
        customerName: '山田 太郎',
        date: '2025/05/03',
        statuses: ['未配送', 'キャンセル済'],
    },
    {
        id: '12353',
        customerName: '佐藤 次郎',
        date: '2025/05/04',
        statuses: ['配送済'],
    },
    {
        id: '12354',
        customerName: '山田 太郎',
        date: '2025/05/05',
        statuses: ['未配送', '要入力', 'キャンセル済'],
    },
]


export default function OrderListPage() {
    const navigate = useNavigate()
    const [filter, setFilter] = useState('未配送')
    const [keyword, setKeyword] = useState('')
    const [isSelectableMode, setIsSelectableMode] = useState(false)
    const [selectedOrders, setSelectedOrders] = useState([]) // 選択された注文のID配列

    const filteredOrders = dummyOrders.filter((order) => {
        const matchStatus = filter === '全て' || order.statuses.includes(filter)
        const matchKeyword =
            order.id.includes(keyword) || order.customerName.includes(keyword)
        return matchStatus && matchKeyword
    })

    return (
        <>
            <PageHeader mode="none" title="受注管理" showBackIcon />

            <Box bg="#F3F6F6" minH="100vh" w="100vw" px="4" py="5">
                <VStack align="stretch" spacing="4">
                    <Box
                        position="fixed"
                        top="0"
                        left="0"
                        right="0"
                        zIndex="banner"
                        px="4"
                        pt="5"
                        pb="3"
                        bg="rgba(243, 246, 246, 0.8)"  // 半透明グレー背景
                        backdropFilter="blur(8px)"     // 背景ぼかし
                        borderBottom="1px solid #D0D5D5" // 下枠線
                        boxShadow="md"                 // ふわっと浮くような影（任意）
                    >

                        {/* 上部ボタン群 */}
                        <HStack justify="space-between" pt="60px">
                            <IconButton
                                icon={<Trash2 />}
                                aria-label="削除"
                                size="sm"
                                color="#355651"
                                bg="transparent"
                                _hover={{ opacity: 0.8 }}
                            />
                            <HStack spacing="3">
                                <ActionButton onClick={() => navigate('/orders/new')}>注文書作成</ActionButton>
                                <ActionButton onClick={() => setIsSelectableMode(true)}>注文書削除</ActionButton>
                            </HStack>
                        </HStack>

                        {/* 検索バー */}
                        <Box maxW="360px" mx="auto" w="100%" pt="2" pb="2">
                            <SearchInput
                                placeholderCore="受注番号、顧客名"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                        </Box>

                        {/* ステータスタブ */}
                        <Box maxW="360px" mx="auto" w="100%">
                            <StatusTabs selected={filter} onChange={setFilter} />
                        </Box>
                    </Box>

                    {/* 注文カードリスト */}
                    <Box
                        mt="210px"
                        overflow="auto"
                        px="4"
                    >
                        <VStack spacing="3" align="center">
                            {filteredOrders.map((order) => (
                                <OrderCard
                                    key={order.id}
                                    orderId={order.id}
                                    customerName={order.customerName}
                                    orderDate={order.date}
                                    statuses={order.statuses}
                                    isSelectable={isSelectableMode}
                                    isSelected={selectedOrders.includes(order.id)}
                                    onSelectToggle={(id) => {
                                        setSelectedOrders((prev) =>
                                            prev.includes(id)
                                                ? prev.filter((item) => item !== id)
                                                : [...prev, id]
                                        )
                                    }}
                                />
                            ))}
                        </VStack>
                    </Box>
                    {/* 選択モードのときのみ表示 */}
                    {isSelectableMode && (
                        <HStack
                            position="fixed"
                            bottom="0"
                            left="0"
                            right="0"
                            px="4"
                            py="3"
                            justify="center"
                            spacing="4"
                            boxShadow="md"
                            zIndex="banner"
                            bg="rgba(243, 246, 246, 0.8)"  // ← 半透明白
                            backdropFilter="blur(8px)"     // ← 背景ぼかし
                            borderTop="1px solid #E0E0E0"  // ← 上部に仕切り
                        >
                            {/* キャンセルボタン */}
                            <Box
                                as="button"
                                onClick={() => {
                                    setIsSelectableMode(false)
                                    setSelectedOrders([])
                                }}
                                bg="#D9E5E4"
                                color="#355651"
                                fontWeight="bold"
                                fontSize="15px"
                                borderRadius="full"
                                border="1px solid #355651"
                                px="20px"
                                py="6px"
                            >
                                キャンセル
                            </Box>

                            {/* 削除するボタン */}
                            <Box
                                as="button"
                                onClick={() => {
                                    alert(`削除: ${selectedOrders.join(', ')}`)
                                    setSelectedOrders([])
                                    setIsSelectableMode(false)
                                }}
                                bg="#F2A8A8"
                                color="#7B1C1C"
                                fontWeight="bold"
                                fontSize="15px"
                                borderRadius="full"
                                border="1px solid #7B1C1C"
                                px="20px"
                                py="6px"
                            >
                                削除する
                            </Box>
                        </HStack>
                    )}
                </VStack>
            </Box>
        </>
    )
}