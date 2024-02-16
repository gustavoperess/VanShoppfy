import { getProductBySessionId } from "../../services/cart";
import { useEffect, useState } from "react";


function CartComponent() {
    const [products, setProduct] = useState([])

useEffect(() =>{
    const fetchData = async () => {
        try  {
            let produtsData = await getProductBySessionId();
            produtsData = produtsData.map((product) => ({
                ...product
            }))
            setProduct(produtsData);
        } catch(err) {
            console.error('Error fetching products information:', err);
        }
    }
    fetchData()
}, []);


return (
    <>
        {products.map ((product, index) =>
                <p key={index}>{product.product}</p>  
        )}
    </>
    )
};

export default CartComponent


