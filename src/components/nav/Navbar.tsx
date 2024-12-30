import Brand from "../brand/Brand";
import Theme from "../brand/Theme";

function Navbar() {
  return (
    <div className="flex justify-between px-8 py-5">
      <Brand />
      <Theme />
    </div>
  );
}

export default Navbar;
