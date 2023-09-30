import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, taste, supplier, details, category, photoUrl } = coffee;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={photoUrl} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <div>
                            <p>{quantity}</p>
                            <p>{taste}</p>
                            <p>{details}</p>
                            <p>{category}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <div className="btn-group btn-group-vertical space-y-3">
                                <button className="btn">View</button>
                                <Link to={`/updatecoffee/${_id}`}><button className="btn">Edit</button></Link>
                                <button className="btn"
                                    onClick={() => handleDelete(_id)}>X</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;