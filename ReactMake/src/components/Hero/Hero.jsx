import ClientD from '../../assets/images/client-databiz.svg'
import ClientA from '../../assets/images/client-audiophile.svg'
import ClientM from '../../assets/images/client-meet.svg'
import ClientMa from '../../assets/images/client-maker.svg'
import HeroD from '../../assets/images/image-hero-desktop.png'
import HeroM from '../../assets/images/image-hero-mobile.png'
import "./Hero.css"

const Hero = ()=> {
    return (
        <div className="hero-container">
            <main className="hero-content">
                <h1>Make remote work</h1>
                <p>Get your team in sync. No matter your location. 
                    Streamline processes, create team rituals, and 
                    watch productivity soar.</p>
                    <button className="btn-2">Learn More</button>
                    <div className="hero-anc">
                        <img src={ClientD} alt="" />
                        <img src={ClientA} alt="" />
                        <img src={ClientM} alt="" />
                        <img src={ClientMa} alt="" />
                    </div>
            </main>

            <div>
            <img className='heroimg-img' src={HeroD} alt="" />
            <img className='heroimg-img2' src={HeroM} alt="" />
            </div>
        
        </div>

    
    )
}


export default Hero