import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faEarthAsia, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                toast.success(`Thanks for message`);
                reset();
            })
    }

    return (
        <div id='contact' className='flex justify-between w-full py-20'>
            <div className='w-5/12 flex flex-col'>
                <p className='flex items-center'>
                    <hr className='w-8 border-[#01d293] me-1' />
                    <span className='text-[#01d293] text-xl'>Contact me</span>
                </p>
                <h1 className='text-3xl mt-5 mb-7 text-[#fff]'>Contact with me</h1>
                <p className='text-lg'>
                    <FontAwesomeIcon className='me-4' icon={faLocationDot} style={{ color: "#01d293", }} />
                    location: Dhaka,Bangladesh,Planet Earth
                    <FontAwesomeIcon className='ms-1' icon={faEarthAsia} spin style={{ color: "#01d293", }} />
                </p>

                <p className='text-lg my-3'>
                    <FontAwesomeIcon icon={faEnvelope} className='me-3' style={{ color: "#01d293", }} />
                    sagormdtohid@gmail.com
                </p>
            </div>

            <form className='flex flex-col gap-y-5 w-5/12' onSubmit={handleSubmit(onSubmit)}>
                <input
                    type='text' placeholder="Your Name" className="input input-bordered input-sm md:input-md w-full bg-[#1e2231]"
                    {...register("name", { required: true })}
                    aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name?.type === 'required' && <p
                    className='text-error' role="alert">Name is required</p>}

                <input
                    type='email' placeholder="Your Email Address" className="input input-bordered input-sm md:input-md w-full bg-[#1e2231]"
                    {...register("email", { required: "Email Address is required" })}
                    aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <p className='text-error' role="alert">{errors.email?.message}</p>}

                <textarea
                    type='text' placeholder="Message" className="textarea textarea-bordered textarea-md md:textarea-lg w-full bg-[#1e2231]"
                    {...register("message", { required: "Message is required" })}
                    aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && <p className='text-error' role="alert">{errors.message?.message}</p>}

                <input className='text-start btn btn-outline btn-success w-max lg:w-3/12 btn-sm my-2' value='Send' type="submit" />
            </form>
        </div>
    );
};

export default Contact;