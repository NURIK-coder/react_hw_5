function Item({item}){
    return(
        <div className="w-[300px] h-[400px] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] m-5 p-5 rounded-[20px] border-[3px] ">
            <img src={item.avatar} className="w-[200px] h-[200px] m-auto rounded-[50%]" alt="" />
            <h1 className="text-3xl mt-5"><b>{item.first_name} {item.last_name}</b></h1>
            <p>Email: {item.email}</p>

        </div>
    )
}

export default Item;