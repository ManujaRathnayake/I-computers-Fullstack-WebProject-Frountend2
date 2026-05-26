import ProductCard from "./productCard";
export default function TrendingProducts(){
    return(
        <div>
            <h1>Trending Products</h1>
            
              <ProductCard name="Macbook Air" price="150000" image="https://picsum.photos/seed/picsum/200/300"/>
              <ProductCard name="Dell XPS" price="120000" image="https://picsum.photos/seed/picsum/200/300"/>          
              <ProductCard name="HP Spectre" price="130000" image="https://picsum.photos/seed/picsum/200/300"/>                    
        </div>
    )
}