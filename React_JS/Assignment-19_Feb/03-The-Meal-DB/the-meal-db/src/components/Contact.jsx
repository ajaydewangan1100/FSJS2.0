
import React, { useState } from 'react'

const Contact = () => {

    const [input, setInput] = useState("");

    const typing = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput("");
    }

  return (
    <div className='rounded border p-4 m-2 min-w-[340px]'>
        <h1 className='w-[50%] min-w-[100%] text-center font-bold text-[#fff] bg-green-400 border rounded mx-auto mb-3 text-2xl '>
            Contact Us
        </h1>
        <div className='border rounded text-[#fff] bg-green-400 p-4 w-[85%] min-w-[100%] mx-auto'>
            <p className=' mx-auto '>
            If you have any questions, feedback, or concerns about The Meal DB website, please feel free to contact us using the following information:
            <br /><br />
            Email: info@themealdb.com
            <br />
            Phone: +1 (555) 555-5555
            <br /><br />
            Mailing Address:<br />
            Shiv Chowk Urla<br />
            BMY Charoda, Bhilai<br />
            Durg, Chhattisgarh<br />
            Zip Code: 490025
            <br /><br />
            You can also fill out the contact form on our website, and our team will get back to you as soon as possible.
            <br /><br />
            Thank you for your interest in The Meal DB, and we look forward to hearing from you!
            </p>
            <br /><br />
            <form onSubmit={handleSubmit} className="p-3 flex flex-col justify-left w-[100%]  ">
                <textarea rows={5} value={input} onChange={typing} className="h-auto resize-none w-[50%] min-w-[240px] p-2 rounded text-gray-700 " placeholder='Suggestions or Reviews'  />
                <button type='submit' className='bg-[#209655] p-1 my-2 rounded text-white w-[50%] min-w-[240px] font-bold hover:bg-[#107645] ' > Submit </button> 
            </form>
        </div>
    </div>
  )
}

export default Contact