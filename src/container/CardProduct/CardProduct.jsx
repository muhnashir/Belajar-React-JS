import React, {Component}   from 'react'

class CardProduct extends Component{

    state={
        order:4
    }

    HandlerCounterChange = (value) =>{
        this.props.onCounterChange(value);
    }

    handlerPlus = () =>{
        this.setState({
            order : this.state.order + 1
        },()=>{
            this.HandlerCounterChange(this.state.order)
        })
    }

    handlerMinus = () =>{   
        if(this.state.order>0){
            this.setState({ 
                order : this.state.order - 1
            },()=>{
                this.HandlerCounterChange(this.state.order)
            })
        }
    }

    render(){
        return(
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmgXfcW2NsyrQTcstmixOjOCedP_MGle0LfQ&usqp=CAU" alt=""/>
                    </div>
                    <div className="product-title">Ayam segar banget lur</div>
                    <div className="product-price">Rp.25.000</div>
                    <div className="counter">
                        <button className="minus" onClick={this.handlerMinus}>-</button>
                        <input className="counter-text" type="text" value={this.state.order}/>
                        <button className="plus" onClick={this.handlerPlus}>+</button>
                    </div>
                </div>
        );
    }
}

export default CardProduct;