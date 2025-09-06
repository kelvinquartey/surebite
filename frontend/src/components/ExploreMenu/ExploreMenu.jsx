import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({category, setCategory}) => {

  return (
    <section className='explore-menu' id='explore-menu'>
      <h1>Explore our Menu</h1>
      <p className="explore-menu-text">Craving something delicious? Pick your favorites and we’ll bring them straight to your door — hot, fresh, and ready to enjoy.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index) => {
          return(
            <div onClick={() => setCategory(prev => prev === item.menu_name? "All": item.menu_name)} key={item.menu_name} className="explore-menu-list-item">
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </section>
    
  )
}

export default ExploreMenu