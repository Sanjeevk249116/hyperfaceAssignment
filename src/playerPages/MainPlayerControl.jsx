import React, { useEffect, useState } from 'react'
import sound from '../sounds/file_example_MP3_700KB.mp3'
function MainPlayerControl() {
    const [audio] = useState(new Audio(sound));
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [startPlaying, setstartPlaying] = useState(true);

    useEffect(() => {
        audio.addEventListener('loadedmetadata', () => {
            setDuration(audio.duration);
        });

        audio.addEventListener('timeupdate', () => {
            setCurrentTime(audio.currentTime);
        });

        audio.addEventListener('ended', () => {
            setstartPlaying(false);
        });

        return () => {
            audio.removeEventListener('loadedmetadata', () => { });
            audio.removeEventListener('timeupdate', () => { });
            audio.removeEventListener('ended', () => { });
        };
    }, [audio]);

   useEffect(() => {
        audio.play();
    }, [audio])

    const toggleStart = () => {
        if (startPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setstartPlaying(!startPlaying);
    };
    const updateValue = (value) => {
        audio.currentTime = (value / 100) * audio.duration;
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const previous = () => {
        if (audio.currentTime - 15 >= 0) {
            audio.currentTime = audio.currentTime - 15
        } else {
            audio.currentTime = 0;
        }
    }
    const next = () => {
        if (audio.currentTime + 15 < duration) {
            audio.currentTime = audio.currentTime + 15
        } else {
            audio.currentTime = 0;
        }
    }
  return (
    <div className="main_Control">
            <div className="controls">
                <div className="main1">
                    <input
                        type="range"
                        value={(currentTime / duration) * 100 || 0}
                        max={100}
                        step={0.01}
                        onChange={(e) => updateValue(e.target.value)}
                    />
                </div>

                <div className="time">
                    <span>{formatTime(currentTime)}</span> <span>{formatTime(duration)}</span>
                </div>

                <div className="start">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M10.6666 15.1107L24.2973 6.024C24.3977 5.9572 24.5143 5.91887 24.6348 5.91311C24.7552 5.90735 24.875 5.93436 24.9813 5.99128C25.0876 6.0482 25.1765 6.13289 25.2385 6.23633C25.3005 6.33976 25.3333 6.45808 25.3333 6.57867L25.3333 25.4213C25.3333 25.5419 25.3005 25.6602 25.2385 25.7637C25.1765 25.8671 25.0876 25.9518 24.9813 26.0087C24.875 26.0656 24.7552 26.0927 24.6348 26.0869C24.5143 26.0811 24.3977 26.0428 24.2973 25.976L10.6666 16.8893L10.6666 25.3333C10.6666 25.687 10.5262 26.0261 10.2761 26.2761C10.0261 26.5262 9.68693 26.6667 9.33331 26.6667C8.97969 26.6667 8.64055 26.5262 8.3905 26.2761C8.14045 26.0261 7.99998 25.687 7.99998 25.3333L7.99998 6.66667C7.99998 6.31305 8.14045 5.97391 8.3905 5.72386C8.64055 5.47381 8.97969 5.33334 9.33331 5.33334C9.68693 5.33334 10.0261 5.47381 10.2761 5.72386C10.5262 5.97391 10.6666 6.31305 10.6666 6.66667V15.1107ZM22.6666 21.684L22.6666 10.316L14.1413 16L22.6666 21.684Z" fill="white" />
                        </svg>
                    </button>
                    <button onClick={previous}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M5.28398 24.0893C7.70339 26.1858 10.7986 27.3378 14 27.3333C21.364 27.3333 27.3333 21.364 27.3333 14C27.3333 6.636 21.364 0.666668 14 0.666668C6.63598 0.666668 0.666645 6.636 0.666645 14C0.666645 16.848 1.55998 19.488 3.07998 21.6533L7.33331 14H3.33331C3.33351 11.5416 4.18289 9.15875 5.73775 7.25452C7.29261 5.35029 9.4575 4.04159 11.8662 3.54981C14.2749 3.05803 16.7795 3.41336 18.9564 4.55569C21.1333 5.69802 22.8487 7.55722 23.8126 9.81878C24.7765 12.0803 24.9296 14.6054 24.246 16.9669C23.5624 19.3283 22.0841 21.3811 20.0612 22.7781C18.0383 24.175 15.5949 24.8304 13.1445 24.6332C10.694 24.436 8.38684 23.3984 6.61331 21.696L5.28398 24.0893Z" fill="white" />
                        </svg>
                        <span>15</span>
                    </button>
                    <button onClick={toggleStart}>
                        {startPlaying ? <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                            <g clipPath="url(#clip0_2_287)">
                                <path d="M36 66C19.431 66 6 52.569 6 36C6 19.431 19.431 6 36 6C52.569 6 66 19.431 66 36C66 52.569 52.569 66 36 66ZM27 27V45H33V27H27ZM39 27V45H45V27H39Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_287">
                                    <rect width="72" height="72" fill="white" />
                                </clipPath>
                            </defs>
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                            <g clip-path="url(#clip0_2_287)">

                                <path d="M36 66C19.431 66 6 52.569 6 36C6 19.431 19.431 6 36 6C52.569 6 66 19.431 66 36C66 52.569 52.569 66 36 66ZM27 27V45H33V27H27ZM39 27V45H45V27H39Z" fill="white" />
                                <circle cx="36" cy="36" r="30" fill="white" />
                                <path d="M27 25V52L50.5516 36L27 20Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_287">
                                    <rect width="72" height="72" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>}

                    </button>
                    <button onClick={next}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M22.716 24.0893C20.2966 26.1858 17.2014 27.3378 14 27.3333C6.63602 27.3333 0.666687 21.364 0.666687 14C0.666687 6.636 6.63602 0.666668 14 0.666668C21.364 0.666668 27.3334 6.636 27.3334 14C27.3334 16.848 26.44 19.488 24.92 21.6533L20.6667 14H24.6667C24.6665 11.5416 23.8171 9.15875 22.2623 7.25452C20.7074 5.35029 18.5425 4.04159 16.1338 3.54981C13.7251 3.05803 11.2205 3.41336 9.04359 4.55569C6.86672 5.69802 5.15125 7.55722 4.18739 9.81878C3.22352 12.0803 3.07043 14.6054 3.75401 16.9669C4.43759 19.3283 5.91588 21.3811 7.9388 22.7781C9.96171 24.175 12.4051 24.8304 14.8555 24.6332C17.306 24.436 19.6132 23.3984 21.3867 21.696L22.716 24.0893Z" fill="white" />
                        </svg>
                        <span>15</span>
                    </button>
                    <button >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clipPath="url(#clip0_2_294)">
                                <path d="M21.3334 16.8893L7.70269 25.976C7.60229 26.0428 7.48566 26.0811 7.36521 26.0869C7.24476 26.0927 7.125 26.0656 7.01869 26.0087C6.91237 25.9518 6.82349 25.8671 6.76151 25.7637C6.69952 25.6602 6.66675 25.5419 6.66669 25.4213V6.57867C6.66675 6.45808 6.69952 6.33976 6.76151 6.23632C6.82349 6.13288 6.91237 6.0482 7.01869 5.99128C7.125 5.93436 7.24476 5.90734 7.36521 5.9131C7.48566 5.91887 7.60229 5.95719 7.70269 6.024L21.3334 15.1107V6.66667C21.3334 6.31304 21.4738 5.97391 21.7239 5.72386C21.9739 5.47381 22.3131 5.33333 22.6667 5.33333C23.0203 5.33333 23.3594 5.47381 23.6095 5.72386C23.8595 5.97391 24 6.31304 24 6.66667V25.3333C24 25.687 23.8595 26.0261 23.6095 26.2761C23.3594 26.5262 23.0203 26.6667 22.6667 26.6667C22.3131 26.6667 21.9739 26.5262 21.7239 26.2761C21.4738 26.0261 21.3334 25.687 21.3334 25.3333V16.8893ZM9.33335 10.316V21.684L17.8587 16L9.33335 10.316Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_294">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
             </div>
        </div>
  )
}

export default MainPlayerControl
