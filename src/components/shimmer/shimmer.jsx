import "./shimmer.css"

function Card(){
    return <div className="card"></div>
}

function Shimmer(){
    const card=Array(12).fill("")
    return (
        <>
        {card.map((ele,idx)=><Card key={idx}/>)}
        </>
    )
}


export default Shimmer;