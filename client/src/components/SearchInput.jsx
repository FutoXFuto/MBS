/**
 * SearchInput.jsx
 *
 * 「🔍◯◯で検索」のような入力バー。
 * ◯◯部分を props（placeholderCore）で渡す。実際の input は非表示で、クリックで受け取る。
 *
 * 使用例：
 * <SearchInput placeholderCore="受注番号、顧客名" value={value} onChange={handleChange} />
 */

import { HStack, Input, Box, Text } from '@yamada-ui/react'
import { Search } from 'lucide-react'

export default function SearchInput({
    value,
    onChange,
    placeholderCore = '',
}) {
    return (
        <HStack
            border="1px solid #C1CECE"
            borderRadius="full"
            px="3"
            py="1"
            bg="white"
            spacing="2"
            w="100%"
            maxW="400px"
            mx="auto"
        >
            {/* 🔍 検索アイコン */}
            <Box color="#777777" display="flex" alignItems="center">
                <Search size={18} />
            </Box>

            {/* 入力欄（透明） */}
            <Input
                value={value}
                onChange={onChange}
                variant="unstyled"
                fontSize="15px"
                px="0"
                placeholder={`${placeholderCore}で検索`}
                _placeholder={{ color: '#777777' }}
            />
        </HStack>
    )
}
