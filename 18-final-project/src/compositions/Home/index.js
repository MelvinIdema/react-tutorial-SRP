import { Link } from "react-router-dom";
import "./index.css";

export default function Home() {
    return (
        <div className="home-layout">
            <div>
                <h1>Online bakery shopping like you've never seen before.</h1>
                <p>
                    Order your groceries from <em>Bakery Chantal</em> with our easy to use app,
                    and get your products delivered straight to your doorstep by Chantal herself!
                </p>
                <Link to="/products" className="btn btn-default">
                    Start shopping
                </Link>
            </div>
            <img
                src="https://pbs.twimg.com/media/C8lKz6TXcAA_Ti_.jpg"
                width="350"
                height="240"
                className="rounded home-image"
                alt=""
            />
        </div>
    );
}