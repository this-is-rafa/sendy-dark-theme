## Dark theme for Sendy

**This project is no longer maintained as Sendy has added its own dark theme in version 5.**

A dark theme for [Sendy](https://sendy.co).

Tested up to final version without dark theme: 4.1.0.1

![Dark Sendy screenshot](docs/screenshots/01.png)

**Installation**

Download `dark.css` from /dist, and put it in sendy/css/. After that, open header.php from /includes, and add the following line just before the `<title>` tag:

`<link rel="stylesheet" type="text/css" href="<?php echo get_app_info('path');?>/css/dark.css" />`

Alternatively, you could use a browser extension such as [Stylus](https://github.com/openstyles/stylus) to inject the CSS.