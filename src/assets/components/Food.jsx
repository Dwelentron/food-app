export default function Food ({foodMenu}){
    return(
        <>
            <div>
                {foodMenu.map((items)=>{
                    <span>
                        <h1>{items.name}</h1>
                        <img src={items.img} alt="" className="w-72" />
                        <div className="grid">
                            <span>{items.desc}</span> <br />
                            <span> Price: {items.price}</span>
                        </div>
                    </span>
                })}
            </div>
        </>
    )
}