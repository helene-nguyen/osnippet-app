# Project management

## User case

Establishment case for snippet application

![Use case](./image/MCD_MLD.png)

## MCD

![MCD](./image/Users.svg)

Made on Mocodo

```
MAKE, 11 SNIPPET, 0N USER
SNIPPET: code_snippet, title, description, link, date, created_at, update_at
CONTAIN, 0N CATEGORY, 1N SNIPPET

USER: code_user, username, email, password, created_at, update_at
CREATE, 11 CATEGORY, 0N USER
CATEGORY: code_category, name, description, image, created_at, update_at

OWN, 1N ROLE, 11 USER
ROLE: code_role, name, created_at, updated_at
:
```

## MLD


SNIPPET ( code_snippet, title, description, link, date, created_at, update_at, *code_user* )
CONTAIN ( *code_category*, *code_snippet* )
USER ( code_user, username, email, password, created_at, update_at )
CATEGORY ( code_category, name, description, image, created_at, update_at, *code_user* )
ROLE ( code_role, name, created_at, updated_at, *code_user* )

## MPD

![MPD](./image/mpd.png)

