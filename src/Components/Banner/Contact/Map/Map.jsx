

const Map = () => {
    return (
        <div className="flex justify-center my-10">
            <div className="bg-gray-200 w-64 p-4">
              <div className="p-4 hover:bg-white">
                <h2>Call Us</h2>
                <p>+008836956</p>
              </div>
              <div className="p-4 hover:bg-white">
                <h2>Location</h2>
                <p>Vienna, 123 street</p>
              </div>
              <div className="p-4 hover:bg-white">
                <h2>Email</h2>
                <p >staywithcampus@gmail.com</p>
              </div>
              
            </div>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d340261.5896282489!2d16.049992934340544!3d48.220219507665796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1725467158877!5m2!1sen!2sbd" width="400" height="400"></iframe>
            </div>
            
        </div>
    );
};

export default Map;