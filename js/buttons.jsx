import React from "react";

/* const Forward_arrow = () => 
    <div className="btn" onClick={(e) => this.Move(e)}>
        <span className="forward-btn">&gt;</span>
    </div> */;

/* const Back_arrow = () => 
    <div className="back-btn">
        <span className="btn">&lt;</span>
    </div>; */


class Arrow extends React.Component {
    constructor(props) {
        super(props);
        //this.current = 0;
        this.state = {
            first: 0,
            last: 3,
            copy: null,
            isLeftEmpty: true,
            isRightEmpty: false
        };
        this.Move = this.Move.bind(this);
    }

    Move(e) {
        let items = document.querySelectorAll(".slider-item");
        let oneMargin = parseInt($(items.item(0)).css("marginLeft"), 10);
        let currentLeft = parseInt($(items.item(0)).css("left"));
        let width = items.item(0).getBoundingClientRect().width;
        if(e.target.className === "back-btn") {
            if(this.state.isLeftEmpty) {
                for(let item of items) {
                    $(item).animate({
                        left: `-=${width + 2*oneMargin}`
                    }, 500);
                }
                
                this.setState({
                    first: this.state.first + 1,
                    last: this.state.last + 1,
                    isLeftEmpty: !this.state.isLeftEmpty
                });
            } else {
                let parent = document.querySelector("div.test-div");
                let current = document.querySelector("div.first");
                
                this.setState({
                    //copy: current.cloneNode(true),
                    first: this.state.first === items.length - 1 ? 0 : this.state.first + 1,
                    last: this.state.last === items.length - 1 ? 0 : this.state.last + 1
                })

                let nextSibling = current.nextElementSibling;
                $(nextSibling).addClass("first");
                $(current).removeClass("first");

                $(current).animate({
                    display: "none"
                }, 500);
                
                parent.removeChild(current);
                parent.appendChild(current);
            }
        } else {
            /* if(this.state.isRightEmpty) {
                for(let item of items) {
                    $(item).animate({
                        left: `+=${width + 2*oneMargin}`
                    }, 500);
                }
                
                this.setState({
                    first: this.state.first + 1,
                    last: this.state.last + 1,
                    isLeftEmpty: !this.state.isLeftEmpty
                });
            } */
            let parent = document.querySelector("div.test-div");
            let last = parent.lastChild;
            parent.removeChild(last);
            $(parent).prepend(last);
            let firstElem = parent.firstChild;
            $(firstElem).addClass("first");
            firstElem.nextElementSibling.classList.remove("first");

            $(firstElem).css({
                left: `-${width + 2*oneMargin}`,
                display: "block"
            });
            /* $(firstElem).animate({
                // display: "block",
                left: 0
            }, 500); */



            this.setState({
                first: this.state.first === 0 ? items.length - 1 : this.state.first - 1,
                last: this.state.last === 0 ? items.length - 1 : this.state.last - 1
            });
           /*  let copy = items.item(this.state.last).cloneNode(true);
            //items.item(this.state.last).parentElement.removeChild(items.item(this.state.last));
            this.setState({
                first: this.state.first - 1,
                last: this.state.last - 1,
                copy: copy
            });
            for(let item of items) {
                item.style.left = `${currentLeft + width + 2*oneMargin}px`;
            } */
        }
        //this.setState({first: current})
        
    }
}

class Back_arrow extends Arrow {
    render() {
        return(
            <div className="btn" onClick={(e) => this.Move(e)}>
                <span className="back-btn">&lt;</span>
            </div>
        )
    }
}

class Forward_arrow extends Arrow {
    render() {
        return(
            <div className="btn" onClick={(e) => this.Move(e)}>
                <span className="forward-btn">&gt;</span>
            </div>
        )
    }
}

export {Forward_arrow, Back_arrow};