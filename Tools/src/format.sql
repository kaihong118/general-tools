SELECT
    "id",
    "merchant_id" AS "merchantId",
    "application_number" AS "applicationNumber",
    "version" AS "questionVersion",
    "first_name" AS "firstName",
    "last_name" AS "lastName",
    "email",
    "phone_country_code" AS "phoneCountryCode",
    "phone_number" AS "phoneNumber",
    "id_issued_by" AS "idIssuedBy",
    "id_type" AS "idType",
    "date_of_birth" AS "dateOfBirth",
    "id_number_encrypted" AS "idNumber"
FROM
    "pmp"."customer_applications" AS "customer_applications"
WHERE
    "customer_applications"."status" = 2
    AND "customer_applications"."is_latest_version" = true
    AND "customer_applications"."customer_id" = '9667f789-f1a6-469d-9dce-085e595e0382'
LIMIT
    1