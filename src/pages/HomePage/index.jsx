import React, { useRef } from "react";
import './home.css'
import AreaInformacoes from './AreaInformacoes'
import Footer from "../../components/Footer";
import undraw from '../../assets/undraw.svg'
import plane from '../../assets/plane.png'



export default () => {
    const commentSection = useRef()

    const goToCommentSection = () => window.scrollTo({
        top: commentSection.current.offsetTop,
        behavior: "smooth"
    })

    return (
        <div className="body-home">
            <div className="banner-area">
                <h1 className="title">Bem Vindo à Dream Trip</h1>
                <h2 className="sub-title">A agência de viagens que você precisa!</h2>
                <button onClick={goToCommentSection} className="animation--btn">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                        </svg>
                    </span>
                    <div className="liquid"></div>
                </button>
                <div className="waves">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1040 200">

                        <path className="wave-3" fill="#5bc0be" fill-opacity="1" d="M0,128L20,138.7C40,149,80,171,120,149.3C160,128,200,64,240,42.7C280,21,320,43,360,90.7C400,139,440,213,480,202.7C520,192,560,96,600,64C640,32,680,64,720,106.7C760,149,800,203,840,192C880,181,920,107,960,85.3C1000,64,1040,96,1080,117.3C1120,139,1160,149,1200,149.3C1240,149,1280,139,1320,122.7C1360,107,1400,85,1420,74.7L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path>

                        <path className="wave-1" fill="#ade8f4" fill-opacity="1" d="M0,320L24,277.3C48,235,96,149,144,133.3C192,117,240,171,288,197.3C336,224,384,224,432,197.3C480,171,528,117,576,112C624,107,672,149,720,181.3C768,213,816,235,864,224C912,213,960,171,1008,133.3C1056,96,1104,64,1152,85.3C1200,107,1248,181,1296,202.7C1344,224,1392,192,1416,176L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>

                        <path className="wave-2" fill="#00b4d8" fill-opacity="1" d="M0,288L20,272C40,256,80,224,120,224C160,224,200,256,240,234.7C280,213,320,139,360,117.3C400,96,440,128,480,165.3C520,203,560,245,600,229.3C640,213,680,139,720,106.7C760,75,800,85,840,112C880,139,920,181,960,208C1000,235,1040,245,1080,229.3C1120,213,1160,171,1200,170.7C1240,171,1280,213,1320,208C1360,203,1400,149,1420,122.7L1440,96L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path>

                    </svg>
                </div>
            </div>
            <span ref={commentSection}></span>
            <AreaInformacoes ref={commentSection}/>
            <Footer />
        </div>
    )
}