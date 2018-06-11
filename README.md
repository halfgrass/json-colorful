# js JSON着色工具 

使用JSON自带的stringify格式化后，用正则表达式对每行进行处理。 

## class 
- key: json key 
- value: default value  
- number: numeric value 
- string: string value 
- boolean: boolean value 
- object: null value 
- colon: :  
- comma: , 
- brace: braces or brackets 

## Usage

```javascript
let jsonObject = {};
let html = colorful(jsonObject);
```

```css
body{background:#282c34}
.brace{color:#abb2bf;font-weight:bold}
.key{color:#e06c75}
.value{color:#ff0000;font-weight:bold}
.string{color:#98c379}
.number{color:#d19a66}
.boolean{color:#56b6c2}
.object{color:#56b6c2}
.comma{color:#abb2bf}
.colon{color:#abb2bf}
```
