import React from 'react'
import leavesImg from '../assets/leaves.svg'
import wrathImg from '../assets/sports-and-competition.svg'
import reviewImg from '../assets/review.svg'
import logoWhiteImg from '../assets/awalmula_white.png'

export default function Footer() {
  return (
    <>
      <section id="footer">
        <div className="container">
          <div className="row">
            <div className="col-feature">
              <img src={leavesImg} alt="leaves-img" />
              <h5>100% Produk Lokal</h5>
              <p>Belanja produk sehat berkualitas dari brand lokal pilihan</p>
            </div>
            <div className="col-feature">
              <img src={wrathImg} alt="wrath-img" />
              <h5>Mitra Mula Terpilih</h5>
              <p>Brand lokal terpercaya yang telah terkurasi</p>
            </div>
            <div className="col-feature">
              <img src={reviewImg} alt="review-img" />
              <h5>Inspirasi Hidup Sehat</h5>
              <p>Awal perjalanan dalam gerakan menyebarkan pola hidup sehat yang berkualitas</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mini-banner">
        <div className="container">
          <div className="left">
            <img src={logoWhiteImg} alt="awal-mula" />
            <p>#AwalSebuahKebaikan</p>
          </div>
        </div>
      </section>
    </>
  )
}
