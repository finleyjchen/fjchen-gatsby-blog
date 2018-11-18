---
title: Finley's collection of WordPress snippets
date: '2018-11-16'
---

As someone who regularly runs the entire process of getting a WordPress website online from domain to development to deployment, I encounter many of the same issues and nuances that come with each website. Here are some of my solutions to common WordPress issues that you might find handy.


## Redirecting site from www to non-www
It’s generally best practice to decide on whether you want www in your website url or not. If you have both versions, it will be tougher to centralize all your search and tracking data in the Google search console, etc. You might also run into issues with urls.

If you are using Apache and have access to your .htaccess folder (located in the base folder of your WordPress directory), place this code anywhere in your .htaccess.
```
RewriteEngine On
RewriteBase /
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ http://%1/$1 [R=301,L]

```
## Dynamic Sign In/Sign Out Link for Menus
Here’s a simple PHP function that adds a sign in link as a menu item to any WordPress menu item. You can change the link to anything, add your own classes, etc. The basis of this function adds a link when signed in, and a different one when signed out. This particular function uses “/my-account/” links for WooCommerce login.

To use it, replace ‘menu-name’ with your menu of choice and replace the link with your login/logout links. Place this code in your functions.php, or wherever you put your PHP.
```php
add_filter( 'wp_nav_menu_items', 'add_auth_links', 10 , 2 );
function add_auth_links( $items, $args ) {
if ( is_user_logged_in() && $args->theme_location == 'menu-name') {
$items .= '<li class=""><a href="/my-account/customer-logout/">Sign Out</a></li>';
}
elseif ( !is_user_logged_in() && $args->theme_location == 'menu-name') {
$items .= '<li class="login-button"><a href="/my-account/">Sign In/Sign Up</a></li>';
}
return $items;
}

```