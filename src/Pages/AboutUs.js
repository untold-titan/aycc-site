import { Footer } from "../Components/Footer";
import { Story } from "../Components/Story";
import './AboutUs.css'

export function AboutUs() {
    return (
        <div>
            <div className="App core">
                <h1>ABYPC Staff</h1>
                <Story title="Mitchell"/>
                <Story title="Chris"/>
                <Story title="Xiao Xiao"/>
                <Story text="Yes, I know theres more staff members, Ill add them later"/>
            </div>
            <Footer />
        </div>
    )
}