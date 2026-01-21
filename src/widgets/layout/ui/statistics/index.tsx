import Image from 'next/image'
import css from './index.module.css'

export default function Statistics(){
    return(
        <div >
                <h1 className={css.h1}>ИЗДАТЕЛЬСТВО <br/> НОВЫХ МЕДИА</h1>
            <div className={css.statistics_container}>
                <div className={css.statistics}>
                    <h2 className={css.h2}>100 000 000</h2>
                    <p className={css.p}>НАША АУДИТОРИЯ</p>
                </div>
                <div className={css.statistics}>
                    <h2 className={css.h2}>12 000 000</h2>
                    <p className={css.p}>ЕЖЕДНЕВНО НАС ЧИТАЮТ</p>
                </div>
            </div>

            <div className={css.img}>
                <Image  width={24} height={12} src='/main/Vector.png' alt="" />
            </div>
    
        </div>
    )
        
}