/**
 * ActionButton.jsx
 *
 * 注文書作成や削除などで使用する、青緑背景＋緑文字の汎用ボタン。
 *
 * 使用例：
 * <ActionButton onClick={handleCreate}>注文書作成</ActionButton>
 */

import { Button } from '@yamada-ui/react'

export default function ActionButton({ children, ...props }) {
    return (
        <Button
            bg="#D9E5E4"
            color="#355651"
            fontWeight="bold"
            fontSize="15px"
            borderRadius="xl"
            border="2px solid #C1CECE"
            px="4"
            py="2"
            _hover={{ opacity: 0.85 }}
            {...props}
        >
            {children}
        </Button>
    )
}
