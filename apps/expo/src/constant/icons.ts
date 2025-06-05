import google from "../../assets/google.png";
import apple from "../../assets/apple-logo.png";
import search from "../../assets/search-interface-symbol.png";
import calendar from "../../assets/calendar.png";
import profile from "../../assets/profile.png";

// Define the type for the assets object
interface ImageAssets {
  google: string;
  apple: string;
  search: string;
  calendar: string;
  profile: string;
}

const icons: ImageAssets = {
  google,
  apple,
  search,
  calendar,
  profile,
};

export default icons;
