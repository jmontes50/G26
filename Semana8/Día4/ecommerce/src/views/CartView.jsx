const CartView = () => {
  return (
    <div className="container py-10">
      <h1 className="mb-5 text-4xl font-semibold text-center">Checkout</h1>
      <div className="flex flex-col w-full gap-5 md:flex-row">
        {/* contenedor tabla y form envio */}
        <div className="w-full p-5 md:w-2/3">Tabla</div>
        {/* subtotal y confirmar compra */}
        <div className="w-full p-5 md:w-1/3">
          {/* Subtotal */}
          <div className="flex justify-between mb-5 font-semibold">
            <span>Subtotal</span>
            <span>S/ 200</span>
          </div>
          {/* descuento */}
          <div className="mb-5">
            <span className="text-xs">Ingrese cupón</span>
            <div className="flex">
              <input
                className="p-4 text-lg border-2 border-black rounded-s-lg dark:border-white dark:bg-dark-background"
                placeholder="FLAT50"
              />
              <button className="px-5 text-white bg-slate-950 dark:bg-white dark:text-black rounded-e-lg">
                Aplicar
              </button>
            </div>
          </div>
          {/* delivery */}
          <div className="flex justify-between mb-5 font-normal">
            <span>Delivery</span>
            <span>S/ 200</span>
          </div>
          {/* total */}
          <div className="flex justify-between mb-5 font-semibold">
            <span>TOTAL</span>
            <span>S/ 200</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
