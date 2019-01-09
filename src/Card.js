import React from 'react';

const mystyle={
    color: "red"
}

            class Card extends React.Component {
                render() {
                  return (
                    <div>
                    <img src={this.props.img}/>
                    <div>
                      <h3 style={mystyle} >{this.props.title}</h3>
                      <p>{this.props.subtitle}</p>
                    </div>
                  </div>
                  );
                }
              }




export default Card;