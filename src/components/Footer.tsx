import phoneIcon from '../assets/images/icon-phone.svg';
import email from '../assets/images/icon-email.svg';
import { MarginCapsule } from "../styles/GlobalStyle";
import { FooterStyle } from "../styles/FooterStyle";

export default function Footer() {
    return (
        <FooterStyle>
            <MarginCapsule>
                <a href="#" className="logoFylo">
                    <svg width="166" height="49" viewBox="0 0 166 49" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><title>Fylo logo</title><defs><path id="a" d="M.014.03h93.96v48.29H.015z" /></defs><g fill="none" fillRule="evenodd"><path d="M0 14.13v.123l27.95 13.13L56 14.209v-.033L27.95 1 0 14.13zm10.077.062L27.95 5.795l17.877 8.397-17.877 8.396-17.874-8.396zM27.95 32.483L0 19.55v4.784l27.95 12.964L56 24.289v-4.784L27.95 32.483zm0 9.703L0 29.25v4.783L27.95 47 56 33.99v-4.784l-28.05 12.98z" fill="#BDBAFA" /><g transform="translate(72)"><mask id="b" fill="#fff"><use xlinkHref="#a" /></mask><path d="M87.56 24.152a8.1 8.1 0 0 0-2.161-5.573 7.259 7.259 0 0 0-2.34-1.673 6.864 6.864 0 0 0-2.85-.601c-1.01 0-1.961.2-2.852.601a7.257 7.257 0 0 0-2.34 1.673 8.102 8.102 0 0 0-2.16 5.574 8.102 8.102 0 0 0 2.16 5.573 7.257 7.257 0 0 0 2.34 1.672 6.864 6.864 0 0 0 2.851.602c1.01 0 1.96-.2 2.852-.602a7.259 7.259 0 0 0 2.339-1.672 8.1 8.1 0 0 0 2.16-5.574zm6.415 0c0 1.932-.357 3.723-1.07 5.373a13.098 13.098 0 0 1-2.94 4.28c-1.247 1.205-2.71 2.156-4.388 2.854-1.678.699-3.468 1.048-5.369 1.048-1.9 0-3.683-.349-5.346-1.048a13.863 13.863 0 0 1-4.366-2.876 13.351 13.351 0 0 1-2.94-4.302c-.713-1.65-1.07-3.426-1.07-5.329 0-1.873.364-3.634 1.092-5.284a13.92 13.92 0 0 1 2.962-4.325 13.671 13.671 0 0 1 4.367-2.898 13.552 13.552 0 0 1 5.301-1.048c1.901 0 3.69.35 5.369 1.048 1.678.698 3.14 1.65 4.388 2.854 1.248 1.204 2.228 2.638 2.94 4.302.713 1.665 1.07 3.449 1.07 5.351zM64.258 36.905a8.6 8.6 0 0 1-1.715.58c-.638.148-1.3.222-1.982.222a9.84 9.84 0 0 1-2.74-.379 6.003 6.003 0 0 1-2.295-1.226c-.653-.565-1.173-1.3-1.56-2.207-.385-.907-.578-2-.578-3.277V.029h6.549v29.474c0 1.07.215 1.806.646 2.207.43.401.943.602 1.537.602.742 0 1.455-.223 2.138-.669v5.262zM50.492 11.22L38.908 41.854c-.861 2.289-1.99 3.939-3.386 4.95-1.396 1.01-3.06 1.515-4.99 1.515-.297 0-.623-.022-.98-.066a7.352 7.352 0 0 1-1.025-.201l-2.138-5.975a8.486 8.486 0 0 0 1.56.557c.534.134 1.039.201 1.514.201 1.01 0 1.93-.23 2.762-.691.832-.46 1.47-1.315 1.916-2.564l.891-2.586-9.935-25.773h6.995l5.925 16.588 5.57-16.588h6.905zM23.538 7.342H6.786v8.294h16.529v5.618H6.785v15.784H.015V1.412h23.524v5.93z" fill="#000" mask="url(#b)" /></g></g></svg>
                </a>
                <div className="flexFooter">

                    <div>

                        <div>
                            <div className="contactsFooter">
                                <img src={phoneIcon} alt="Phone icon" width="18" height="18"/>
                                <p>Phone: +1-543-123-4567</p>
                            </div>
                            <div className="contactsFooter">
                                <img src={email} alt="Email icon" width="20" height="16"/>
                                <p>example@fylo.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="listsItemsFooter">
                        <ul className="listFooter">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>

                        <ul className="listFooter">
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy</a></li>
                        </ul>
                    </div>

                    <div className="iconsFooter">

                        <a href="#">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <title>Facebook logo</title>
                                <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
                            </svg>
                        </a>

                        <a href="#">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <title>Twitter logo</title>
                                <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
                            </svg>
                        </a>

                        <a href="#">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <title>Instagram logo</title>
                                <path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
                                <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
                                <path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
                            </svg>
                        </a>

                    </div>
                </div>
                <p>Challenge by <a href="https://www.frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout-5ca5ef041e82137ec91a50f5" target='_blank'>Frontend Mentor</a>. Coded by <a href="https://github.com/LuckTheGamers" target='_blank'>Henrique de Albuquerque Mascarin</a>.</p>
            </MarginCapsule>
        </FooterStyle>
    )
}