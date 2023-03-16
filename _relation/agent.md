---
layout: entry
title: "PROJECTION"
shortdef: "foregrounded against background"
---

The `POJECTION` relation is annotated between two entities, 
one `FOREGROUND` [FOREGROUND]() and one [BACKGROUND]().

i.e. [PERSON]()  over [ORGANIZATION]()

<!-- details -->

Example:

~~~ ann
Barack Obama is the head of his cabinet.
T1 PERSON 0 12 Barack Obama
T2 ORGANIZATION 30 36 his cabinet
R1 PROJECTION Arg1:T1 Arg2:T2
~~~

------------------------------------------------------------------------------

(This is an example entry in the `relation` collection. You can find
the source of this document in the `_relation/` directory, file
`family.md`. To add new entries like this, simply add new `.md` files
into the `_family/` directory.)
