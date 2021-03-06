import React from "react";

class Arrow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: 0,
            last: 3,
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

            this.setState({
                first: this.state.first === 0 ? items.length - 1 : this.state.first - 1,
                last: this.state.last === 0 ? items.length - 1 : this.state.last - 1
            });
           
        }
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