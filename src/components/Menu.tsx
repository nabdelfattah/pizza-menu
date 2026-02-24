const data = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function Menu() {
  return (
    <div className="flex flex-col items-center gap-16">
      <h2 className="inline-block px-4 text-4xl font-medium tracking-wide uppercase border-t-2 border-t-current border-b-2 border-b-current">
        Our menu
      </h2>
      <p className="text-2xl text-center w-4/5 leading-[1.6]">
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="list-none grid grid-cols-2 gap-16">
        {data.map((pizzaObj) => (
          <li
            key={pizzaObj.name}
            className={`flex gap-14 ${pizzaObj.soldOut ? "text-[#888]" : ""}`}
          >
            <img
              className={`self-start aspect-square w-48 ${pizzaObj.soldOut ? "grayscale opacity-80" : ""}`}
              src={pizzaObj.photoName}
              alt={pizzaObj.name}
            />
            <div className="flex flex-col gap-3 px-2">
              <h3 className="text-3xl font-normal">{pizzaObj.name}</h3>
              <p className="font-light italic text-2xl mb-auto">
                {pizzaObj.ingredients}
              </p>
              <span className="block text-2xl">
                {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
