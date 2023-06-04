import { Error404 } from "../pages/guest/404";
import { Invite } from "../pages/guest/invite/Invite";
import { FirstName } from "../pages/guest/invite/FirstName";
import { LastName } from "../pages/guest/invite/LastName";
import { Email } from "../pages/guest/invite/Email";
import { Password } from "../pages/guest/invite/Password";
import { ConfirmPassword } from "../pages/guest/invite/ConfirmPassword";
import { Username } from "../pages/guest/invite/Username.js";
import { Finish } from "../pages/guest/invite/Finish";
import { Verify } from "../pages/guest/verify/Verify";
import { ChangePassword } from "../pages/guest/changePassword/ChangePassword";

export const guest = [
  { path: "/404", Component: Error404 },
  { path: "/invite", Component: Invite },
  { path: "/invite/firstname", Component: FirstName },
  { path: "/invite/lastname", Component: LastName },
  { path: "/invite/email", Component: Email },
  { path: "/invite/username", Component: Username },
  { path: "/invite/password", Component: Password },
  { path: "/invite/confirm_password", Component: ConfirmPassword },
  { path: "/invite/finish", Component: Finish },

  { path: "/verify/:token", Component: Verify },
  { path: "/change-password/:token", Component: ChangePassword },
];
