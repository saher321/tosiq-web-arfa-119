import React from 'react'
import WebLayout from '../layouts/WebLayout'

const Home = () => {
  return (
    <WebLayout>
        <div className="p-6">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Home</h1>
            <p className="mt-1 text-sm text-gray-500">
              Access to all pages.
            </p>
          </div>

          <button
            type="button"
            className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            View Employees
          </button>
        </div>
        </div>
    </WebLayout>
  )
}

export default Home