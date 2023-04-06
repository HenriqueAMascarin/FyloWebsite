import emailPersons from '../assets/images/illustration-1.svg';
import { MarginCapsule } from '../styles/GlobalStyle';
import { PrincipalSectionStyle } from '../styles/PrincipalSectionStyle';

export default function PrincipalSection() {
    return (
        <PrincipalSectionStyle>
            <MarginCapsule>
                <div className='flexPrincipal'>
                    <img src={emailPersons} alt="Email Persons image" className='imgPersons'/>
                    <article>
                        <h1>All your files in one secure location, accessible anywhere.</h1>
                        <p>Fylo stores your most important files in one secure location. Acess them wherever you need, share and collaborate with friends, family, and co-workers.</p>

                        <form method='POST' action=''>
                            <label htmlFor="email">
                                <input type="email" placeholder="Enter your email..." name='email' required/>
                                <p>Please check your email</p>
                            </label>
                            <button>Get Started</button>
                        </form>
                    </article>
                </div>
            </MarginCapsule>
        </PrincipalSectionStyle>
    )
}