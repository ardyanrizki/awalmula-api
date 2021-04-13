import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProducts } from '../store/actions'
import { css } from '@emotion/react'
import { BeatLoader } from "react-spinners"
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Detail() {
  const dispatch = useDispatch()
  const { id } = useParams()

  const [imageLoaded, setImageLoaded] = useState(false);
  const [product, setProduct] = useState({});
  const [delay, setDelay] = useState(true);

  const products = useSelector(state => state.products.products)
  const loading = useSelector(state => state.products.loading)
  const error = useSelector(state => state.products.error)

  const override = css`
  display: block;
  margin: 80px auto;
  border-color: #476040;
  `;

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (!error && !loading) {
    products.forEach(item => {
      if (+id === +item.id) {
        setProduct(item)
        setDelay(false)
      }
    })
  }

  return (
    <>
      <Header />
      <section id="detail">
        <div className="container">
          {
            delay ?
              <BeatLoader color="#476040" loading={loading} css={override} size={18} /> :
              <div className="detail-card row">
                <img className={`col smooth-image image-${imageLoaded ? 'visible' : 'hidden'}`} onLoad={() => setImageLoaded(true)} src="/blue_tea_depan_1_ 500px.png" alt={product.name} />
                <div className="col meta">
                  <h6 className="label">Agradaya</h6>
                  <h4>{product.name}</h4>
                  <hr />
                  <p className="sellout">Terjual 4</p>
                  <h5 className="price">Rp 30.000</h5>
                  <hr />
                  <button>+ Keranjang</button>
                  <div className="desc">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga hic beatae labore id veritatis aut placeat ullam et quidem quis.
                </p>
                  </div>
                </div>
              </div>
          }
        </div>
      </section>
      <Footer />
    </>
  )
}
