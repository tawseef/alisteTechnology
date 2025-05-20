import React from 'react'
import Products from '../Products/Products'

function HomePage() {
  return (
    <div>
        <div>The E Commerce Store</div>
        <hr/>
        <div>
            <div>The Catalogue</div>
            <div>
                <Products/>
            </div>
        </div>
    </div>
  )
}

export default HomePage