export const ShopItem = ({goods}) => {
    return (
        <div className="list-view-item">
            <img src={goods.img} alt="" />
            <div>{goods.name}</div>
            <div>{goods.color}</div>
            <div className="price">{goods.price}</div>
            <button className="button">ADD TO CARD</button>
        </div>
    )
}