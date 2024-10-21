export default function Project(props) {
    return(
        <div className="container">
            <div className="card-container">
                <img src={`props.img`} alt="#" />Img:
                <h5 className="card-title">Title:{props.title}</h5>
                <a href="#">Link:{props.link}</a>
            </div>
        </div>
    );
}