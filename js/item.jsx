import React from 'react';

/* class Image extends React.Component {
    render() {
        return(
            <img className="item-img" src={this.props.src} alt="item image"></img>
        );
    }
} */

const Image = ({src}) => <img className="item-img" src={src} alt="item image"></img>;

/* class Anchor_image extends React.Component {
    render() {
        return(
            <a href={this.props.href} className="anchor-image">
                <Image src={this.props.src}/>
            </a>
        );
    }
} */

const Anchor_image = ({href, src}) => 
    <a href={href} className="anchor-image">
        <Image src={src}/>
    </a>

/* class Name_item extends React.Component {
    render() {
        return(
            <p className="name-item">{this.props.name}</p>
        );
    }
} */

const Name_item = ({name}) => <p className="name-item">{name}</p>;

/* class Price_item extends React.Component {
    render() {
        return(
            <p className="price-item">{this.props.price}</p>
        );
    }
} */

const Price_item = ({price}) => <p className="price-item">{price}</p>;

class Buy_Button extends React.Component {
    GotoItem() {
        //let href = this.props.href;
        alert("clicked!");
    }

    render() {
        return(
            <button onClick={this.GotoItem}>Buy</button>
        );
    }
}

//const Buy_Button = ({GotoItem}) => <button onClick={GotoItem()}>Buy</button>;

/* class Item extends React.Component {
    constructor(props) {
        super(props);
        this.items = this.props.items;
        //this.state = this.props.items;
    }
    render() {
        return(
            <div className="flex-slider">
                {this.items.map((item, i) => {
                    <div key={i} className="slider-item">
                        <Anchor_image key={i} href={item.href} src={item.src}/>
                        <Name_item key={i} name={item.name}/>
                        <Price_item key={i} price={item.price}/>
                        <Buy_Button key={i} href={item.href}/>    
                    </div>
                })}
            </div>
        )
    }
} */

/* {items.map((item, i) => {
    <div key={i} className="slider-item">
        <Anchor_image key={i} href={item.href} src={item.src}/>
        <Name_item key={i} name={item.name}/>
        <Price_item key={i} price={item.price}/>
        <Buy_Button key={i} GotoItem={(function (){alert("clicked!");})}/>
    </div>
})} */

const Item = ({items}) => 
    <div className="flex-slider">
        <div className="test-div">
            {   items.map((item, i) => 

                    <div key={i} id={i} className={i === 0 ? "slider-item first" : "slider-item"}>
                        <Anchor_image  href={item.href} src={item.src}/>
                        <Name_item  name={item.name}/>
                        <Price_item  price={item.price}/>
                        <Buy_Button/>
                    </div>
            )}
        </div>
    </div>

export default Item;