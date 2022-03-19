import React from 'react'

// local components
import CategoryOverlay from '../../UIcomponents/categoryCard/CategoryOverlay'


function HomeCategory() {
  return (
    <div>
      <h3>Featured Categories</h3>
      <CategoryOverlay cardImage="https://i.etsystatic.com/30245540/r/il/74dc31/3589662508/il_794xN.3589662508_pw1h.jpg" cardText="House Plants" />
      <CategoryOverlay cardImage="https://i.etsystatic.com/8890129/r/il/134e12/1289118298/il_794xN.1289118298_6jke.jpg" cardText="Dried Flowers" />
      <CategoryOverlay cardImage="https://i.etsystatic.com/13346155/r/il/c4458b/1418769174/il_794xN.1418769174_3xuk.jpg" cardText="Planters and Pots" />
      <CategoryOverlay cardImage="https://i.etsystatic.com/16547354/r/il/c0e4a7/3746305296/il_794xN.3746305296_35qe.jpg" cardText="Garlands" />
    </div>
  )
}

export default HomeCategory