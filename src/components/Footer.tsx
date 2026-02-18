export default function Footer() {
  let time = new Date().getHours();
  let isOpen: Boolean;
  const openHour = 12;
  const closeHour = 22;

  if (time >= openHour && time <= closeHour) isOpen = true;
  else isOpen = false;

  return (
    <footer>
      <p>{isOpen ? "We are currently open!" : "Sorry, we are closed."}</p>
    </footer>
  );
}
