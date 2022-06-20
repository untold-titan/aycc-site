import './Story.css'


export const Story = (Props) =>{
    return(
        <div className="story">
            <img src={Props.url} alt="placeholder"></img>
            <h1>{Props.title}</h1>
            <p>{Props.text}</p>
        </div>
    );
}

Story.defaultProps = {
    title: "Title",
    text: "Probably forgot to add the text",
    url:"https://via.placeholder.com/350"
}