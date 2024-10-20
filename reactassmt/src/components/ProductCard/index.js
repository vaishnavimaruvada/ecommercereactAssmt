import {Link} from 'react-router-dom'
import "./index.css"

const ProductCard=(props)=>{

    const{eachProduct}=props 
    const{imgUrl,name,price,description}=eachProduct 
    
    
    const onClickAddCart=()=>{
        
        alert(`product added to your cart  product details are  name: ${name} price: ${price}  description: ${description}`)

    }

    return(
        <div className="proContainer">
           <li>
           <img src={imgUrl} className="plant" alt="plantlogo"/>
           <h3>{name}</h3>
           <p>{description}</p>
           <p>price:${price}</p>
           <div>
            
           
           <Link to="/thankyou">
           <button className='buton'>View Product</button>
           </Link>
           <div>
           <div>
           <button onClick={onClickAddCart}>Add to Cart</button>
           </div>
           </div> 
        </div>
           </li>
        </div>
    )
}
export default ProductCard