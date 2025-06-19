/**
 * DeliveryCard.jsx
 *
 * 納品情報を表示するカードコンポーネント。
 * BaseInfoCard をラップし、選択状態（チェックON/OFF）を管理。
 *
 * 使用例：
 * <DeliveryCard
 *   deliveryId="D-001"
 *   customerName="佐藤花子"
 *   deliveryDate="2023-11-15"
 *   statuses={['キャンセル済']}
 * />
 */

import { useState } from 'react'
import BaseInfoCard from './BaseInfoCard'

export default function DeliveryCard({
    deliveryId,
    customerName,
    deliveryDate,
    statuses = [],
}) {
    const [isSelected, setIsSelected] = useState(false)

    return (
        <BaseInfoCard
            type="納品"
            id={deliveryId}
            customerName={customerName}
            dateLabel="納品日"
            date={deliveryDate}
            statuses={statuses}
            isSelectable={true}
            isSelected={isSelected}
            onClick={() => setIsSelected((prev) => !prev)}
        />
    )
}
