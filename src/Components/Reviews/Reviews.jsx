import './Reviews.css'

const Reviews = ({slide}) => {
  const {name,company,position,rating,review}=slide
    return (
        <div className='w-full'>
        <div className="testimonial-card mx-auto">
          <div className="testimonial-header">
            <h3>{name}</h3>
            <p className='text-center'>{position}, {company}</p>
          </div>
          <div className="testimonial-stars">
            <span>{rating}</span>
          </div>
          <div className="text-center">
            <p>{review}</p>
          </div>
        </div>
      </div>
    );
};

export default Reviews;