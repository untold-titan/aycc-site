import { HorizontalStory } from '../Components/HorizontalStory'
import { Story } from '../Components/Story'

export function Home() {
    return (
        <div className="App">
            <div className="main-info">
                <h1>Alberta Youth Programming Club</h1>
                <p>
                    The Calgary Youth Coding Club is a provincial nonprofit that works to help Calgarian youth explore and learn more about STEM. We teach and host STEM related events and activities for students to develop and learn their STEM skills. We aim to help Calgarian youth explore STEM because we believe that when given the proper guidance and tools, our youth will lead our future as innovators and leaders. Our club serves a welcoming environment for all interested in pursuing STEM in the future.
                </p>
            </div>
            <div className="core">
            <h1 className='header'>Values</h1>
                <Story title="Title" text="So you can actually change the text of a seperate object by just passing a prop through. Sweet!" />
                <Story title="Title" text="Because of that, I can have each one of these print out something different" />
                <Story title="Title Goes Here" text="And make my life easier for adding extra stories/things later! Wow, I actually fixed this!" />
                <Story text="This would also make it possible to update this website through a webAPI or something extra, instead of actually editing the hard code." />
            </div>
            <div>
                <h1 className='header'>Testimonials</h1>
                <HorizontalStory/>
                <HorizontalStory/>
                <HorizontalStory/>
                <HorizontalStory/>
                <HorizontalStory/>
            </div>
        </div>
    )
}