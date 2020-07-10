import React, {Component, Fragment}   from 'react'
import './Product.css'
import CardProduct from '../CardProduct/CardProduct'

class Product extends Component{

    state={
        order:4
    }

    HandlerCounterChange = (newValue) =>{
        this.setState({
            order : newValue
        })
    }

    render(){
        return(
            <Fragment>     
                <div className="header">
                    <div className="logo">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSgQ2ox06ZyxGev4VW9VdPXjtQ8QKK2MCRlg&usqp=CAU" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxDeNgrAJ5mox3SlD-dje42owVAjwlA12Z2Q&usqp=CAU" alt=""/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                < CardProduct onCounterChange={(value)=>this.HandlerCounterChange(value)}/>
            </Fragment>
        );
    }
}

export default Product;