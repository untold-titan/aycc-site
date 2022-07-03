import './Story.css'

export const Story = (Props) =>{
    return(
        <div className="story">
            <img className="story_image" src={Props.url} alt="placeholder"></img>
            <h1>{Props.title}</h1>
            <p>{Props.text}</p>
        </div>
    );
}

Story.defaultProps = {
    title: "Title",
    text: "You probably forgot to add the text",
    url:"https://via.placeholder.com/350"
}