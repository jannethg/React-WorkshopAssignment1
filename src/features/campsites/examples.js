// Examples of destructuring

//const [banana, apple] = ['yellow', 'red'];
// the variable banana will contain the value 'yellow'
// the variable apple will contain the value 'red'

//const transformNum = (num) => [num * 2, num + 2];
//const [numTimesTwo, numPlusTwo] = transformNum(10)
// the variable numTimesTwo will contain the value 20
// the variable numPlus Two will contain the value 12

//const [state, setState] = useState(initialState);
// array destructuring is used to get the state and setState values
// from the useState hook -- you will learn about this soon!

/*
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

const CampsiteCard = ({campsite}) => {    
   const {image, name} = campsite;
    return (
       <Card>
            <CardImg 
                width='100%'
                src={image}
                alt={name}
            />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay> 
       </Card>
    )
};

export default CampsiteCard;

*/

/* UseState() Component
//inside the App.js
//import {useState} from 'react';
//older version
//Const App =() => {
    const myreValFromUsestate = useState(0);
    const myCounter = retValFromUseState[0];
    const setMyCounter = retValUseState[1];
}

//shorter version 
cons App = () => {
    const [myCounter, setMyCounter] - useState(0);
    //------const [name, setName] = useState('Irene')

    return (
        <div onClick ={() => setMyCounter(myCounter + 1)}>
          Count: {myCounter}
        </div>
    );
};

*/
