const Li_A = ({nameIco}) => <li><a href="#"><i className={nameIco} aria-hidden="true"/></a></li>

const SecVerticalSocial = ({data}) => {

  return (
    <div className="vertical-social">
      <ul>
        {data && data.map((item, key) => (
          <Li_A key={key} nameIco={item.nameIco}/>
        ))
        }
      </ul>
    </div>
  );
}

export default SecVerticalSocial;
