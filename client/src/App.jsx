import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SamplePage from './pages/SamplePage';
import CustomerList from './pages/CustomerList';
import OrderList from './pages/OrderList';
import CustomerSelect from './pages/CustomerSelect';
import Home from './pages/Home';
import OrderDetail from './pages/OrderDetail';

// function Home() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:5000/api/hello')
//       .then((res) => res.json())
//       .then((data) => {
//         console.log('APIからのデータ:', data);
//         setMessage(data.message);
//       })
//       .catch((err) => {
//         console.error('エラー:', err);
//       });
//   }, []);

//   return (
//     <div style={{ padding: '20px', fontSize: '18px' }}>
//       サーバーからのメッセージ：{message}
//     </div>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sample" element={<SamplePage />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="/orders/new" element={<CustomerSelect />} />
        <Route path="/orders/:orderId" element={<OrderDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
