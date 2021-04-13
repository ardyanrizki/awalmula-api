import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Detail() {
  return (
    <>
      <Header />
      <section id="detail">
        <div class="container">
          <div class="detail-card row">
            <img class="col" src="/blue_tea_depan_1_ 500px.png" />
            <div class="col meta">
              <h6 class="label">Agradaya</h6>
              <a href="" class="product-name"><h4>Blue Tea 10g</h4></a>
              <hr />
              <p class="sellout">Terjual 4</p>
              <h5 class="price">Rp 30.000</h5>
              <hr />
              <button>+ Keranjang</button>
              <div class="desc">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga hic beatae labore id veritatis aut placeat ullam et quidem quis.
            </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
