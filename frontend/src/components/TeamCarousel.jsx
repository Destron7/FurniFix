import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel'; 
import axios from 'axios';
import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../public/css/teamcarousel.css'

const TeamCarousel = () => {
    // const [teamMembers, setTeamMembers] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/team-members/')
    //         .then(response => {
    //             setTeamMembers(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching team members:', error);
    //         });
    // }, []);

const teamMembers = [{
        id: 1,
        name: "John Doe",
        position: "Software Engineer",
        image_url: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/e48cd8b6-d0dd-4b60-8ef6-ad3aae616a33/38776c76-b716-4cc7-ad29-3b3c6ed41f15.png",
      },
      {
        id: 2,
        name: "Jane Smith",
        position: "Product Manager",
        image_url: "https://play-lh.googleusercontent.com/ArOTei_HH_SpKhd2MjG2daU2IyQ14DN401owBS3d74rNAyT3v9j4uIgyZTddqsYfAhtZ",
      },
      {
        id: 3,
        name: "Michael Brown",
        position: "UX Designer",
        image_url: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        name: "Emily Davis",
        position: "Data Scientist",
        image_url: "https://via.placeholder.com/150",
      },
      {
        id: 5,
        name: "David Wilson",
        position: "Backend Developer",
        image_url: "https://via.placeholder.com/150",
      },
    ];



    return (
        <div className="team-carousel">
            <OwlCarousel
                className="owl-theme"
                loop
                margin={30}
                nav
                items={3}
                autoplay
            >
                {teamMembers.map(member => (
                    <div className="item" key={member.id}>
                        <img src={member.image_url} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.position}</p>
                    </div>
                ))}
            </OwlCarousel>
        </div>
    );
};

export default TeamCarousel;