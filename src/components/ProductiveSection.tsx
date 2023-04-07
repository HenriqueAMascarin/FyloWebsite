import chattingPersons from '../assets/images/illustration-2.svg';
import avatar from '../assets/images/avatar-testimonial.jpg';
import { MarginCapsule } from '../styles/GlobalStyle';
import { ProductiveSectionStyle } from '../styles/ProductiveSectionStyle';

export default function ProductiveSection() {
    return (
        <ProductiveSectionStyle id='team'>
            <div className='backgroundProductive'>
                <MarginCapsule>
                    <div className='flexProductive'>
                        <img src={chattingPersons} alt="Chatting Persons image" width="1077" height="813" className='imgPersons' />

                        <div className='articlesDiv'>

                            <div className='divInfo'>
                                <h2>Stay productive, wherever  you are</h2>
                                <p>Never let location be an issue when accessing your files. Fylo has covered for all of your file storage needs.</p>
                                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>

                                <div>
                                    <a href="#">See how Fylo works</a>
                                </div>
                            </div>

                            <article className='articleCeo'>
                                <p className='infoFylo'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>

                                <div className='divCeo'>
                                    <img src={avatar} alt="Kyle Burton photo" width="125" height="125" />

                                    <div>
                                        <h3>Kyle Burton</h3>
                                        <p>Founder & CEO, Huddle</p>
                                    </div>
                                </div>
                            </article>
                        </div>

                    </div>
                </MarginCapsule>
            </div>
        </ProductiveSectionStyle>
    )
}