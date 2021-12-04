import React,{ Component } from "react";
const UsersData=()=>{
    const cons(props)=()=>{
        super(props);
        this.onChangeFirst=this.onChangeName.bind(this, props);
        this.onChangeCountry=this.onChangeCountry.bind(this, props);
        this.onChangeNumber=this.onChangeNumber.bind(this, props);

        this.state={
            First:'',
            Country:'',
            Number:'',

        }
        onChangeFirst(e) {
          this.setState({name:e.target.value})
        }
        onChangeCountry(e) {
            this.setState({country:e.target.value})
        }
          onChangeNumber(e) {
            this.setState({Number:e.target.value})
        }
        componentDidMount() {
            this.userData=JSON.parse(localStorage.getItem('user'))
        }
        componentWillUpdate(nextProps, nextState) {
            localStorage.setItem('users', JSON.stringify(nextState))
        }
    }

    return(
        <>
        <h1>User REGISTRATION</h1>
        <h2>fields marked*are required</h2>
            <div>
                <div>
                    <label>Email*</label>
                    <input type="text"></input>
                </div>
                <div>
                  <label>Password*</label>
                  <input type="text"></input>
              </div>
              <div>
                  <label>Retype Password*</label>
                    <input type="text" /> 
                </div>
              <div>
                  <label>First Name*</label>
                  <input type="text"value={this.state.First} onChange={this.onChangeFirst} />
                </div>
                 <div>
                   <label>Last Name*</label>
                   <input type="text" />
                </div>
                <div>
                   <label>Phone Number*</label>
                   <input type="text" value={this.state.Nlast} onChange={this.onChangeNumber} />
                </div>
                <div>
                  <label>Address*</label>
                  <input type="text"  />
                 </div>
                 {/* <div>
                 <input type="text" />
                </div> */}
                 <div>
                 <label>Town</label> 
                 <input type="text" />
                </div>
                <div>
                   <label>Region</label>
                   <input type="text"va />
                </div>
        <div>
        <label>Zip Code</label>
        <input type="text"val />
        </div>
        <div>
        <label>Country</label>
        <input placeholder="Enter your country" type="text" type="text"value={this.state.First} onChange={this.onChangeCountry}></input>
        </div>
        <div>
        <button>submit</button>
        </div>
        </div>
        
        
        </>
    );
    
}
export default UsersData;