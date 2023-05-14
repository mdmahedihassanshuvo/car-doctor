import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const BookService = () => {
    const bookService = useLoaderData()
    const {title, _id, price, img} = bookService
    const { user } = useContext(AuthContext)
    // console.log(bookService)

    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        const booking = {
            customerName: name,
            email,
            date,
            img,
            price,
            service: title,
            service_id: _id,
        }
        fetch('https://car-server-hazel.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div>
            <h3 className='text-center font-semibold text-3xl mb-3'>Confirm Service: {title}</h3>
            <form onSubmit={handleForm} className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-10'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" defaultValue={user?.name} name='name' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name='date' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' defaultValue={user?.email} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name='price' defaultValue={'$' + price} className="input input-bordered" />
                </div>
                <div className="form-control col-span-2 mt-6">
                    <input className="btn btn-block" type="submit" value='Order Confirm' />
                </div>
            </form>
        </div>
    );
};

export default BookService;