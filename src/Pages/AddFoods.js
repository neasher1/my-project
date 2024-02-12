import React from "react";
import toast from "react-hot-toast";

const AddFoods = () => {

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;

        const employeeName = form.employeeName.value;
        const employeeEmail = form.employeeEmail.value;
        const date = form.date.value;
        const address = form.address.value;
        const img = form.imgURL.value;
        const salary = parseInt(form.salary.value);
        const mbleNumber = parseInt(form.mbleNumber.value);
        const designation = form.designation.value;
        const description = form.description.value;

        const newService = {
            employeeName,
            employeeEmail,
            address,
            date,
            img,
            salary,
            designation,
            mbleNumber,
            description
        }

        
        console.log(newService);

        fetch('http://localhost:5001/add-employee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Employee added successfully");
                    form.reset();
                }
            })
            .catch(error => console.log(error))

    }
   
    
  return (
    <div className='grid md:grid-cols-1 justify-items-center my-20 '>
    <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
        <h1 className="text-5xl font-bold text-center mt-6 text-pink-600">Add a Employee</h1>
        <form onSubmit={handleAddService}  className="card-body">
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-primary font-semibold">Employee Name</span>
                </label>
                <input type="text" name='employeeName' placeholder="Employee name" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-primary font-semibold">Employee Email</span>
                </label>
                <input type="email" name='employeeEmail' placeholder="Employee name" className="input input-bordered" />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-primary font-semibold">Employee Designation</span>
                </label>
                <input type="text" name='designation' placeholder="description" className="input input-bordered" required />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-primary font-semibold">Employee Bio</span>
                </label>
                <input type="text" name='description' placeholder="Bio" className="input input-bordered" required />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-primary font-semibold">Joining Date</span>
                </label>
                <input type="text" name='date' placeholder="joining date" className="input input-bordered" required />
            </div>


            <div className="form-control">
                <label className="label">
                    <span className="label-text text-primary font-semibold">Employee Image URL</span>
                </label>
                <input type="text" name='imgURL' placeholder="https://" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-primary font-semibold">Employee Adress</span>
                </label>
                <textarea name='address' className="textarea textarea-bordered my-5 h-40 w-4/5 " placeholder="Write a description"></textarea>
            </div>
            
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-primary font-semibold">Salary</span>
                </label>
                <input type="text" name='salary' placeholder="salary" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-primary font-semibold">Mobile Number</span>
                </label>
                <input type="text" name='mbleNumber' placeholder="ratings" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary text-white" type="submit" value="Add Employee" />
            </div>
        </form>
    </div>
</div>
  );
};

export default AddFoods;
