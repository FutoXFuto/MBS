/**
 * PageHeader.jsx
 *
 * 固定ヘッダー（上部固定 / 横幅100%）として使用する共通コンポーネント。
 * モードに応じて戻るボタンや右側ボタンを切り替える。
 * 高さは h="70px" で統一されているため、呼び出し側で <Box pt="80px"> などの余白を取ること。
 *
 * [表示モード一覧]
 * - mode="none"：戻るボタンとタイトルのみ。右側なし（showBackIcon=falseで戻るボタンも消せる）
 * - mode="edit"：左に戻るボタン、右に「編集」ボタン
 * - mode="form"：戻るボタンなし。右に「キャンセル」「保存」ボタン
 *
 * [props]
 * - mode: "none" | "edit" | "form"（表示モード）
 * - title: string（中央に表示するタイトル文字列）
 * - onBack: 戻るボタンのクリックハンドラ（edit, noneで有効）
 * - onEdit: 編集ボタンのクリックハンドラ（editで有効）
 * - onSave: 保存ボタンのクリックハンドラ（formで有効）
 * - onCancel: キャンセルボタンのクリックハンドラ（formで有効）
 * - showBackIcon: boolean（mode="none"のときに戻るボタンを表示するか、デフォルトtrue）
 *
 * [使用例]
 * <PageHeader
 *   mode="edit"
 *   title="注文情報"
 *   onBack={handleBack}
 *   onEdit={handleEdit}
 * />
 *
 * <PageHeader
 *   mode="form"
 *   title="注文作成"
 *   onSave={handleSave}
 *   onCancel={handleCancel}
 * />
 *
 * <PageHeader
 *   mode="none"
 *   title="統計ページ"
 *   showBackIcon={false}
 * />
 */

import { Flex, Box, Text, IconButton, Button, HStack } from '@yamada-ui/react'
import { ArrowLeft } from 'lucide-react'

export default function PageHeader({
    mode = 'none',
    title,
    onBack,
    onEdit,
    onSave,
    onCancel,
    showBackIcon = true,
}) {
    return (
        <Flex
            as="header"
            h="70px"
            position="fixed"
            top="0"
            w="100%"
            zIndex="100"
            bg="#355651"
            px="4"
            py="2"
            align="center"
        >
            {mode === 'form' ? (
                <>
                    {/* 左：タイトル */}
                    <Box>
                        <Text fontSize="22px" fontWeight="bold" color="#F3F6F6">
                            {title}
                        </Text>
                    </Box>

                    {/* 右：ボタン群 */}
                    <HStack spacing="2" ml="auto">
                        <Button
                            bg="#D1E0DE"
                            color="#355651"
                            fontWeight="bold"
                            size="sm"
                            borderRadius="xl"
                            onClick={onCancel}
                            px={3}
                            py={1}
                            _hover={{ bg: '#b9cecc' }}
                            _active={{ bg: '#a1bbba' }}
                        >
                            キャンセル
                        </Button>

                        <Button
                            bg="#F2D372"
                            color="#355651"
                            fontWeight="bold"
                            size="sm"
                            borderRadius="xl"
                            onClick={onSave}
                            px={3}
                            py={1}
                            _hover={{ bg: '#e6c05f' }}
                            _active={{ bg: '#d4ac4c' }}
                        >
                            保存
                        </Button>

                    </HStack>
                </>
            ) : (
                // ✅ 通常モード（none / edit）用 HStack
                <HStack w="100%" justify="space-between" align="center">
                    {showBackIcon && mode !== 'form' ? (
                        <IconButton
                            icon={<ArrowLeft />}
                            aria-label="戻る"
                            variant="ghost"
                            color="white"
                            onClick={onBack}
                        />
                    ) : (
                        <Box w="40px" /> // アイコンスペース確保
                    )}

                    <Text fontSize="22px" fontWeight="bold" color="#F3F6F6" textAlign="center" flex="1">
                        {title}
                    </Text>

                    {mode === 'edit' ? (
                        <Button
                            bg="#F2D372"
                            color="#355651"
                            fontWeight="bold"
                            size="sm"
                            borderRadius="xl"
                            onClick={onEdit}
                            px={3}
                            py={1}
                            _hover={{ bg: '#e6c05f' }}
                            _active={{ bg: '#d4ac4c' }}
                        >
                            編集
                        </Button>
                    ) : (
                        <Box w="40px" /> // ボタンのスペース確保（空でも右側のバランス維持）
                    )}
                </HStack>
            )}
        </Flex>
    )
}
