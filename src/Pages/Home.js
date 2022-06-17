import {Story} from '../Components/Story'
import {Footer} from '../Components/Footer'
import { AboutUs } from './AboutUs'

export function Home() {
    return(
        <div className="App">
            <div className="main-info">
                <h1>Alberta Youth Programming Club</h1>
                <p>
                    We are the Alberta Youth Programming Club, this site was created by Titan, Idk what else to write here, just making placeholder stuff I guess
                </p>
            </div>
            <div className="core">
                <Story title="Title" text="So you can actually change the text of a seperate object by just passing a prop through. Sweet!" />
                <Story title="Title" text="Because of that, I can have each one of these print out something different" />
                <Story title="Title Goes Here" text="And make my life easier for adding extra stories/things later! Wow, I actually fixed this!" />
                <Story text="This would also make it possible to update this website through a webAPI or something extra, instead of actually editing the hard code." />
                <Story />
            </div>
            <AboutUs />
            <Footer />
        </div>
    )
}