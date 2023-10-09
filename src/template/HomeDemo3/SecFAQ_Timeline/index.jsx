import SectionHeading from '../../../components/SectionHeading'
import SingleFAQArea from './SingleFAQArea'
import IcoCounter from './IcoCounter'
import IcoDocs from './IcoDocs'

const SecFAQ_Timeline = ({FQAInfo , DocElementTitle}) => {

  return (
    <section className="faq-timeline-area section-padding-100">
        <div className="container">
            <SectionHeading
                title="Tokens Sale"
                text='We have announced Public Sale! Join now and get your token! get your money! Get your tokens for the best price: We fixed the {_TOKEN_} price at 1 BNB = 2000 {_TOKEN_}'
            />
            <div className="row">
                <div className="col-12 col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 mt-5">

                    <IcoCounter />

                    <IcoDocs data={DocElementTitle} />

                </div>
            </div>
        </div>
    </section>
  );
}

export default SecFAQ_Timeline;
