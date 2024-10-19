import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./Item";

function Items(){
    const [items, setItems] = useState([]);
    const [page, setPages] = useState(1);
    const [limit, setLimit] = useState(12);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(()=>{
        axios.get(`https://reqres.in/api/users/?page=${page}&per_page=${limit}`).then(res=>{
            console.log(res.data)
            setItems(res.data.data)
            setTotalItems(res.data.total);
        })
    }, [page, limit])

    const next =()=>{
        if (page < Math.ceil(totalItems / limit)) {
            setPages(page + 1);
        }
    }
    const previous = ()=>{
        if (page>1){
            
            setPages(page - 1);
        }
    }
    const handleLimit = (e)=>{
        e.preventDefault();
        setLimit(e.target.value);
        setPages(1)
    }

    return(
        <div className="flex flex-column justify-around flex-wrap shadow-[rgba(0,0,0,0.24)_0px_3px_8px] w-[800px] m-auto  p-[30px] rounded-[20px]">
            <h1 className="text-center text-3xl">Items list</h1> 
            <select onChange={handleLimit} name="limit" id="imit" >
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="12">12</option>
            </select>
            <div className="flex flex-column justify-around flex-wrap  w-[800px] m-auto  p-[30px] rounded-[20px]">
                {items.map((item, ind)=>
                    <Item item={item} key={ind}/>
                )}
            </div>
            <div className="flex justify-between gap-[100px] ">
                <button onClick={previous} id="previous" className="bg-[blue] text-[white] rounded-[10px] p-2.5 border-2 border-solid border-[blue]">Previous</button>
                <span>{page} из {Math.ceil(totalItems / limit)}</span>
                <button onClick={next} id="next" className="bg-[blue] text-[white] rounded-[10px] p-2.5 border-2 border-solid border-[blue]">Next</button>
            </div>
        </div>
        
        
    )
}
export default Items;