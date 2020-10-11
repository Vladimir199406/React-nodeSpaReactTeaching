import React from "react";
import {render} from "react-dom";

class MobileOneItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {content: ""}
    }

    componentDidMount() {
        let endPath = window.location.pathname.split("/")[2];
        this.props.getOneMobileItem(endPath).then(
            oneMobileItem=>{
                console.log(oneMobileItem);
                this.setState({content: oneMobileItem.name})
            }
        )
        console.log(endPath);
    }

        render(){
            return <div>
                {this.state.content}
            </div>
        }
}

export default MobileOneItem;