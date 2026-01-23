import css from './index.module.css'
import { PROGRESS, ProgressType } from './models'

export const Progress = () => {
    return(
        <div className={css.container}>
            {PROGRESS.map((item: ProgressType, index) => (
                <div className={css.content} key={index} dangerouslySetInnerHTML={{__html: item.content}}></div>
            ))}
        </div>
    )
}