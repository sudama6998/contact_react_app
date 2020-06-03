/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import SingleContact from "./SingleContact";
import "../assests/css/Contact.css";
import TextField from "./TextField";

class Contact extends Component {
    state = {
        index: "",
        editable: false,
        errorMessage: "", //Contains Error Message- Sudama [02/06/2020]
        error: false,// To Display the Error Message- Sudama [02/06/2020]
        contacts: [
            {
                name: "Sudama Jaiswal",
                mobile: "8080120613"
            },
            {
                name: "Jyoti Tiwari",
                mobile: "8080120613"
            },
            {
                name: "Sameer Dev",
                mobile: "8080120613"
            },
            {
                name: "Sujoy Dev",
                mobile: "8080120613"
            },
            {
                name: "Ankit Gupta",
                mobile: "8080120613"
            }
        ], //local array 
        contact_name: "",//To Store Contact Name- Sudama [02/06/2020]
        mobile_no: "",//To Store Contact Mobile No.- Sudama [02/06/2020]
    };

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target) // To Make Input Field Editable- Sudama [02/06/2020]
    };

    // To add contact on button click- Sudama [02/06/2020]
    addContact = () => {
        /*
        To Validate the Input Field is Empty or Not- Sudama [02/06/2020]
         */
        if (this.state.contact_name === "" || this.state.mobile_no === "" || this.state.contact_name.trim().length === 0 || this.state.mobile_no.trim().length === 0) {
            //If it is empty or contains whitespaces then display error message- Sudama [02/06/2020]
            this.setState({
            contact_name: "",
            mobile_no: "",
              error: true,
              errorMessage: "Please fill all the fields",
            });
          } else {
              //If not empty then adding the contact card- Sudama [02/06/2020]
            let array = this.state.contacts;
            let contact = {
                name: this.state.contact_name,
                mobile: this.state.mobile_no,
              };
             
              {this.state.editable ?
                // [array[this.state.index].name = contact.name,
                // array[this.state.index].mobile = contact.mobile]
                [array[this.state.index] = contact ]: array.push(contact);
               }
           
              this.setState({
                contacts: array,
                contact_name: "",
                mobile_no: "",
                error: false,
                errorMessage: "",
                editable: false,
              }); 
            
          }
    }

    //To delete the contact card on click of delete icon by fetching the index of that card- Sudama [02/06/2020]
    deleteContact = (index) => {
        let array = this.state.contacts;
        array.splice(index,1); // Removing the single contact using splice- Sudama [02/06/2020]
        this.setState({
            contacts: array,
            contact_name: "",
            mobile_no: "",
            error: false,
            errorMessage: "",
        });
    }

    // Function for edit contact to update the values in input field - Sudama [02/06/2020]
    editContact = (index) => {
        let array = this.state.contacts;
        this.setState({
            contact_name: array[index].name,
            mobile_no: array[index].mobile,
            index: index,
            editable: true,
        })
    }
    render() {
        return (
            <div className="container">
                {/* Start of Add Contact Form - Sudama [02/06/2020]*/}
                <form>
                    <div className="form-row mt-4">
                        {/* Name Input Field - Sudama [02/06/2020]*/}
                        <div className="form-group col-sm-5">
                            <TextField 
                            type="text"
                            id="exampleInputName"
                            name="contact_name"
                            placeholder="Enter Your Name"
                            value={this.state.contact_name}
                            onChange={this.onChange}/>

                            {/* To display the error message - Sudama [02/06/2020]*/}
                            <small id="errormessage" className="form-text text-muted" style={{color: "red !important"}}>{this.state.errorMessage}</small>
                        </div>

                        {/* Mobile No. Input Field - Sudama [02/06/2020]*/}
                        <div className="form-group col-sm-5">
                            <TextField 
                                type="text"
                                id="exampleInputMobile"
                                name="mobile_no"
                                placeholder="Enter Your Mobile No."
                                value={this.state.mobile_no}
                                onChange={this.onChange}/>
                        </div>
                        <div className="form-group col-sm-2">
                            <button onClick={() => this.addContact()} type="button" className="btn btn-primary">{this.state.editable ? "Update Contact" : "Add Contact" } </button>
                        </div>
                        
                    </div>
                </form>
                {/* End of Add Contact Form - Sudama [02/06/2020] */}

                {/* To display the Contact Card */}
                <div className="d-flex flex-row flex-wrap">
                    {/* Mapping Used to display all contact card using array - Sudama [02/06/2020]*/}
                        {this.state.contacts?.map((data, index) => (
                            <SingleContact 
                                name = {data.name}
                                mobile = {data.mobile}
                                index = {index}
                                onEditClick = {() => this.editContact(index)}
                                onDeleteCLick = {() => this.deleteContact(index)}
                            />
                    ))}
                </div>
                
                
            </div>
        );
    }
}

export default Contact;


/*
OnChange Method
Css in React
Form Validation
Delete Contact 
Update Contact
Edit Contact
OnBlur Method
OnFocus Method
Error Handling for Form Validation
React Router Dom
*/