import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'



// Product Component
function Product({ cart, setCart, data }) {

    // toggle variable with useState to switch between Add to cart and Remove from cart button
    let [toggle, setToggle] = useState(true)

    // Catch Rating value
    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
    }

    // Each Pointer Variable is used to display the review values in the console (only for developement purposes)
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)

    return (
        <>
            <div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src={data.img} alt="..." />
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">{data.title}</h5>
                            <div className='App'>
                                <Rating   //Rating component dependency is added to display the ratings.
                                    onClick={handleRating}
                                    onPointerEnter={onPointerEnter}
                                    onPointerLeave={onPointerLeave}
                                    onPointerMove={onPointerMove}
                                    size={20}
                                />

                            </div>
                            ₹ {data.price}
                        </div>

                    </div>

                    {/* An unary opreator used using useState toggle variable to  change the Add to cart and Remove from cart button dynamically*/}
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        {toggle ?
                            <div class="text-center"><button class="btn btn-outline-dark mt-auto"
                                onClick={() => {
                                    setToggle(!toggle)
                                    setCart(cart + 1)
                                }}>Add To Cart</button></div> :
                            <div class="text-center"><button class="btn btn-dark mt-auto"
                                onClick={() => {
                                    setToggle(!toggle)

                                    setCart(cart - 1)
                                }}>Remove From Cart</button></div>
                        }

                    </div>

                </div>
            </div>
        </>
    )
}

export default Product