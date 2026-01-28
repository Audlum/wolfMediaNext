import { Years } from "./years"
import css from './index.module.css'
import { MoreBtn } from "@/shared/ui/moreBtn"

export const AboutUs = () => {
    return (<>
        <section className={css.all}>
            <h2 className={css.h2}>о нас</h2>
            <div className={css.container}>

                <div className={css.textContainer}>
                    <div className={css.text}>
                        <p>«Wolfmedia» – это редакция, где ежедневно авторы, иллюстраторы, дизайнеры, видеографы, создают уникальный контент и доносят его до огромной аудитории с помощью социальных сетей.</p>
                        <p>Социальные сети стали главным инструменом коммуникации в 21 веке. Сообщества, паблики,
                            youtube-каналы, блоги получают внимание миллионной аудитории, зачастую их охват превышает
                            охват популярных телеканалов и журналов. </p>
                        <p>И пока традиционные СМИ занимаются перетаскивание аудитории с одной площадки на
                            другую, мы идем прямо к читателю, в его новостную
                            ленту. </p>
                    </div>

                    {/* <button className={css.btn}>Подробнее</button> */}
                    <MoreBtn />

                </div>

                <div className={css.yearsBlock}>
                    <Years />
                </div>

            </div>
        </section>

    </>
    )
}