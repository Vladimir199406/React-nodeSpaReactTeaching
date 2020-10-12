import React from 'react';

class SendingEmailForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.handleChange = this.handleChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    sendEmail(event){
        let formData = new FormData();
        formData.append("text", this.state.value);
        fetch("http://nodespareact.tsallagov.beget.tech/sendMail",{
           method:  "POST",
            body: formData
        });
        event.preventDefault();
    }

    render() {
        return(
            <div className="container-fluid my-3" style={{backgroundColor: "white", borderRadius: "0.4rem"}}>
                <form action="" onSubmit={this.sendEmail}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1" className="my-3">
                            <h5><i className="fas fa-mail-bulk"></i> me or use social network links below</h5>
                        </label>
                        <textarea className="form-control"  rows="3"
                                  placeholder="Put your message here..."
                                  value={this.state.value} onChange={this.handleChange}
                        >
                        </textarea>
                        <button className="btn btn-primary my-3" type="submit" data-toggle="modal" data-target="#mailModal"><i className="fas fa-envelope-open"></i></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SendingEmailForm;