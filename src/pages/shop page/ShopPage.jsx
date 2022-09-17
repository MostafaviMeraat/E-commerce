import React from 'react'
import SHOP_DATA from '../shop data/SHOP_DATA'
import Collection from '../../components/collection/Collection'

const ShopPage = () => {

  return (
    <div>
      {SHOP_DATA.map(({ id, ...otherShopDataProps }) => {
        return (
          <Collection key={id} {...otherShopDataProps} />
        )
      })}
    </div>
  )
}

export default ShopPage