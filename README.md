This repository contains the data **collected** from the
[papercliff api](https://github.com/papercliff/api-documentation),
and **transformed** every week by 
[these](https://github.com/papercliff/data-retrieval) scripts.

The files in the `transformed` directory are exposed as resources
for the browser. This way, they can be used for
[visualization](https://github.com/papercliff/animated-graph).

By running `npm i` and `node server.js`, your _localhost_ will
serve the transformed files through the port _3333_.

http://localhost:3333/2022-10-30-actions-with-days.json
