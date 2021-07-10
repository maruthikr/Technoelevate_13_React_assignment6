import React from 'react'
import Card from "react-bootstrap/Card";
export default function home() {
    return (

    <div style={{     display:"flex " , margin:"100px" }} >
        <Card style={{ width: "30rem",    display:"flex "  }}>
                <Card.Body>
                  <Card.Title style={{ color: "black" }}> Learing to code  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                   OPENING A DOOR TO THE FEATURE
                  </Card.Subtitle>
                  <Card.Text>
                  Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly
                   and responsive way. In the example below, we remove the grid gutters
                  </Card.Text>
                  <Card.Img variant="top" src="https://previews.123rf.com/images/mongstock/mongstock1702/mongstock170200101/72196946-modern-office-desk-with-business-hand-working-on-computer-notebook-top-view-table-from-above-with-wh.jpg" />         
                         </Card.Body>
              </Card>
            

              <Card style={{ width: "30rem" }}>
                <Card.Body>
                  <Card.Title style={{ color: "black" }}> Mastering the language </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                   JAVA IS NOT THE SAME AS JAVASCRIPT
                  </Card.Subtitle>
                  <Card.Text>
                  Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly
                   and responsive way. In the example below, we remove the grid gutters
                  </Card.Text>
                  <Card.Img variant="top" src="https://previews.123rf.com/images/mongstock/mongstock1702/mongstock170200101/72196946-modern-office-desk-with-business-hand-working-on-computer-notebook-top-view-table-from-above-with-wh.jpg" />         
                </Card.Body>
              </Card>
            
    </div>
          );
        }
    