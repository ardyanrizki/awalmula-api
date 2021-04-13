import React from 'react'

export default function Footer() {
  return (
    <>
      <section id="footer">
        <div class="container">
          <div class="row">
            <div class="col-feature">
              <img src="/leaves.svg" alt="" />
              <h5>100% Produk Lokal</h5>
              <p>Belanja produk sehat berkualitas dari brand lokal pilihan</p>
            </div>
            <div class="col-feature">
              <img src="/sports-and-competition.svg" alt="" />
              <h5>Mitra Mula Terpilih</h5>
              <p>Brand lokal terpercaya yang telah terkurasi</p>
            </div>
            <div class="col-feature">
              <img src="/review.svg" alt="" />
              <h5>Inspirasi Hidup Sehat</h5>
              <p>Awal perjalanan dalam gerakan menyebarkan pola hidup sehat yang berkualitas</p>
            </div>
          </div>
        </div>
      </section>
      <section class="mini-banner">
        <div class="container">
          <div class="left">
            <img src="/awalmula_white.png" alt="awal-mula" />
            <p>#AwalSebuahKebaikan</p>
          </div>
        </div>
      </section>
    </>
  )
}
