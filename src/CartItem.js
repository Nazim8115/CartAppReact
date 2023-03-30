import React from "react";


class CartItem extends React.Component{
    
    increaseQuantity=()=>{
        // form 1 increase quantity -------------
        // this.setState({
        //     qty : this.state.qty+1
        // })

        // form 2 increase quantity --------------
        this.setState((preState) => {
            return {
                qty : preState.qty+1
            }

        })
     
    }

    decreaseQuantity = ()=>{
        this.setState((preState)=>{
            const {qty} = this.state;
            if(qty===0){
                return;
            }
            return{
                qty : preState.qty-1
            }
        })

    }



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
                            onClick={this.increaseQuantity.bind(this)}
                        />


                        <img
                            alt="decrease"
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            onClick={this.decreaseQuantity.bind(this)}
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
