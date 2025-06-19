/**
 * OrderCard.jsx
 *
 * 受注情報を表示するカードコンポーネント。
 * BaseInfoCard をラップし、選択状態（チェックON/OFF）を管理。
 *
 * 使用例：
 * <OrderCard
 *   orderId="12345"
 *   customerName="山田太郎"
 *   orderDate="2023-10-01"
 *   statuses={['未配送', '要入力']}
 * />
 */

import { useState } from 'react'
import BaseInfoCard from './BaseInfoCard'
import { useNavigate } from 'react-router-dom'

export default function OrderCard({
    orderId,
    customerName,
    orderDate,
    statuses = [],
    isSelectable = false,
    isSelected = false,
    onSelectToggle,
}) {
    const navigate = useNavigate()

    const handleClick = () => {
        if (isSelectable) {
            onSelectToggle?.(orderId)
        } else {
            navigate(`/order/${orderId}`)
        }
    }

    return (
        <BaseInfoCard
            type="受注"
            id={orderId}
            customerName={customerName}
            dateLabel="受注日"
            date={orderDate}
            statuses={statuses}
            isSelectable={isSelectable}
            isSelected={isSelected}
            onClick={handleClick}
        />
    )
}
