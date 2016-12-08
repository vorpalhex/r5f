COUCH=http://localhost:32769
curl -X PUT $COUCH/_config/httpd/enable_cors -d '"true"'
curl -X PUT $COUCH/_config/cors/origins -d '"*"'
curl -X PUT $COUCH/_config/cors/credentials -d '"true"'
curl -X PUT $COUCH/_config/cors/methods -d '"GET, PUT, POST, HEAD, DELETE"'
curl -X PUT $COUCH/_config/cors/headers -d '"accept, authorization, content-type, origin, referer, x-csrf-token"'
