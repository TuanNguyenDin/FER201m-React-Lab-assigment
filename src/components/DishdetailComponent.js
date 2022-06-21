import React from 'react';
import { Card, CardImg, CardText, CardBody, CardImgOverlay,
    CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
        if (dish != null)
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return(
            <div></div>
        );
      

    }

    function RenderComments({dish}) {
      
        if (dish != null)
        return (
          <Card>
            <h1>Comment</h1>
            <div className="">
              {dish.comments.map((item) => {
                return (
                  <li key={item.id} className="font-semibold text-left mb-5">
                    <h5>{item.comment}</h5>
                    <span>
                      By: <strong>{item.author}</strong>,
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      }).format(new Date(Date.parse(item.date)))}
                    </span>
                  </li>
                );
              })}
            </div>
          </Card>
        );
      else return <div></div>;
      
    }

    const  DishDetail = (props) => {

        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
  
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                  <div className="col-12 col-md-5 m-1">
                  {this.renderDishComment(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
      
    }

export default DishDetail;