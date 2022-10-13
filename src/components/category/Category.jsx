import React from 'react'
import s from './Category.module.css'
import { AiOutlineBars } from 'react-icons/ai'
import { HiOutlineChevronRight, HiOutlineChevronUp } from 'react-icons/hi'
import { CATEGORIES } from '../../static/static'

function Category() {
  return (
    <div className={s.category}>
        <div className={s.nav_box}>
            <AiOutlineBars/>
            <span>Categories</span>
            <HiOutlineChevronUp/>
        </div>
        <div className={s.main}>
            <div className={s.left}>
                {
                    CATEGORIES?.map(
                        ({data, id}) => <div 
                        className={s.blog} 
                        key={id}
                        >
                            <div>
                                {
                                    data.map((i, inx) => <span key={inx}> <span className={s.slash}>/</span> {i.title}</span>)
                                }
                            </div>
                            <HiOutlineChevronRight/>
                            <div className={s.data}>
                                {
                                    data?.map((i, inx) => 
                                        <dl className={s.dl} key={inx}>
                                            <dt>{i.title}</dt>
                                            {
                                                i.info?.map((txt, inx) => <dd key={inx}>{txt}</dd>)
                                            }
                                            <span>View more</span>
                                        </dl>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Category