import { useState } from "react";
import './index.css';

const ReviewDetails = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [review, setReview] = useState('');
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [category, setCategory] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const onSubmitSuccess = (successMsg) => {
        setSuccessMsg(successMsg);
        setErrorMsg('');
        console.log(successMsg);
    };

    const onSubmitFailure = (errorMsg) => {
        setErrorMsg(errorMsg);
        setSuccessMsg('');
        console.log(errorMsg);
    };

    const onSubmitForm = async (event) => {
        event.preventDefault();
        const url = "http://localhost:4448/api/Reviews";
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                category,
                add_review: [{ name, description, review }],
                time,
            }),
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();

            if (response.ok) {
                onSubmitSuccess(data.message);
            } else {
                onSubmitFailure(data.message);
            }
        } catch (error) {
            onSubmitFailure("An error occurred while processing your request.");
        }

        // Reset form fields
        setName('');
        setDescription('');
        setReview('');
        setTitle('');
        setTime('');
        setCategory('');
    };

    const renderInput = (id, placeholder, value, onChange) => (
        <input
            type="text"
            id={id}
            placeholder={placeholder}
            className="admininput form-control"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );

    const renderSelect = () => (
        <select className="sector admininput form-control" onChange={(e) => setCategory(e.target.value)}>
            <option value='' className="disable">category</option>
            <option value="IT Sector">IT Sector</option>
            <option value="Food Sector">Food Sector</option>
            <option value="Bank Sector">Bank Sector</option>
            <option value="Health Sector">Health Sector</option>
            <option value="Insurance Sector">Insurance Sector</option>
        </select>
    );

    return (
        
            <div className="container form-container">

                <div className="row">
                    <div className="col-md-16">
                        <div className="adminform ">
                            <p className="formheading justify-content-center text-center text-primary">ADD REVIEW</p>
                             <form className="form-group card" onSubmit={onSubmitForm}>
                            
                                <div className="f">{renderInput('name', 'Enter name', name, setName)}</div>
                                
                               <div className="f">{renderInput('description', 'Enter description', description, setDescription)}</div>
                               <div className="f">{renderInput('review', 'Enter review', review, setReview)}</div>
                                <div className="f">{renderInput('title', 'Enter the company name', title, setTitle)}</div>
                                <div className="f">{renderInput('time', 'Enter the time', time, setTime)}</div>
                                 <div className="f">{renderSelect()}</div>
                                <button className="btn adminbtn btn-success form-control" type="submit">
                                    <span className="adminsbt">submit</span>
                                </button>
                                {successMsg && <p className='success-msg'>{successMsg}</p>}
                                {errorMsg && <p className='error-msg'>{errorMsg}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        
    );
};

export default ReviewDetails;