const Content = ({img , title, description}) => {

  return (
    <div className="col-12 col-sm-6 col-lg-6" data-aos="fade-up">

        <div className="service_single_content text-left mb-100">

            <div className="service_icon">
                <img src={img} alt="" />
            </div>
            <h6>{title}</h6>
            <p>{description}</p>
        </div>
    </div>
  );
}

export default Content;
