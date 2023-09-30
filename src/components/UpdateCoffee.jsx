import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, taste, supplier, details, category, photoUrl } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const taste = form.taste.value;
        const supplier = form.supplier.value;
        const details = form.details.value;
        const category = form.category.value;
        const photoUrl = form.photoUrl.value;

        const updatedCoffee = { name, quantity, taste, supplier, details, category, photoUrl };

        console.log(updatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }
    return (
        <div className='p-24'>
            <h2>update coffee</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* form row */}
                <div className='flex'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name: </span>
                        </label>
                        <label className="input-group">

                            <input type="text" defaultValue={name} name='name' placeholder="coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Quantity: </span>
                        </label>
                        <label className="input-group">

                            <input type="text" defaultValue={quantity} name='quantity' placeholder="Quantity" className="input input-bordered w-full" />
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

                            <input type="text" defaultValue={supplier} placeholder="supplier" name='supplier' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Taste: </span>
                        </label>
                        <label className="input-group">

                            <input type="text" defaultValue={taste} placeholder="taste" name='taste' className="input input-bordered w-full" />
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

                            <input type="text" defaultValue={category} placeholder="Category" name='category' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Details: </span>
                        </label>
                        <label className="input-group">

                            <input type="text" defaultValue={details} placeholder="details" name='details' className="input input-bordered w-full" />
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

                            <input type="text" defaultValue={photoUrl} placeholder="Photo url" name='photoUrl' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="update coffee" className=' w-full mt-3 btn btn-neutral' />
            </form>
        </div>
    );
};

export default UpdateCoffee;