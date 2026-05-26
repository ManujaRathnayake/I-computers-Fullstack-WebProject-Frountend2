export default function ProductCard(props) {
  return (
    <div className="w-64 bg-white rounded-2xl overflow-hidden shadow-md">
      <h1 className="text-lg font-semibold text-gray-800 px-4 pt-4">{props.name}</h1>
      <img className="w-full h-48 object-cover mt-2" src={props.image} alt={props.name} />
      <p className="text-gray-600 px-4 mt-2">LKR {props.price.toLocaleString()}</p>
      <div className="px-4 pb-4 mt-3">
        <button className="w-full bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800">
          buy now
        </button>
      </div>
    </div>
  );
}