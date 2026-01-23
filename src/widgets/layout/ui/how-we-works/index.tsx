import css from './index.module.css'
import { Progress } from './progress'
import { Slider } from './slider'

export default function HowWeWorks(){
    return(
        <section className={css.section}>
            <h1 className={css.h1}>Как мы работаем</h1>
            <div className={css.container}>

                <Progress/>

                <Slider/>

            </div>

        </section>
    )
}