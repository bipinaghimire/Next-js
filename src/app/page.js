'use client'
import { useState } from "react";
import PhoneBook from "./components/PhoneBook";

export default function Home(){
  const [count, setCount]= useState(0)
  const handleClick=()=> setCount(count+1)

  const notes=[
    {
      id:1,
      desc:'hello hello heelooo',
      important: true
    },
    {
      id:2,
      desc:'hello hello world',
      important: false
    },
    {
      id:3,
      desc:'hello world world',
      important: false
    },
  ]
  const details=[
    {
      id:1,
      name:'abc',
      phone: 123456
    },
    {
      id:2,
      name:'xyz',
      phone: 654123
    },
    {
      id:3,
      name:'lmn',
      phone: 654321
    },
  ]
  return(
    <div>
      {/* <h3>Home</h3> */}
      {/* <Counter/> */}
      {/* <Feedback/> */}
      {/* <SimpleCounter count={count} handleClick={handleClick}/>
      <br/>
      <SimpleCounter count={count} handleClick={handleClick}/> */}
      {/* <Notes /> */}
      {/* <PhoneBook details={details}/> */}
      <PhoneBook/>
    </div>
  )
}
 
// 'use client'
// import { useState } from "react";
// import Feedback from "./feedback";

// export default function Home() {
//   const [count, setCount] = useState(0);
//   const name = 'Abc';
//   const time = Date.now().toString();

//   const handleClick = () => {
//     // alert("You cliced the button")
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>Welcome to React</h1>
//       <p>Today is {time}</p>
//       <p>My name is {name}</p>

//       <h2>You clicked {count} times.</h2>
//       <button onClick={handleClick}>
//         Add
//       </button>
//       <br></br>
//       <button onClick={()=>setCount(count-1)}>
//         minus
//       </button>
//       <br></br>
//       <button onClick={()=>setCount(0)}>
//         Reset
//       </button>
//       <br></br>
//       <Feedback />
//     </div>
//   );
// }
