
export default function SimpleCounter(){
    const [count, setCount]= props
    // const handleClick=()=> props

    return(
        <div>
            <button >
                plus
            </button>
            {count}
        </div>
    )
}
