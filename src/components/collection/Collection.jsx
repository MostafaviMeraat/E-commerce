import React from 'react'
import './collection.scss'
import CollectionItem from '../collection item/CollectionItem'

const Collection = ({ title, items, imageUrl }) => {

  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))
        }
      </div>

    </div>
  )
}

export default Collection