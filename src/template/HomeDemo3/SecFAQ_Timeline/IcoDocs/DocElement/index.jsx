import {Link} from "react-router-dom";

const DocElement = ({title, link}) => {

  return (
    <div className="col-md-12 col-sm-12 col-xs-12" data-aos="fade-up">
        <div className="doc-element">
            <Link className="document-entry" to={link} target="_blank"><span className="title">{title}</span></Link>
        </div>
    </div>
  );
}

export default DocElement;
