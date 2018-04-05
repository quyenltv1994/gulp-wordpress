<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'UI&]D]%NA[V:#3^Bk3ULET].?K};D~[bF4,MxuHA_,sVu+NR`=2i,$WhIrB@leew');
define('SECURE_AUTH_KEY',  '0*[5J7{Q@(GZ{3z@_miGgQw]oG-+ZTatzz@GW[1DTlm?g0qL0AdFx >x8=|[-f}h');
define('LOGGED_IN_KEY',    'di_42&hzd-v]xVWb*jd.`kzFfF-C1bH}]Gc&V.|W=j2rumGP!<zmT.~P!#<;v[At');
define('NONCE_KEY',        'M(`fe<{(;ipv[ouktOW=PUBz1uY)-jF U.kT)a.ZR14is4/UsF[s*bC@E)P|zN_^');
define('AUTH_SALT',        'GJ5:kc1?VL>A5qZ/eITp`l)pd8rGYlz #~C;NLnaSGh(vS[hV$dj,_xC+iNc4h5W');
define('SECURE_AUTH_SALT', 'xIW5(SBpzg(tTuDELxds>q.M4+Xs[w4y4ok]6_I;;pXxV,JIx@aR!kQozagd]%]~');
define('LOGGED_IN_SALT',   'TzhcRA@:=Z9`=JGs21)U]aw/1zu,sjNnnm0L-ZseA/$+98?Xlb+6V^|/e]iQD*PZ');
define('NONCE_SALT',       'z^XTgC*Uz7kl,9G(5o2N&<U.=<V<pLs[$F(N2Am#4nSznMFeZ).:|{{V:wd,E$sq');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
