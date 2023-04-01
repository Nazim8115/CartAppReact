import React from "react";

class CartItem extends React.Component{
    render(){
        console.log(this.props)
        const {price , title , qty} = this.props.product;
        return (
            <div className = "cart-item">
                <div className="left-block">
                    <img alt="" style={styles.image} />

                </div>

                <div className="right-block">

                    <div style={{fontSize:20}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#888'}}>{qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png"
                            onClick={()=> this.props.onIncreaseQuantity(this.props.product)}
                        />


                        <img
                            alt="decrease"
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            onClick={()=> this.props.onDecreaseQuantity(this.props.product)}
                            
                        />

                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/2907/2907762.png"
                        />
                        
                    </div>

                </div>
            </div>
        )
    }
}

const styles ={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'grey'
    
    }
}
export default CartItem;
