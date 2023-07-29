import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import Swal from "sweetalert2";
import { BiLoaderCircle } from "react-icons/bi";
const AddClass = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const class_name = e.target.name.value;
    const instructor_name = e.target.instructor_name.value;
    const email = e.target.email.value;
    const seat = parseFloat(e.target.seat.value);
    const price = parseFloat(e.target.price.value);
    const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    setLoading(true);
    fetch(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMAGE_UPLOAD_KEY
      }`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const imageUrl = data.data.display_url;
          const classData = {
            name: class_name,
            email,
            instructor: instructor_name,
            price,
            available_seats: seat,
            image: imageUrl,
          };
          fetch("http://localhost:4000/classes", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(classData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                setLoading(false);
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Your class has been added",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <BiLoaderCircle className="animate-spin" size={50}></BiLoaderCircle>
        </div>
      ) : (
        <div className="px-28 py-20 min-h-screen w-full  text-gray-800 rounded-xl bg-gray-50">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center gap-10">
              <div className="space-y-2 text-sm w-1/2">
                <label htmlFor="location" className="block text-gray-600">
                  Class Name
                </label>
                <input
                  className="w-full p-4  text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md "
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>

              <div className="space-y-2 text-sm w-1/2">
                <label htmlFor="location" className="block text-gray-600">
                  Instructor Name
                </label>
                <input
                  className="w-full p-4  text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md "
                  name="instructor_name"
                  type="text"
                  defaultValue={user?.displayName}
                  disabled
                />
              </div>
            </div>
            <div className="flex justify-center items-center gap-10 mt-7">
              <div className="space-y-2 text-sm w-1/2">
                <label htmlFor="location" className="block text-gray-600">
                  Instructor Email
                </label>
                <input
                  className="w-full p-4  text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md"
                  name="email"
                  type="text"
                  defaultValue={user?.email}
                  disabled
                />
              </div>
              <div className="space-y-2 text-sm w-1/2">
                <label htmlFor="seat" className="block text-gray-600">
                  Available seats
                </label>
                <input
                  className="w-full p-4  text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md "
                  name="seat"
                  type="number"
                  required
                  placeholder="Available seats"
                />
              </div>
            </div>
            <div className="flex justify-center items-center gap-10 mt-7">
              <div className="space-y-2 text-sm w-1/2">
                <label htmlFor="category" className="block text-gray-600">
                  Class Image
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md "
                  type="file"
                  name="image"
                  accept="image/*"
                />
              </div>

              <div className="space-y-2 text-sm w-1/2">
                <label htmlFor="price" className="block text-gray-600">
                  Price
                </label>
                <input
                  className="w-full p-4 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md "
                  name="price"
                  id="price"
                  type="number"
                  placeholder="Price"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-400 "
            >
              Add Class
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddClass;
