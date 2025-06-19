/**
 * StatusTabs.jsx
 *
 * 注文・納品管理画面などで使用する共通のフィルタータブコンポーネント。
 * 「未配送」「配送済」「キャンセル済」「全て」などのステータスを切り替える。
 *
 * 特徴：
 * - 選択中のタブに応じて色が変化（選択中：白文字＋緑背景）
 * - 折り返し対応（モバイルでも1行に収まりきらなければ自動改行）
 * - spacingは0、ボタン幅は文字量に応じて自然に可変（揃えすぎず詰まりすぎず）
 *
 * Props:
 * - selected: 現在選択されているタブ名（文字列）
 * - onChange: タブをクリックしたときに呼び出される関数（labelを引数に渡す）
 * - options: 表示するタブ名の配列（省略時はデフォルトの4つ）
 *
 * 使用例：
 * <StatusTabs selected={status} onChange={setStatus} />
 */

import { HStack, Button } from '@yamada-ui/react'

// デフォルトのタブ名（未指定時に使用）
const DEFAULT_TABS = ['未配送', '配送済', 'キャンセル済', '全て']

export default function StatusTabs({ selected, onChange, options = DEFAULT_TABS }) {
    return (
        <HStack spacing="0" wrap="wrap" justify="center">
            {options.map((label) => (
                <Button
                    key={label}
                    onClick={() => onChange(label)}
                    size="sm"
                    borderRadius="full"
                    border="2px solid #C1CECE"
                    fontWeight="bold"
                    fontSize="15px"
                    minW="fit-content"          // 最低幅は確保（短い文字も潰れない）
                    px="3"                       // 内部paddingはなし（幅調整しやすく）
                    mx="-1"                      // ボタン間の間隔を詰める（spacingが効かない場合の調整）
                    textAlign="center"
                    whiteSpace="nowrap"  // 改行防止
                    color={selected === label ? 'white' : '#355651'}
                    bg={selected === label ? '#355651' : '#D9E5E4'}
                    _hover={{ opacity: 0.85 }}
                >
                    {label}
                </Button>
            ))}
        </HStack>
    )
}
