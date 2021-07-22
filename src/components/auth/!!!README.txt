******* Note when using localhost:3000 ******
When setting up a new application or updating an existing one using localhost:3000, make sure
you use https://127.0.0.1:3000 for all urls and you access the site with the same url - https://127.0.0.1:3000.
This is necessary when getting errors when trying to save Application settings or Universal Login settings.

e.g. error: 
Error!Something happened while trying to save your settings: Payload validation error: 'Object didn't pass validation for format absolute-uri-or-empty: https://localhost:3000/static/media/hcLogo7.572dea18.svg' on property picture_url (URL of logo to be shown for this tenant (recommended size: 150x150)).

The url for the custom logo will have a path something like - https://127.0.0.1:3000/hcLogo7.svg
if located in the public folder.

Or if referenced inside a component, it will have a path something like - https://127.0.0.1:3000/static/media/hcLogo7.572dea18.svg.

If getting errors in regards to https, add "HTTPS=true" to the .env file.

