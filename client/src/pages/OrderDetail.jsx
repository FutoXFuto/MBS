import OrderInfoRow from '../components/OrderInfoRow';

function OrderDetail() {
    return (

        <div>
            <OrderInfoRow label="顧客名" value="山田 太郎" />
            <OrderInfoRow label="受注日" value="2025/04/28" />
        </div>
    );
}

export default OrderDetail;