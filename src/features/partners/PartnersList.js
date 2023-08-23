import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartners } from './partnersSlice';

const PartnersList = () => {
    const partners = useSelector(selectAllPartners);  //we pass it to the useSelector hook as callback
                                                      //all we are passing is the name of the fucntion                  

    return (
        <Col className='mt-4'>
              {partners.map((partner) => {
                return (
                    <div className='d-flex mb-5' key={partner.id} >
                        <Partner partner={partner}/>                        
                    </div>
                );
              })}
        </Col>
    );


};

export default PartnersList;
