import { useState } from 'react'
import { Box, VStack } from '@yamada-ui/react'
import CustomerCard from '../components/CustomerCard'

const customers = [
    {
        id: 'c1',
        name: '田中 太郎',
        address: '大阪府大阪市東成区中本',
        phone: '080-1234-5678',
        registeredAt: '2025/05/12',
        notes: '定期注文あり。対応は火曜午前のみ',
    },
    {
        id: 'c2',
        name: '佐藤 花子',
        address: '京都府京都市北区上賀茂',
        phone: '080-9999-0000',
        registeredAt: '2025/05/10',
        notes: '月1回訪問あり',
    },
]

function CustomerSelectPage() {
    const [selectedCustomerId, setSelectedCustomerId] = useState(null)

    return (
        <Box bg="#F3F6F6" minH="100vh" w="100vw" px="4" py="6">
            <VStack spacing="4">
                {customers.map((customer) => (
                    <CustomerCard
                        key={customer.id}
                        name={customer.name}
                        address={customer.address}
                        phone={customer.phone}
                        registeredAt={customer.registeredAt}
                        notes={customer.notes}
                        isSelected={selectedCustomerId === customer.id}
                        onClick={() => setSelectedCustomerId(customer.id)}
                    />
                ))}
            </VStack>
        </Box>
    )
}

export default CustomerSelectPage
