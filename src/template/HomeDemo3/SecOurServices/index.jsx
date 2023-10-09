import SectionHeading from '../../../components/SectionHeading'
import Content from './Content'

const SecOurServices = ({data}) => {

  return (
    <section className="our_services_area section-padding-100-70 clearfix" id="services">
        <div className="container">

            <SectionHeading
                title='Our Core Services'
                text={<p data-aos="fade-up" data-aos-delay='400'>Peaky Blinders Token is the token of the 🔥✨ most famous ✨🔥<br /> criminal youth gang from Birmingham</p>}
            />

            <div className="row">
                {data && data.map((item , key) => (
                    <Content
                        key={key}
                        img={item.img}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    </section>
  );
}

export default SecOurServices;
