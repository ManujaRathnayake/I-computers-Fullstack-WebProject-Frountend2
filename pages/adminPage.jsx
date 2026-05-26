import { Route, Routes , Link} from "react-router-dom"; // නිවැරදි import එක


export default function AdminPage(){
   return(
      <div className="w-full h-screen bg-accent flex items-center ">
         <div className="w-[300px] h-full bg-accent">
            

           
            <Link to="/admin/" className="block p-4 text-white hover:bg-accent-light hover:bg-gray-700">Orders</Link>
            <Link to="/admin/products" className="block p-4 text-white hover:bg-accent-light hover:bg-gray-700">Products</Link>
            <Link to="/admin/users" className="block p-4 text-white hover:bg-accent-light hover:bg-gray-700">Users</Link>
            <Link to="/admin/reviews" className="block p-4 text-white hover:bg-accent-light hover:bg-gray-700">Reviews</Link>




         </div>
         
         <div className="w-[calc(100%-300px)] h-full border-[10px] bg-primary border-accent rounded-2xl">
            
            {/* මෙන්න මෙතන Routes ලෙස වෙනස් විය යුතුයි */}
            <Routes>
               <Route path="/" element={<h1>Orders Dashboard</h1>} />
               <Route path="/products" element={<h1>Products</h1>} />
               <Route path="/users" element={<h1>Users</h1>} />
               <Route path="/reviews" element={<h1>Reviews</h1>} />
            </Routes>
            
         </div>
      </div>
   )
}