import React, {Component} from 'react';
import axios from 'axios';
import {Navigation} from './Navbar';

class DonorRegister extends Component{

    constructor(props) {
        super(props);
        this.state = {
            "organName": {
                'EYE': false,
                'KIDNEY': false,
                'HEART': false,
                'LUNGS': false,
                'TISSUE': false
            },
            hospitals: []
        }
    }

    componentWillMount(){
        this.getHospitals();
    }

    getHospitals(){
        axios.get('http://localhost:3000/api/Hospital')
          .then(response => {
            this.setState({hospitals: response.data}, () => {
              //console.log(this.state);
            })
        })
        .catch(err => console.log(err));
      }

    addDonorOrgan(newDonorOrgan) {
        axios.request({
            method:'post',
            url:'http://localhost:3000/api/donorOrganRegister',
            data: newDonorOrgan
          }).then(response => {

          }).catch(err => console.log(err));
    }

    addUser(newUser) {
        axios.request({
            method:'post',
            url:'http://localhost:3000/api/Users',
            data: newUser
          }).then(response => {
             this.props.history.push('/login');
          }).catch(err => console.log(err));
    }

    onSubmit(e){
        var JSONObject = this.state.organName;
        const selectedOrgan = Object.keys(JSONObject);
        const arr=[];
        var i=0;
    
        Object.values(JSONObject).forEach(function(value) {
            if(value===true){
                arr.push(selectedOrgan[i]);
            }
            ++i;
        });

        const newDonorOrgan = {
            "$class": "org.organ.net.donorOrganRegister",
            adharID: "DONOR"+this.refs.donor_id.value,
            fname: this.refs.fname.value,
            lname: this.refs.lname.value,
            age: this.refs.age.value,
            address: this.refs.address.value,
            contact: this.refs.contact.value,
            email: this.refs.email.value,
            name: arr,
            hospital:this.refs.hospital.value
        }

        const newUser = {
            username: "DONOR"+this.refs.donor_id.value,
            email: this.refs.email.value,
            password: this.refs.password.value
        }
        this.addDonorOrgan(newDonorOrgan);
        this.addUser(newUser);        
        e.preventDefault();
    }

    onOrganChange(e) {
        const val = e.target.checked;
        const name = e.target.name;
        let updated = Object.assign({},this.state.organName, {[name]:val})
        this.setState({
            organName: updated
        })
    }

    render() {
        return (
            
            <div>
            <div className="Nav">
                 <Navigation/>
                </div>
                <div className="register-box">
               

               <form onSubmit={this.onSubmit.bind(this)} action="#">
                   <div className="input-field" >
                       <input type="text" name="donor_id" ref="donor_id"/>
                       <label htmlFor="donor_id">Aadhaar ID</label>
                   </div>
                   <div className="input-field">
                       <input type="text" name="fname" ref="fname" />
                       <label htmlFor="fname">First Name</label>
                   </div>
                   <div className="input-field">
                       <input type="text" name="lname" ref="lname" />
                       <label htmlFor="lname">Last Name</label>
                   </div>
                   <div className="input-field">
                       <input type="text" name="age" ref="age" />
                       <label htmlFor="age">Age</label>
                   </div>
                   <div className="input-field">
                       <input type="text" name="address" ref="address" />
                       <label htmlFor="address">Address</label>
                   </div>
                   <div className="input-field">
                       <input type="text" name="contact" ref="contact" />
                       <label htmlFor="contact">Contact</label>
                   </div>
                   <div className="input-field">
                       <input type="email" name="email" ref="email" />
                       <label htmlFor="email">Email</label>
                   </div>
                   <div className="input-field">
                       <input type="password" name="password" ref="password" />
                       <label htmlFor="password">Password</label>
                   </div>

                   <label>
                           <input type="checkbox" name="EYE" 
                           checked={this.state.organName['EYE']}
                           onChange={this.onOrganChange.bind(this)}/>
                           <span>EYE &nbsp;</span>
                       </label><br />
                       <label>
                           <input type="checkbox" name="KIDNEY"
                           onChange={this.onOrganChange.bind(this)}
                           value={this.state.organName['KIDNEY']}/>
                           <span>KIDNEY</span>
                       </label><br />
                       <label>
                           <input type="checkbox" name="HEART" 
                           onChange={this.onOrganChange.bind(this)}
                           value={this.state.organName['HEART']}/>
                           <span>HEART</span>
                       </label><br />
                       <label>
                           <input type="checkbox" name="LUNGS"
                           onChange={this.onOrganChange.bind(this)}
                           value={this.state.organName['LUNGS']}/>
                           <span>LUNGS</span>
                       </label><br />
                       <label>
                           <input type="checkbox" name="TISSUE"
                           onChange={this.onOrganChange.bind(this)}
                           value={this.state.organName['TISSUE']}/>
                           <span>TISSUE</span>
                       </label><br />

                       <div className="input-field">
                       <input type="text" name="hospital" ref="hospital"/>
                       <label htmlFor="hospital">Hospital</label>
                       </div>

                       <div>
                           <ul className="collection" >
                           </ul>
                       </div>

                       <br /><input type="submit" value="Register" className="btn" />
               </form>
               
       
           </div>
            </div>
        )
    }
}

export default DonorRegister;