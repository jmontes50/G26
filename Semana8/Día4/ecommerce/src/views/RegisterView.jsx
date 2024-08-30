const RegisterView = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col min-h-screen md:flex-row">
        {/* imagen */}
        <div className="flex items-center justify-center w-full max-h-screen overflow-hidden bg-yellow-400 md:w-7/12">
          <img
            className="object-cover object-center w-full"
            alt="foto"
            src="https://images.unsplash.com/photo-1485231183945-fffde7cc051e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        {/* form registro */}
        <div className="flex flex-col items-center justify-center w-full p-8 md:w-5/12">
          <div className="w-full max-w-md space-y-8 text-center">
            <h2 className="mt-6 text-3xl font-bold">Registrate</h2>
          </div>
          {/* input */}
          <form className="mt-8 space-y-6">
            <div className="space-y-4 rounded-md shadow-md">
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-light text-gray-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-1.5 border rounded-md"
                  placeholder="email@dominio.com"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
