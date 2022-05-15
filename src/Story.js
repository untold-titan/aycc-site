import './Story.css'

export const Story = (Props) =>{
    return(
        <div class="story">
            <img src="https://via.placeholder.com/350" alt="placeholder"></img>
            <h1>Title go here</h1>
            <p>{Props.text}</p>
        </div>
    );
}