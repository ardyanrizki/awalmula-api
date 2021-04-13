import React from 'react'
import Card from './Card'

export default function Catalog({ title }) {
  return (
    <section id="catalog">
      <div class="container">
        <div class="catalog-name">
          <h2>{title}</h2>
        </div>
        <div class="cards-container">
          {/* CARD PLACE */}
          <Card />
        </div>
      </div>
    </section>
  )
}
