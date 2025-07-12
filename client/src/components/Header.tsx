import useUser from "../store/userStore";
import DefaultNavbar from "./DefaultNavbar";
import UserNavbar from "./UserNavbar";

function Header() {
  const user = useUser();
  if (user) {
    return <UserNavbar />;
  } else {
    return <DefaultNavbar />;
  }
}

export default Header;
