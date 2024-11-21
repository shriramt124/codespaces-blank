

export default function Card({title,description,important,completed}){
    return (
        <div className="cards">
        <h2 className="title">{title}</h2>
        <p className="description">{description}
        </p>
        <div className="button-wrapper">
            <button>{completed ? "completed":"incomplete"}</button>
            <button>important</button>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </div>
    )
}