
import { IUserDataDto } from '@/interfaces/IUserDataDto';
import './SpinCard.css'
import { useEffect, useState } from 'react';

const SpinCard = ({ userData, nextCard, prevCard, isLiked, isDisliked, like, dislike, userId, didDispyaed, blockUi }: {
    userData: IUserDataDto,
    nextCard: () => void,
    prevCard: () => void,
    isLiked: boolean,
    isDisliked: boolean,
    like: (id: number) => Promise<void>,
    dislike: (id: number) => Promise<void>,
    userId: number,
    didDispyaed: boolean,
    blockUi: boolean
}) => {

    const [isShowing, setIsShowing] = useState(false)


    const [isDisplayInfo, setIsDisplayInfo] = useState(false)

    const [photos, setPhotos] = useState(0)

    useEffect(() => {
        if (!isShowing && didDispyaed) setIsShowing(true)
    }, [didDispyaed])
    useEffect(() => {
        setIsDisplayInfo(false)
    }, [userData])
    return (
        <div className={`spin-card ${isLiked && 'spin-card--liked'} ${isDisliked && 'spin-card--disliked'}`}>

            <div className="spin-card__scroll">
                <div className="images__wrapper">

                    <div className="name_age__wrapper">
                        <h1 className='spin-name_age__title'>{userData.name || '-'}, {userData.age}</h1>
                    </div>
                    <button className="images__next-btn" onClick={() => setPhotos(prev => {
                        if (prev !== userData.images.length - 1) return prev + 1
                        else return prev
                    })}></button>
                    <button className="images__prev-btn" onClick={() => setPhotos(prev => {
                        if (prev !== 0) return prev - 1
                        else return prev
                    })}></button>
                    {userData.images.length !== 0 && isShowing

                        ? <img src={process.env.NEXT_PUBLIC_API_URL + '/images/' + userData.images[photos]?.fileName} className='spin-card__img' />
                        : <></>
                    }
                    <div className="images__slider-points">
                        {userData.images.map((item, id) => {

                            return <div key={id} className={`images-point ${photos === id && 'images-point--active'}`}>

                            </div>
                        })}
                    </div>
                    <button
                        onClick={() => prevCard()}
                        className='spin-card__back-btn'
                    >
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 122.88 98.86"
                            className='spin-card__back-svg'
                            xmlSpace="preserve"
                        >
                            <style
                                type="text/css"
                                dangerouslySetInnerHTML={{
                                    __html: ".st0{fill-rule:evenodd;clip-rule:evenodd;}"
                                }}
                            />
                            <g>
                                <path
                                    className="st0"
                                    d="M0,49.43l48.93,49.43V74.23c30.94-6.41,55.39,0.66,73.95,24.19c-3.22-48.4-36.29-71.76-73.95-73.31V0L0,49.43 L0,49.43L0,49.43z"
                                />
                            </g>
                        </svg>
                    </button>
                </div>
                <button className="spin-card__msg-link">Write a message...</button>

                <h3 className='spin-card__city'>{userData.city}</h3>
                <p className='spin-card__desc'>
                    {userData.description}
                </p>
            </div>
            







            <div className='btn-wrapper'>
                <button className='spin__btn' onClick={async () => {
                    await dislike(userId)
                    nextCard()
                }}>
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 122.88 104.19"
                        className='spin-btn__svg spin-btn__svg--dislike'
                        xmlSpace="preserve"
                    >
                        <g>
                            <path d="M62.63,97.94c0.56,2.85,2.03,4.68,4.04,5.61c1.64,0.76,3.54,0.83,5.52,0.31c1.72-0.45,3.53-1.37,5.26-2.69 c4.69-3.57,9.08-10.3,9.64-18.71c0.17-2.59,0.13-5.35-0.12-8.29c-0.16-1.94-0.41-3.98-0.75-6.1h19.95l0.09-0.01 c3.24-0.13,6.38-0.92,9.03-2.3c2.29-1.2,4.22-2.84,5.56-4.88c1.38-2.1,2.13-4.6,2.02-7.46c-0.08-2.12-0.65-4.42-1.81-6.88 c0.66-2.76,0.97-5.72,0.54-8.32c-0.36-2.21-1.22-4.17-2.76-5.63c0.08-3.65-0.41-6.71-1.39-9.36c-1.01-2.72-2.52-4.98-4.46-6.98 c-0.17-1.75-0.45-3.42-0.89-4.98c-0.55-1.96-1.36-3.76-2.49-5.35l0,0c-3.4-4.8-6.12-4.69-10.43-4.51c-0.6,0.02-1.24,0.05-2.24,0.05 l-39.02,0c-3.51,0-6.27,0.51-8.79,1.77c-2.5,1.25-4.62,3.17-6.89,6.01l-0.58,1.66v45.52l1.98,0.53c5.03,1.36,8.99,5.66,12.07,10.81 c3.16,5.3,5.38,11.5,6.89,16.51v13.16L62.63,97.94L62.63,97.94L62.63,97.94z M4,61.17h29.08c2.2,0,4-1.8,4-4V4c0-2.2-1.8-4-4-4L4,0 C1.8,0,0,1.8,0,4v53.17C0,59.37,1.8,61.17,4,61.17L4,61.17L4,61.17z M68.9,98.72c-0.43-0.2-0.78-0.7-0.99-1.56V83.89l-0.12-0.76 c-1.61-5.37-4.01-12.17-7.55-18.1c-3.33-5.57-7.65-10.36-13.28-12.57V11.85c1.54-1.83,2.96-3.07,4.52-3.85 c1.72-0.86,3.74-1.2,6.42-1.2h39.02c0.7,0,1.61-0.04,2.45-0.07c2.56-0.1,4.17-0.17,5.9,2.27v0.01c0.75,1.06,1.3,2.31,1.69,3.71 c0.42,1.5,0.67,3.15,0.79,4.92l0.82,1.75c1.72,1.63,3.03,3.46,3.87,5.71c0.86,2.32,1.23,5.11,1.02,8.61l-0.09,1.58l1.34,0.83 c0.92,0.57,1.42,1.65,1.63,2.97c0.34,2.09-0.02,4.67-0.67,7.06l0.21,1.92c1.08,2.07,1.6,3.92,1.67,5.54 c0.06,1.68-0.37,3.14-1.17,4.35c-0.84,1.27-2.07,2.31-3.56,3.09c-1.92,1-4.24,1.59-6.66,1.69v-0.01l-26.32,0l0.59,3.15 c0.57,3.05,0.98,5.96,1.22,8.72c0.23,2.7,0.27,5.21,0.12,7.49c-0.45,6.72-3.89,12.04-7.56,14.83c-1.17,0.89-2.33,1.5-3.38,1.77 C70.04,98.92,69.38,98.94,68.9,98.72L68.9,98.72L68.9,98.72z" />
                        </g>
                    </svg>
                </button>

                <button className='spin__btn' onClick={async () => {
                    await like(userId)
                    nextCard()
                }}>
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 122.88 104.19"
                        className='spin-btn__svg spin-btn__svg--like'
                        xmlSpace="preserve"
                    >
                        <g>
                            <path d="M62.63,6.25c0.56-2.85,2.03-4.68,4.04-5.61c1.63-0.76,3.54-0.83,5.52-0.31c1.72,0.45,3.53,1.37,5.26,2.69 c4.69,3.57,9.08,10.3,9.64,18.71c0.17,2.59,0.12,5.35-0.12,8.29c-0.16,1.94-0.41,3.98-0.75,6.1h19.95l0.09,0.01 c3.24,0.13,6.38,0.92,9.03,2.3c2.29,1.2,4.22,2.84,5.56,4.88c1.38,2.1,2.13,4.6,2.02,7.46c-0.08,2.12-0.65,4.42-1.81,6.87 c0.66,2.76,0.97,5.72,0.54,8.32c-0.36,2.21-1.22,4.17-2.76,5.63c0.08,3.65-0.41,6.71-1.39,9.36c-1.01,2.72-2.52,4.98-4.46,6.98 c-0.17,1.75-0.45,3.42-0.89,4.98c-0.55,1.96-1.36,3.76-2.49,5.35l0,0c-3.4,4.8-6.12,4.69-10.43,4.51c-0.6-0.02-1.24-0.05-2.24-0.05 l-39.03,0c-3.51,0-6.27-0.51-8.79-1.77c-2.49-1.25-4.62-3.17-6.89-6.01l-0.58-1.66V47.78l1.98-0.53 c5.03-1.36,8.99-5.66,12.07-10.81c3.16-5.3,5.38-11.5,6.9-16.51V6.76L62.63,6.25L62.63,6.25L62.63,6.25z M4,43.02h29.08 c2.2,0,4,1.8,4,4v53.17c0,2.2-1.8,4-4,4l-29.08,0c-2.2,0-4-1.8-4-4V47.02C0,44.82,1.8,43.02,4,43.02L4,43.02L4,43.02z M68.9,5.48 c-0.43,0.2-0.78,0.7-0.99,1.56V20.3l-0.12,0.76c-1.61,5.37-4.01,12.17-7.55,18.1c-3.33,5.57-7.65,10.36-13.27,12.57v40.61 c1.54,1.83,2.96,3.07,4.52,3.85c1.72,0.86,3.74,1.2,6.42,1.2l39.03,0c0.7,0,1.6,0.04,2.45,0.07c2.56,0.1,4.17,0.17,5.9-2.27v-0.01 c0.75-1.06,1.3-2.31,1.69-3.71c0.42-1.49,0.67-3.15,0.79-4.92l0.82-1.75c1.72-1.63,3.03-3.46,3.87-5.71 c0.86-2.32,1.23-5.11,1.02-8.61l-0.09-1.58l1.34-0.83c0.92-0.57,1.42-1.65,1.63-2.97c0.34-2.1-0.02-4.67-0.67-7.06l0.21-1.93 c1.08-2.07,1.6-3.92,1.67-5.54c0.06-1.68-0.37-3.14-1.17-4.35c-0.84-1.27-2.07-2.31-3.56-3.09c-1.92-1.01-4.24-1.59-6.66-1.69v0.01 l-26.32,0l0.59-3.15c0.57-3.05,0.98-5.96,1.22-8.72c0.23-2.7,0.27-5.21,0.12-7.49c-0.45-6.72-3.89-12.04-7.56-14.83 c-1.17-0.89-2.33-1.5-3.38-1.77C70.04,5.27,69.38,5.26,68.9,5.48L68.9,5.48L68.9,5.48z" />
                        </g>
                    </svg>
                </button>
            </div>
        </div >
    );
}

export default SpinCard;