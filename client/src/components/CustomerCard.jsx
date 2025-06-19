/**
 * CustomerCard.jsx
 *
 * 顧客情報を表示する選択可能なカード。
 * チェックボックスは表示せず、カード全体の背景色で選択状態を表現。
 * 横幅は固定（例：360px）
 *
 * 使用例：
 * <CustomerCard
 *   name="田中 太郎"
 *   address="大阪府大阪市東成区中本"
 *   phone="080-1234-5678"
 *   registeredAt="2025/05/12"
 *   notes="定期注文あり。対応は火曜午前のみ"
 *   isSelected={true}
 *   onClick={...}
 * />
 */

import { Box, VStack, Text } from '@yamada-ui/react'

export default function CustomerCard({
  name,
  address,
  phone,
  registeredAt,
  notes,
  isSelected = false,
  onClick,
}) {
  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      bg={isSelected ? '#E1E7E7' : 'white'}
      borderRadius="xl"
      border="1px solid #C1CECE"
      px="4"
      py="3"
      shadow="sm"
      w="90%"
      _hover={{ opacity: 0.95 }}
    >
      <VStack align="start" spacing="1" color="#252525">
        <Text fontSize="16px" fontWeight="bold">{name}</Text>
        <Text fontSize="15px">住所：{address}</Text>
        <Text fontSize="15px">電話番号：{phone}</Text>
        <Text fontSize="15px">登録日：{registeredAt}</Text>
        <Text fontSize="15px">備考：{notes}</Text>
      </VStack>
    </Box>
  )
}
