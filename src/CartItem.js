import React from "react";

class CartItem extends React.Component{
    render(){
        return (
            <div className = "cart-item">
                <div className="left-block">
                    <img style={styles.image} />

                </div>
                
                <div className="right-block">
                    <div style={{fontSize:'30'}}>Phone</div>
                    <div style={{color:'#777',fontSize:30}}>Rs 899</div>
                    <div style={{color:'#888',fontSize:30}}>Qty:5</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
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