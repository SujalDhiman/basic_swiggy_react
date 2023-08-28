import "./card.css"

function Card({imageUrl,rName,aName,cuisines,aRating}){
    let url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"
    return (
        <div className="card1">
            <img src={url+imageUrl} alt="logo" height={"100px"} width={"200px"} />
            <h2>{rName}</h2>
            <h3>{aName}</h3>
            <h3>{cuisines}</h3>
            <h3>{aRating}</h3>
        </div>
    )
}

export default Card;