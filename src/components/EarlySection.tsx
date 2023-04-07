import { MarginCapsule } from "../styles/GlobalStyle";
import { EarlyStyle } from "../styles/EarlyStyle";

export default function EarlySection() {
    return (
        <EarlyStyle id="signIn">
            <MarginCapsule>
                <div className="flexEarly">
                    <div className="earlyDivInfo">
                        <h2>Get early access today</h2>
                        <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                    </div>
                    <form className="earlyEmailForm" method="POST" action="#">
                        <div>
                            <input type="email" placeholder="email@example.com" required />
                            <p>Please check your email</p>
                        </div>
                        <button>Get started for free</button>
                    </form>
                </div>
            </MarginCapsule>
        </EarlyStyle>
    )
}