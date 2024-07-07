// import React from 'react'
import React, { useState } from 'react'
import Topbar from './components/Topbar'
import Header from './components/Header'
import Product from './components/Product'
import Footer from './components/Footer'


//Main Component used to combine all the components of the page
function App() {
  let [cart, setCart] = useState(0) //This variable is used save the cart count dynamically


  let data = [ //data variable is used to store the values for the products cards components

    {
      img: "https://m.media-amazon.com/images/I/51+e7yrgPpL._AC_UL480_FMwebp_QL65_.jpg",
      title: "Noise Buds VS104 Truly Wireless Earbuds with 45H of Playtime, Quad Mic with ENC, Instacharge",
      price: "999"
    },
    {
      img: "https://m.media-amazon.com/images/I/614hH1Cot3L._AC_UL480_QL65_.jpg",
      title: "Noise Buds VS104 Truly Wireless Earbuds with 45H of Playtime, Quad Mic with ENC, Instacharge",
      price: "999"
    },
    {
      img: "https:/m.media-amazon.com/images/I/517lSvEVVsL._AC_UL480_QL65_.jpg",
      title: "Noise Two Wireless On-Ear Headphones with 50 Hours Playtime, Low Latency(up to 40ms), 4 Play Modes",
      price: "1699"
    },
    {
      img: "https://m.media-amazon.com/images/I/61avh1xd+vL._AC_UL480_QL65_.jpg",
      title: "Noise Buds VS104 Max Truly Wireless in-Ear Earbuds with ANC(Up to 25dB),Up to 45H Playtime, Quad Mic",
      price: "1799"
    },
    {
      img: "https://m.media-amazon.com/images/I/51O-ZSlD6eL._AC_UL480_QL65_.jpg",
      title: "Noise Buds VS104 Truly Wireless Earbuds with 45H of Playtime, Quad Mic with ENC, Instacharge",
      price: "999"
    },
    {
      img: "https://m.media-amazon.com/images/I/512sO2L0k6L._AC_UL480_QL65_.jpg",
      title: "Noise Two Wireless On-Ear Headphones with 50 Hours Playtime, Low Latency(up to 40ms), 4 Play Modes",
      price: "1697"
    },
    {
      img: "https://m.media-amazon.com/images/I/610b8Za+PtL._AC_UL480_QL65_.jpg",
      title: "Noise Buds VS402 in-Ear Truly Wireless Earbuds with 50H of Playtime, Low Latency, Quad Mic with ENC,",
      price: "1499"
    },
    {
      img: "https://m.media-amazon.com/images/I/61bodEi+1JL._AC_UL480_QL65_.jpg",
      title: "Noise Buds X Prime in-Ear Truly Wireless Earbuds with 120H of Playtime, Quad Mic with ENC",
      price: "1799"
    },
  ]

  return (
    <>
      <Topbar cart={cart} />

      <Header />


      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              data.map((e, i) => {
                return <Product cart={cart} setCart={setCart} data={e} key={i} />
              })
            }
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App