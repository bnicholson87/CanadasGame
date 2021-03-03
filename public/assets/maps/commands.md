SELECT JSON_OBJECT
    ('address_id', address_id,
     'address', address, 
     'address2', address2)
      FROM location INTO OUTFILE '/Users/codex/Desktop/bootcamp/Bootcamp_coding/CanadasGame/maps/location.json'


SELECT 
    CONCAT("[",
         GROUP_CONCAT(
              CONCAT("{address_id:'",address_id,"'"),
              CONCAT("address:'",address,"'"),
              CONCAT(",address2:'",address2,"'}")
         )
    ,"]") 
AS json FROM location
INTO OUTFILE 'file:///Users/codex/Desktop/bootcamp/Bootcamp_coding/a-maps/maps/location.json'      