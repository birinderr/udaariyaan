import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deletebooking } from "../redux/action";
import ScrollToTop from "../components/ScrollToTop";

const Table = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  console.log(data);

  const handledelete = (e) => {
    const id = parseInt(e.currentTarget.id);
    dispatch(deletebooking(id));
  };

  return (
    <>
      <ScrollToTop />
      {data.length > 0 && (
        <div className="max-w-4xl mx-auto mt-5 bg-white shadow-lg rounded-lg p-4">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              {/* Table Header */}
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Destination From</th>
                  <th className="px-4 py-2 text-left">Destination To</th>
                  <th className="px-4 py-2 text-left">Journey Date</th>
                  <th className="px-4 py-2 text-left">Guests</th>
                  <th className="px-4 py-2 text-left">Travel Class</th>
                  <th className="px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2">{item.from}</td>
                    <td className="px-4 py-2">{item.to}</td>
                    <td className="px-4 py-2">{item.date}</td>
                    <td className="px-4 py-2">{item.guests}</td>
                    <td className="px-4 py-2">{item.ticketclassname}</td>
                    <td className="px-4 py-2 text-center">
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                        id={`${item.id}`}
                        onClick={(e) => handledelete(e)}
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
