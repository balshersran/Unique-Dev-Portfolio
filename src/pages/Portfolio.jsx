import Project from "../components/Project";
import Header from "../components/Header";

// each Project card has img, title, github repo link
const hmtlProj = {
     title: 'HTML/CSS Portfolio',
};

const jsEmployeeTrackerProject = {
    title: 'JavaScript Employee Tracker',
};

const vehicleBuilderCLI = {
   title: 'Super-Duper-Ultra-Unique-Vehicle-Builder',
};

const sqlEmployeeTracker = {
     title: 'JS/SQL Unique-CLI-CMS',
};

const weatherDashboard = {
     title: 'Superb-Ultra-Unique-Weather-Dashboard',
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