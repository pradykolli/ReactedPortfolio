import React from 'react'
import { Button, Row, Col } from 'reactstrap'
import './Game.css'
import GridBox from './GridBox'

// var generatedNumbers = [];
// function generateNumber(generatedNumbers){
//     generatedNumbers.push(Math.round(Math.random() * 10));
// }
function Game(){
    return (
        <div>
            {/* <h1>Page under construction</h1>
             <Progress animated color="success" value="35" /> */}
             <Row>
                 <Col md="12" className="text-center mt10">
                     <Button color="success">Generate Number</Button>{/* {generateNumber()} */}
                 </Col>
                 <Col md="12">
                    {/* {generatedNumbers}
                    {console.log(generatedNumbers)} */}
                 </Col>
                 <Col md="12" className="mt10">
                     <div className="boxLayout">
                        <GridBox gridSize="25"></GridBox>
                     </div>
                 </Col>
             </Row>
        </div>
    );
}

export default Game