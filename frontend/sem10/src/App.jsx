import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.cart);

  const products = [
    { id : 1, name : "Mouse Gaymer", price: 120 },
    { id : 2, name : "Teclado Mechanic", price: 250 },
    { id : 3, name : "Headset Gaymer", price: 180 }
  ];

  function addToCart(prod) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: prod
    });
  }

  function removeFromCart(ind) {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: ind
    });
  }

  return (
    <>
    
      <div className="container">

        <h1>TechGear</h1>
        <h2> Carrinho de Compras com Redux </h2>

        <section>

          <h3>Produtos</h3>

          {products.map((prod)=>(
            <div className="card" key={prod.id}>

              <p>{prod.name}</p>
              <p>R$ {prod.price}</p>
              <button onClick={()=>addToCart(prod)}>
                Adicionar ao carrinho
              </button>

            </div>
          ))}

        </section>

        <section>

          <h3>Carrinho</h3>

          {cart.length === 0 ? (
            <p>O carrinho está vazio.</p>
          ) : (
            cart.map((item,ind)=>(
              <div className="card" key={ind}>
                <p>{item.name}</p>
                <p>R$ {item.price}</p>
                <button onClick={()=>removeFromCart(ind)}>
                  Remover do carrinho
                </button>
              </div>
            ))
          )}

        </section>

      </div>

    </>
  )
}