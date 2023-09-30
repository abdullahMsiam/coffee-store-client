import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const taste = form.taste.value;
        const supplier = form.supplier.value;
        const details = form.details.value;
        const category = form.category.value;
        const photoUrl = form.photoUrl.value;

        const newCoffee = { name, quantity, taste, supplier, details, category, photoUrl };

        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }
    return (
        <div className='p-24'>
            <h2>Add a coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form row */}
                <div className='flex'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name: </span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='name' placeholder="coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Quantity: </span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className='flex'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier: </span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="supplier" name='supplier' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Taste: </span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="taste" name='taste' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className='flex'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Category: </span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Category" name='category' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Details: </span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="details" name='details' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className='flex'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo Url: </span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Photo url" name='photoUrl' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="add coffee" className=' w-full mt-3 btn btn-neutral' />
            </form>
        </div>
    );
};

export default AddCoffee;