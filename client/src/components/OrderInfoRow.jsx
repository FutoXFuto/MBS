/**
 * OrderInfoRow.jsx
 *
 * ラベルと値を横並びで表示する汎用コンポーネント。
 * 注文番号・顧客名・住所などの表示に使用。
 *
 * 使用例：
 * <OrderInfoRow label="注文番号" value="001" />
 */

import { HStack, Text } from '@yamada-ui/react'

export default function OrderInfoRow({ label, value }) {
    return (
        <HStack
            justify="space-between"
            py="2"
            borderBottom="1px solid #D0D5D5"
        >
            <Text fontWeight="bold" fontSize="15px" color="#355651">
                {label}
            </Text>
            <Text fontSize="15px" color="#252525" textAlign="right">
                {value || 'ー'}
            </Text>
        </HStack>
    )
}
