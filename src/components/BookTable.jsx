import React from "react";

export default function BookTable({ books, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-lg shadow-sm">
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-red-800 to-red-700 text-white">
            <th className="px-6 py-4 text-left font-semibold">Title</th>
            <th className="px-6 py-4 text-left font-semibold">Author</th>
            <th className="px-6 py-4 text-left font-semibold">Year</th>
            <th className="px-6 py-4 text-left font-semibold">Genre</th>
            <th className="px-6 py-4 text-center font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id} className="border-b hover:bg-gray-50 transition duration-150">
              <td className="px-6 py-4 font-semibold text-gray-800">{book.title}</td>
              <td className="px-6 py-4 text-gray-600">{book.author}</td>
              <td className="px-6 py-4 text-gray-600">{book.year || "-"}</td>
              <td className="px-6 py-4 text-gray-600">{book.genre || "-"}</td>
              <td className="px-6 py-4">
                <div className="flex justify-center space-x-2">
                  <button
                    onClick={() => onEdit(book)}
                    className="px-3 py-1 border border-yellow-500 text-yellow-600 rounded hover:bg-yellow-50 transition duration-200"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => onDelete(book._id)}
                    className="px-3 py-1 border border-red-500 text-red-600 rounded hover:bg-red-50 transition duration-200"
                  >
                    🗑
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}