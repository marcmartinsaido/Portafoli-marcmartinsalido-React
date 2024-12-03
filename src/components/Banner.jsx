import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import bannerImage from "../assets/fotomarcbanner.png"; 



export default function Banner() {
    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/marc-mart%C3%ADn-salido-60723a265/', '_blank');
    };

    const handleGithubClick = () => {
        window.open('https://github.com/marcmartinsaido', '_blank');
    };
    return (
        <section className="banner-main">
            <div className="banner-text-left">
                <h1>Hello World</h1>
                <h2>My name is Marc</h2>
                <div className="links-banner">
                    <div className="link-linkdin">
                        <button onClick={handleLinkedInClick}>
                            <FaLinkedin />
                        </button>
                    </div>
                    <div className="link-Github">
                        <button onClick={handleGithubClick}>
                            <FaGithub />
                        </button>
                    </div>
                </div>
            </div>
            <div className="banner-image-right">
                <img src={bannerImage} alt="Banner" />            </div>
        </section>
    )
}