
return (
  <div className="min-h-screen bg-sky-400 flex items-center justify-center">

    <form
      onSubmit={formsubmit}
      className="bg-sky-100 w-96 p-10 rounded-2xl shadow-2xl flex flex-col gap-5"
    >

      <h1 className="text-3xl font-bold text-center text-blue-700">
        Login
      </h1>

      <div className="flex flex-col gap-2">
        <label className="text-lg font-semibold text-gray-700">
          Username
        </label>

        <input
          type="text"
          placeholder="Enter your username"
          required
          name="username"
          value={logindata.username}
          onChange={handlechange}
          className="w-full p-4 rounded-xl border-2 border-sky-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-lg font-semibold text-gray-700">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          required
          name="password"
          value={logindata.password}
          onChange={handlechange}
          className="w-full p-4 rounded-xl border-2 border-sky-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-4 rounded-full font-bold hover:bg-blue-700 transition"
      >
        Submit
      </button>

    </form>
  </div>
);
