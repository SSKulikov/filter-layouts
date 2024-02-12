import { ShopItem } from "./ShopItem"

export const ListView = ({productList}) => {
    return (
        <div className="list-view">
            {productList.map((poduct, i) => 
                <ShopItem key={i} goods={poduct}/>
            )}
        </div>
    )
}