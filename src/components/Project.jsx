export default function Project(props) {
    return(
        <div className="container">
            <div className="card-container">
                <img src={props.img} alt="#" />
                <h5 className="card-title">{props.title}</h5>
                <a href="#">{props.link}</a>
            </div>
        </div>
    );
}