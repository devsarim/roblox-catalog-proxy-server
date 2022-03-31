# roblox-catalog-proxy-server

As you may know, you cannot make requests to Roblox web APIs from a Roblox game server, to work around this, a lot of people use proxies owned and maintained
by other people, this is not a good idea for reasons listed [here](https://devforum.roblox.com/t/psa-stop-using-roblox-proxies/1573256). 

What you *should* do is setup and host your own proxy server, this can be a fairly difficult task if you aren't at all familiar with these things. 
This repository is here to help you with the process of creating your own proxy server. 

You can simply download this repository and host the code yourself. It has a couple of endpoints for using the [Catalog API](https://developer.roblox.com/en-us/articles/Catalog-API) but you can obviously add as many endpoints as you want.

There are multiple free hosting options, Heroku is one I personally use. To get started with deploying the repository to Heroku once you have downloaded it, [follow this link](https://devcenter.heroku.com/articles/getting-started-with-nodejs).

Do keep in mind that the free plans can only handle so much load so if, in the future, your player base grows larger, you will have to pay to upgrade your app.

```
Examples usage of the two endpoints that are provided:
https://[yourdomain]/api/searchcatalog?Category=3&Keyword=plaid&Subcategory=56 // Get shirts with the keyword 'plaid'
https://[yourdomain]/api/searchnoncatalog?CatalogContext=2&Category=7&SortType=2&ResultsPerPage=10 // Get the top 10 best selling plugins
```
