import { MarginCapsule } from "../styles/GlobalStyle";
import { EarlyStyle } from "../styles/EarlyStyle";

export default function EarlySection() {
    return (
        <EarlyStyle>
            <MarginCapsule>
                <div>
                    <article className="earlyArticle">
                        <h2>Get early access today</h2>
                        <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                    </article>
                    <div className="earlyEmailDiv">
                        <input type="email" placeholder="email@example.com" />
                        <button>Get started for free</button>
                    </div>
                </div>
            </MarginCapsule>
        </EarlyStyle>
    )
}