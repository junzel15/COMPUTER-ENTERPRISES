// eslint-disable-next-line no-unused-vars
import React from "react";

function Reporting() {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-blue-600">Reporting</h3>
      <p className="mt-2 text-gray-600">
        Generate inventory usage and stock movement reports.
      </p>
      <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">
        Generate Report
      </button>
    </div>
  );
}

export default Reporting;
