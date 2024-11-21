import styles from "./HomePage.module.css"
import Card from "./ui/Card"
const cardData = [
    {
        title: "Title of the card",
        description: "this is a sample description of the card that displays the task that need to be performed in the card",
        important: false,
        completed: false

    },
    {
        title: "Title of the again card",
        description: "this is a sample description of the card that displays the task that need to be performed in the card",
        important: true,
        completed: false

    },
    {
        title: "itle of the card",
        description: "this is a sample description of the card that displays the task that need to be performed in the card",
        important: false,
        completed: true

    },
]

function HomePage() {

    return (
        <>
            <nav className={styles.navbar}>
                <h1 className={styles.mainHeading}>Taskus</h1>
                <button className={styles.button}>All Tasks</button>
                <button className={styles.button}>Add</button>
                <button className={styles.button}>edit</button>
            </nav>

            <div className="crads-wrapper">
                {
                    cardData.map((card) => <Card key={Math.random()*10+1} title={card.title} 
                    description={card.description} completed={card.completed} 
                    important={card.important} 
                    
                    />
                )
                }
            </div>
        </>


    )
}

export default HomePage;
