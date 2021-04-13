import React from 'react'

export default function Header() {
  return (
    <header>
      <nav class="row">
        <img class="col logo" src="/awalmula-logo-beta.png" alt="awal-mula-logo" />
        <div class="col">
          <a href="">
            <img class="cart" src="/shopping-bag.svg" alt="cart" />
          </a>
          <form>
            <input type="search" placeholder="Cari produk kamu di sini..." />
          </form>
        </div>
      </nav>
    </header>
  )
}
