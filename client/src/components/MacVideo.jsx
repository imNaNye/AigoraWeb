import "../pages/home.css"

export default function MacVideo(){
    return (
        <div className="home-video">
            <div className="home-video-frame">
                <div className="home-video-inner">
                    <video
                        src="/assets/videos/promotionVideo.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="home-video-video"
                    />
                </div>
                <img src="/assets/images/Apple iMac Retina.png" alt="동영상 프레임" className="home-video-frame-img" />
            </div>
        </div>
    )
}