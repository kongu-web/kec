import eHorizonImg from "../../../assets/images/Events/E-Horizon-2025.webp";
import annualDayImg from "../../../assets/images/Events/Annual Day.webp";
import sportsDayImg from "../../../assets/images/Events/sports.webp";
import swaramImg from "../../../assets/images/Events/Swaram 2025.webp";
import ITConference from "../../../assets/images/Events/ITConference.webp";
import graduationday from "../../../assets/images/Events/graduationday.webp";
import popupImage from "../../../assets/images/Events/popupimg.webp";
import sportsquota from "../../../assets/images/Events/sportsquota.webp";

const eventsData = [
    {
        id: 1,
        image: eHorizonImg,
        date: "February 19-26, 2026",
        title: "E-Horizon 2026 - Technical Symposium",
        description: "A grand technical symposium showcasing student innovations, project displays, and technical workshops. Join us for a day of learning and technology.",
        location: "KEC Auditorium",
        time: "9:00 AM - 4:00 PM",
        
        category: "Technical",
        department: "IT"
    },
    {
        id: 2,
        image: swaramImg,
        date: "February 25, 2026",
        title: "Swaram 2026 - Cultural Fest",
        description: "An evening of music, dance, and cultural performances by our talented students. Experience the vibrant culture of our college.",
        location: "Open Air Theatre",
        time: "5:00 PM - 9:00 PM",
        category: "Cultural",
        department: "College Level"
    },
    {
        id: 3,
        image: sportsDayImg,
        date: "March 16, 2026",
        title: "Sports Day",
        description: "Celebrating the spirit of sportsmanship. Watch our athletes compete in various track and field events.",
        location: "College Ground",
        time: "8:00 AM - 5:00 PM",
        category: "Sports",
        department: "Physical Education"
    },
    {
        id: 4,
        image: annualDayImg,
        date: "March 18, 2026",
        title: "Annual Day",
        description: "The most awaited event of the year, celebrating our achievements, awards, and the togetherness of our college community.",
        location: "Convention Center",
        time: "10:00 AM - 1:00 PM",
        category: "College Function",
        department: "College Level",
    },
    // {
    //     id: 5,
    //     image:  ITConference,
    //     date: "December 3-4, 2026",
    //     title: "International Conference",
    //     description: "Next-Gen Cyber AI for Sustainable Technologies.",
    //     location: "IT Park",
    //     time: "10:00 AM - 4:00 PM",
    //     category: "Conference",
    //     department: "IT",
    //     //  popupImage: popupImage,
    //     // Add your popup image source here if available
    // },
    {
        id: 6,
        image:  graduationday,
        date: "April 25, 2026",
        title: "Graduation Day",
        description: "38th Graduation Day.",
        location: "Convention Center",
        time: "9:00 AM - 4:00 PM",
        category: "College Function",
        department: "College Level",
         popupImage: popupImage,
    },
      {
        id: 7,
        image:  sportsquota,
        date: "April 15 - 16, 2026",
        title: "Sports Quota Admissions 2026",
        description: "Kongu Engineering College invites talented players to participate in the Sports Quota Selection Trials – 2026.",
        location: "College Ground",
        time: "9:00 AM - 4:00 PM",
        category: "Sports",
        department: "College Level",
        
    }
];

export default eventsData;
