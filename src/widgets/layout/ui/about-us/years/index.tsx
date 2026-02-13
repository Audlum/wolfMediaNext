import { YEARS, YearsType } from "./models"
import css from './index.module.css'
import Image from "next/image"

export const Years = () => {
    return (
        <div className={css.all}>
            <div className={css.column}>
                {YEARS.map((item: YearsType, index) => (
                    <div key={index} className={css.fourBlock}>
                        <div className={css.containerYears}>
                            <div className={css.yearBlock}>
                                <div className={css.year}>
                                    {/* <div dangerouslySetInnerHTML={{ __html: item.title }}>  
                                    </div> */}
                                    <p className={css.title}>{item.title}</p>
                                    <div className={css.yearDot}></div>
                                </div>
                                <Image width={7} height={14} src='/main/TriangleWhite.png' alt="" />
                            </div>
                        </div>

                        <div className={css.containerContent}>
                            {/* <div className={css.fourBlock}> */}
                                <div className={css.contentBlock}>
                                    <Image className={css.img} width={7} height={14} src='/main/TrianglePurple.png' alt="" />
                                    <div className={css.content} dangerouslySetInnerHTML={{ __html: item.content }}
                                    >
                                        {/* <p>{item.content}</p> */}
                                        
                                        {/* <p>{item.content.before} <strong>{item.content.boldWord}</strong> {item.content.after}</p> */}
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                ))}
            </div>
            <div className={css.verticalLine}></div>
        </div>
    )
}