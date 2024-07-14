## User

|Field|Type|Specificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|Identification of the user|
|email|VARCHAR(150)|NOT NULL|User email|
|firstname|VARCHAR(64)|NOT NULL|User firstname|
|lastname|VARCHAR(64)|NOT NULL|User lastname|
|password|VARCHAR(255)|NOT NULL|User password|
|role|VARCHAR(64)|NOT NULL|User role|

## Article

|Field|Type|Specificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT||
|title|VARCHAR(255)|NOT NULL||
|summary|VARCHAR(255)|NOT NULL|short summary of the article|
|content|TEXT|NOT NULL||
|slug|VARCHAR(255)|NOT NULL|short url|
|created_at|TIMESTAMP|NOT NULL, CURRENT_TIMESTAMP||
|updated_at|TIMESTAMP|NULL, CURRENT_TIMESTAMP||
|category_id|INT|NOT NULL, UNSIGNED|Id of the category chosen for the article|
|status_id|INT|NOT NULL, UNSIGNED|Id of the status of the article|
|user_id|INT|NOT NULL, UNSIGNED|Id of the author|

## Category

|Field|Type|Specificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT||
|name|VARCHAR(64)|NOT NULL||
|home_order|TINYINT(2)|NOT NULL, UNSIGNED, DEFAULT 0||

## Status

|Field|Type|Specificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT||
|name|VARCHAR(64)|NOT NULL||

## Question

|Field|Type|Specificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT||
|title|VARCHAR(255)|NOT NULL||
|content|TEXT|NOT NULL||
|created_at|TIMESTAMP|NOT NULL, CURRENT_TIMESTAMP||
|updated_at|TIMESTAMP|NULL, CURRENT_TIMESTAMP||
|user_id|INT|NOT NULL, UNSIGNED|Id of the author|

## Answer

|Field|Type|Specificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT||
|content|TEXT|NOT NULL||
|created_at|TIMESTAMP|NOT NULL, CURRENT_TIMESTAMP||
|updated_at|TIMESTAMP|NULL, CURRENT_TIMESTAMP||
|user_id|INT|NOT NULL, UNSIGNED|Id of the author|
|question_id|INT|NOT NULL, UNSIGNED|Id of the question|

## Pinpoint

|Field|Type|Specificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT||
|name|VARCHAR(64)|NOT NULL||
|adress|VARCHAR(255)|NOT NULL|Adress of the point of interest given by the user|
|**coordinates**|INT|NOT NULL|GPS coordinates|
|description|TEXT|NOT NULL||
|created_at|TIMESTAMP|NOT NULL, CURRENT_TIMESTAMP||
|updated_at|TIMESTAMP|NULL, CURRENT_TIMESTAMP||
|user_id|INT|NOT NULL, UNSIGNED|Id of the user|
|type_id|INT|NOT NULL, UNSIGNED|Type of point of interest|

## Type

|Field|Type|Specificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT||
|name|VARCHAR(64)|NOT NULL||
|icon_url|VARCHAR(255)|NOT NULL|URL of the icon|

## Search Notice

|Field|Type|Specificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT||
|firstname|VARCHAR(64)|NOT NULL||
|lastname|VARCHAR(64)|NOT NULL||
|description|TEXT|NOT NULL||
|age|TINYINT(3)|NULL||
|picture|VARCHAR(255)|NULL||
|status|TINYINT(1)|NOT NULL, DEFAULT 0|0 = search ongoing / 1 = found|
|created_at|TIMESTAMP|NOT NULL, CURRENT_TIMESTAMP||
|updated_at|TIMESTAMP|NULL, CURRENT_TIMESTAMP||
|user_id|INT|NOT NULL, UNSIGNED|Id of the user|
|city_id|INT|NOT NULL, UNSIGNED|City of the API|

## City

|Field|Type|Specificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT||
|name|VARCHAR(255)|NOT NULL||
|number_views|INT|NOT NULL, DEFAULT 0||
|created_at|TIMESTAMP|NOT NULL, CURRENT_TIMESTAMP||
|updated_at|TIMESTAMP|NULL, CURRENT_TIMESTAMP||
|search_notice_id|INT|NOT NULL, UNSIGNED||
