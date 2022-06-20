import { Story } from '../Components/Story'
import Mitch from '../Images/Mitch.JPG'

export function Home() {
    return (
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
            </div>
            <div>
                <h1>Sponsors</h1>
                <p>We are sponsered by: blah blah blah sponsors go here</p>
            </div>
            <div className="App core">
                <h1>ABYPC Staff</h1>
                <Story title="Mitchell" url={Mitch}/>
                <Story title="Chris" />
                <Story title="Xiao Xiao" />
                <Story text="Yes, I know theres more staff members, Ill add them later" />
            </div>
        </div>
    )
}