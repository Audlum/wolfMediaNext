import Image from 'next/image'
import css from './index.module.css'
import { MENS, MensType } from './models'

export const Mens = () => {
    return (
        <div className={css.container}>
            {/* {MENS.map((item : MensType, index) => (
                <div key={index}>

                    <Image className={css.img} src={item.img} width={290} height={345} alt=''/>

                </div>
            ))} */}

            <div className={css.block}>
                <div className={css.imgFContainer}>

                    <Image className={css.imgF} src='/main/mens/menF.svg' width={290} height={345} alt='' />
                </div>
                <div className={css.emailBlock}>
                    <Image src='/main/mens/back.svg' width={16} height={16} alt='' />
                    <a href='#'>aa@wolfmedia.team</a>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.imgFContainer}>

                    <Image className={css.imgS} src='/main/mens/menS.svg' width={290} height={345} alt='' />
                </div>
                <div className={css.emailBlock}>
                    <Image src='/main/mens/back.svg' width={16} height={16} alt='' />
                    <a href='#'>aa@wolfmedia.team</a>
                </div>
            </div>

        </div>
    )
}