import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle} from 'reactstrap'

class Menu extends Component {
   state = {
     selectedDish: null
   }

   onDishSelected =(dish) => {
     this.setState({
       selectedDish: dish
     })
   }

   renderDish = (dish) => {
      if(dish != null){
          return(
            <Card>
               <CardImg width ="100%" object src={dish.image} alt={dish.name}/>
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          );
      }else{
        return(
            <div></div>
        );
      }
   }
    render() { 

        const menu = this.props.dishes.map(
            (dish) => {
                return (
                    <div key = {dish.id} className ="col-12 col-md-5 m-1">
                      <Card onClick ={() => this.onDishSelected(dish)}>
                        
                           <CardImg width ="100%" object src={dish.image} alt={dish.name}/>
                      
                        <CardImgOverlay body className="ml-5">
                           <CardTitle>{dish.name}</CardTitle>
                           {/* <p>{dish.description}</p> */}
                        </CardImgOverlay>
                      </Card>
                    </div>
                );
            }
        )
       
        return ( 
            <div className ='container '>
             <div className ='row'>
                    {menu}
             </div>
             <div className="row">
                 
                 {this.renderDish(this.state.selectedDish)}
             </div>
            </div>
         );
    }
}
 
export default Menu;