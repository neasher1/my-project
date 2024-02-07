import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-no-repeat bg-cover bg-center rounded-lg py-4 mt-28 p-8">
      <div className="text-center my-4">
        <h3 className="text-3xl">Stay connected with us</h3>
      </div>
      <form className="w-4/5 md:w-2/5 lg:w-1/4 mx-auto m-8">
        <div className="form-control">
          <input
            type="text"
            placeholder="your email"
            className="input input-bordered"
          />

          <input
            type="text"
            placeholder="subject"
            className="input input-bordered my-6"
          />

          <textarea
            className="textarea textarea-bordered"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-white">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
