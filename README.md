# nodejs-exp-rest-mongo-auth
This is a nodejs project to include some general technical foundation parts.

# Record

## express the project

```
> express nodejs-exp-rest-mongo-auth
... ...
install dependencies:
     > cd nodejs-exp-rest-mongo-auth && npm install
run the app:
     > SET DEBUG=nodejs-exp-rest-mongo-auth:* & npm start
```

## npm install

## npm install `mongoose` and `mongoose-currency`

```
npm install -S mongoose mongoose-currency
```

## add static files in `public` folder

## add routers files in `routes` folder

## enable new routers in `app.js`

## npm install `assert`

```
npm install -S assert
```

## create `Dish` model in `models` folder

## connect to mongodb server

## include models in `app.js`

## test model

## update model

## test updated model

## dupliate a copy of `app.js`

## remove the test code from `app.js`

## update routers to support RESTful API

## nested router for embedded docuement

## npm install `passport` & `jwt`

```
npm install -S passport passport-local passport-local-mongoose
npm install -S jsonwebtoken
```

## add `config.js`

## add helper `verify.js`

## add `User` model

## add `User` routes

* `register`
* `login`
* `logout`

## config passport in `app.js`

## verify user privilige for special routes in `routes/dishes.js`

## dedicate verifications for `ordinary user` and `admin`

## more properties for `User` model, and model `method`

## embedded link and `population` in mongodb

## https

* Go to the `bin` folder and then create the private key and certificate by typing the following at the prompt:

```
> openssl genrsa 1024 > private.key
> openssl req -new -key private.key -out cert.csr
> openssl x509 -req -in cert.csr -signkey private.key -out certificate.pem
```

> Note for Windows Users
>
If you are using a Windows machine, you may need to install openssl. You can find some openssl binary distributions [here](https://wiki.openssl.org/index.php/Binaries). Also, this [article](https://blog.didierstevens.com/2015/03/30/howto-make-your-own-cert-with-openssl-on-windows/) gives the steps for generating the certificates in Windows. Another [article](http://www.faqforge.com/windows/use-openssl-on-windows/) provides similar instructions. Here's an [online service](http://www.selfsignedcertificate.com/) to generate self-signed certificates.
>
Here we use the online tool to generate the key and certificate.

# lesson and learn

* DONT put any thing in the body when sending DELETE request

> else you may happen to the following error:
> `SyntaxError: Unexpected token r in JSON at position 4`


# Reference

## mongodb command

```
db.getCollection('users').update({username:'admin'}, {$set: {admin: true}})
```

## token

* Chris

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiZmlyc3RuYW1lIjoiaW5pdCIsImxhc3RuYW1lIjoiaW5pdCIsImFkbWluIjoiaW5pdCIsIl9fdiI6ImluaXQiLCJ1c2VybmFtZSI6ImluaXQiLCJoYXNoIjoiaW5pdCIsInNhbHQiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX192Ijp0cnVlLCJmaXJzdG5hbWUiOnRydWUsImxhc3RuYW1lIjp0cnVlLCJhZG1pbiI6dHJ1ZSwidXNlcm5hbWUiOnRydWUsImhhc2giOnRydWUsInNhbHQiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sImVtaXR0ZXIiOnsiZG9tYWluIjpudWxsLCJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJmaXJzdG5hbWUiOiJDaHJpcyIsImxhc3RuYW1lIjoiV2VpIiwiYWRtaW4iOmZhbHNlLCJfX3YiOjAsInVzZXJuYW1lIjoiQ2hyaXMiLCJoYXNoIjoiZTk5YjM3ZTkyMDFiNWVmYzk2OGQ2Y2RhOTNiZDQzY2MxYjNmYzRhOTc0NTcwMDk5MTY5MzIzYjliN2U1MDUxODUyODUyYjhmNTk2MTNhYjY5ZWYzMTI4YTZjODVjOWI5YjY3YWVhNmJkZmU3ZWE2NmExN2IyN2Y4YzU4OGQyZGEzM2IxNGRmMTY3MTBlZDQ5ZWFhZWNmMDZkYTAzNDZlYjNkMDkyMDhjZTAxYmViNTU5NTI3NjI5MDdlNjY4OTQ2MDFhMTg5NTNiYjBmZjIyMWIwMzk3OTBiOWNiYmM1YTY5ZmIwMTE4MWE3MjUwMDM4MzIyNDA2Zjg4YjE5ODVkZTZjZTQ3OGJlYTVmZWIyY2U5OTBiZGIyYzY4NzEyNjI3NmM5N2U0NjM2YmNiNWM5ZTA5YmU3ZjBhYWZkZWFjYjEwZTg3ZDBjM2ZjMTQ1MThhOTQxMTNhM2IyMTFmNzUzYWU0MjQyYzRkMDUyNDU2ZmMzYWVkMGUxODk3NjE2Yzg4MmI2MWM2YTE4MWM2MDgwMWY5NDJmOGZlZDRlZTJjNTMxMWU3MzQzODI1OTU0MjU2N2JmNjhjYzFiNDNlODVlZTM1NzUwNmRjNGQ2ZWI1MWEwMDEyMzY2ZmIyZDc1NzFkNDc3NWI4ODMyYTc0YjEyNGQ0ZTBhODk0NDhmMGJmMTBhYTRlZDYwMDRhYjYyYjhjYWEyMzY0OGU0ZTYyOTAyMWQxYjFiOGZkMTJiMTE5OWZlYjQyYWQwMjIwYTFmOGNiOTNhMDgxMWZkNzkxYjAyMmYzYTQxNGMwOTdhNzA3YmQ2NjM2NmRkNjdiN2NkY2E3NDdkMzU4MjM2YTEyMGM2MTY4OTM2MDM5MDA0NDFmN2JhOTU3OWE5NWU4NjBkM2NlZGIzZWU3YjNkYjFjZjRkNGE3ZGYxZWY1MjliMDVlMGQ1OWQwNjQ5MjAzMTZkZjgxMTZkMTk3N2UzZWE4YWVlZmY5MGFjZTBjY2QyZTEzNGNlNzgyMzY3M2IzZGEwNmE0YWZiYmViMGE2YTM4Yjg2YTAxZWJiZjQyNzkyYmU0YjYyZTI4ZWJjZjEwOTdhZDViMWMzODg1ZDFlZjIwMzQzYjU1Zjg3NWRhNzZjZmUxMDNhMTVlYTdkODcxZjI5ZDhiYjRjZTUxNTI0Mzk4Y2I4ZTliNzQ0Y2IwNjJjNGQ1YzhkNmU0OGI0YTZjMmFiZDFkOWRhZmUyNDdmMGEyMTU0MTgxMTdiMjdmMjRiMGIzNTFlNTNmNWQzMGUzYTE5YTUzOTFkMTBmYzg1ZDJlMGIyYTg5ZTY3ODY5ODljYjIyZGM4MTkyM2ZiNjI2NWZkOTAxOWY3ODU4ZTBmZmMwZjc0YyIsInNhbHQiOiI3N2NiMTVmMDVjZWY2OTNmYTgwMmYyMzY5MGQ1YjFjNjE3YmM4NTI5ZmM1MzI2OGRmMGJhMmI0NjA3MzA1OGQ2IiwiX2lkIjoiNTg2Y2U5MjdmYzY1N2UwOTkwZDBmY2Y4In0sIl9wcmVzIjp7IiRfX29yaWdpbmFsX3NhdmUiOltudWxsLG51bGwsbnVsbF0sIiRfX29yaWdpbmFsX3ZhbGlkYXRlIjpbbnVsbF0sIiRfX29yaWdpbmFsX3JlbW92ZSI6W251bGxdfSwiX3Bvc3RzIjp7IiRfX29yaWdpbmFsX3NhdmUiOltdLCIkX19vcmlnaW5hbF92YWxpZGF0ZSI6W10sIiRfX29yaWdpbmFsX3JlbW92ZSI6W119LCJpYXQiOjE0ODM1MzI3NDksImV4cCI6MTQ4MzUzNjM0OX0.0ZugTXlHNpwJrmkhg5urMLQp8k9YK-G6GmGWTghan1U
```

* admin

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiZmlyc3RuYW1lIjoiaW5pdCIsImxhc3RuYW1lIjoiaW5pdCIsImFkbWluIjoiaW5pdCIsIl9fdiI6ImluaXQiLCJ1c2VybmFtZSI6ImluaXQiLCJoYXNoIjoiaW5pdCIsInNhbHQiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX192Ijp0cnVlLCJmaXJzdG5hbWUiOnRydWUsImxhc3RuYW1lIjp0cnVlLCJhZG1pbiI6dHJ1ZSwidXNlcm5hbWUiOnRydWUsImhhc2giOnRydWUsInNhbHQiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sImVtaXR0ZXIiOnsiZG9tYWluIjpudWxsLCJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJmaXJzdG5hbWUiOiJBZG1pbiIsImxhc3RuYW1lIjoiSHVhbmciLCJhZG1pbiI6dHJ1ZSwiX192IjowLCJ1c2VybmFtZSI6ImFkbWluIiwiaGFzaCI6IjYwMTM4ZDE1ZDM3MDBkYWZiMjQyYjYyZmMwZjllM2VlZTA2OTkzOGUxZTY0ZjIzMjNhNzE3NmE3NTc0MWUxODAyMmYxYzY5NmFhNmEyZTIwNDA5MTgzNjg1YWE2ZjdkMTI1YTU5ZTc2M2Q4OWE0ZDdlNzc3ZTYyY2MyY2FlZjg4MjM2MThmYjRjNmUxZDFkM2I5MDk5MTNiZTI4NDExNjVhMWZlODhkMWZjYjMyYTM1MDhhMTUyZTlmOGFlMjMyOWIxYTdhYThhMGFjZTRjNTY2NjZhNmYwMTY1OTdjOTA4MDJkNDVhOTkxZjU1OTg5ZTZkZmE3ZDRhOTYzMzhjZTQ0NjJhMDFhYTIyN2E0ZTkwOTY0MGQyOWU2MWNlZWIwZjkxNjU2MmU4Zjc4YzIwMjJmZmY4ZWI5OGY2ZGFmMTI3ODRlNjU0OGMzMThlMTRiYTY1NTVmYzFlZDIxOTdiMDNhNTU3NjcwZjNmODViMjQyNDA4NTUzYThkMzk0N2Q3OTk1OTY1Y2M0N2FkNzhhNzAxZDg0NmM5OGFjNGFmN2QxMDIzZThiMGU5MTdjNGQ0NTBhYzc2NjcwNjhlYjc5MWM0Nzc4NzkxNzY0MmNlNzY0NDg2MzRkMGJlYWI1ZGViZTBhYjM5NDQwOWU0Yjc2OWJiOWFjYWMwMzFlMTZkZGU2MTkyY2E1NTlmZGRlMGJjMzk5Zjk0NjE5Njk1NTYzYWYyNDc2MjUxYWUxZjg4N2Q3OWQ4MTg4YmJlYWE1YTAyYjNlMjNlMTQyMDU5NWFlOTUxYmQxMDIxN2QxMjcyMDYwMmEyOGI0NGVjNTE3N2QxNTFhOGJmMDg2ZmJhNTU5ZmM1MDU4ZGFlMDY5ZjZjNjRmMDM5NDMxZTAwNzc0NDdmM2I5NzQ5YWZiODllZGIxNTEwMWMyZGQxNmRlNDQ3M2FiZjU0MjJhMThkMTBmMWUwODVkNzhjZTc5NWEzZTNiMGMxYmUwOWUzNWU5ZjVmOTlmNjVhODA0N2EyMjhiY2FlOTE1NTA0ZWQ4ZTY3NzY1MjVjNzI0ZGRjYzcyYTQ1ZDE3NWY1MjE5ZGQyYTRhN2I4NWJkZDVmNTJmYTViZjY5NWNiYTM3MzQ3YmQyMDI5YmQyNTI3YjdkNTY1NmVhZjMzZTZiOWE2MTNjMzkwNzIwN2M0OWQ4ZTNiNjQxYmI4OGY0ZjE0ZmYxNjAxMjYzY2MzZTdkM2Y1ZWZmOTlmNzU1MTMxNGUxNDZjMmE3NzhmNjAzMmZjMDZkNjAyZDIxNjdlOWNjNzk0ZjM3ZWRhMGMwNjQwNjc1MmMzNDdhMDBhYjFiM2M2ZDdhZjYwNjc0YTVjYjRlZWY5ODEyZDkyNWY4NTkiLCJzYWx0IjoiNTg5ZjkwODVlODI4NmMyNmVlMGFhZjA1NWY0MGY2NmM0YmNiYmIwYTJjYTBjZDg5YTY3YmMwZDU3OTM3MTRhNCIsIl9pZCI6IjU4NmNlOThkZmM2NTdlMDk5MGQwZmNmOSJ9LCJfcHJlcyI6eyIkX19vcmlnaW5hbF9zYXZlIjpbbnVsbCxudWxsLG51bGxdLCIkX19vcmlnaW5hbF92YWxpZGF0ZSI6W251bGxdLCIkX19vcmlnaW5hbF9yZW1vdmUiOltudWxsXX0sIl9wb3N0cyI6eyIkX19vcmlnaW5hbF9zYXZlIjpbXSwiJF9fb3JpZ2luYWxfdmFsaWRhdGUiOltdLCIkX19vcmlnaW5hbF9yZW1vdmUiOltdfSwiaWF0IjoxNDgzNTMzMTQ1LCJleHAiOjE0ODM1MzY3NDV9.d2u3gWEQsys8PEkHOcWSLgGc49w8f3lDJhUNzZ1VLKU
```

## test documents for models

```
{
  "dishes": [
    {
      "name": "Uthapizza",
      "image": "images/uthapizza.png",
      "category": "mains",
      "label": "Hot",
      "price": "4.99",
      "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
      "comments": [
        {
          "rating": 5,
          "comment": "Imagine all the eatables, living in conFusion!",
          "author": "John Lemon"
        },
        {
          "rating": 4,
          "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          "author": "Paul McVites"
        },
        {
          "rating": 3,
          "comment": "Eat it, just eat it!",
          "author": "Michael Jaikishan"
        },
        {
          "rating": 4,
          "comment": "Ultimate, Reaching for the stars!",
          "author": "Ringo Starry"
        },
        {
          "rating": 2,
          "comment": "It's your birthday, we're gonna party!",
          "author": "25 Cent"
        }
      ]
    },
    {
      "name": "Zucchipakoda",
      "image": "images/zucchipakoda.png",
      "category": "appetizer",
      "label": "",
      "price": "1.99",
      "description": "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
      "comments": [
        {
          "rating": 5,
          "comment": "Imagine all the eatables, living in conFusion!",
          "author": "John Lemon"
        },
        {
          "rating": 4,
          "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          "author": "Paul McVites"
        },
        {
          "rating": 3,
          "comment": "Eat it, just eat it!",
          "author": "Michael Jaikishan"
        },
        {
          "rating": 4,
          "comment": "Ultimate, Reaching for the stars!",
          "author": "Ringo Starry"
        },
        {
          "rating": 2,
          "comment": "It's your birthday, we're gonna party!",
          "author": "25 Cent"
        }
      ]
    },
    {
      "name": "Vadonut",
      "image": "images/vadonut.png",
      "category": "appetizer",
      "label": "New",
      "price": "1.99",
      "description": "A quintessential ConFusion experience, is it a vada or is it a donut?",
      "comments": [
        {
          "rating": 5,
          "comment": "Imagine all the eatables, living in conFusion!",
          "author": "John Lemon"
        },
        {
          "rating": 4,
          "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          "author": "Paul McVites"
        },
        {
          "rating": 3,
          "comment": "Eat it, just eat it!",
          "author": "Michael Jaikishan"
        },
        {
          "rating": 4,
          "comment": "Ultimate, Reaching for the stars!",
          "author": "Ringo Starry"
        },
        {
          "rating": 2,
          "comment": "It's your birthday, we're gonna party!",
          "author": "25 Cent"
        }
      ]
    },
    {
      "name": "ElaiCheese Cake",
      "image": "images/elaicheesecake.png",
      "category": "dessert",
      "label": "",
      "price": "2.99",
      "description": "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
      "comments": [
        {
          "rating": 5,
          "comment": "Imagine all the eatables, living in conFusion!",
          "author": "John Lemon"
        },
        {
          "rating": 4,
          "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          "author": "Paul McVites"
        },
        {
          "rating": 3,
          "comment": "Eat it, just eat it!",
          "author": "Michael Jaikishan"
        },
        {
          "rating": 4,
          "comment": "Ultimate, Reaching for the stars!",
          "author": "Ringo Starry"
        },
        {
          "rating": 2,
          "comment": "It's your birthday, we're gonna party!",
          "author": "25 Cent"
        }
      ]
    }
  ],
  "promotions": [
    {
      "name": "Weekend Grand Buffet",
      "image": "images/buffet.png",
      "label": "New",
      "price": "19.99",
      "description": "Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person "
    }
  ],
  "leadership": [
    {
      "name": "Peter Pan",
      "image": "images/alberto.png",
      "designation": "Chief Epicurious Officer",
      "abbr": "CEO",
      "description": "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."
    },
    {
      "name": "Dhanasekaran Witherspoon",
      "image": "images/alberto.png",
      "designation": "Chief Food Officer",
      "abbr": "CFO",
      "description": "Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"
    },
    {
      "name": "Agumbe Tang",
      "image": "images/alberto.png",
      "designation": "Chief Taste Officer",
      "abbr": "CTO",
      "description": "Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."
    },
    {
      "name": "Alberto Somayya",
      "image": "images/alberto.png",
      "designation": "Executive Chef",
      "abbr": "EC",
      "description": "Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"
    }
  ],
  "feedback": [
  ]
}
```
