import useUserStore from "../store/userStore";
import DefaultNavbar from "./DefaultNavbar";
import UserNavbar from "./UserNavbar";

function Header() {
  const user = useUserStore((state) => state.user);
  if (user) {
    return <UserNavbar />;
  } else {
    return <DefaultNavbar />;
  }
}

export default Header;
