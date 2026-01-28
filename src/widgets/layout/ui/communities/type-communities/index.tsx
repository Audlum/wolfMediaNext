import Image from "next/image"
import { COMMUNITIES, CommunitiesType } from "./models"
import css from './index.module.css'

export const CommunitiesBlock = () => {
    return (
        <div className={css.container}>
            {COMMUNITIES.map((item: CommunitiesType, index) => (
                <div key={index} className={css.blockWrapper}>
                    <div className={css.block}>
                        <Image className={css.blockImg} src={item.img} width={100} height={100} alt="" />
                        <p className={css.title}>{item.title}</p>
                    </div>

                    <div className={css.rectangleBottom}>
                        <div className={css.triangle}></div>
                        <div className={css.whiteBlock}>
                            <div className={css.moreBlock}>
                                <Image className={css.imgMini} src={item.moreImgFirst} width={80} height={80} alt=""/>
                                <p>{item.moreTitleFirst}</p>
                            </div>
                            <div className={css.moreBlock}>
                                <Image className={css.imgMini} src={item.moreImgSecond} width={80} height={80} alt=""/>
                                <p>{item.moreTitleSecond}</p>
                            </div>
                            <div className={css.moreBlock}>
                                <Image className={css.imgMini} src={item.moreImgThird} width={80} height={80} alt=""/>
                                <p>{item.moreTitleThird}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}