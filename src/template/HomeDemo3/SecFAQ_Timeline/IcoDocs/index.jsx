import DocElement from './DocElement'

const IcoDocs = ({data}) => {

  return (
    <div className="ico-docs">
        <div className="row">
        	{data && data.map((item , key) => (
	            <DocElement key={key} title={item.title} link={item.link} />
        	))}
        </div>
    </div>
  );
}

export default IcoDocs;
