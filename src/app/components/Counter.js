
import { useState } from "react";

function Counter(){
    // const [left, setLeft]= useState(0);
    // const [right, setRight]= useState(0);

    const[clicks, setClicks] = useState({left:0, right:0})
    const[allClicks, setAllClicks] = useState([])
    const[total, setTotal]= useState(0)

    const handleLeftClick = () => {
        setClicks({ left: clicks.left + 1 , right: clicks.right});
        setAllClicks(allClicks.concat("L"));
        setTotal(total+1)
      };
    
      const handleRightClick = () => {
        setClicks({ ...clicks, right: clicks.right + 1 });
        setAllClicks(allClicks.concat("R"));
        setTotal(total+1)
      };
    return(
        <div>
            <h1>Counter</h1>
            {clicks.left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {clicks.right}

            <p>All Clicks: {allClicks}</p>
            <p> Total: {total} </p>
        </div>
    )
}

export default Counter;