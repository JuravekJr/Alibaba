import React, { useState, useEffect } from 'react'
import s from './SinglePro.module.css'
import { BsChevronRight } from 'react-icons/bs'
import Nav from '../../components/nav/Nav'
import { FaSearchPlus } from 'react-icons/fa'
import { RiInstallLine } from 'react-icons/ri'
import { AiFillHeart } from 'react-icons/ai'
import { useStateValue } from '../../context/stateProvider/StateProvider'
import AddToCart from '../../components/add-to-cart/AddToCart'

function SinglePro({match}) {
    const [state, dispatch] = useStateValue()
    const [imageInd, setImageInd] = useState(0)
    const [costInd, setCostInd] = useState(0)
    const [clr, setClr] = useState(false)
    const [amount1, setAmount1] = useState(0)
    const [amount2, setAmount2] = useState(0)
    const [amount3, setAmount3] = useState(0)
    const [like, setLike] = useState(false)

    document.title = 'Alibaba.com - Single Page'

    let txt = '>'

    const {params} = match
    const obj = state.data?.filter(i=> i.id === params.id)[0]
    const {data} = obj
    const price = Number(data.price)

    const minusTop = () => {
        if ( amount1 <= 0 ) {
            setAmount1( 0 )
            return;
        } 
        setAmount1( num => num - 1 )
        return;
    }

    const minusCenter = () => {
        if ( amount2 <= 0 ) {
            setAmount2( 0 )
            return;
        } 
        setAmount2( num => num - 1 )
        return;
    }

    const minusBottom = () => {
        if ( amount3 <= 0 ) {
            setAmount3( 0 )
            return;
        } 
        setAmount3( num => num - 1 )
        return;
    }

  return (
    <div className={s.single_pro}>
        <Nav/>
        <div className={s.the_most_important_main}>
            <p className={s.text}><span className={s.child_text}>Home</span> {txt} <span className={s.child_text}>All industries</span> {txt} <span className={s.child_text}>Apparel</span> {txt} <span className={s.child_text}>Men's clothing</span> {txt} <span className={s.child_text}>Men's Jackets</span> <span>Subcribe to Trade Alert
                </span></p>
            <div className={s.main}>
                <div className={s.left}>
                    <div className={s.main_image}>
                        <img src={data.image} alt="" />
                        <div 
                        className={`${s.heart} ${like && s.active}`}
                        onClick={() => setLike( bool => !bool )} 
                        >
                            <AiFillHeart/>
                        </div>
                    </div>
                    <div className={s.left_body}>
                        <p><FaSearchPlus/> View larger Image</p>
                        <div className={s.images}>
                            <div 
                            className={`${s.image_box} ${imageInd === 0 && s.active}`}
                            onClick={() => setImageInd(0)}
                            >
                                <img src={data.image} alt="" />
                            </div>
                            <div 
                            className={`${s.image_box} ${imageInd === 1 && s.active}`}
                            onClick={() => setImageInd(1)}
                            >
                                <img src={data.image} alt="" />
                            </div>
                            <div 
                            className={`${s.image_box} ${imageInd === 2 && s.active}`}
                            onClick={() => setImageInd(2)}
                            >
                                <img src={data.image} alt="" />
                            </div>
                            <div 
                            className={`${s.image_box} ${imageInd === 3 && s.active}`}
                            onClick={() => setImageInd(3)}
                            >
                                <img src={data.image} alt="" />
                            </div>
                            <div 
                            className={`${s.image_box} ${imageInd === 4 && s.active}`}
                            onClick={() => setImageInd(4)}
                            >
                                <img src={data.image} alt="" />
                            </div>
                        </div>
                        <span className={s.share_text}><RiInstallLine/> Share</span>
                    </div>
                </div>
                <div className={s.center}>
                    <div className={s.left_center}>
                    <p>{data.title}</p>
                    <div className={s.pieces_and_prices}>
                        <div className={s.mini_box}
                        onClick={() => setCostInd(0)}
                        >
                            <p>2-299 Pieces</p>
                            <span className={costInd === 0 ? s.span : ''}>${price}</span>
                        </div>
                        <div className={s.mini_box}
                        onClick={() => setCostInd(1)}
                        >
                            <p>300-599 Pieces</p>
                            <span className={costInd === 1 ? s.span : ''}>${Math.round(price * .85)}</span>
                        </div>
                        <div className={s.mini_box}
                        onClick={() => setCostInd(2)}
                        >
                            <p>600-99999 Pieces</p>
                            <span className={costInd === 2 ? s.span : ''}>${Math.round(price * .8)}</span>
                        </div>
                    </div>
                    <div className={s.about}>
                        <div className={s.blog}>
                            <p className={s.txt}>Benefits:</p>
                            <div className={s.right_side}>
                                <p>Quick refunds on orders under US $1,000 <span>Claim now</span> <BsChevronRight/></p>
                            </div>
                        </div>
                        <div className={s.blog}>
                            <p className={s.txt}>Color:</p>
                            <div className={s.right_side}>
                                <div
                                    onClick={() => setClr(false)} 
                                    className={`${s.clr_box} ${!clr && s.active}`}
                                ></div>
                                <div 
                                    onClick={() => setClr(true)}
                                    className={`${s.clr_box} ${clr && s.active}`}
                                ></div>
                            </div>
                        </div>
                        <div className={[s.blog, s.blog_of_size].join(' ')}>
                            <p className={s.txt}>Size:</p>
                            <div className={[s.right_side, s.active].join(' ')}>
                                <div className={s.size_blog}>
                                    <span>M</span>
                                    <div className={s.size_box}>
                                        <span>$ 174,450...</span>
                                        <div className={s.amount}>
                                            <div className={`${s.click} ${amount1 > 0 && s.active}`}
                                            onClick={minusTop}
                                            >-</div>
                                            <input 
                                            type="number" 
                                            onChange={(e) => setAmount1(e.target.value)}
                                            value={amount1}
                                            />
                                            <div className={`${s.click} ${s.active}`}
                                            onClick={() => setAmount1( num => num + 1 )}
                                            >+</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.size_blog}>
                                    <span>L</span>
                                    <div className={s.size_box}>
                                        <span>$ 174,450...</span>
                                        <div className={s.amount}>
                                            <div 
                                            className={`${s.click} ${amount2 > 0 && s.active}`}
                                            onClick={minusCenter}
                                            >-</div>
                                            <input 
                                            type="number" 
                                            onChange={(e) => setAmount2(e.target.value)}
                                            value={amount2}
                                            />
                                            <div className={`${s.click} ${s.active}`}
                                            onClick={() => setAmount2( num => num + 1 )}
                                            >+</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.size_blog}>
                                    <span>XL</span>
                                    <div className={s.size_box}>
                                        <span>$ 174,450...</span>
                                        <div className={s.amount}>
                                            <div className={`${s.click} ${amount3 > 0 && s.active}`}
                                            onClick={minusBottom}
                                            >-</div>
                                            <input 
                                            type="number" 
                                            onChange={(e) => setAmount3(e.target.value)}
                                            value={amount3}
                                            />
                                            <div className={`${s.click} ${s.active}`}
                                            onClick={() => setAmount3( num => num + 1 )}
                                            >+</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.blog}>
                            <p className={s.txt}>Samples:</p>
                            <div className={s.right_side}>
                                <p>$20.00/Pieces | 1 Piece (Min. Order) | Buy Samples</p>
                            </div>
                        </div>
                        <div className={s.blog}>
                            <p className={s.txt}>Lead Time:</p>
                            <div className={s.right_side}>
                                <div className={s.table}>
                                    <div className={s.thead}>
                                        <div className={s.th}>Quantity(Pieces)</div>
                                        <div className={s.th}>1 - 2</div>
                                        <div className={s.th}>3 - 120</div>
                                        <div className={s.th}>121 - 360</div>
                                        <div className={s.th}>{txt}360</div>
                                    </div>
                                    <div className={s.tbody}>
                                        <div className={s.td}>Est. Time(days)</div>
                                        <div className={s.td}>10</div>
                                        <div className={s.td}>15</div>
                                        <div className={s.td}>20</div>
                                        <div className={s.td}>To be negotiated</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <AddToCart pro={data}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SinglePro