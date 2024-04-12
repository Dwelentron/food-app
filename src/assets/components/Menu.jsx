import Food from "./Food"
import {useCart} from 'react-use-cart'

export default function Menu(){
    const{addItem}=useCart()
    let menu=[
        {
            id:1,
            name:"Chapo Madondo",
            img:"https://i.ytimg.com/vi/JDwd54oTXlM/maxresdefault.jpg",
            desc:"Be entised with mouth watery Chapo Madondo",
            price:300,
        },
        {
            id:2,
            name:"Ugali Pork",
            img:"https://foodomaa.sgp1.cdn.digitaloceanspaces.com/doleout/items/bbefc339-aa5d-4d56-b8e6-f8d068eb9b86.webp",
            desc:"Ugali with pork? never tasted better",
            price: 450,
        },
        {
            id:3,
            name:"Pilau",
            img:"https://recipes.net/wp-content/uploads/2021/10/pilau-rice-recipe.jpg",
            desc:"Enjoy the taste of Pwani",
            price:300,
        },
        {
            id:4,
            name:"Biryani",
            img:"https://i.ytimg.com/vi/K9qJQmOeohU/maxresdefault.jpg",
            desc:"Enjoy the taste of Pwani",
            price:250,
        },
        {
            id:5,
            name:"Mukimo ",
            img:"https://img-global.cpcdn.com/recipes/175205ad5a70f38c/1200x630cq70/photo.jpg",
            desc:"The famous Traditional Qusine, Mashed potatoes and greens",
            price:150,
        },
        {
            id:6,
            name:"Mchele Njeri",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSIVL6XDizEBpIEO3NLrXytrLT37On6C92kBu7vKtSM3ZdO4_eyYynwSuijdhfKoSdWs&usqp=CAU",
            desc:"Just a simple of rice with ndengu But the tast is not Simple",
            price:150,
        },
        {
            id:7,
            name:"Fish curry" ,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4TLYhmQ0vth7LirtpAOkJAzwa7IojZI9ywwUzXkFldQ&s",
            desc:"Be entised with mouth watery Fish Curry",
            price:400,
        },
        {
            id:8,
            name:"Chiken",
            img:"https://st.depositphotos.com/1008010/2031/i/450/depositphotos_20318387-stock-photo-roasted-chicken.jpg",
            desc:"Chicken? never tasted better",
            price: 500,
        },
        {
            id:9,
            name:"Chiken breast",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoJjG1Xfnl76jMOY0lzfVElCBB81v-CeBO3NOBugIWQ&s",
            desc:"Enjoy the fingerLicking ChikenBreast",
            price:400,
        },
        {
            id:10,
            name:"Githeri",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlc2Li4uPVWuoKGeZlMe5j-8Hwf5LxZPDa7MSA6G2E6w&s",
            desc:"Maize and Beans ",
            price:250,
        },
        {
            id:11,
            name:"French Fries ",
            img:"https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=800&height=800",
            desc:"The famous chopped deep fried Potatoes",
            price:100,
        },
        {
            id:12,
            name:"chapati curry",
            img:"https://www.cookingandme.com/wp-content/uploads/2012/12/8234784286_ee408b27e6_z.jpg",
            desc:"Chapati and greens stew ",
            price:350,
        },
    ]
    return(
        <>
        <div className="grid grid-cols-3  mx-auto">
            
                {menu.map((items)=>
                    <span className="border w-72 bg-orange-100 m-1" key={items.id}>
                        <h1 className="text-3xl text-center uppercase">{items.name}</h1>
                        <img src={items.img} alt="" className="w-96 h-60 object-cover hover:object-contain" />
                        <div className="">
                            <span className=" w-44 h-44">{items.desc}</span> &nbsp; <br />
                            <span className="text-xl font-black">Price Ksh {items.price} /=</span>
                            <br />
                            <button onClick={()=>addItem(p)} className="rounded-2xl border p-2 text-orange-950 font-bold bg-orange-500 hover:bg-orange-700">ADD TO PLATE</button>
                        </div>
                    </span>
                )}
            </div>
        </>
    )
}