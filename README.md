RewriteEngine on
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://syouerinn.github.io/pulan/index.html$1 [R,L]
