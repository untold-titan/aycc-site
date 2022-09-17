import './HStory.css'
import {faker} from '@faker-js/faker'

export const HorizontalStory = (props) => {
    return (
        <div className='content'>
            <div>
                <img className="hstory-img"src={props.url} alt="img"></img>
            </div>
            <div>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

HorizontalStory.defaultProps = {
    text: faker.lorem.paragraph(8),
    url: "https://via.placeholder.com/350"
}