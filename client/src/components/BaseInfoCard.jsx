import { Box, Flex, HStack, VStack, Text } from '@yamada-ui/react'
import { CheckIcon } from 'lucide-react'
import StatusBadge from './StatusBadge'

export default function BaseInfoCard({
  type,
  id,
  customerName,
  dateLabel,
  date,
  statuses = [],
  isSelectable = false,
  isSelected = false,
  onClick,
}) {
  return (
    <Box
      onClick={isSelectable ? onClick : undefined}
      cursor={isSelectable ? 'pointer' : 'default'}
      bg={isSelected ? '#E1E7E7' : 'white'}
      borderRadius="xl"
      border="1px solid #C1CECE"
      px="4"
      py="3"
      shadow="sm"
      mx="auto"
      w="100%"
      maxW="100%"
      _hover={isSelectable ? { opacity: 0.95 } : undefined}
    >
      <Flex align="center" justify="space-between" flexWrap="wrap">
        {/* ✅ 左側：チェック＋テキスト */}
        <HStack align="start" spacing="3" flex="1" minW={0}>
          {isSelectable && (
            <Box
              w="20px"
              h="20px"
              border="2px solid #355651"
              borderRadius="sm"
              bg={isSelected ? '#355651' : 'transparent'}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexShrink={0}
              mt="1px"
            >
              {isSelected && <CheckIcon size={12} color="white" />}
            </Box>
          )}

          <VStack align="start" spacing="1" flex="1" minW={0}>
            <Text fontWeight="bold" fontSize="15px" color="#252525">
              {type}番号：#{id}
            </Text>
            <Text fontSize="15px" color="#252525">
              顧客名：{customerName}
            </Text>
            <Text fontSize="15px" color="#252525">
              {dateLabel}：{date}
            </Text>
          </VStack>
        </HStack>

        {/* ✅ 右側：バッジ群を中央揃え */}
        <Flex
          flexDirection="column"
          align="flex-end"
          justify="center"
          gap="2px"
          flexShrink={0}
        >
          {statuses.includes('配送済') ? (
            <StatusBadge status="配送済" />
          ) : statuses.includes('未配送') ? (
            <StatusBadge status="未配送" />
          ) : (
            <Box h="22px" />
          )}

          {statuses.includes('要入力') ? (
            <StatusBadge status="要入力" />
          ) : (
            <Box h="22px" />
          )}

          {statuses.includes('キャンセル済') ? (
            <StatusBadge status="キャンセル済" />
          ) : (
            <Box h="22px" />
          )}
        </Flex>
      </Flex>
    </Box>
  )
}
