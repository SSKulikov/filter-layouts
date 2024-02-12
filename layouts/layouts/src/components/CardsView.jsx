import { ShopCard } from "./ShopCard";

export const CardsView = ({productList}) => {
    return (
        <div className="card-view">
            {productList.map((product, i) => 
                <ShopCard key={i} goods={product}/>
            )}
        </div>
    )

}