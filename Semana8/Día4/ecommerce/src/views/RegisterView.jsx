const RegisterView = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col min-h-screen md:flex-row">
        {/* imagen */}
        <div className="w-full max-h-screen overflow-hidden bg-yellow-400 md:w-7/12">
          <img
            className="object-cover object-center w-full"
            alt="foto"
            src="https://images.unsplash.com/photo-1485231183945-fffde7cc051e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        {/* form registro */}
      </div>
    </div>
  );
};

export default RegisterView;
