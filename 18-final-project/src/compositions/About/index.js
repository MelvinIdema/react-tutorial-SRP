import "./index.css";

export default function About() {
    return (
        <div className="about-layout">
            <div>
                <h1>About Us</h1>
                <p>
                    We started operations in 2020. We guarantee fresh produce.
                    <br />
                    Save time by shopping on our app and we'll deliver the products right
                    to your home. <br />
                    <em>We use Stripe to process your payment.</em>
                </p>
            </div>
            <img
                src="https://images0.persgroep.net/rcs/bGXQ002ye98Z99fwlIjP33lbeAc/diocontent/175627791/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8"
                height="275"
                width="183"
                className="rounded"
                alt=""
            />
        </div>
    );
}
