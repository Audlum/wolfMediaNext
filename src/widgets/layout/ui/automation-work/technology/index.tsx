import Image from 'next/image'
import css from './index.module.css'
import { TECHNOLOGY, TechnologyType } from './models'

export const Technology = () => {
    return (
        <div>
            <p className={css.p}>Мы подошли к решению этой проблемы технологично - разработали собственный софт, который:</p>

            <div className={css.container}>
                {TECHNOLOGY.map((item: TechnologyType, index) => (
                    <div key={index} className={css.block}>
                        <div className={css.imgContenier}>
                            <Image className={css.img} src={item.img} width={100} height={100} alt='' />
                        </div>

                        <div className={css.titleConteiner} dangerouslySetInnerHTML={{ __html: item.title }}></div>

                    </div>
                ))}

            </div>

        </div>
    )
}