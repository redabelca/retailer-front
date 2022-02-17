export default function({ store, route, redirect, $auth }) {
  console.log(!authpage, $auth.user);

  const publicPages = [
    "/account/login",
    "/account/register",
    "/account/forgot-password"
  ];
  const authpage = !publicPages.includes(route.path);

  if (authpage && !$auth.user) {
    return redirect("/account/login");
  }

  if (!authpage && $auth.user) {
    return redirect("/");
  }

  redirect();
}
