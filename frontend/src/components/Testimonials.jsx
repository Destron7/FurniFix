import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import "../../public/css/testimonials.css"

const testimonials = [
  {
    id: 1,
    quote: "This service is amazing! Highly recommend.",
    name: "John Doe",
    position: "CEO at ExampleCorp",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc45PSnd23LNqk-jakXAsAzfsvHnfGY3lETZrRyP9z01oF2mhLgBSaroocag6Uy1CCTtg&usqp=CAU"
  },
  {
    id: 2,
    quote: "Great experience, very professional and efficient.",
    name: "Jane Smith",
    position: "Marketing Manager at XYZ Ltd.",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc45PSnd23LNqk-jakXAsAzfsvHnfGY3lETZrRyP9z01oF2mhLgBSaroocag6Uy1CCTtg&usqp=CAU"
  },
  {
    id: 3,
    quote: "I'm impressed with the quality of service.",
    name: "Michael Brown",
    position: "CTO at TechSolutions",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc45PSnd23LNqk-jakXAsAzfsvHnfGY3lETZrRyP9z01oF2mhLgBSaroocag6Uy1CCTtg&usqp=CAU"
  }
];

const Testimonials= () => {
  return (
    <div className="testimonial-carousel">
      <OwlCarousel
        className="owl-theme"
        loop
        margin={15}
        nav={false}
        dots={true}
        autoplay
        items={2}
      >
        {testimonials.map(testimonial => (
          <div className="testimonial-item" key={testimonial.id}>
            <img src={testimonial.image_url} alt={testimonial.name} className="testimonial-image" />
            <blockquote>"{testimonial.quote}"</blockquote>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.position}</p>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Testimonials;
