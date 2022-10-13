import React from 'react'
import './style.css' 
import { Link } from 'react-router-dom'

function Index() {
  return (
    <div className='region_footer'>
        <div className="text_choose">
            <h2>choose your suppliers by regions</h2>
            <div className="rectengle"></div>
        </div>
        <div className="lang_list">
            <div className="lang_item">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png" alt="" />
                <p>Russia</p>
            </div>
            <div className="lang_item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/800px-Flag_of_the_United_States_%28Pantone%29.svg.png?20160113211754" alt="" />
                <p>USA</p>
            </div>
            <div className="lang_item">
                <img src="https://img5.goodfon.com/wallpaper/nbig/c/cf/italy-italia-flag-of-italy-italian-flag-flag.jpg" alt="" />
                <p>Italy</p>
            </div>
            <div className="lang_item">
                <img src="https://tolerance-homes.com/storage/images/pages/qP0fv1mqZpQwoJDnLJSeaxis4WhOye64LrbNaPet.jpeg" alt="" />
                <p>Turkey</p>
            </div>
            <div className="lang_item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Flag_of_Thailand_%28non-standard_colours%29.svg/1024px-Flag_of_Thailand_%28non-standard_colours%29.svg.png" alt="" />
                <p>Thailand</p>
            </div>
            <div className="lang_item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/1200px-Flag_of_Malaysia.svg.png" alt="" />
                <p>Malaysia</p>
            </div>
            <div className="lang_item">
                <img src="https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/02/flag_of_south_korea-svg_.png" alt="" />
                <p>South Korea</p>
            </div>
            <Link to="/">More Regions</Link>
        </div>
    </div>
  )
}

export default Index