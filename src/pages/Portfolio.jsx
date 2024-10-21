import Project from "../components/Project";
import Header from "../components/Header";

// each Project card has img, title, github repo link
const hmtlProj = {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_nYdI8f24mA9OFtxAOs5m3HPdPzO1WgXHzN5L888BZLEgaj3A7WbO9Gs29VnyIbBxwY&usqp=CAU',
    title: 'HTML/CSS Portfolio',
    
};

const jsEmployeeTrackerProject = {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzI7qYn1JjwMYDLV6GnH4hWDPw4b-U6v7sBDK0o_k5oGTQEhaJIxsOKbt43xLpjf7erwA&usqp=CAU',
    title: 'JavaScript Employee Tracker',
    link: '',
};

const vehicleBuilderCLI = {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3mwYL0tHhprquMrMTIEm8S2txxvkUm8Yyvg&s',
   title: 'Super-Duper-Ultra-Unique-Vehicle-Builder',
   link: '',
};

const sqlEmployeeTracker = {
    img: 'https://s3.amazonaws.com/lowres.cartoonstock.com/business-commerce-small_businesses-short-midgets-internet-software_programs-mfl0300_low.jpg',
     title: 'JS/SQL Unique-CLI-CMS',
     link: '',
};

const weatherDashboard = {
     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQELp9ASf2edw52vBsTqGwsFdr308N4-ZzF8w&s',
     title: 'Superb-Ultra-Unique-Weather-Dashboard',
     link: '',
}

export default function Portfolio() {
    return (
        <div>
            <Header />
            <h1>Portfolio</h1>
            <Project img={hmtlProj.img} title={hmtlProj.title}  />
            <Project img={jsEmployeeTrackerProject.img} title={jsEmployeeTrackerProject.title}  />
            <Project img={vehicleBuilderCLI.img} title={vehicleBuilderCLI.title} link={vehicleBuilderCLI.link} />
            <Project img={sqlEmployeeTracker.img} title={sqlEmployeeTracker.title} link={sqlEmployeeTracker.link} />
            <Project img={weatherDashboard.img} title={weatherDashboard.title} link={weatherDashboard.link} />
        </div>
    );
}