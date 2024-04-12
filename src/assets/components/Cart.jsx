import { useCart } from "react-use-cart"

export default function Cart(){
    const{
        cartTotal,
        isEmpty,
        totalUniqueItems,
        updateItemQuantity,
        removeItem
    }=useCart()

    if(isEmpty) return <p className="text-orange-900 text-3xl p-2 font-bold animate-bounce ease-in-out">Oops! Your Plate Is Clean</p>

    return(
        <>
        
        <div>
            <span>
                <h1>Plate {totalUniqueItems} </h1>
            </span>

            <span>
            {items.map((item)=>
                    <span className="border w-72 bg-orange-100 m-1">
                        <h1 className="text-3xl text-center uppercase">{item.name}</h1>
                        <img src={item.img} alt="" className="w-96 h-60 object-cover hover:object-contain" />
                        <div className="">
                            <span className="text-xl font-black">Price Ksh {item.price} /=</span>
                            <br />
                            <button className="rounded-2xl border p-2 text-orange-950 font-bold bg-orange-500 hover:bg-orange-700">ADD</button>
                            <button className="rounded-2xl border p-2 text-orange-950 font-bold bg-orange-500 hover:bg-orange-700">Remove</button>
                            <button className="rounded-2xl border p-2 text-orange-950 font-bold bg-orange-500 hover:bg-orange-700">Cancell</button>
                        </div>
                    </span>
                )}
            </span>
        </div>
        </>
    )
}