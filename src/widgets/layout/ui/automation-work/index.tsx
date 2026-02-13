'use client'

import { useRef, useState } from 'react'
import css from './index.module.css'
import { ServiceAdmin } from './services-admin'
import { Technology } from './technology'
import Image from 'next/image'
import { MoreBtn } from '@/shared/ui/moreBtn'

export default function AutomationWork() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPaused, setIsPaused] = useState(true)

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play()
            } else {
                videoRef.current.pause()
            }
        }
    }

    const handleOverlayClick = () => {
        handleVideoClick()
    }

    return (
        <section className={css.section}>
            <h1 className={css.h1}>Мы полностью автоматизировали работу по управлению сообществами</h1>

            <p className={css.p}>Чем больше сообществ в&nbsp;активе, тем больше времени требуется на&nbsp;планирование, ведение и&nbsp;сбор статистики.</p>

            <Technology />

            <div className={css.servicesAndVideo}>
                <ServiceAdmin />

                <div className={css.videoContainer}>
                    <video 
                        ref={videoRef}
                        controls 
                        className={css.video}
                        onPlay={() => setIsPaused(false)}
                        onPause={() => setIsPaused(true)}
                    >
                        <source src='/main/videos/donat.MP4' type="video/mp4"/>
                    </video>

                    
                    
                    {isPaused && (
                        <div 
                            className={css.videoOverlay}
                            onClick={handleOverlayClick}
                        >
                            <div className={css.videoDarken}></div>
                            <div className={css.youtubeIcon}>
                                <Image 
                                    src="/main/videos/youtube.svg" 
                                    width={94} 
                                    height={94} 
                                    alt="Play video"
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div className={css.moreBtnMini}>

                    <MoreBtn/>
                </div>
            </div>
        </section>
    )
}