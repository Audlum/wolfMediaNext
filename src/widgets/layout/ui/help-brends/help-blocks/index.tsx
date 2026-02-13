import Image from 'next/image'
import css from './index.module.css'
import { HELP_BLOCK, HelpType } from './models'

export const HelpBlock = () => {
    return(
        <div className={css.container}>
            {HELP_BLOCK.map((item: HelpType, index) => (
                <div key={index} className={css.block}>
                    <div className={css.imgContenier}>
                        <Image className={css.img} src={item.img} width={100} height={100} alt=''/>
                    </div>
                    <div className={css.titleConteiner}>
                        <p>{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}