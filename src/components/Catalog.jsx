import React from 'react'
import { useSelector } from 'react-redux'
import useDebounce from '../hooks/useDebounce'
import { css } from '@emotion/react'
import { BeatLoader } from "react-spinners"
import Card from './Card'

export default function Catalog({ title, data, loading, error }) {
  const search = useSelector(state => state.search.search)

  const debounced = useDebounce(search, 700)

  const override = css`
  display: block;
  margin: 80px auto;
  border-color: #476040;
  `;

  return (
    <section id="catalog">
      <div className="container">
        <div className="catalog-name">
          <h2>{title}</h2>
        </div>
        <div className="cards-container">
          {
            loading ?
              <BeatLoader color="#476040" loading={loading} css={override} size={18} /> :
              // eslint-disable-next-line
              data.filter((item) => {
                if (debounced === null)
                  return item
                else if (item.name.toLowerCase().includes(debounced.toLowerCase())) {
                  return item
                }
              }).map((item, index) => (
                <Card item={item} key={index} />
              ))
          }
        </div>
      </div>
    </section>
  )
}
