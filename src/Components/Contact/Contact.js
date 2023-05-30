import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faEarthAsia, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fbImg from '../../img/facebook (1).png'
import LiImg from '../../img/linkedin (1).png'
import githubImg from '../../img/github.png'

const Contact = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        fetch("https://portfolio-server-psi-seven.vercel.app/contact", {
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
        <div id='contact' className='flex flex-col items-center gap-y-14 lg:flex-row justify-between w-full py-20'>
            <div className='w-10/12 lg:w-5/12 flex flex-col'>
                <div className='flex items-center'>
                    <hr className='w-8 border-[#01d293] me-1' />
                    <span className='text-[#01d293] text-xl'>Contact me</span>
                </div>
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

                <div className='flex gap-x-5 my-5'>
                    <div className='flex flex-col w-14 items-center'>
                        <Link to='https://www.facebook.com/md.tohidur.rahman.714'>
                            <img src={fbImg} alt="" sizes="" srcset="" />
                        </Link>
                        <p className='text-sm'>facebook</p>
                    </div>

                    <div className='flex flex-col w-14 items-center'>
                        <Link to='https://www.linkedin.com/in/md-tohidur-rahman-a02087262/'>
                            <img src={LiImg} alt="" sizes="" srcset="" />
                        </Link>
                        <p className='text-sm'>Linkedin</p>
                    </div>

                    <div className='flex flex-col w-14 items-center'>
                        <Link to='https://github.com/mdtohid'>
                            <img src={githubImg} alt="" sizes="" srcset="" />
                        </Link>
                        <p className='text-sm'>Github</p>
                    </div>
                </div>
            </div>

            <form className='flex flex-col gap-y-5 w-10/12 lg:w-5/12' onSubmit={handleSubmit(onSubmit)}>
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