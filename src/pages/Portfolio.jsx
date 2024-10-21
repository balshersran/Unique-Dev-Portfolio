import Project from "../components/Project";
import Header from "../components/Header";

// each Project card has img, title, github repo link
const hmtlProj = {
    img: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4NCT_FSM_J8kT6ekPTW3lpU1pB47_7xZmbFRpmFHPlQ4bjqq41Qmgsz_9f7HGuYX-YJA&usqp=CAU"),
    title: 'HTML/CSS Portfolio',
};

const jsEmployeeTrackerProject = {
    img: url("https://images.unsplash.com/photo-1529101091764-c3526daf38fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHRtbHxlbnwwfHwwfHx8MA%3D%3D"),
    title: 'JavaScript Employee Tracker',
    link: '',
};

const vehicleBuilderCLI = {
    img: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNX8kLhjd7CybwLewPp4vG_XOBU_8aYYCiw&s"),
    title: 'Super-Duper-Ultra-Unique-Vehicle-Builder',
    link: url("https://github.com/balshersran/Super-Duper-Ultra-Unique-Vehicle-Builder"),
};

const sqlEmployeeTracker = {
    img: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8-Ak6v3cBuXYvg3VKcmT6vyJdYYKXLA4aQA&s"),
    title: 'JS/SQL Unique-CLI-CMS',
    link: url("https://github.com/balshersran/Unique-CLI-CMS"),
};

const weatherDashboard = {
    img: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQELp9ASf2edw52vBsTqGwsFdr308N4-ZzF8w&s"),
    title: 'Superb-Ultra-Unique-Weather-Dashboard',
    link: url("https://github.com/balshersran/Superb-Ultra-Unique-Weather-Dashboard"),
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