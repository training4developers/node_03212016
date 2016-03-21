#!/bin/bash

docker pull training4developers/node

docker run -i -t \
	-p 49160:3000 \
	-v `pwd`/:/opt/app \
	--entrypoint /bin/bash \
	training4developers/node
