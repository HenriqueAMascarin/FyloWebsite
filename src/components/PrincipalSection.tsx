import emailPersons from '../assets/images/illustration-1.svg';
import { MarginCapsule } from '../styles/GlobalStyle';
import { PrincipalSectionStyle } from '../styles/PrincipalSectionStyle';

export default function PrincipalSection() {
    return (
        <PrincipalSectionStyle id='features'>
            <MarginCapsule>
                <div className='flexPrincipal'>
                    <img src={emailPersons} alt="Email Persons image" width="1132" height="839" className='imgPersons'/>
                    <div className='principalDivInfo'>
                        <h1>All your files in one secure location, accessible anywhere.</h1>
                        <p>Fylo stores your most important files in one secure location. Acess them wherever you need, share and collaborate with friends, family, and co-workers.</p>

                        <form method="POST" action="#">
                            <div>
                                <input type="email" placeholder="Enter your email..." required/>
                                <p>Please check your email</p>
                            </div>
                            <button>Get Started</button>
                        </form>
                    </div>
                </div>
            </MarginCapsule>
        </PrincipalSectionStyle>
    )
}